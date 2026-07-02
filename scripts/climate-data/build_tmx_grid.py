"""
One-time, dev-only pipeline: CRU TS v4.09 tmx NetCDF -> compact static assets
for the client-side temperature map.

Input:  raw/cru_ts4.09.1901.2024.tmx.dat.nc (downloaded + gunzipped separately,
        see README.md for the source URL -- never committed to git)
Output: ../../public/data/climate-map/tmx-grid-1deg.bin
        ../../public/data/climate-map/tmx-meta.json

Steps:
  1. Load tmx (time, lat, lon), group by year, take the max of the 12 monthly
     values per cell per year ("hottest it got that year").
  2. Downsample from native 0.5 degree (360x180... actually 720x360) to 1
     degree via block-mean pooling (nanmean), ignoring ocean/no-data cells.
  3. Strip ocean cells entirely -- store a land-cell index list once, shared
     across all years, then per-year values only for those cells.
  4. Quantize to Int16 (x10, 0.1C precision).
  5. Write a flat little-endian Int16 binary (year-major, land-cell order)
     plus a small metadata JSON.

IMPORTANT: output grid rows are written north-to-south (row 0 = northernmost
latitude band) to match standard top-down image/canvas row order. This
matches the equirectangular projection used in src/lib/climateGrid.ts:
  y = (latMax - lat) / (latMax - latMin) * canvasHeight
"""

import json
import os
import numpy as np
import xarray as xr

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
INPUT_PATH = os.path.join(SCRIPT_DIR, "raw", "cru_ts4.09.1901.2024.tmx.dat.nc")
OUTPUT_DIR = os.path.join(SCRIPT_DIR, "..", "..", "public", "data", "climate-map")

TARGET_RESOLUTION_DEG = 1.0
SCALE = 10  # store °C * 10 as Int16
NO_DATA_SENTINEL = -9999


def block_mean_pool(arr_2d, block_size, lat_ascending):
    """arr_2d: (lat, lon) with NaN over ocean. Returns block-mean-pooled
    array using nanmean, ignoring all-NaN blocks (kept as NaN)."""
    lat_n, lon_n = arr_2d.shape
    new_lat_n = lat_n // block_size
    new_lon_n = lon_n // block_size
    trimmed = arr_2d[: new_lat_n * block_size, : new_lon_n * block_size]
    reshaped = trimmed.reshape(new_lat_n, block_size, new_lon_n, block_size)
    with np.errstate(invalid="ignore"):
        pooled = np.nanmean(reshaped, axis=(1, 3))
    return pooled


def main():
    print(f"Loading {INPUT_PATH} ...")
    ds = xr.open_dataset(INPUT_PATH)
    tmx = ds["tmx"]

    lat = ds["lat"].values
    lon = ds["lon"].values
    lat_ascending = lat[0] < lat[-1]
    print(f"Native grid: {len(lat)} lat x {len(lon)} lon, lat_ascending={lat_ascending}")

    print("Grouping by year and taking max of 12 monthly values per cell...")
    annual_max = tmx.groupby("time.year").max(dim="time")
    years = [int(y) for y in annual_max["year"].values]
    print(f"Years: {years[0]}-{years[-1]} ({len(years)} years)")

    native_res = 0.5
    block_size = int(round(TARGET_RESOLUTION_DEG / native_res))
    print(f"Downsampling {native_res} deg -> {TARGET_RESOLUTION_DEG} deg (block size {block_size})...")

    pooled_years = []
    for i, year in enumerate(years):
        year_grid = annual_max.isel(year=i).values  # (lat, lon), NaN over ocean
        if not lat_ascending:
            year_grid = year_grid[::-1, :]  # normalize to ascending-lat order first
        pooled = block_mean_pool(year_grid, block_size, lat_ascending=True)
        # flip to north-to-south (row 0 = north) for top-down image convention
        pooled = pooled[::-1, :]
        pooled_years.append(pooled)
        if i % 20 == 0:
            print(f"  processed {year} ({i+1}/{len(years)})")

    grid_height, grid_width = pooled_years[0].shape
    print(f"Downsampled grid: {grid_width} x {grid_height} = {grid_width * grid_height} cells")

    stacked = np.stack(pooled_years, axis=0)  # (years, grid_height, grid_width)
    land_mask_flat = ~np.isnan(stacked[0].reshape(-1))
    # a cell might be land in some downsampled blocks and NaN in others only
    # if inconsistent across years -- use the union of all years' non-NaN cells
    for y in range(stacked.shape[0]):
        land_mask_flat = land_mask_flat | ~np.isnan(stacked[y].reshape(-1))

    land_cell_indices = np.nonzero(land_mask_flat)[0]
    print(f"Land cells after downsampling: {len(land_cell_indices)} of {grid_width * grid_height}")

    global_min = np.nanmin(stacked)
    global_max = np.nanmax(stacked)
    print(f"Global temp range across all years: {global_min:.1f}C to {global_max:.1f}C")

    # build flat Int16 array: year-major, land-cell order
    n_years = len(years)
    n_land = len(land_cell_indices)
    out = np.full((n_years, n_land), NO_DATA_SENTINEL, dtype=np.int16)
    for y in range(n_years):
        year_flat = stacked[y].reshape(-1)
        values = year_flat[land_cell_indices]
        quantized = np.round(values * SCALE)
        valid = ~np.isnan(values)
        out[y, valid] = quantized[valid].astype(np.int16)

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    bin_path = os.path.join(OUTPUT_DIR, "tmx-grid-1deg.bin")
    out.astype("<i2").tofile(bin_path)  # little-endian int16
    bin_size_mb = os.path.getsize(bin_path) / (1024 * 1024)
    print(f"Wrote {bin_path} ({bin_size_mb:.2f} MB)")

    lat_min = -90.0
    lon_min = -180.0

    meta = {
        "years": years,
        "gridWidth": int(grid_width),
        "gridHeight": int(grid_height),
        "latMin": lat_min,
        "lonMin": lon_min,
        "latStep": TARGET_RESOLUTION_DEG,
        "lonStep": TARGET_RESOLUTION_DEG,
        "landCellIndices": [int(i) for i in land_cell_indices],
        "scale": 1 / SCALE,
        "noDataSentinel": NO_DATA_SENTINEL,
        "tempMinC": round(float(global_min), 1),
        "tempMaxC": round(float(global_max), 1),
        "unit": "celsius",
        "source": "CRU TS v4.09 (tmx), Climatic Research Unit, University of East Anglia",
        "aggregation": "annual max of 12 monthly mean-daily-maximum values per cell",
    }
    meta_path = os.path.join(OUTPUT_DIR, "tmx-meta.json")
    with open(meta_path, "w") as f:
        json.dump(meta, f)
    meta_size_kb = os.path.getsize(meta_path) / 1024
    print(f"Wrote {meta_path} ({meta_size_kb:.1f} KB)")


if __name__ == "__main__":
    main()

# Climate data pipeline (dev-only, not part of the Next.js app)

Produces the static assets consumed by `src/components/TemperatureMap.tsx`:
`public/data/climate-map/tmx-grid-1deg.bin`, `public/data/climate-map/tmx-meta.json`,
and `public/data/climate-map/coastlines.svg`. Runs once, locally, offline — never
part of `next build`, never runs on Vercel.

## 1. Get the data

Source: **CRU TS v4.09**, Climatic Research Unit, University of East Anglia.
Variable `tmx` = monthly average daily maximum temperature, 0.5° grid, land
areas only, Jan 1901–Dec 2024. License: Open Government Licence v3.0
(attribution required, commercial use permitted).

```bash
mkdir -p raw
curl -L -o raw/cru_ts4.09.1901.2024.tmx.dat.nc.gz \
  "https://crudata.uea.ac.uk/cru/data/hrg/cru_ts_4.09/cruts.2503051245.v4.09/tmx/cru_ts4.09.1901.2024.tmx.dat.nc.gz"
gunzip -k raw/cru_ts4.09.1901.2024.tmx.dat.nc.gz
```

~180MB compressed, ~3GB uncompressed. If the crudata.uea.ac.uk mirror (no
login) is down, fall back to the canonical CEDA record (free account, ~5 min):
https://catalogue.ceda.ac.uk/uuid/9cf07e92afaa405da4f40b6733f362d3/

**Attribution (must stay visible in the app, near the map):**
> Contains data from the CRU TS dataset, produced by Harris, Jones & Osborn,
> University of East Anglia Climatic Research Unit / NERC EDS Centre for
> Environmental Data Analysis.

## 2. Python environment

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt   # xarray, netCDF4, numpy
```

## 3. Run the pipeline

```bash
python3 build_tmx_grid.py       # NetCDF -> tmx-grid-1deg.bin + tmx-meta.json
python3 build_coastline_svg.py  # Natural Earth GeoJSON -> coastlines.svg
```

`build_tmx_grid.py`: groups the 1488 monthly grids by year, takes the max of
the 12 monthly values per cell per year ("hottest it got that year"),
downsamples 0.5°→1° via block-mean pooling, strips ocean cells, quantizes to
Int16 (×10, 0.1°C precision), writes a flat little-endian binary + metadata
JSON (grid dims, land-cell indices, fixed global min/max so the color scale
never changes meaning as the year slider moves).

`build_coastline_svg.py`: converts `raw/ne_110m_land.geojson` (Natural
Earth 110m land polygons, public domain — re-download from
https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_land.geojson
if missing) into a single pre-projected static SVG using the same
equirectangular projection as the client renderer. No geo library needed at
runtime.

## Output (as of this run)

- `tmx-grid-1deg.bin`: 4.33 MB, 124 years × 18,316 land cells (360×180 grid)
- `tmx-meta.json`: 122 KB
- `coastlines.svg`: 72 KB
- Verified: correct orientation (Arctic/Antarctica rows empty as expected),
  physically plausible values (Sahara ~40°C, Siberia ~24°C in 2024), and a
  clear warming trend (global land mean 25.5°C in 1901 → 26.8°C in 2024).

## Re-running for a newer CRU TS version

CRU TS releases roughly annual updates. To refresh: download the new
version's `tmx` file (URL pattern changes per version — check
https://crudata.uea.ac.uk/cru/data/hrg/ for the current directory), update
`INPUT_PATH` in `build_tmx_grid.py` if the filename changed, re-run both
scripts. No other code changes needed — the output file names stay the same.

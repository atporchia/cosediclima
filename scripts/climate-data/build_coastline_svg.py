"""
One-off, dev-time only: converts Natural Earth's public-domain 110m land
GeoJSON into a single pre-projected static SVG using the same simple
equirectangular lat/lon -> x/y math as the client-side renderer
(src/lib/climateGrid.ts). No geo library needed at runtime or build time --
this script runs once and its output (coastlines.svg) is committed as a
static asset.

Input:  raw/ne_110m_land.geojson (public domain, Natural Earth)
Output: ../../public/data/climate-map/coastlines.svg
"""

import json
import os

VIEWBOX_WIDTH = 720
VIEWBOX_HEIGHT = 360
LON_MIN, LON_MAX = -180, 180
LAT_MIN, LAT_MAX = -90, 90

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
INPUT_PATH = os.path.join(SCRIPT_DIR, "raw", "ne_110m_land.geojson")
OUTPUT_PATH = os.path.join(SCRIPT_DIR, "..", "..", "public", "data", "climate-map", "coastlines.svg")


def project(lon, lat):
    x = (lon - LON_MIN) / (LON_MAX - LON_MIN) * VIEWBOX_WIDTH
    y = (LAT_MAX - lat) / (LAT_MAX - LAT_MIN) * VIEWBOX_HEIGHT
    return round(x, 2), round(y, 2)


def ring_to_path(ring):
    points = [project(lon, lat) for lon, lat in ring]
    d = f"M{points[0][0]},{points[0][1]} "
    d += " ".join(f"L{x},{y}" for x, y in points[1:])
    d += " Z"
    return d


def geometry_to_paths(geometry):
    paths = []
    if geometry["type"] == "Polygon":
        for ring in geometry["coordinates"]:
            paths.append(ring_to_path(ring))
    elif geometry["type"] == "MultiPolygon":
        for polygon in geometry["coordinates"]:
            for ring in polygon:
                paths.append(ring_to_path(ring))
    return paths


def main():
    with open(INPUT_PATH) as f:
        data = json.load(f)

    all_paths = []
    for feature in data["features"]:
        all_paths.extend(geometry_to_paths(feature["geometry"]))

    combined_d = " ".join(all_paths)

    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'width="{VIEWBOX_WIDTH}" height="{VIEWBOX_HEIGHT}" '
        f'viewBox="0 0 {VIEWBOX_WIDTH} {VIEWBOX_HEIGHT}" '
        f'preserveAspectRatio="none">'
        f'<path d="{combined_d}" fill="none" stroke="#f5f5f4" stroke-opacity="0.35" '
        f'stroke-width="0.6" vector-effect="non-scaling-stroke"/>'
        f"</svg>"
    )

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w") as f:
        f.write(svg)

    size_kb = os.path.getsize(OUTPUT_PATH) / 1024
    print(f"Wrote {OUTPUT_PATH} ({size_kb:.1f} KB, {len(all_paths)} rings)")


if __name__ == "__main__":
    main()

export interface ClimateGridMeta {
  years: number[];
  gridWidth: number;
  gridHeight: number;
  latMin: number;
  lonMin: number;
  latStep: number;
  lonStep: number;
  landCellIndices: number[];
  scale: number;
  noDataSentinel: number;
  tempMinC: number;
  tempMaxC: number;
  unit: string;
  source: string;
  aggregation: string;
}

export interface ClimateGridData {
  meta: ClimateGridMeta;
  /** One Int16Array per year, raw quantized values for land cells only (multiply by meta.scale for °C). */
  yearData: Int16Array[];
}

export async function loadClimateGrid(): Promise<ClimateGridData> {
  const [meta, buffer] = await Promise.all([
    fetch("/data/climate-map/tmx-meta.json").then((r) => r.json() as Promise<ClimateGridMeta>),
    fetch("/data/climate-map/tmx-grid-1deg.bin").then((r) => r.arrayBuffer()),
  ]);

  const flat = new Int16Array(buffer);
  const nLand = meta.landCellIndices.length;
  const yearData: Int16Array[] = meta.years.map((_, i) =>
    flat.subarray(i * nLand, (i + 1) * nLand),
  );

  return { meta, yearData };
}

/** Reconstructs a dense (gridWidth * gridHeight) °C array for one year, NaN over ocean/no-data. */
export function reconstructYearGrid(data: ClimateGridData, yearIndex: number): Float32Array {
  const { meta } = data;
  const full = new Float32Array(meta.gridWidth * meta.gridHeight).fill(NaN);
  const yearValues = data.yearData[yearIndex];
  const { landCellIndices, scale } = meta;
  for (let i = 0; i < landCellIndices.length; i++) {
    full[landCellIndices[i]] = yearValues[i] * scale;
  }
  return full;
}

/** lon/lat -> flat grid index (row-major, row 0 = northernmost band), or null if out of range. */
export function lonLatToGridIndex(lon: number, lat: number, meta: ClimateGridMeta): number | null {
  const { gridWidth, gridHeight, latMin, lonMin, latStep, lonStep } = meta;
  const latMax = latMin + gridHeight * latStep;
  const lonMax = lonMin + gridWidth * lonStep;
  if (lon < lonMin || lon >= lonMax || lat < latMin || lat >= latMax) return null;

  const col = Math.floor((lon - lonMin) / lonStep);
  const row = Math.floor((latMax - lat) / latStep);
  return row * gridWidth + col;
}

/** Rendered pixel position within an equirectangular canvas -> lon/lat. */
export function pixelToLonLat(
  x: number,
  y: number,
  renderedWidth: number,
  renderedHeight: number,
): { lon: number; lat: number } {
  const lon = (x / renderedWidth) * 360 - 180;
  const lat = 90 - (y / renderedHeight) * 180;
  return { lon, lat };
}

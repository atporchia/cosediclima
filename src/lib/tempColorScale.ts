/**
 * Perceptually-uniform "inferno"-style sequential color scale (dark
 * purple -> orange -> pale yellow), used for absolute temperature. Deliberately
 * not a rainbow/jet scale, which is a well-documented source of misleading
 * readings for thermal data -- matters for a myth-debunking site's own
 * credibility. The hot end sits naturally near the site's brand accent oranges.
 */
export const TEMP_COLOR_STOPS: [number, string][] = [
  [0.0, "#000004"],
  [0.13, "#1b0c41"],
  [0.25, "#4a0c6b"],
  [0.38, "#781c6d"],
  [0.5, "#a52c60"],
  [0.63, "#cf4446"],
  [0.75, "#ed6925"],
  [0.88, "#fb9906"],
  [1.0, "#fcffa4"],
];

/**
 * Diverging blue -> white -> red scale (ColorBrewer "RdBu", reversed) for
 * temperature anomaly (deviation from a baseline). 0.5 = white = "same as
 * baseline"; below = cooler (blue), above = warmer (red). This is the
 * standard climate-science scale for exactly this kind of data, and is what
 * makes a small year-to-year change actually visible -- unlike the
 * sequential scale above, which has to span the entire physical temperature
 * range and so barely shifts color for a 1-3C change.
 */
export const ANOMALY_COLOR_STOPS: [number, string][] = [
  [0.0, "#2166ac"],
  [0.25, "#67a9cf"],
  [0.45, "#d1e5f0"],
  [0.5, "#f7f7f7"],
  [0.55, "#fddbc7"],
  [0.75, "#ef8a62"],
  [1.0, "#b2182b"],
];

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function interpolateStops(stops: [number, string][], t: number): [number, number, number] {
  const stopsRgb: [number, [number, number, number]][] = stops.map(([stopT, hex]) => [
    stopT,
    hexToRgb(hex),
  ]);
  const clamped = Math.max(0, Math.min(1, t));
  for (let i = 0; i < stopsRgb.length - 1; i++) {
    const [t0, c0] = stopsRgb[i];
    const [t1, c1] = stopsRgb[i + 1];
    if (clamped >= t0 && clamped <= t1) {
      const f = t1 === t0 ? 0 : (clamped - t0) / (t1 - t0);
      return [
        Math.round(c0[0] + (c1[0] - c0[0]) * f),
        Math.round(c0[1] + (c1[1] - c0[1]) * f),
        Math.round(c0[2] + (c1[2] - c0[2]) * f),
      ];
    }
  }
  return stopsRgb[stopsRgb.length - 1][1];
}

/** normalized value in [0,1] -> [r,g,b] in [0,255], sequential scale */
export function colorForNormalized(t: number): [number, number, number] {
  return interpolateStops(TEMP_COLOR_STOPS, t);
}

/** raw °C value mapped against a fixed [minC, maxC] domain -> [r,g,b], sequential scale */
export function colorForTemp(celsius: number, minC: number, maxC: number): [number, number, number] {
  return colorForNormalized((celsius - minC) / (maxC - minC));
}

/**
 * Raw anomaly °C mapped against a fixed [minC, maxC] domain -> [r,g,b],
 * diverging scale. Uses SIGNED normalization (not simple linear domain
 * mapping) so that 0C anomaly always renders as exactly the white midpoint,
 * regardless of whether the domain is symmetric around zero (it usually
 * isn't -- positive extremes from recent hot years are typically larger
 * than negative dips).
 */
export function colorForAnomaly(celsius: number, minC: number, maxC: number): [number, number, number] {
  const t = celsius >= 0 ? 0.5 + 0.5 * (celsius / maxC) : 0.5 - 0.5 * (celsius / minC);
  return interpolateStops(ANOMALY_COLOR_STOPS, t);
}

function gradientCss(stops: [number, string][]): string {
  return `linear-gradient(to right, ${stops.map(([t, hex]) => `${hex} ${t * 100}%`).join(", ")})`;
}

export function tempColorGradientCss(): string {
  return gradientCss(TEMP_COLOR_STOPS);
}

export function anomalyColorGradientCss(): string {
  return gradientCss(ANOMALY_COLOR_STOPS);
}

/**
 * Perceptually-uniform "inferno"-style sequential color scale (dark
 * purple -> orange -> pale yellow). Deliberately not a rainbow/jet scale,
 * which is a well-documented source of misleading readings for thermal
 * data -- matters for a myth-debunking site's own credibility. The hot
 * end sits naturally near the site's brand accent oranges.
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

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

const STOPS_RGB: [number, [number, number, number]][] = TEMP_COLOR_STOPS.map(([t, hex]) => [
  t,
  hexToRgb(hex),
]);

/** normalized value in [0,1] -> [r,g,b] in [0,255] */
export function colorForNormalized(t: number): [number, number, number] {
  const clamped = Math.max(0, Math.min(1, t));
  for (let i = 0; i < STOPS_RGB.length - 1; i++) {
    const [t0, c0] = STOPS_RGB[i];
    const [t1, c1] = STOPS_RGB[i + 1];
    if (clamped >= t0 && clamped <= t1) {
      const f = t1 === t0 ? 0 : (clamped - t0) / (t1 - t0);
      return [
        Math.round(c0[0] + (c1[0] - c0[0]) * f),
        Math.round(c0[1] + (c1[1] - c0[1]) * f),
        Math.round(c0[2] + (c1[2] - c0[2]) * f),
      ];
    }
  }
  return STOPS_RGB[STOPS_RGB.length - 1][1];
}

/** raw °C value mapped against a fixed [minC, maxC] domain -> [r,g,b] */
export function colorForTemp(celsius: number, minC: number, maxC: number): [number, number, number] {
  return colorForNormalized((celsius - minC) / (maxC - minC));
}

export function tempColorGradientCss(): string {
  return `linear-gradient(to right, ${TEMP_COLOR_STOPS.map(([t, hex]) => `${hex} ${t * 100}%`).join(", ")})`;
}

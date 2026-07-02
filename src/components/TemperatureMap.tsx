"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  loadClimateGrid,
  reconstructYearGrid,
  lonLatToGridIndex,
  pixelToLonLat,
  type ClimateGridData,
} from "@/lib/climateGrid";
import {
  colorForTemp,
  colorForAnomaly,
  tempColorGradientCss,
  anomalyColorGradientCss,
} from "@/lib/tempColorScale";
import ClimateMapLegend from "./ClimateMapLegend";

type Mode = "anomaly" | "absolute";

interface HoverInfo {
  lon: number;
  lat: number;
  celsius: number | null;
}

/** Signed normalization: 0 always maps to 0.5, matching colorForAnomaly's own mapping. */
function anomalyPosition(value: number, minC: number, maxC: number): number {
  return value >= 0 ? 0.5 + 0.5 * (value / maxC) : 0.5 - 0.5 * (value / minC);
}

export default function TemperatureMap() {
  const t = useTranslations("TemperatureMap");
  const [data, setData] = useState<ClimateGridData | null>(null);
  const [error, setError] = useState(false);
  const [yearIndex, setYearIndex] = useState(0);
  const [mode, setMode] = useState<Mode>("anomaly");
  const [hover, setHover] = useState<HoverInfo | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentGridRef = useRef<Float32Array | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadClimateGrid()
      .then((loaded) => {
        if (cancelled) return;
        setData(loaded);
        setYearIndex(loaded.meta.years.length - 1);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const draw = useCallback(() => {
    if (!data || !canvasRef.current) return;
    const { meta } = data;
    const canvas = canvasRef.current;
    canvas.width = meta.gridWidth;
    canvas.height = meta.gridHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const source = mode === "anomaly" ? data.anomalyYearData : data.yearData;
    const grid = reconstructYearGrid(meta, source[yearIndex]);
    currentGridRef.current = grid;

    const domainMin = mode === "anomaly" ? meta.anomalyMinC : meta.tempMinC;
    const domainMax = mode === "anomaly" ? meta.anomalyMaxC : meta.tempMaxC;
    const colorFn = mode === "anomaly" ? colorForAnomaly : colorForTemp;

    const imageData = ctx.createImageData(meta.gridWidth, meta.gridHeight);
    const pixels = imageData.data;
    for (let i = 0; i < grid.length; i++) {
      const value = grid[i];
      const offset = i * 4;
      if (Number.isNaN(value)) {
        pixels[offset + 3] = 0;
        continue;
      }
      const [r, g, b] = colorFn(value, domainMin, domainMax);
      pixels[offset] = r;
      pixels[offset + 1] = g;
      pixels[offset + 2] = b;
      pixels[offset + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
  }, [data, yearIndex, mode]);

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(draw);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [draw]);

  function handlePointer(clientX: number, clientY: number) {
    if (!data || !canvasRef.current || !currentGridRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      setHover(null);
      return;
    }
    const { lon, lat } = pixelToLonLat(x, y, rect.width, rect.height);
    const index = lonLatToGridIndex(lon, lat, data.meta);
    const celsius = index === null ? null : currentGridRef.current[index];
    setHover({
      lon,
      lat,
      celsius: celsius !== null && !Number.isNaN(celsius) ? celsius : null,
    });
  }

  if (error) {
    return <p className="text-sm text-foreground/60">{t("error")}</p>;
  }

  if (!data) {
    return <p className="text-sm text-foreground/60">{t("loading")}</p>;
  }

  const { meta } = data;
  const year = meta.years[yearIndex];

  const gradientCss = mode === "anomaly" ? anomalyColorGradientCss() : tempColorGradientCss();
  const legendTicks =
    mode === "anomaly"
      ? [meta.anomalyMinC, meta.anomalyMinC / 2, 0, meta.anomalyMaxC / 2, meta.anomalyMaxC].map(
          (value) => ({
            label: `${value > 0 ? "+" : ""}${Math.round(value)}°C`,
            position: anomalyPosition(value, meta.anomalyMinC, meta.anomalyMaxC),
          }),
        )
      : [0, 0.25, 0.5, 0.75, 1].map((position) => {
          const value = meta.tempMinC + (meta.tempMaxC - meta.tempMinC) * position;
          return { label: `${Math.round(value)}°C`, position };
        });

  const hoverText = !hover
    ? t("hoverPrompt")
    : hover.celsius === null
      ? t("noData")
      : mode === "anomaly"
        ? t("hoverReadingAnomaly", {
            sign: hover.celsius > 0 ? "+" : "",
            celsius: Math.round(hover.celsius),
            lat: hover.lat.toFixed(1),
            lon: hover.lon.toFixed(1),
          })
        : t("hoverReading", {
            celsius: Math.round(hover.celsius),
            lat: hover.lat.toFixed(1),
            lon: hover.lon.toFixed(1),
          });

  return (
    <div>
      <div className="flex justify-center gap-2">
        {(["anomaly", "absolute"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
              mode === m
                ? "border-accent bg-accent/15 text-accent"
                : "border-white/15 text-foreground/60 hover:border-white/30"
            }`}
          >
            {t(m === "anomaly" ? "modeAnomaly" : "modeAbsolute")}
          </button>
        ))}
      </div>
      <p className="mt-2 text-center text-xs text-foreground/50">
        {mode === "anomaly" ? t("modeAnomalyExplainer", { start: meta.baselineStartYear, end: meta.baselineEndYear }) : t("modeAbsoluteExplainer")}
      </p>

      <div className="mt-3 text-center">
        <span className="text-4xl font-extrabold text-accent">{year}</span>
      </div>

      <div className="relative mt-4 aspect-[2/1] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full touch-none"
          onMouseMove={(event) => handlePointer(event.clientX, event.clientY)}
          onMouseLeave={() => setHover(null)}
          onTouchStart={(event) => {
            const touch = event.touches[0];
            if (touch) handlePointer(touch.clientX, touch.clientY);
          }}
          onTouchMove={(event) => {
            const touch = event.touches[0];
            if (touch) handlePointer(touch.clientX, touch.clientY);
          }}
        />
        <Image
          src="/data/climate-map/coastlines.svg"
          alt=""
          fill
          unoptimized
          className="pointer-events-none object-cover"
        />
      </div>

      <p className="mt-2 min-h-[1.5rem] text-center text-sm text-foreground/70">{hoverText}</p>

      <input
        type="range"
        min={0}
        max={meta.years.length - 1}
        value={yearIndex}
        onChange={(event) => setYearIndex(Number(event.target.value))}
        aria-label={t("sliderAriaLabel")}
        className="mt-4 w-full accent-accent"
      />

      <ClimateMapLegend gradientCss={gradientCss} ticks={legendTicks} />

      <p className="mt-3 text-xs text-foreground/40">{t("dataSourceLabel")}</p>
    </div>
  );
}

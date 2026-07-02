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
import { colorForTemp } from "@/lib/tempColorScale";
import ClimateMapLegend from "./ClimateMapLegend";

interface HoverInfo {
  lon: number;
  lat: number;
  celsius: number | null;
}

export default function TemperatureMap() {
  const t = useTranslations("TemperatureMap");
  const [data, setData] = useState<ClimateGridData | null>(null);
  const [error, setError] = useState(false);
  const [yearIndex, setYearIndex] = useState(0);
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

    const grid = reconstructYearGrid(data, yearIndex);
    currentGridRef.current = grid;

    const imageData = ctx.createImageData(meta.gridWidth, meta.gridHeight);
    const pixels = imageData.data;
    for (let i = 0; i < grid.length; i++) {
      const value = grid[i];
      const offset = i * 4;
      if (Number.isNaN(value)) {
        pixels[offset + 3] = 0;
        continue;
      }
      const [r, g, b] = colorForTemp(value, meta.tempMinC, meta.tempMaxC);
      pixels[offset] = r;
      pixels[offset + 1] = g;
      pixels[offset + 2] = b;
      pixels[offset + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
  }, [data, yearIndex]);

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

  return (
    <div>
      <div className="text-center">
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

      <p className="mt-2 min-h-[1.5rem] text-center text-sm text-foreground/70">
        {hover
          ? hover.celsius !== null
            ? t("hoverReading", {
                celsius: Math.round(hover.celsius),
                lat: hover.lat.toFixed(1),
                lon: hover.lon.toFixed(1),
              })
            : t("noData")
          : t("hoverPrompt")}
      </p>

      <input
        type="range"
        min={0}
        max={meta.years.length - 1}
        value={yearIndex}
        onChange={(event) => setYearIndex(Number(event.target.value))}
        aria-label={t("sliderAriaLabel")}
        className="mt-4 w-full accent-accent"
      />

      <ClimateMapLegend minC={meta.tempMinC} maxC={meta.tempMaxC} />

      <p className="mt-3 text-xs text-foreground/40">{t("dataSourceLabel")}</p>
    </div>
  );
}

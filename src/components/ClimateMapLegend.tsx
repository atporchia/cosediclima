import { tempColorGradientCss } from "@/lib/tempColorScale";

export default function ClimateMapLegend({ minC, maxC }: { minC: number; maxC: number }) {
  const tickCount = 5;
  const ticks = Array.from({ length: tickCount }, (_, i) => minC + ((maxC - minC) * i) / (tickCount - 1));

  return (
    <div className="mt-4">
      <div className="h-3 w-full rounded-full" style={{ background: tempColorGradientCss() }} />
      <div className="mt-1 flex justify-between text-xs text-foreground/50">
        {ticks.map((value) => (
          <span key={value}>{Math.round(value)}°C</span>
        ))}
      </div>
    </div>
  );
}

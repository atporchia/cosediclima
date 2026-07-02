interface Tick {
  label: string;
  position: number; // 0-1, matches the gradient's own coordinate space
}

export default function ClimateMapLegend({
  gradientCss,
  ticks,
}: {
  gradientCss: string;
  ticks: Tick[];
}) {
  return (
    <div className="mt-4">
      <div className="h-3 w-full rounded-full" style={{ background: gradientCss }} />
      <div className="relative mt-1 h-4 text-xs text-foreground/50">
        {ticks.map((tick) => (
          <span
            key={tick.label}
            className="absolute -translate-x-1/2"
            style={{ left: `${tick.position * 100}%` }}
          >
            {tick.label}
          </span>
        ))}
      </div>
    </div>
  );
}

import type { CostCard as CostCardData } from "@/data/costCards";
import SourceList from "./SourceList";

export default function CostCard({ card }: { card: CostCardData }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <p className="font-semibold">{card.title}</p>
      <p className="mt-2 text-sm text-foreground/85">{card.description}</p>
      <p className="mt-2 text-sm text-foreground/70">{card.denialConnection}</p>
      <div className="mt-3 rounded-lg border border-accent/30 bg-accent/10 p-3">
        <p className="text-sm font-medium">{card.shortMessage}</p>
      </div>
      <div className="mt-3">
        <SourceList sourceIds={card.sourceIds} />
      </div>
    </div>
  );
}

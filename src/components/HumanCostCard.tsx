import { useTranslations } from "next-intl";
import type { HumanCostCard as HumanCostCardData } from "@/data/humanCostCards";
import SourceList from "./SourceList";

export default function HumanCostCard({ card }: { card: HumanCostCardData }) {
  const t = useTranslations("HumanCostCard");

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/60">
        <span className="rounded-full border border-white/15 px-2.5 py-1">{t(card.eventType)}</span>
        <span>{card.region}</span>
        <span>·</span>
        <span>{card.year}</span>
      </div>
      <p className="mt-3 font-semibold">{card.title}</p>
      <p className="mt-2 text-sm text-foreground/85">{card.humanImpact}</p>
      <p className="mt-2 text-sm text-foreground/70">{card.climateConnection}</p>
      <div className="mt-3 rounded-lg border border-accent/30 bg-accent/10 p-3">
        <p className="text-sm font-medium">{card.shortMessage}</p>
      </div>
      <div className="mt-3">
        <SourceList sourceIds={card.sourceIds} />
      </div>
    </div>
  );
}

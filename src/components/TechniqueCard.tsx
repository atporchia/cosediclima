import { useTranslations } from "next-intl";
import type { Technique } from "@/data/techniques";
import CopyButton from "./CopyButton";

export default function TechniqueCard({ technique }: { technique: Technique }) {
  const t = useTranslations("TechniqueCard");

  return (
    <div id={technique.slug} className="scroll-mt-24 rounded-xl border border-white/10 bg-white/5 p-5">
      <p className="font-semibold">{technique.name}</p>
      <p className="mt-2 text-sm text-foreground/80">{technique.definition}</p>

      <div className="mt-3 rounded-lg border border-white/10 bg-black/30 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">{t("exampleLabel")}</p>
        <p className="mt-1 text-sm text-foreground/85">{technique.italianExample}</p>
      </div>

      <p className="mt-3 text-sm text-foreground/70">
        <span className="font-semibold text-foreground/85">{t("whyItWorksLabel")}</span>
        {technique.whyItWorks}
      </p>
      <p className="mt-2 text-sm text-foreground/70">
        <span className="font-semibold text-foreground/85">{t("howToRespondLabel")}</span>
        {technique.howToRespond}
      </p>

      <div className="mt-4 flex items-center justify-between gap-4 rounded-lg border border-accent/30 bg-accent/10 p-3">
        <p className="text-sm font-medium">{technique.tenSecondReply}</p>
        <CopyButton text={technique.tenSecondReply} />
      </div>
    </div>
  );
}

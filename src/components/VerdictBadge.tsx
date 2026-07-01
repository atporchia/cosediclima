import { useTranslations } from "next-intl";
import type { ClaimVerdict } from "@/data/claims";

const VERDICT_STYLES: Record<ClaimVerdict, string> = {
  falso: "bg-red-500/15 text-red-300 border-red-500/40",
  fuorviante: "bg-accent/15 text-accent border-accent/40",
  parzialmente_vero: "bg-yellow-500/15 text-yellow-300 border-yellow-500/40",
  ritardo: "bg-orange-500/15 text-orange-300 border-orange-500/40",
  doomismo: "bg-purple-500/15 text-purple-300 border-purple-500/40",
  complotto: "bg-red-500/15 text-red-300 border-red-500/40",
  falsa_equivalenza: "bg-accent/15 text-accent border-accent/40",
};

export default function VerdictBadge({ verdict }: { verdict: ClaimVerdict }) {
  const t = useTranslations("VerdictBadge");

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${VERDICT_STYLES[verdict]}`}
    >
      {t(verdict)}
    </span>
  );
}

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getTechniqueByIdForLocale } from "@/data/techniques";
import type { ManipulationTechnique } from "@/data/claims";
import type { Locale } from "@/i18n/routing";

export default function TechniqueBadge({ technique }: { technique: ManipulationTechnique }) {
  const locale = useLocale() as Locale;
  const data = getTechniqueByIdForLocale(technique, locale);
  if (!data) return null;

  return (
    <Link
      href={`/tecniche#${data.slug}`}
      className="inline-flex items-center rounded-full border border-accent-science/40 bg-accent-science/10 px-3 py-1 text-xs font-semibold text-accent-science transition-colors hover:bg-accent-science/20"
    >
      {data.name}
    </Link>
  );
}

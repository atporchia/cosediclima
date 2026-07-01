import { useLocale } from "next-intl";
import { getSourceByIdForLocale } from "@/data/sources";
import type { Locale } from "@/i18n/routing";

export default function SourceBadge({ sourceId }: { sourceId: string }) {
  const locale = useLocale() as Locale;
  const source = getSourceByIdForLocale(sourceId, locale);
  if (!source) return null;

  const content = (
    <span className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-foreground/80 transition-colors hover:border-white/30 hover:text-foreground">
      {source.organization}
    </span>
  );

  if (!source.url) return content;

  return (
    <a href={source.url} target="_blank" rel="noopener noreferrer" title={source.keyUse}>
      {content}
    </a>
  );
}

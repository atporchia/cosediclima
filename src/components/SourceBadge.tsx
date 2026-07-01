import { getSourceById } from "@/data/sources";

export default function SourceBadge({ sourceId }: { sourceId: string }) {
  const source = getSourceById(sourceId);
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

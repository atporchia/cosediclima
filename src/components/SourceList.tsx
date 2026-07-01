import SourceBadge from "./SourceBadge";

export default function SourceList({ sourceIds }: { sourceIds: string[] }) {
  if (sourceIds.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {sourceIds.map((id) => (
        <SourceBadge key={id} sourceId={id} />
      ))}
    </div>
  );
}

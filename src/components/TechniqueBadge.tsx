import Link from "next/link";
import { getTechniqueById } from "@/data/techniques";
import type { ManipulationTechnique } from "@/data/claims";

export default function TechniqueBadge({ technique }: { technique: ManipulationTechnique }) {
  const data = getTechniqueById(technique);
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

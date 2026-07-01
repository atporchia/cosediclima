import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { claims, getClaimBySlug } from "@/data/claims";
import ClaimResultCard from "@/components/ClaimResultCard";

export function generateStaticParams() {
  return claims.map((claim) => ({ slug: claim.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const claim = getClaimBySlug(slug);
  if (!claim) return {};

  const title = `${claim.claim} | CoseDiClima`;
  const description = `Scopri perché "${claim.claim}" è ${
    claim.verdict === "falso" ? "falso" : "fuorviante"
  } e come rispondere con dati e fonti.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function ClaimPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const claim = getClaimBySlug(slug);

  if (!claim) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <ClaimResultCard claim={claim} />
    </div>
  );
}

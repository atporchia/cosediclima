import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { personas, getPersonaBySlug } from "@/data/personas";
import PersonaStrategyCard from "@/components/PersonaStrategyCard";

export function generateStaticParams() {
  return personas.map((persona) => ({ slug: persona.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const persona = getPersonaBySlug(slug);
  if (!persona) return {};

  const title = `Come convincere: ${persona.name} | CoseDiClima`;
  return { title, description: persona.description };
}

export default async function PersonaStrategyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const persona = getPersonaBySlug(slug);

  if (!persona) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <PersonaStrategyCard persona={persona} />
    </div>
  );
}

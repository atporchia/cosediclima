import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { personas, getPersonaBySlugForLocale } from "@/data/personas";
import type { Locale } from "@/i18n/routing";
import PersonaStrategyCard from "@/components/PersonaStrategyCard";

export function generateStaticParams() {
  return personas.map((persona) => ({ slug: persona.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const persona = getPersonaBySlugForLocale(slug, locale as Locale);
  if (!persona) return {};

  const t = await getTranslations({ locale, namespace: "PersonaStrategyPage" });
  const title = `${t("titlePrefix")}${persona.name} | CoseDiClima`;
  return { title, description: persona.description };
}

export default async function PersonaStrategyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const persona = getPersonaBySlugForLocale(slug, locale as Locale);

  if (!persona) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <PersonaStrategyCard persona={persona} />
    </div>
  );
}

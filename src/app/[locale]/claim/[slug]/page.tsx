import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { claims, getClaimBySlugForLocale } from "@/data/claims";
import type { Locale } from "@/i18n/routing";
import ClaimResultCard from "@/components/ClaimResultCard";

export function generateStaticParams() {
  return claims.map((claim) => ({ slug: claim.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const claim = getClaimBySlugForLocale(slug, locale as Locale);
  if (!claim) return {};

  const t = await getTranslations({ locale, namespace: "ClaimPage" });
  const title = `${claim.claim} | CoseDiClima`;
  const description = t("descriptionTemplate", {
    claim: claim.claim,
    verdict: claim.verdict === "falso" ? t("verdictFalse") : t("verdictMisleading"),
  });

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function ClaimPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const claim = getClaimBySlugForLocale(slug, locale as Locale);

  if (!claim) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <ClaimResultCard claim={claim} />
    </div>
  );
}

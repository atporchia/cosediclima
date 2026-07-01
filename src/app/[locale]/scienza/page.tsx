import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { getScienceHighlights, getIndustryInfluenceCases } from "@/data/scienceWatch";
import type { Locale } from "@/i18n/routing";
import ScienzaTabs from "@/components/ScienzaTabs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ScienzaPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function ScienzaPage() {
  const t = useTranslations("ScienzaPage");
  const locale = useLocale() as Locale;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-bold sm:text-3xl">{t("title")}</h1>
      <p className="mt-3 text-foreground/70">{t("body")}</p>

      <div className="mt-10">
        <ScienzaTabs
          highlights={getScienceHighlights(locale)}
          cases={getIndustryInfluenceCases(locale)}
        />
      </div>
    </div>
  );
}

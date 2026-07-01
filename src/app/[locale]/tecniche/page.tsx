import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { getTechniques } from "@/data/techniques";
import type { Locale } from "@/i18n/routing";
import TechniqueCard from "@/components/TechniqueCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TecnichePage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function TecnichePage() {
  const t = useTranslations("TecnichePage");
  const locale = useLocale() as Locale;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-bold sm:text-3xl">{t("title")}</h1>
      <p className="mt-3 text-foreground/70">{t("body")}</p>
      <div className="mt-8 space-y-4">
        {getTechniques(locale).map((technique) => (
          <TechniqueCard key={technique.id} technique={technique} />
        ))}
      </div>
    </div>
  );
}

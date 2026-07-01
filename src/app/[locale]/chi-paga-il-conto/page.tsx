import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { getCostCards } from "@/data/costCards";
import type { Locale } from "@/i18n/routing";
import CostCard from "@/components/CostCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ChiPagaIlContoPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function ChiPagaIlContoPage() {
  const t = useTranslations("ChiPagaIlContoPage");
  const locale = useLocale() as Locale;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-bold sm:text-3xl">{t("title")}</h1>
      <p className="mt-3 text-foreground/70">{t("body")}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {getCostCards(locale).map((card) => (
          <CostCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import PersonaSelector from "@/components/PersonaSelector";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PersonaPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function PersonaPage() {
  const t = useTranslations("PersonaPage");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-2xl font-bold sm:text-3xl">{t("title")}</h1>
      <p className="mt-3 text-foreground/70">{t("body")}</p>
      <div className="mt-8">
        <PersonaSelector />
      </div>
    </div>
  );
}

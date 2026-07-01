import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import ClaimInput from "@/components/ClaimInput";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CheckPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function CheckPage() {
  const t = useTranslations("CheckPage");

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-2xl font-bold sm:text-3xl">{t("title")}</h1>
      <p className="mt-3 text-foreground/70">{t("body")}</p>
      <div className="mt-8">
        <ClaimInput />
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <section>
        <h1 className="text-2xl font-bold sm:text-3xl">{t("whyTitle")}</h1>

        <div className="mt-6 space-y-5 text-foreground/85">
          <p>{t("whyP1")}</p>
          <p>{t("whyP2")}</p>
          <p className="text-lg font-semibold text-foreground">{t("whyP3")}</p>
        </div>
      </section>

      <section className="mt-14 border-t border-white/10 pt-10">
        <h2 className="text-xl font-bold">{t("whoTitle")}</h2>
        <div className="mt-4 space-y-5 text-foreground/85">
          <p>{t("whoBody")}</p>
        </div>
      </section>
    </div>
  );
}

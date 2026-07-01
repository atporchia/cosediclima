import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { getSources } from "@/data/sources";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FontiPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function FontiPage() {
  const t = useTranslations("FontiPage");
  const locale = useLocale() as Locale;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-bold sm:text-3xl">{t("title")}</h1>
      <p className="mt-3 text-foreground/70">{t("body")}</p>
      <div className="mt-8 space-y-4">
        {getSources(locale).map((source) => (
          <div key={source.id} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-semibold">{source.organization}</p>
                <p className="text-sm text-foreground/70">{source.name}</p>
              </div>
              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-accent-science hover:underline"
                >
                  {t("officialSite")}
                </a>
              )}
            </div>
            <p className="mt-3 text-sm text-foreground/80">{source.credibilityNote}</p>
            <p className="mt-2 text-sm text-foreground/60">
              <span className="font-semibold text-foreground/75">{t("usedFor")}</span>
              {source.keyUse}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

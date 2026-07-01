import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ClaimInput from "@/components/ClaimInput";

const EXAMPLE_CLAIMS = [
  { slug: "il-clima-e-sempre-cambiato", key: "sempreCambiato" },
  { slug: "e-allora-la-cina", key: "allallCina" },
  { slug: "e-tutta-una-truffa-delle-elite", key: "eliteScam" },
] as const;

const SOURCE_STRIP = [
  "IPCC",
  "ISPRA",
  "Copernicus Climate Change Service",
  "World Weather Attribution",
  "WHO",
  "Lancet Countdown",
  "European Environment Agency",
  "NASA",
  "NOAA",
];

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
          {t("heroTitle")}
          <br />
          <span className="text-accent">{t("heroSubtitle")}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-foreground/80 sm:text-lg">
          {t("heroDescription")}
        </p>

        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-4 text-left sm:p-6">
          <ClaimInput />
          <div className="mt-4 flex justify-center">
            <Link
              href="/chi-paga-il-conto"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-white/40"
            >
              {t("seeWhoPays")}
            </Link>
          </div>
        </div>
      </section>

      {/* Example claims */}
      <section className="mt-14">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-foreground/50">
          {t("tryAClaim")}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {EXAMPLE_CLAIMS.map((claim) => (
            <Link
              key={claim.slug}
              href={`/claim/${claim.slug}`}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm font-medium transition-colors hover:border-accent/60 hover:bg-white/10"
            >
              &ldquo;{t(`exampleClaims.${claim.key}`)}&rdquo;
            </Link>
          ))}
        </div>
      </section>

      {/* Why this exists */}
      <section className="mt-16 border-t border-white/10 pt-12">
        <h2 className="text-2xl font-bold sm:text-3xl">{t("whyExistsTitle")}</h2>
        <p className="mt-4 max-w-3xl text-foreground/80">{t("whyExistsBody")}</p>
      </section>

      {/* Not a left/right issue */}
      <section className="mt-16 border-t border-white/10 pt-12">
        <h2 className="text-2xl font-bold sm:text-3xl">{t("notLeftRightTitle")}</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-foreground/80">
          <p>{t("notLeftRightP1")}</p>
          <p>
            {t("notLeftRightP2Pre")}{" "}
            <a
              href="https://www.greenreport.it/news/nuove-energie/61975-rinnovabili-a-fine-marzo-2026-litalia-ha-raggiunto-appena-il-33-2-dellobiettivo-complessivo-2030"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 underline-offset-2 hover:text-foreground hover:decoration-white/60"
            >
              {t("notLeftRightP2Link1")}
            </a>
            {t("notLeftRightP2Mid")}{" "}
            <a
              href="https://www.agendadigitale.eu/smart-city/litalia-e-in-linea-sugli-obiettivi-climatici-i-numeri-raccontano-altro/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 underline-offset-2 hover:text-foreground hover:decoration-white/60"
            >
              {t("notLeftRightP2Link2")}
            </a>{" "}
            {t("notLeftRightP2Post")}
          </p>
          <p>
            {t("notLeftRightP3Pre")}{" "}
            <a
              href="https://www.wri.org/insights/assessing-2025-ndcs"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 underline-offset-2 hover:text-foreground hover:decoration-white/60"
            >
              {t("notLeftRightP3Link")}
            </a>{" "}
            {t("notLeftRightP3Post")}
          </p>
          <p>
            {t("notLeftRightP4Pre")}{" "}
            <a
              href="https://www.science.org/doi/10.1126/science.adl6547"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 underline-offset-2 hover:text-foreground hover:decoration-white/60"
            >
              {t("notLeftRightP4Link")}
            </a>{" "}
            {t("notLeftRightP4Post")}
          </p>
        </div>
      </section>

      {/* What CoseDiClima does */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold sm:text-3xl">{t("whatItDoesTitle")}</h2>
        <p className="mt-4 max-w-3xl text-foreground/80">{t("whatItDoesIntro")}</p>
        <ul className="mt-3 max-w-3xl list-inside list-disc space-y-1 text-foreground/80">
          <li>{t("whatItDoesLi1")}</li>
          <li>{t("whatItDoesLi2")}</li>
          <li>{t("whatItDoesLi3")}</li>
          <li>{t("whatItDoesLi4")}</li>
          <li>{t("whatItDoesLi5")}</li>
        </ul>
      </section>

      {/* Tecniche teaser */}
      <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-xl font-bold sm:text-2xl">{t("tecnicheTeaserTitle")}</h2>
        <p className="mt-3 max-w-2xl text-foreground/80">{t("tecnicheTeaserBody")}</p>
        <Link
          href="/tecniche"
          className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
        >
          {t("tecnicheTeaserCta")}
        </Link>
      </section>

      {/* Scienza teaser */}
      <section className="mt-6 rounded-2xl border border-accent-science/30 bg-accent-science/10 p-6 sm:p-8">
        <h2 className="text-xl font-bold sm:text-2xl">{t("scienzaTeaserTitle")}</h2>
        <p className="mt-3 max-w-2xl text-foreground/80">{t("scienzaTeaserBody")}</p>
        <Link
          href="/scienza"
          className="mt-4 inline-block text-sm font-semibold text-accent-science hover:underline"
        >
          {t("scienzaTeaserCta")}
        </Link>
      </section>

      {/* Morti evitabili */}
      <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-xl font-bold sm:text-2xl">{t("mortiTeaserTitle")}</h2>
        <p className="mt-3 max-w-2xl text-foreground/80">{t("mortiTeaserBody")}</p>
        <Link
          href="/morti-evitabili"
          className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
        >
          {t("mortiTeaserCta")}
        </Link>
      </section>

      {/* Chi paga il conto */}
      <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-xl font-bold sm:text-2xl">{t("costoTeaserTitle")}</h2>
        <p className="mt-3 max-w-2xl text-foreground/80">{t("costoTeaserBody")}</p>
        <Link
          href="/chi-paga-il-conto"
          className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
        >
          {t("costoTeaserCta")}
        </Link>
      </section>

      {/* Source credibility strip */}
      <section className="mt-16 border-t border-white/10 pt-8">
        <p className="text-center text-xs uppercase tracking-wide text-foreground/40">
          {t("sourcesStripLabel")}
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground/60">
          {SOURCE_STRIP.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-extrabold sm:text-3xl">{t("finalCtaTitle")}</h2>
        <Link
          href="/check"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-strong hover:text-white"
        >
          {t("finalCtaButton")}
        </Link>
      </section>
    </div>
  );
}

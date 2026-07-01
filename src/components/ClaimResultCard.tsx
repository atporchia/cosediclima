import { useTranslations, useLocale } from "next-intl";
import type { ClimateClaim } from "@/data/claims";
import { getTechniqueByIdForLocale } from "@/data/techniques";
import type { Locale } from "@/i18n/routing";
import VerdictBadge from "./VerdictBadge";
import TechniqueBadge from "./TechniqueBadge";
import CopyButton from "./CopyButton";
import SourceList from "./SourceList";
import ShareCard from "./ShareCard";
import FeedbackButtons from "./FeedbackButtons";

export default function ClaimResultCard({ claim }: { claim: ClimateClaim }) {
  const t = useTranslations("ClaimResultCard");
  const locale = useLocale() as Locale;
  const technique = getTechniqueByIdForLocale(claim.technique, locale);

  return (
    <div className="space-y-8">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <VerdictBadge verdict={claim.verdict} />
          <TechniqueBadge technique={claim.technique} />
        </div>
        <h1 className="mt-4 text-2xl font-extrabold sm:text-3xl">&ldquo;{claim.claim}&rdquo;</h1>
        <p className="mt-2 text-foreground/70">{claim.shortLabel}</p>
      </div>

      <section className="rounded-2xl border border-accent/30 bg-accent/10 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">{t("tenSecondReplyLabel")}</p>
        <p className="mt-2 text-lg font-medium">{claim.tenSecondReply}</p>
        <div className="mt-4">
          <CopyButton text={claim.tenSecondReply} label={t("copyShortLabel")} />
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
          {t("whyPersuadesLabel")}
        </h2>
        <p className="mt-2 text-foreground/85">{claim.whyItPersuades}</p>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">{t("emotionalReframeLabel")}</h2>
        <p className="mt-2 text-foreground/85">{claim.emotionalReframe}</p>
      </section>

      <section>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
            {t("longerReplyLabel")}
          </h2>
          <CopyButton text={claim.longerReply} label={t("copyLabel")} />
        </div>
        <p className="mt-2 text-foreground/85">{claim.longerReply}</p>
      </section>

      <section className="rounded-2xl border border-accent-science/30 bg-accent-science/5 p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-science">{t("scientificBackupLabel")}</h2>
        <p className="mt-2 text-foreground/85">{claim.scientificBackup}</p>
        {technique && (
          <p className="mt-3 text-sm text-foreground/60">
            {t("techniqueLabel")}
            <span className="font-medium text-foreground/80">{technique.name}</span> —{" "}
            {technique.definition}
          </p>
        )}
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">{t("internationalAngleLabel")}</h2>
        <p className="mt-2 text-foreground/85">{claim.italianAngle}</p>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">{t("sourcesLabel")}</h2>
        <div className="mt-3">
          <SourceList sourceIds={claim.sourceIds} />
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">{t("shareCardLabel")}</h2>
        <div className="mt-3">
          <ShareCard claim={claim} />
        </div>
      </section>

      <section className="border-t border-white/10 pt-6">
        <FeedbackButtons claimId={claim.id} />
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { scienceHighlights, industryInfluenceCases } from "@/data/scienceWatch";
import SourceList from "@/components/SourceList";

export const metadata: Metadata = {
  title: "Cosa ne pensa la scienza | CoseDiClima",
  description:
    "Il consenso scientifico sul clima e i casi documentati di aziende che hanno finanziato campagne di dubbio, con fonti verificabili per ogni affermazione.",
};

export default function ScienzaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-bold sm:text-3xl">Cosa ne pensa la scienza</h1>
      <p className="mt-3 text-foreground/70">
        Da un lato il consenso scientifico, verificabile e pubblico. Dall&apos;altro, chi ha
        finanziato campagne organizzate per farti dubitare — documentato con fonti verificabili,
        non con sospetti.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Il consenso scientifico</h2>
        <div className="mt-4 space-y-4">
          {scienceHighlights.map((item) => (
            <div key={item.id} className="rounded-xl border border-accent-science/30 bg-accent-science/5 p-5">
              <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/60">
                <span>{item.organization}</span>
                <span>·</span>
                <span>{item.year}</span>
              </div>
              <p className="mt-2 font-semibold">{item.title}</p>
              <p className="mt-2 text-sm text-foreground/85">{item.summary}</p>
              <div className="mt-3">
                <SourceList sourceIds={item.sourceIds} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Chi ha pagato per farti dubitare</h2>
        <p className="mt-2 text-sm text-foreground/70">
          Ogni caso qui sotto è documentato da inchieste giornalistiche, studi peer-reviewed o
          ricerche di trasparenza sui finanziamenti — non da sospetti generici. Alcuni dei
          soggetti citati hanno pubblicamente contestato le conclusioni riportate.
        </p>
        <div className="mt-4 space-y-4">
          {industryInfluenceCases.map((item) => (
            <div key={item.id} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">{item.actor}</p>
              <p className="mt-2 font-semibold">{item.title}</p>
              <p className="mt-2 text-sm text-foreground/85">{item.whatHappened}</p>
              <p className="mt-2 text-sm text-foreground/70">
                <span className="font-semibold text-foreground/85">Conflitto di interesse: </span>
                {item.conflictOfInterest}
              </p>
              <p className="mt-2 text-sm text-foreground/70">
                <span className="font-semibold text-foreground/85">Cosa mostrano le prove: </span>
                {item.whatEvidenceShows}
              </p>
              <div className="mt-3">
                <SourceList sourceIds={item.sourceIds} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

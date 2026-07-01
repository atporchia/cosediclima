import type { Metadata } from "next";
import { scienceHighlights, industryInfluenceCases } from "@/data/scienceWatch";
import ScienzaTabs from "@/components/ScienzaTabs";

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

      <div className="mt-10">
        <ScienzaTabs highlights={scienceHighlights} cases={industryInfluenceCases} />
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import PersonaSelector from "@/components/PersonaSelector";

export const metadata: Metadata = {
  title: "Che tipo di persona vuoi convincere? | CoseDiClima",
  description:
    "Scegli la persona che hai davanti per una strategia di persuasione su misura: cosa dire, cosa evitare, e risposte pronte in tre toni diversi.",
};

export default function PersonaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-2xl font-bold sm:text-3xl">Che tipo di persona vuoi convincere?</h1>
      <p className="mt-3 text-foreground/70">
        Persone diverse rispondono a frame diversi. Scegli chi hai davanti per una strategia
        pensata su misura.
      </p>
      <div className="mt-8">
        <PersonaSelector />
      </div>
    </div>
  );
}

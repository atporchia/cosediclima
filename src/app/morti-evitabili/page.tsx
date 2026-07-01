import type { Metadata } from "next";
import { humanCostCards } from "@/data/humanCostCards";
import HumanCostCard from "@/components/HumanCostCard";

export const metadata: Metadata = {
  title: "Morti evitabili | CoseDiClima",
  description:
    "Il cambiamento climatico non uccide solo in futuro. Caldo estremo, alluvioni, incendi e siccità stanno già trasformando il rischio climatico in morti, danni e costi reali.",
};

export default function MortiEvitabiliPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-bold sm:text-3xl">
        Il cambiamento climatico non uccide solo in futuro. Uccide adesso.
      </h1>
      <p className="mt-3 text-foreground/70">
        Caldo estremo, alluvioni, incendi, siccità e tempeste stanno già trasformando il rischio
        climatico in morti, danni e costi reali. Non ogni evento è causato solo dal clima: gli
        studi di attribuzione stimano quanto lo abbia reso più probabile, più intenso o più
        dannoso.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {humanCostCards.map((card) => (
          <HumanCostCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { techniques } from "@/data/techniques";
import TechniqueCard from "@/components/TechniqueCard";

export const metadata: Metadata = {
  title: "Le tecniche retoriche più comuni nel dibattito climatico | CoseDiClima",
  description:
    "Cherry-picking, falso equilibrio, benaltrismo, doomismo e altre tecniche retoriche usate nel dibattito climatico: impara a riconoscerle e a rispondere.",
};

export default function TecnichePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-bold sm:text-3xl">Le tecniche retoriche più comuni nel dibattito climatico</h1>
      <p className="mt-3 text-foreground/70">
        Il negazionismo climatico raramente si presenta come negazione diretta. Di solito usa
        una di queste tecniche retoriche.
      </p>
      <div className="mt-8 space-y-4">
        {techniques.map((technique) => (
          <TechniqueCard key={technique.id} technique={technique} />
        ))}
      </div>
    </div>
  );
}

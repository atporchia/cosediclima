import type { Metadata } from "next";
import ClaimInput from "@/components/ClaimInput";

export const metadata: Metadata = {
  title: "Clima Check | CoseDiClima",
  description:
    "Incolla una frase sul clima e scopri se è falsa, fuorviante o manipolatoria, con una risposta pronta da copiare.",
};

export default function CheckPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-2xl font-bold sm:text-3xl">Clima Check</h1>
      <p className="mt-3 text-foreground/70">
        Incolla una frase sul clima che hai sentito o letto da qualche parte. Ti diciamo se è
        falsa, fuorviante o manipolatoria, e ti diamo una risposta pronta.
      </p>
      <div className="mt-8">
        <ClaimInput />
      </div>
    </div>
  );
}

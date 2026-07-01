import type { Metadata } from "next";
import { costCards } from "@/data/costCards";
import CostCard from "@/components/CostCard";

export const metadata: Metadata = {
  title: "Chi paga il conto? | CoseDiClima",
  description:
    "Il negazionismo climatico non costa zero. Costa a chi non può scappare, assicurarsi o climatizzare la propria vita: salute, casa, cibo, tasse, assicurazione, acqua, lavoro ed energia.",
};

export default function ChiPagaIlContoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-bold sm:text-3xl">
        Il negazionismo climatico non costa zero. Costa a chi non può scappare.
      </h1>
      <p className="mt-3 text-foreground/70">
        Mentre discutiamo se il problema esiste, il conto arriva sotto forma di caldo, danni,
        assicurazioni, cibo più caro, tasse, acqua e salute. I più ricchi possono spostarsi,
        assicurarsi, ricostruire, climatizzare e proteggere i propri beni. Le persone normali
        assorbono il caldo, le alluvioni, il fumo, i prezzi del cibo, le tasse e gli aumenti
        assicurativi.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {costCards.map((card) => (
          <CostCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

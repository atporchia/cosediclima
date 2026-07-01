import type { Metadata } from "next";
import { sources } from "@/data/sources";

export const metadata: Metadata = {
  title: "Fonti | CoseDiClima",
  description:
    "Le fonti scientifiche, istituzionali e giornalistiche usate da CoseDiClima per verificare ogni affermazione: nessun blog, nessuna pagina attivista non verificata.",
};

export default function FontiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-bold sm:text-3xl">Fonti</h1>
      <p className="mt-3 text-foreground/70">
        Ogni affermazione fattuale su CoseDiClima è collegata ad almeno una di queste fonti. Non
        usiamo blog, pagine attiviste non verificate o contenuti politici come fonti fattuali.
      </p>
      <div className="mt-8 space-y-4">
        {sources.map((source) => (
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
                  Sito ufficiale ↗
                </a>
              )}
            </div>
            <p className="mt-3 text-sm text-foreground/80">{source.credibilityNote}</p>
            <p className="mt-2 text-sm text-foreground/60">
              <span className="font-semibold text-foreground/75">Usata per: </span>
              {source.keyUse}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

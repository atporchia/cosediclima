import Link from "next/link";
import ClaimInput from "@/components/ClaimInput";

const EXAMPLE_CLAIMS = [
  { slug: "il-clima-e-sempre-cambiato", text: "Il clima è sempre cambiato." },
  { slug: "e-allora-la-cina", text: "E allora la Cina?" },
  { slug: "e-tutta-una-truffa-delle-elite", text: "È tutta una truffa delle élite." },
];

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
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
          Il clima non è un&apos;opinione.
          <br />
          <span className="text-accent">Controlla prima di condividere.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-foreground/80 sm:text-lg">
          CoseDiClima ti aiuta a smontare bufale climatiche, negazionismo e ritardi con
          risposte brevi, dati solidi e fonti affidabili.
        </p>

        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-4 text-left sm:p-6">
          <ClaimInput />
          <div className="mt-4 flex justify-center">
            <Link
              href="/chi-paga-il-conto"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-white/40"
            >
              Vedi chi paga il conto
            </Link>
          </div>
        </div>
      </section>

      {/* Example claims */}
      <section className="mt-14">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-foreground/50">
          Prova con una frase che hai sentito
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {EXAMPLE_CLAIMS.map((claim) => (
            <Link
              key={claim.slug}
              href={`/claim/${claim.slug}`}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm font-medium transition-colors hover:border-accent/60 hover:bg-white/10"
            >
              &ldquo;{claim.text}&rdquo;
            </Link>
          ))}
        </div>
      </section>

      {/* Why this exists */}
      <section className="mt-16 border-t border-white/10 pt-12">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Persone muoiono mentre discutiamo se il problema esiste.
        </h2>
        <p className="mt-4 max-w-3xl text-foreground/80">
          Ogni volta che una discussione climatica finisce in &ldquo;è sempre successo&rdquo;,
          &ldquo;e allora la Cina&rdquo;, &ldquo;sono tutte élite&rdquo;, il risultato è lo
          stesso: meno azione, più ritardo, più costi per chi non può scappare.
        </p>
      </section>

      {/* What CoseDiClima does */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold sm:text-3xl">
          CoseDiClima non ti dà un trattato. Ti dà una risposta.
        </h2>
        <p className="mt-4 max-w-3xl text-foreground/80">Per ogni frase trovi:</p>
        <ul className="mt-3 max-w-3xl list-inside list-disc space-y-1 text-foreground/80">
          <li>cosa c&apos;è di falso o fuorviante;</li>
          <li>quale tecnica manipolatoria usa;</li>
          <li>una risposta breve da copiare;</li>
          <li>una spiegazione più completa;</li>
          <li>fonti scientifiche affidabili.</li>
        </ul>
      </section>

      {/* Tecniche teaser */}
      <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-xl font-bold sm:text-2xl">Le tecniche più usate per fregarti.</h2>
        <p className="mt-3 max-w-2xl text-foreground/80">
          Cherry-picking, falso equilibrio, benaltrismo, doomismo: impara a riconoscerle prima
          di cadere nella discussione sbagliata.
        </p>
        <Link
          href="/tecniche"
          className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
        >
          Vedi la libreria delle tecniche →
        </Link>
      </section>

      {/* Scienza teaser */}
      <section className="mt-6 rounded-2xl border border-accent-science/30 bg-accent-science/10 p-6 sm:p-8">
        <h2 className="text-xl font-bold sm:text-2xl">Cosa ne pensa la scienza.</h2>
        <p className="mt-3 max-w-2xl text-foreground/80">
          Non solo studi e consenso scientifico: anche chi ha pagato per farti dubitare, e
          come lo ha fatto.
        </p>
        <Link
          href="/scienza"
          className="mt-4 inline-block text-sm font-semibold text-accent-science hover:underline"
        >
          Guarda le fonti e i conflitti di interesse →
        </Link>
      </section>

      {/* Morti evitabili */}
      <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-xl font-bold sm:text-2xl">Morti evitabili.</h2>
        <p className="mt-3 max-w-2xl text-foreground/80">
          Il cambiamento climatico non uccide solo in futuro. Uccide adesso, soprattutto con il
          caldo estremo.
        </p>
        <Link
          href="/morti-evitabili"
          className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
        >
          Vedi il costo umano →
        </Link>
      </section>

      {/* Chi paga il conto */}
      <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-xl font-bold sm:text-2xl">Chi paga il conto?</h2>
        <p className="mt-3 max-w-2xl text-foreground/80">
          Il negazionismo climatico non costa zero. Costa a chi non può scappare, assicurarsi o
          climatizzare la propria vita.
        </p>
        <Link
          href="/chi-paga-il-conto"
          className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
        >
          Vedi chi paga →
        </Link>
      </section>

      {/* Source credibility strip */}
      <section className="mt-16 border-t border-white/10 pt-8">
        <p className="text-center text-xs uppercase tracking-wide text-foreground/40">
          Dati e fonti da
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground/60">
          {SOURCE_STRIP.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          Il clima non è un&apos;opinione. Controlla prima di condividere.
        </h2>
        <Link
          href="/check"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-strong hover:text-white"
        >
          Fai un Clima Check
        </Link>
      </section>
    </div>
  );
}

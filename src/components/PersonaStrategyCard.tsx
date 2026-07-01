import type { Persona } from "@/data/personas";
import CopyButton from "./CopyButton";

export default function PersonaStrategyCard({ persona }: { persona: Persona }) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold sm:text-3xl">{persona.name}</h1>
        <p className="mt-3 text-foreground/80">{persona.description}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">Paura di fondo</p>
          <p className="mt-2 text-sm text-foreground/85">{persona.coreFear}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">Difesa identitaria</p>
          <p className="mt-2 text-sm italic text-foreground/85">&ldquo;{persona.identityDefense}&rdquo;</p>
        </div>
      </div>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Strategia di persuasione</h2>
        <p className="mt-2 text-foreground/85">{persona.persuasionStrategy}</p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-red-300/80">Da evitare</h2>
          <ul className="mt-2 space-y-1.5">
            {persona.avoidSaying.map((line) => (
              <li key={line} className="text-sm text-foreground/70">
                &ldquo;{line}&rdquo;
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">Da dire invece</h2>
          <ul className="mt-2 space-y-1.5">
            {persona.sayInstead.map((line) => (
              <li key={line} className="text-sm text-foreground/85">
                &ldquo;{line}&rdquo;
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Frame migliori</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {persona.bestFrames.map((frame) => (
            <span
              key={frame}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-foreground/70"
            >
              {frame}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Risposte di esempio</h2>
        <div className="mt-3 space-y-3">
          {(
            [
              ["Gentile", persona.exampleReplies.gentle],
              ["Diretta", persona.exampleReplies.direct],
              ["Tagliente", persona.exampleReplies.sharp],
            ] as const
          ).map(([label, text]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">{label}</p>
                <CopyButton text={text} />
              </div>
              <p className="mt-2 text-sm text-foreground/85">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

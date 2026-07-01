import Link from "next/link";
import { personas } from "@/data/personas";

export default function PersonaSelector() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {personas.map((persona) => (
        <Link
          key={persona.slug}
          href={`/persona/${persona.slug}`}
          className="rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-accent/60 hover:bg-white/10"
        >
          <p className="font-semibold">{persona.name}</p>
          <p className="mt-2 text-sm text-foreground/70">{persona.description}</p>
        </Link>
      ))}
    </div>
  );
}

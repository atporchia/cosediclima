import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getPersonas } from "@/data/personas";
import type { Locale } from "@/i18n/routing";

export default function PersonaSelector() {
  const locale = useLocale() as Locale;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {getPersonas(locale).map((persona) => (
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

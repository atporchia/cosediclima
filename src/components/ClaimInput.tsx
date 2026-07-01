"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { matchClaim } from "@/lib/matchClaim";
import type { ClimateClaim } from "@/data/claims";

export default function ClaimInput() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<ClimateClaim[] | null>(null);
  const [noMatch, setNoMatch] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;

    const result = matchClaim(trimmed);

    if (result.claim) {
      setSuggestions(null);
      setNoMatch(false);
      router.push(`/claim/${result.claim.slug}`);
      return;
    }

    if (result.suggestions.length > 0) {
      setSuggestions(result.suggestions);
      setNoMatch(false);
    } else {
      setSuggestions(null);
      setNoMatch(true);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="claim-input" className="sr-only">
          Incolla una frase sul clima
        </label>
        <input
          id="claim-input"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder='Incolla una frase tipo: "Il clima è sempre cambiato"'
          className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-strong hover:text-white"
        >
          Fai un Clima Check
        </button>
      </form>

      {suggestions && (
        <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-foreground/70">Non ho trovato una corrispondenza esatta. Forse cercavi:</p>
          <ul className="mt-2 space-y-1">
            {suggestions.map((suggestion) => (
              <li key={suggestion.slug}>
                <Link
                  href={`/claim/${suggestion.slug}`}
                  className="text-sm font-medium text-accent hover:underline"
                >
                  &ldquo;{suggestion.claim}&rdquo;
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {noMatch && (
        <p className="mt-4 text-sm text-foreground/60">
          Non ho trovato nessuna frase simile nel nostro archivio. Prova a riformulare, o esplora gli esempi qui
          sotto.
        </p>
      )}
    </div>
  );
}

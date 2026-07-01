"use client";

import { useState, type FormEvent } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/navigation";
import { matchClaim } from "@/lib/matchClaim";
import type { ClimateClaim } from "@/data/claims";
import type { Locale } from "@/i18n/routing";

export default function ClaimInput() {
  const t = useTranslations("ClaimInput");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<ClimateClaim[] | null>(null);
  const [noMatch, setNoMatch] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;

    const result = matchClaim(trimmed, locale);

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
          {t("label")}
        </label>
        <input
          id="claim-input"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={t("placeholder")}
          className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-strong hover:text-white"
        >
          {t("submit")}
        </button>
      </form>

      {suggestions && (
        <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-foreground/70">{t("suggestionsIntro")}</p>
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
        <p className="mt-4 text-sm text-foreground/60">{t("noMatch")}</p>
      )}
    </div>
  );
}

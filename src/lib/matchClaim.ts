import { getClaims, type ClimateClaim } from "@/data/claims";
import type { Locale } from "@/i18n/routing";

export type ClaimMatchType = "exact" | "alias" | "keyword" | "none";

export interface ClaimMatchResult {
  matchType: ClaimMatchType;
  claim?: ClimateClaim;
  suggestions: ClimateClaim[];
}

const STOPWORDS: Record<Locale, Set<string>> = {
  it: new Set([
    "il", "lo", "la", "i", "gli", "le", "un", "uno", "una",
    "di", "a", "da", "in", "con", "su", "per", "tra", "fra",
    "e", "o", "ma", "che", "non", "è", "sono", "sei", "ha", "hai",
    "questo", "questa", "questi", "queste", "quindi", "anche",
    "come", "se", "ci", "si", "mi", "ti", "lui", "lei", "noi", "voi", "loro",
  ]),
  en: new Set([
    "the", "a", "an", "of", "to", "in", "on", "for", "with", "and", "or",
    "but", "that", "this", "these", "those", "is", "are", "was", "were",
    "be", "been", "has", "have", "had", "not", "so", "also", "as", "it",
    "its", "you", "your", "they", "them", "we", "our", "i", "he", "she",
  ]),
};

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function keywords(text: string, locale: Locale): string[] {
  return normalize(text)
    .split(" ")
    .filter((word) => word.length > 2 && !STOPWORDS[locale].has(word));
}

function keywordScore(inputWords: string[], claim: ClimateClaim, locale: Locale): number {
  const claimWords = new Set([
    ...keywords(claim.claim, locale),
    ...claim.aliases.flatMap((alias) => keywords(alias, locale)),
    ...claim.tags.flatMap((tag) => keywords(tag.replace(/-/g, " "), locale)),
  ]);
  if (claimWords.size === 0) return 0;
  const overlap = inputWords.filter((word) => claimWords.has(word)).length;
  return overlap / claimWords.size;
}

export function matchClaim(rawInput: string, locale: Locale = "it"): ClaimMatchResult {
  const claims = getClaims(locale);
  const input = normalize(rawInput);
  if (!input) {
    return { matchType: "none", suggestions: [] };
  }

  for (const claim of claims) {
    if (normalize(claim.claim) === input) {
      return { matchType: "exact", claim, suggestions: [] };
    }
  }

  for (const claim of claims) {
    if (claim.aliases.some((alias) => normalize(alias) === input)) {
      return { matchType: "alias", claim, suggestions: [] };
    }
  }

  const inputWords = keywords(rawInput, locale);
  if (inputWords.length === 0) {
    return { matchType: "none", suggestions: [] };
  }

  const scored = claims
    .map((claim) => ({ claim, score: keywordScore(inputWords, claim, locale) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) {
    return { matchType: "none", suggestions: [] };
  }

  const KEYWORD_MATCH_THRESHOLD = 0.34;
  if (scored[0].score >= KEYWORD_MATCH_THRESHOLD) {
    return { matchType: "keyword", claim: scored[0].claim, suggestions: [] };
  }

  return {
    matchType: "none",
    suggestions: scored.slice(0, 3).map((entry) => entry.claim),
  };
}

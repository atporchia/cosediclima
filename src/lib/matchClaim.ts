import { claims, type ClimateClaim } from "@/data/claims";

export type ClaimMatchType = "exact" | "alias" | "keyword" | "none";

export interface ClaimMatchResult {
  matchType: ClaimMatchType;
  claim?: ClimateClaim;
  suggestions: ClimateClaim[];
}

const STOPWORDS = new Set([
  "il", "lo", "la", "i", "gli", "le", "un", "uno", "una",
  "di", "a", "da", "in", "con", "su", "per", "tra", "fra",
  "e", "o", "ma", "che", "non", "è", "sono", "sei", "ha", "hai",
  "questo", "questa", "questi", "queste", "quindi", "anche",
  "come", "se", "ci", "si", "mi", "ti", "lui", "lei", "noi", "voi", "loro",
]);

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function keywords(text: string): string[] {
  return normalize(text)
    .split(" ")
    .filter((word) => word.length > 2 && !STOPWORDS.has(word));
}

function keywordScore(inputWords: string[], claim: ClimateClaim): number {
  const claimWords = new Set([
    ...keywords(claim.claim),
    ...claim.aliases.flatMap((alias) => keywords(alias)),
    ...claim.tags.flatMap((tag) => keywords(tag.replace(/-/g, " "))),
  ]);
  if (claimWords.size === 0) return 0;
  const overlap = inputWords.filter((word) => claimWords.has(word)).length;
  return overlap / claimWords.size;
}

export function matchClaim(rawInput: string): ClaimMatchResult {
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

  const inputWords = keywords(rawInput);
  if (inputWords.length === 0) {
    return { matchType: "none", suggestions: [] };
  }

  const scored = claims
    .map((claim) => ({ claim, score: keywordScore(inputWords, claim) }))
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

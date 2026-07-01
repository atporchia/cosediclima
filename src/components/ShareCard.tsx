"use client";

import type { ClimateClaim } from "@/data/claims";
import VerdictBadge from "./VerdictBadge";
import CopyButton from "./CopyButton";

export default function ShareCard({ claim }: { claim: ClimateClaim }) {
  const shareText = `"${claim.claim}"\n\n${claim.tenSecondReply}\n\n— CoseDiClima\nIl clima non è un'opinione. Controlla prima di condividere.`;
  const canNativeShare = typeof navigator !== "undefined" && "share" in navigator;

  async function handleNativeShare() {
    try {
      await navigator.share({ text: shareText, title: "CoseDiClima" });
    } catch {
      // user cancelled or share failed silently — the copy button remains available
    }
  }

  return (
    <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
      <VerdictBadge verdict={claim.verdict} />
      <p className="mt-3 text-lg font-semibold">&ldquo;{claim.claim}&rdquo;</p>
      <p className="mt-2 text-foreground/85">{claim.tenSecondReply}</p>
      <p className="mt-4 text-xs text-foreground/50">
        CoseDiClima — Il clima non è un&apos;opinione. Controlla prima di condividere.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <CopyButton text={shareText} label="Copia per condividere" />
        {canNativeShare && (
          <button
            type="button"
            onClick={handleNativeShare}
            className="inline-flex items-center gap-1.5 rounded-md border border-white/20 px-3 py-1.5 text-xs font-semibold text-foreground/90 transition-colors hover:border-white/40"
          >
            Condividi
          </button>
        )}
      </div>
    </div>
  );
}

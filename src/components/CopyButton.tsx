"use client";

import { useState } from "react";

export default function CopyButton({
  text,
  label = "Copia",
  className = "",
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("failed");
    } finally {
      setTimeout(() => setStatus("idle"), 2000);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 rounded-md border border-white/20 px-3 py-1.5 text-xs font-semibold text-foreground/90 transition-colors hover:border-white/40 ${className}`}
    >
      {status === "copied" && "Copiato"}
      {status === "failed" && "Seleziona il testo manualmente"}
      {status === "idle" && label}
    </button>
  );
}

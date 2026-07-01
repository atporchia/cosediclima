"use client";

import { useState } from "react";

const OPTIONS = [
  "Sì",
  "No",
  "Troppo lunga",
  "Troppo aggressiva",
  "Troppo debole",
  "Voglio più dati",
  "Voglio una versione più dura",
  "Voglio una versione più calma",
];

export default function FeedbackButtons({ claimId }: { claimId: string }) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleClick(option: string) {
    setSelected(option);
    // MVP: log locally. A future version can send this to a backend.
    console.log("clima-check-feedback", { claimId, option });
  }

  return (
    <div>
      <p className="text-sm font-semibold text-foreground/80">Questa risposta ti aiuta a rispondere?</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => handleClick(option)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              selected === option
                ? "border-accent bg-accent/15 text-accent"
                : "border-white/15 text-foreground/70 hover:border-white/30"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {selected && (
        <p className="mt-2 text-xs text-foreground/50">Grazie per il feedback: &ldquo;{selected}&rdquo;.</p>
      )}
    </div>
  );
}

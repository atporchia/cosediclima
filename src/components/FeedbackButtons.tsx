"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function FeedbackButtons({ claimId }: { claimId: string }) {
  const t = useTranslations("FeedbackButtons");
  const options = t.raw("options") as string[];
  const [selected, setSelected] = useState<string | null>(null);

  function handleClick(option: string) {
    setSelected(option);
    // MVP: log locally. A future version can send this to a backend.
    console.log("clima-check-feedback", { claimId, option });
  }

  return (
    <div>
      <p className="text-sm font-semibold text-foreground/80">{t("question")}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
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
        <p className="mt-2 text-xs text-foreground/50">{t("thanks", { option: selected })}</p>
      )}
    </div>
  );
}

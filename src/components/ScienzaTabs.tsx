"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { ScienceHighlight, IndustryInfluenceCase } from "@/data/scienceWatch";
import SourceList from "./SourceList";

type TabId = "consenso" | "conflitti";

export default function ScienzaTabs({
  highlights,
  cases,
}: {
  highlights: ScienceHighlight[];
  cases: IndustryInfluenceCase[];
}) {
  const t = useTranslations("ScienzaTabs");
  const [activeTab, setActiveTab] = useState<TabId>("consenso");

  const TABS: { id: TabId; label: string }[] = [
    { id: "consenso", label: t("tabConsenso") },
    { id: "conflitti", label: t("tabConflitti") },
  ];

  const sortedHighlights = [...highlights].sort((a, b) => Number(b.year) - Number(a.year));
  const sortedCases = [...cases].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <div>
      <div role="tablist" aria-label={t("ariaLabel")} className="flex flex-wrap gap-2 border-b border-white/10">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`-mb-px rounded-t-lg border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${
              activeTab === tab.id
                ? "border-accent text-accent"
                : "border-transparent text-foreground/60 hover:text-foreground/90"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="tabpanel-consenso"
        aria-labelledby="tab-consenso"
        hidden={activeTab !== "consenso"}
        className="mt-6 space-y-4"
      >
        {sortedHighlights.map((item) => (
          <div key={item.id} className="rounded-xl border border-accent-science/30 bg-accent-science/5 p-5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/60">
              <span>{item.organization}</span>
              <span>·</span>
              <span>{item.year}</span>
            </div>
            <p className="mt-2 font-semibold">{item.title}</p>
            <p className="mt-2 text-sm text-foreground/85">{item.summary}</p>
            <div className="mt-3">
              <SourceList sourceIds={item.sourceIds} />
            </div>
          </div>
        ))}
      </div>

      <div
        role="tabpanel"
        id="tabpanel-conflitti"
        aria-labelledby="tab-conflitti"
        hidden={activeTab !== "conflitti"}
        className="mt-6"
      >
        <p className="text-sm text-foreground/70">{t("conflictsIntro")}</p>
        <div className="mt-4 space-y-4">
          {sortedCases.map((item) => (
            <div key={item.id} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/50">
                <span className="font-semibold uppercase tracking-wide">{item.actor}</span>
                <span>·</span>
                <span>{item.year}</span>
              </div>
              <p className="mt-2 font-semibold">{item.title}</p>
              <p className="mt-2 text-sm text-foreground/85">{item.whatHappened}</p>
              <p className="mt-2 text-sm text-foreground/70">
                <span className="font-semibold text-foreground/85">{t("conflictOfInterestLabel")}</span>
                {item.conflictOfInterest}
              </p>
              <p className="mt-2 text-sm text-foreground/70">
                <span className="font-semibold text-foreground/85">{t("evidenceLabel")}</span>
                {item.whatEvidenceShows}
              </p>
              <div className="mt-3">
                <SourceList sourceIds={item.sourceIds} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

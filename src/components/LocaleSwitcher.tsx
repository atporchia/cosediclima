"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const LOCALES = [
  { code: "it", flag: "🇮🇹", label: "Italiano" },
  { code: "en", flag: "🇬🇧", label: "English" },
] as const;

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="ml-auto flex items-center gap-1">
      {LOCALES.map(({ code, flag, label }) => (
        <button
          key={code}
          type="button"
          aria-label={label}
          aria-current={locale === code}
          onClick={() => router.replace(pathname, { locale: code })}
          className={`rounded px-1.5 py-1 text-lg leading-none transition-opacity ${
            locale === code ? "opacity-100" : "opacity-40 hover:opacity-80"
          }`}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}

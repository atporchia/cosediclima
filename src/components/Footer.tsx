import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mt-auto border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-foreground/70">
        <p className="text-xs text-foreground/50">
          {t.rich("text", {
            fontiLink: (chunks) => (
              <Link href="/fonti" className="underline hover:text-foreground">
                {chunks}
              </Link>
            ),
          })}
        </p>
      </div>
    </footer>
  );
}

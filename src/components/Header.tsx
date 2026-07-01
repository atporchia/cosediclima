import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("Header");

  const navLinks = [
    { href: "/tecniche", label: t("nav.tecniche") },
    { href: "/scienza", label: t("nav.scienza") },
    { href: "/morti-evitabili", label: t("nav.mortiEvitabili") },
    { href: "/chi-paga-il-conto", label: t("nav.chiPagaIlConto") },
    { href: "/fonti", label: t("nav.fonti") },
    { href: "/about", label: t("nav.about") },
  ];

  return (
    <header className="border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-8 gap-y-3 px-4 py-3">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Cose<span className="text-accent">Di</span>Clima
        </Link>
        <nav aria-label={t("navLabel")} className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <LocaleSwitcher />
      </div>
    </header>
  );
}

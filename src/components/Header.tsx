import Link from "next/link";

const NAV_LINKS = [
  { href: "/check", label: "Clima Check" },
  { href: "/tecniche", label: "Argomenti ricorrenti" },
  { href: "/scienza", label: "Cosa ne pensa la scienza" },
  { href: "/morti-evitabili", label: "Morti evitabili" },
  { href: "/chi-paga-il-conto", label: "Chi paga il conto" },
  { href: "/fonti", label: "Fonti" },
  { href: "/about", label: "Il Progetto" },
];

export default function Header() {
  return (
    <header className="border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Cose<span className="text-accent">Di</span>Clima
        </Link>
        <nav aria-label="Navigazione principale" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

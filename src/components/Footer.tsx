import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/check", label: "Clima Check" },
  { href: "/tecniche", label: "Tecniche" },
  { href: "/scienza", label: "Cosa ne pensa la scienza" },
  { href: "/morti-evitabili", label: "Morti evitabili" },
  { href: "/chi-paga-il-conto", label: "Chi paga il conto" },
  { href: "/fonti", label: "Fonti" },
  { href: "/about", label: "Chi siamo" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-foreground/70">
        <p className="font-semibold text-foreground">CoseDiClima</p>
        <p className="mt-1">Il clima non è un&apos;opinione. Controlla prima di condividere.</p>
        <nav aria-label="Link del footer" className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-6 text-xs text-foreground/50">
          CoseDiClima è uno strumento indipendente. Ogni affermazione fattuale è collegata a una
          fonte verificabile — vedi la pagina{" "}
          <Link href="/fonti" className="underline hover:text-foreground">
            Fonti
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}

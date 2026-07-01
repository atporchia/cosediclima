import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-foreground/70">
        <p className="text-xs text-foreground/50">
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

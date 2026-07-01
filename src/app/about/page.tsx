import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Il Progetto | CoseDiClima",
  description:
    "Perché esiste CoseDiClima, e chi c'è dietro: Attilio, Product Manager italiano residente in Polonia, con la passione per tecnologia e ambiente.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <section>
        <h1 className="text-2xl font-bold sm:text-3xl">Perché CoseDiClima</h1>

        <div className="mt-6 space-y-5 text-foreground/85">
          <p>
            CoseDiClima nasce da una premessa semplice: molte bufale climatiche funzionano
            perché sono brevi, emotive e facili da ripetere. Le risposte scientifiche, invece,
            spesso arrivano troppo tardi, troppo lunghe o troppo complicate.
          </p>
          <p>
            Ho provato a fare una cosa diversa: trasformare dati e fonti affidabili in risposte
            brevi, chiare e condivisibili.
          </p>
          <p className="text-lg font-semibold text-foreground">
            Il clima non è un&apos;opinione. Controlla prima di condividere.
          </p>
        </div>
      </section>

      <section className="mt-14 border-t border-white/10 pt-10">
        <h2 className="text-xl font-bold">Chi sono</h2>
        <div className="mt-4 space-y-5 text-foreground/85">
          <p>
            Ciao, sono Attilio, un Product Manager italiano da 10 anni residente in Polonia. Ho
            due passioni che raramente vanno d&apos;accordo tra loro: la tecnologia e
            l&apos;ambiente. CoseDiClima nasce dal tentativo di farle incontrare.
          </p>
        </div>
      </section>
    </div>
  );
}

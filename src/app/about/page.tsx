import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi siamo | CoseDiClima",
  description:
    "CoseDiClima nasce per trasformare dati e fonti affidabili in risposte brevi, chiare e condivisibili contro bufale climatiche, negazionismo e ritardi.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-2xl font-bold sm:text-3xl">Chi siamo</h1>

      <div className="mt-6 space-y-5 text-foreground/85">
        <p>
          CoseDiClima nasce da una premessa semplice: molte bufale climatiche funzionano perché
          sono brevi, emotive e facili da ripetere. Le risposte scientifiche, invece, spesso
          arrivano troppo tardi, troppo lunghe o troppo complicate.
        </p>
        <p>
          Questo progetto prova a fare una cosa diversa: trasformare dati e fonti affidabili in
          risposte brevi, chiare e condivisibili.
        </p>
        <p>CoseDiClima non è un&apos;enciclopedia climatica. È uno strumento di risposta.</p>
        <p>
          Il cuore del prodotto è <strong>Clima Check</strong>: uno strumento che permette di
          controllare una frase sul clima prima di condividerla o prima di rispondere a
          qualcuno.
        </p>
        <p>
          Aiuta a riconoscere le tecniche usate per minimizzare, negare o ritardare l&apos;azione
          climatica, e trasforma quelle risposte in messaggi pronti da copiare.
        </p>

        <div>
          <p className="font-semibold text-foreground">Il nostro approccio:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>prima identificare la frase;</li>
            <li>poi capire la tecnica manipolatoria;</li>
            <li>poi dare una risposta breve;</li>
            <li>poi mostrare i dati;</li>
            <li>poi indicare le fonti.</li>
          </ul>
        </div>

        <p>Non chiediamo a nessuno di credere nel clima come atto di fede.</p>
        <p className="text-lg font-semibold text-foreground">
          Chiediamo solo una cosa: il clima non è un&apos;opinione. Controlla prima di
          condividere.
        </p>
      </div>
    </div>
  );
}

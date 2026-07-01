import type { ManipulationTechnique } from "./claims";

export interface Technique {
  id: ManipulationTechnique;
  slug: string;
  name: string;
  definition: string;
  italianExample: string;
  whyItWorks: string;
  howToRespond: string;
  tenSecondReply: string;
}

export const techniques: Technique[] = [
  {
    id: "cherry_picking",
    slug: "cherry-picking",
    name: "Cherry-picking",
    definition:
      "Selezionare un singolo dato o episodio isolato ignorando la tendenza di lungo periodo in cui è inserito.",
    italianExample: "\"Oggi fa freddo.\"",
    whyItWorks:
      "Un'esperienza diretta e immediata (il freddo di oggi) sembra più convincente di una statistica astratta su decenni di dati.",
    howToRespond:
      "Riporta la discussione dalla singola giornata alla tendenza di lungo periodo, distinguendo meteo (breve termine) da clima (lungo termine).",
    tenSecondReply:
      "Un giorno freddo non smentisce una tendenza climatica. Meteo e clima non sono la stessa cosa.",
  },
  {
    id: "falso_equilibrio",
    slug: "falso-equilibrio",
    name: "Falso equilibrio",
    definition:
      "Presentare una minoranza di opinioni contrarie come se avesse lo stesso peso probatorio del consenso scientifico.",
    italianExample: "\"Ci sono scienziati contrari.\"",
    whyItWorks:
      "Il format \"due punti di vista\" sembra equo e ragionevole, ma nasconde quanto sia sbilanciata la distribuzione reale delle prove.",
    howToRespond:
      "Chiarisci che l'esistenza di dissenso non implica parità di peso: conta la quantità e qualità delle prove, non il numero di voci.",
    tenSecondReply:
      "Il fatto che esista una minoranza contraria non significa che il peso delle prove sia diviso a metà.",
  },
  {
    id: "complotto",
    slug: "teoria-del-complotto",
    name: "Teoria del complotto",
    definition:
      "Trasformare una questione scientifica verificabile in un presunto piano segreto e indimostrabile di attori potenti.",
    italianExample: "\"È tutto un piano delle élite.\"",
    whyItWorks:
      "Offre una spiegazione semplice e un nemico chiaro, e mette chi la propone al riparo da qualsiasi prova contraria (\"è quello che vogliono farti credere\").",
    howToRespond:
      "Non serve difendere le élite: sposta l'attenzione sui dati verificabili e su chi paga concretamente il conto del ritardo.",
    tenSecondReply:
      "Non serve fidarsi delle élite. Basta guardare dati, rischi e chi paga il conto del ritardo.",
  },
  {
    id: "benaltrismo",
    slug: "benaltrismo",
    name: "Benaltrismo / whataboutism",
    definition:
      "Deviare la discussione indicando un altro problema o un altro responsabile, invece di affrontare il punto sollevato.",
    italianExample: "\"E allora la Cina?\"",
    whyItWorks:
      "Sposta la responsabilità su un attore lontano e percepito come immune al nostro controllo, offrendo una scusa comoda per non agire.",
    howToRespond:
      "Riconosci il punto (la Cina emette molto) ma riporta la discussione su cosa è nel nostro controllo diretto, qui e ora.",
    tenSecondReply:
      "Dire \"e allora la Cina?\" è il modo perfetto per non fare nulla mentre il conto arriva anche a noi.",
  },
  {
    id: "ritardo",
    slug: "ritardismo",
    name: "Ritardismo (delayism)",
    definition:
      "Accettare il problema in teoria ma rimandare l'azione all'infinito con condizioni sempre nuove.",
    italianExample: "\"Prima pensiamo all'economia.\"",
    whyItWorks:
      "Sembra una posizione ragionevole e prudente, non una negazione: è più difficile da contestare del negazionismo esplicito.",
    howToRespond:
      "Mostra che il ritardo non è neutro: ha un costo economico crescente, che si sposta solo nel futuro e spesso si aggrava.",
    tenSecondReply:
      "Il ritardo climatico non protegge l'economia. Sposta solo i costi nel futuro, spesso rendendoli più alti.",
  },
  {
    id: "doomismo",
    slug: "doomismo",
    name: "Doomismo",
    definition:
      "Usare la disperazione o la sensazione di fatalità come giustificazione per non fare nulla.",
    italianExample: "\"Ormai è troppo tardi.\"",
    whyItWorks:
      "Protegge emotivamente dall'ansia climatica: se è già perduto, non c'è più bisogno di agire né di sentirsi in colpa per non farlo.",
    howToRespond:
      "Distingui tra \"impossibile evitare ogni effetto\" e \"inutile agire\": ogni frazione di grado evitata riduce danni reali.",
    tenSecondReply:
      "Troppo tardi per evitare tutto non significa troppo tardi per evitare il peggio.",
  },
  {
    id: "perfezione_impossibile",
    slug: "perfezione-impossibile",
    name: "Perfezione impossibile",
    definition:
      "Respingere una soluzione parziale perché non risolve il problema al 100%.",
    italianExample: "\"Le rinnovabili non risolvono tutto.\"",
    whyItWorks:
      "Sfrutta un ideale di soluzione perfetta per screditare qualunque passo intermedio, anche se utile.",
    howToRespond:
      "Ricorda che ridurre il danno ha valore anche senza eliminarlo del tutto: non serve una soluzione perfetta per giustificare l'azione.",
    tenSecondReply:
      "Una soluzione non deve risolvere tutto da sola per essere utile. Anche ridurre il danno conta.",
  },
  {
    id: "attacco_identitario",
    slug: "attacco-identitario",
    name: "Attacco identitario",
    definition:
      "Attaccare l'identità o lo stile di vita di chi si preoccupa del problema, invece di discutere il problema stesso.",
    italianExample: "\"Sono cose da radical chic.\"",
    whyItWorks:
      "Trasforma una questione fattuale in una questione di appartenenza di gruppo, rendendo più difficile cambiare idea senza \"tradire\" la propria identità.",
    howToRespond:
      "Separa la persona dal dato: non serve amare gli ambientalisti per riconoscere un rischio reale supportato da prove.",
    tenSecondReply: "Non devi amare gli ambientalisti per riconoscere un rischio reale.",
  },
  {
    id: "mezza_verita",
    slug: "mezza-verita",
    name: "Mezza verità",
    definition:
      "Usare un'affermazione vera in astratto per distrarre da un problema specifico che quell'affermazione, di per sé, non smentisce.",
    italianExample: "\"Il clima è sempre cambiato.\"",
    whyItWorks:
      "È tecnicamente corretta, quindi sembra ragionevole contestarla è difficile — ma nasconde che il punto in discussione è un altro (velocità, causa, costo).",
    howToRespond:
      "Conferma la parte vera, poi sposta subito l'attenzione su cosa rende diverso il cambiamento attuale: velocità, causa umana, costi.",
    tenSecondReply:
      "Sì, il clima è sempre cambiato. Ma stavolta il problema è la velocità, il costo, e chi ci lascia il conto.",
  },
  {
    id: "sfiducia_generalizzata",
    slug: "sfiducia-generalizzata",
    name: "Sfiducia generalizzata",
    definition:
      "Screditare un dato scientifico non contestando il dato, ma la fonte istituzionale che lo comunica, in blocco e a priori.",
    italianExample: "\"Non mi fido di quello che dice il governo o i media.\"",
    whyItWorks:
      "Sfrutta una sfiducia reale verso le istituzioni per evitare di valutare il merito del dato specifico.",
    howToRespond:
      "Non chiedere fiducia cieca: invita a guardare dati verificabili, metodi pubblici e chi ha un interesse economico a negare, non solo chi comunica.",
    tenSecondReply:
      "Non ti chiedo di fidarti delle istituzioni. Ti chiedo di guardare i dati e chi ci guadagna a farteli ignorare.",
  },
  {
    id: "falsa_incertezza",
    slug: "falsa-incertezza",
    name: "Falsa incertezza",
    definition:
      "Presentare l'incertezza normale e quantificata della scienza (su dettagli, tempi, entità) come se fosse incertezza sul fenomeno di base.",
    italianExample: "\"I modelli climatici sbagliano sempre.\"",
    whyItWorks:
      "Confonde due tipi di incertezza molto diversi: quanto esattamente succederà (incerto nei dettagli) con se sta succedendo (non incerto).",
    howToRespond:
      "Distingui: i modelli hanno margini di errore su dettagli e tempi, ma le previsioni di base sul riscaldamento causato dall'uomo si sono rivelate accurate nel tempo.",
    tenSecondReply:
      "I modelli hanno margini d'errore sui dettagli, non sul fatto che il pianeta si sta riscaldando per cause umane.",
  },
  {
    id: "minimizzazione",
    slug: "minimizzazione",
    name: "Minimizzazione",
    definition:
      "Ridurre la portata di un fenomeno reale trattandolo come normale routine stagionale o marginale.",
    italianExample: "\"È solo estate.\"",
    whyItWorks:
      "Fa leva su un'esperienza familiare e innocua (l'estate) per far apparire come normale un rischio che invece è aumentato.",
    howToRespond:
      "Riconosci che il fenomeno base è normale, ma mostra che la sua intensità o frequenza attuale non lo è più.",
    tenSecondReply:
      "Non è \"solo estate\". È caldo estremo con un rischio sanitario misurabilmente più alto di prima.",
  },
];

export function getTechniqueById(id: ManipulationTechnique): Technique | undefined {
  return techniques.find((technique) => technique.id === id);
}

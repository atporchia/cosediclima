export type HumanCostEventType = "heat" | "flood" | "fire" | "drought" | "storm" | "mixed";

export interface HumanCostCard {
  id: string;
  slug: string;
  title: string;
  region: string;
  year: string;
  eventType: HumanCostEventType;
  humanImpact: string;
  climateConnection: string;
  denialReframe: string;
  shortMessage: string;
  sourceIds: string[];
}

export const humanCostCards: HumanCostCard[] = [
  {
    id: "europa-estate-2022-caldo",
    slug: "europa-estate-2022-caldo-mortale",
    title: "Europa, estate 2022: caldo mortale",
    region: "Europa",
    year: "2022",
    eventType: "heat",
    humanImpact: "Decine di migliaia di morti legate al caldo in Europa.",
    climateConnection:
      "Studi di attribuzione stimano che una quota significativa di queste morti non sarebbe avvenuta senza il riscaldamento causato dall'uomo.",
    denialReframe: "Non è \"solo estate\". È rischio sanitario aumentato.",
    shortMessage:
      "Quando qualcuno dice che è solo caldo estivo, ricordagli che il caldo estremo è già una causa di morte. Il negazionismo non abbassa la temperatura: ritarda le soluzioni.",
    sourceIds: ["lancet-countdown", "who-climate-health", "world-weather-attribution"],
  },
  {
    id: "europa-occidentale-2021-alluvioni",
    slug: "europa-occidentale-2021-alluvioni",
    title: "Europa occidentale, luglio 2021: alluvioni in Germania e Belgio",
    region: "Europa occidentale (Germania, Belgio)",
    year: "2021",
    eventType: "flood",
    humanImpact:
      "Centinaia di vittime e danni ingenti alle infrastrutture, in uno degli eventi alluvionali più gravi della storia recente europea.",
    climateConnection:
      "Uno studio di World Weather Attribution ha stimato che il riscaldamento globale ha reso questo tipo di evento di pioggia estrema più probabile e più intenso rispetto a un clima senza influenza umana.",
    denialReframe:
      "Le alluvioni sono sempre esistite, ma l'intensità di questo evento è coerente con un'atmosfera più calda e più carica di umidità.",
    shortMessage:
      "Quando qualcuno dice che le alluvioni ci sono sempre state, ricorda che gli studi di attribuzione mostrano come il riscaldamento globale possa aver reso questo evento specifico più probabile e più distruttivo.",
    sourceIds: ["world-weather-attribution", "eea"],
  },
  {
    id: "sicilia-2021-record-temperatura",
    slug: "sicilia-2021-record-temperatura",
    title: "Sicilia, agosto 2021: record di temperatura in Europa",
    region: "Sicilia, Italia",
    year: "2021",
    eventType: "heat",
    humanImpact:
      "Ondata di calore estrema con temperature tra le più alte mai registrate in Europa, con rischi diretti per la popolazione più vulnerabile (anziani, persone con patologie croniche).",
    climateConnection:
      "Ondate di calore di questa intensità sono coerenti con le proiezioni climatiche per il Mediterraneo e sono diventate più probabili con il riscaldamento globale, secondo le analisi di ISPRA e Copernicus.",
    denialReframe:
      "Non è un'estate normale: è un record che si inserisce in una tendenza di caldo estremo sempre più frequente nel Mediterraneo.",
    shortMessage:
      "Un singolo record non prova nulla da solo, ma si inserisce in una tendenza documentata di ondate di calore più frequenti e intense in Italia e nel Mediterraneo.",
    sourceIds: ["ispra", "copernicus-c3s"],
  },
  {
    id: "emilia-romagna-2023-alluvioni",
    slug: "emilia-romagna-2023-alluvioni",
    title: "Emilia-Romagna, maggio 2023: alluvioni",
    region: "Emilia-Romagna, Italia",
    year: "2023",
    eventType: "flood",
    humanImpact:
      "Vittime, migliaia di sfollati e danni economici ingenti a case, aziende agricole e infrastrutture in una delle regioni più colpite d'Italia.",
    climateConnection:
      "Le analisi indicano che un'atmosfera più calda, in grado di trattenere più umidità, può aver contribuito a rendere le piogge estreme che hanno preceduto l'evento più intense, insieme a fattori locali come uso del suolo e gestione del territorio.",
    denialReframe:
      "Non è solo \"sfortuna\" meteorologica: è un evento coerente con un rischio di piogge estreme in aumento nel Mediterraneo.",
    shortMessage:
      "Attribuire tutto solo alla sfortuna ignora che il rischio di piogge estreme di questo tipo è aumentato in un clima più caldo, secondo le analisi disponibili.",
    sourceIds: ["ispra", "eea"],
  },
  {
    id: "po-2022-siccita",
    slug: "bacino-del-po-2022-siccita",
    title: "Bacino del Po, 2022: siccità estrema",
    region: "Bacino del Po, Italia",
    year: "2022",
    eventType: "drought",
    humanImpact:
      "Una delle siccità più gravi degli ultimi decenni nel bacino del Po, con danni rilevanti all'agricoltura, restrizioni idriche e stress su un'area che produce una quota significativa del cibo italiano.",
    climateConnection:
      "Le condizioni di siccità prolungata sono coerenti con l'aumento delle temperature e i cambiamenti nei regimi di precipitazione osservati nell'area mediterranea, un fattore di rischio che gli scienziati climatici collegano al riscaldamento globale insieme a fattori di gestione idrica locale.",
    denialReframe:
      "Non è solo un'annata sfortunata: la siccità del 2022 si inserisce in una tendenza di stress idrico crescente nel Mediterraneo.",
    shortMessage:
      "La siccità nel bacino del Po ha mostrato in modo concreto cosa significa stress idrico crescente per l'agricoltura italiana, un rischio che il riscaldamento globale rende più probabile nel tempo.",
    sourceIds: ["ispra", "eea", "copernicus-c3s"],
  },
  {
    id: "grecia-2023-incendi",
    slug: "grecia-2023-incendi-rodi",
    title: "Grecia, estate 2023: incendi record a Rodi ed Evia",
    region: "Grecia (Rodi, Evia)",
    year: "2023",
    eventType: "fire",
    humanImpact:
      "Vittime e la più grande evacuazione di massa per incendi nella storia recente della Grecia, con decine di migliaia di persone e turisti evacuati da Rodi.",
    climateConnection:
      "Le condizioni di caldo estremo e siccità che hanno favorito la propagazione degli incendi sono coerenti con l'aumento delle condizioni favorevoli agli incendi osservato nel Mediterraneo con il riscaldamento globale.",
    denialReframe:
      "Un innesco può essere doloso o accidentale, ma le condizioni che hanno reso l'incendio così esteso e incontrollabile sono legate a caldo e siccità estremi.",
    shortMessage:
      "Chi accende un incendio e le condizioni che lo fanno diventare un disastro sono due cose diverse: la seconda è sempre più legata al clima nel Mediterraneo.",
    sourceIds: ["world-weather-attribution", "copernicus-c3s"],
  },
  {
    id: "nord-italia-2023-grandinate",
    slug: "nord-italia-2023-grandinate-estreme",
    title: "Nord Italia, estate 2023: grandinate e tempeste estreme",
    region: "Nord Italia (Emilia-Romagna, Veneto)",
    year: "2023",
    eventType: "storm",
    humanImpact:
      "Grandinate di dimensioni eccezionali e tempeste violente hanno causato feriti e danni ingenti a colture, veicoli ed edifici in diverse regioni del Nord Italia.",
    climateConnection:
      "Un'atmosfera più calda contiene più energia e umidità disponibile per temporali intensi; gli scienziati climatici osservano un aumento delle condizioni favorevoli a fenomeni temporaleschi violenti in Europa, pur con margini di incertezza maggiori rispetto ad altri tipi di eventi estremi.",
    denialReframe:
      "Non ogni temporale violento è \"causato\" dal clima, ma le condizioni che li rendono più frequenti e intensi sono coerenti con un'atmosfera più calda.",
    shortMessage:
      "Le grandinate estreme del 2023 nel Nord Italia mostrano come un'atmosfera più calda possa alimentare fenomeni temporaleschi più violenti, anche se l'attribuzione di questo tipo di eventi resta più incerta rispetto a caldo o siccità.",
    sourceIds: ["eea", "copernicus-c3s"],
  },
];

export function getHumanCostCardBySlug(slug: string): HumanCostCard | undefined {
  return humanCostCards.find((card) => card.slug === slug);
}

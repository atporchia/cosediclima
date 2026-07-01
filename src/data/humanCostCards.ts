import type { Locale } from "@/i18n/routing";
import { humanCostCards as humanCostCardsEn } from "./en/humanCostCards";

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
      "17 vittime e circa 36.600 sfollati, con danni economici ingenti a case, aziende agricole e infrastrutture in una delle regioni più colpite d'Italia.",
    climateConnection:
      "Su questo evento specifico, uno studio di World Weather Attribution non ha trovato un trend significativo, in aumento o in diminuzione, nelle piogge primaverili in Emilia-Romagna dal 1960 a oggi: un caso in cui i dati non permettono di attribuire l'intensità delle piogge al cambiamento climatico. La vulnerabilità del territorio — uso del suolo e gestione idraulica — ha pesato quanto o più del clima.",
    denialReframe:
      "Anche CoseDiClima non esagera: qui gli scienziati non hanno trovato un trend climatico chiaro. Il rischio idrogeologico resta comunque reale e grave, e dipende anche da come gestiamo il territorio, non solo dal clima.",
    shortMessage:
      "Non tutti gli eventi estremi sono \"causati\" dal cambiamento climatico, e lo stesso studio di attribuzione lo dice chiaramente quando i dati non lo confermano. Il rischio resta comunque reale.",
    sourceIds: ["world-weather-attribution", "ispra", "eea"],
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
  {
    id: "iberia-2025-incendi-caldo",
    slug: "iberia-2025-incendi-e-caldo-estremo",
    title: "Spagna e Portogallo, estate 2025: incendi record e caldo estremo",
    region: "Spagna e Portogallo",
    year: "2025",
    eventType: "fire",
    humanImpact:
      "Otto morti dirette per gli incendi, quasi 36.000 sfollati in Spagna e circa 1.000 in Portogallo, oltre 660.000 ettari bruciati nei due paesi — la stagione peggiore in 30 anni sulla penisola iberica. Una stima dell'istituto sanitario spagnolo Carlos III collega inoltre l'ondata di caldo di 16 giorni che ha preceduto gli incendi a oltre 1.100 morti in eccesso in Spagna.",
    climateConnection:
      "Un'analisi di World Weather Attribution ha stimato che le condizioni calde, secche e ventose che hanno favorito gli incendi erano circa 40 volte più probabili a causa del cambiamento climatico, e circa il 30% più intense rispetto al clima preindustriale: senza riscaldamento globale, condizioni simili si vedrebbero una volta ogni 500 anni.",
    denialReframe:
      "Non è \"colpa dei piromani e basta\": le condizioni che hanno reso gli incendi così estesi e incontrollabili — calore, siccità, vento — erano quaranta volte più probabili per il riscaldamento globale, secondo lo studio.",
    shortMessage:
      "La stagione di incendi 2025 in Spagna e Portogallo è stata la peggiore in 30 anni, in condizioni che gli scienziati definiscono ormai comuni per il clima attuale, non più eccezionali.",
    sourceIds: ["world-weather-attribution"],
  },
  {
    id: "europa-giugno-2026-caldo",
    slug: "europa-giugno-2026-ondata-di-caldo",
    title: "Europa, giugno 2026: la più grave ondata di caldo mai registrata",
    region: "Europa (Francia, Spagna, Italia e altri paesi)",
    year: "2026",
    eventType: "heat",
    humanImpact:
      "Oltre 1.300 morti in eccesso stimate in diversi paesi europei nel giro di pochi giorni: più di 1.000 in Francia dal 24 giugno, oltre 300 in Spagna, con servizi di emergenza sotto pressione in più paesi. In Italia sono stati emessi bollini rossi per il caldo in oltre 15 città, con decessi collegati al caldo e un aumento degli accessi in pronto soccorso.",
    climateConnection:
      "Un'analisi di World Weather Attribution pubblicata il 26 giugno 2026 ha definito l'ondata di caldo la più grave mai registrata in Europa, attribuendo l'evento in modo diretto alle emissioni di combustibili fossili: temperature di questa entità sarebbero state «virtualmente impossibili» nel clima di 50 anni fa.",
    denialReframe:
      "Non è \"solo estate\": l'OMS Europa l'ha definita una «prova generale» per le estati future, ricordando che oltre metà dei paesi della regione europea non ha ancora un piano d'azione completo contro il caldo.",
    shortMessage:
      "Quando qualcuno dice che è solo caldo estivo, ricorda che questa ondata di caldo è stata definita dagli scienziati la più grave mai registrata in Europa, con oltre 1.300 morti in eccesso in pochi giorni.",
    sourceIds: ["world-weather-attribution", "who-climate-health"],
  },
  {
    id: "libia-2023-alluvione-derna",
    slug: "libia-2023-alluvione-derna",
    title: "Libia (Derna), settembre 2023: l'alluvione della tempesta Daniel",
    region: "Libia (Derna)",
    year: "2023",
    eventType: "flood",
    humanImpact:
      "Quasi 4.000 morti confermate a Derna e circa 170 altrove in Libia, con oltre 10.000 dispersi, dopo il crollo di due dighe a monte della città durante la tempesta Daniel.",
    climateConnection:
      "Un'analisi di World Weather Attribution ha stimato che il cambiamento climatico ha reso piogge di quest'intensità fino a 50 volte più probabili e circa il 50% più abbondanti: un evento che, senza riscaldamento globale, si vedrebbe una volta ogni 300-600 anni. Gli stessi ricercatori sottolineano però che la scala della tragedia è dipesa in modo determinante dal cattivo stato delle dighe e dalla mancata manutenzione, non solo dalla pioggia.",
    denialReframe:
      "Non è \"solo\" un disastro infrastrutturale né \"solo\" clima: le piogge estreme sono state rese più probabili dal riscaldamento globale, ma il collasso delle dighe ha trasformato un evento meteorologico grave in una catastrofe umana.",
    shortMessage:
      "A Derna sono morte migliaia di persone non solo per la pioggia più intensa che il clima ha reso più probabile, ma anche perché due dighe non mantenute non hanno retto. Clima e responsabilità umane, insieme.",
    sourceIds: ["world-weather-attribution"],
  },
  {
    id: "valencia-2024-dana",
    slug: "valencia-2024-alluvione-dana",
    title: "Valencia, Spagna, ottobre 2024: l'alluvione della DANA",
    region: "Valencia, Spagna",
    year: "2024",
    eventType: "flood",
    humanImpact:
      "Circa 238 morti nella Comunità Valenzana, l'alluvione più letale in Europa occidentale degli ultimi decenni, con danni ingenti a case, infrastrutture e attività economiche.",
    climateConnection:
      "Un'analisi di World Weather Attribution ha stimato che piogge di questa intensità sono oggi circa il 12% più forti e il doppio più probabili rispetto al clima preindustriale. Un successivo studio pubblicato su Nature Communications ha calcolato che le temperature superficiali del Mediterraneo e dell'Atlantico, più calde per il riscaldamento globale, hanno aumentato la quantità di pioggia caduta fino al 40% rispetto a uno scenario senza cambiamento climatico.",
    denialReframe:
      "Le \"bombe d'acqua\" del Mediterraneo non sono un'invenzione: gli studi indicano che l'acqua più calda del mare ha reso questa pioggia più intensa e più probabile.",
    shortMessage:
      "La DANA di Valencia non è stata solo sfortuna: l'acqua di mare più calda per il riscaldamento globale ha reso la pioggia fino al 40% più abbondante, secondo gli studi di attribuzione.",
    sourceIds: ["world-weather-attribution"],
  },
  {
    id: "canada-2023-incendi-record",
    slug: "canada-2023-incendi-record",
    title: "Canada, 2023: la stagione di incendi più estesa mai registrata",
    region: "Canada (soprattutto Québec)",
    year: "2023",
    eventType: "fire",
    humanImpact:
      "Oltre 16,5 milioni di ettari bruciati, più del doppio del precedente record, con circa 232.000 persone evacuate. Il fumo ha peggiorato la qualità dell'aria in gran parte del Nord America ed è stato collegato a circa 82.000 morti premature nel mondo secondo una stima scientifica, oltre a 8 vigili del fuoco morti in servizio.",
    climateConnection:
      "Un'analisi di World Weather Attribution ha stimato che il cambiamento climatico ha reso le condizioni meteorologiche favorevoli agli incendi in Québec almeno due volte più probabili e circa il 20% più intense, e ha reso una stagione di incendi di questa gravità complessiva almeno sette volte più probabile.",
    denialReframe:
      "Gli incendi partono per tante cause diverse, ma le condizioni di caldo e siccità che li hanno resi così estesi e difficili da controllare sono state rese più probabili dal riscaldamento globale, secondo gli scienziati.",
    shortMessage:
      "La stagione di incendi 2023 in Canada ha bruciato un'area doppia rispetto al record precedente, in condizioni che gli scienziati stimano rese almeno due volte più probabili dal riscaldamento globale.",
    sourceIds: ["world-weather-attribution"],
  },
  {
    id: "europa-centrale-2024-tempesta-boris",
    slug: "europa-centrale-2024-tempesta-boris",
    title: "Europa centrale, settembre 2024: le alluvioni della tempesta Boris",
    region: "Europa centrale (Austria, Repubblica Ceca, Slovacchia, Polonia, Romania, Ungheria)",
    year: "2024",
    eventType: "flood",
    humanImpact:
      "Almeno 27 morti e quasi due milioni di persone colpite in otto paesi, con le piogge più intense mai registrate in Europa centrale su un periodo di quattro giorni e danni economici stimati in miliardi di euro.",
    climateConnection:
      "Un'analisi di World Weather Attribution ha stimato che il cambiamento climatico ha reso piogge di questa intensità circa il doppio più probabili e tra il 7% e il 20% più abbondanti, con un'area colpita da precipitazioni estreme più ampia di circa il 18% rispetto a un clima senza riscaldamento globale.",
    denialReframe:
      "Non è la \"solita\" alluvione autunnale: gli scienziati stimano che il riscaldamento globale abbia reso questo tipo di pioggia estrema circa il doppio più probabile in Europa centrale.",
    shortMessage:
      "Le piogge della tempesta Boris sono state le più intense mai registrate in Europa centrale, in condizioni che il riscaldamento globale ha reso circa il doppio più probabili, secondo gli scienziati.",
    sourceIds: ["world-weather-attribution"],
  },
];

export function getHumanCostCardBySlug(slug: string): HumanCostCard | undefined {
  return humanCostCards.find((card) => card.slug === slug);
}

export function getHumanCostCards(locale: Locale): HumanCostCard[] {
  return locale === "en" ? humanCostCardsEn : humanCostCards;
}

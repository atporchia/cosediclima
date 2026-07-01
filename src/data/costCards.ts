export type CostType =
  | "health"
  | "home"
  | "food"
  | "taxes"
  | "insurance"
  | "water"
  | "work"
  | "energy";

export interface CostCard {
  id: string;
  slug: string;
  title: string;
  costType: CostType;
  description: string;
  denialConnection: string;
  shortMessage: string;
  sourceIds: string[];
}

export const costCards: CostCard[] = [
  {
    id: "salute",
    slug: "paghi-con-la-salute",
    title: "Paghi con la salute",
    costType: "health",
    description:
      "Le ondate di calore estremo aumentano il rischio di malori e mortalità, soprattutto tra anziani, persone con patologie croniche e chi lavora all'aperto. Anche la qualità dell'aria può essere influenzata da un clima più caldo.",
    denialConnection:
      "Ogni rinvio delle politiche di adattamento (piani caldo, edifici più freschi, sistema sanitario preparato) lascia più persone esposte a un rischio sanitario che è già misurabile, non ipotetico.",
    shortMessage:
      "Il negazionismo climatico non abbassa la temperatura corporea di chi soffre il caldo estremo: rimanda solo le soluzioni che potrebbero proteggerlo.",
    sourceIds: ["who-climate-health", "lancet-countdown"],
  },
  {
    id: "casa",
    slug: "paghi-con-la-casa",
    title: "Paghi con la casa",
    costType: "home",
    description:
      "Eventi estremi come alluvioni, frane e incendi possono danneggiare o distruggere abitazioni; il caldo estremo aumenta anche i costi di climatizzazione per mantenere le case vivibili d'estate.",
    denialConnection:
      "Chi può permetterselo protegge la propria casa con assicurazioni, ristrutturazioni e climatizzazione; chi non può, assorbe il rischio direttamente, spesso senza rete di protezione.",
    shortMessage:
      "Ritardare l'adattamento climatico non protegge le case: lascia più abitazioni esposte a rischi che si stanno già materializzando.",
    sourceIds: ["eea"],
  },
  {
    id: "cibo",
    slug: "paghi-con-il-cibo",
    title: "Paghi con il cibo",
    costType: "food",
    description:
      "Siccità, ondate di calore ed eventi estremi possono danneggiare i raccolti agricoli, con effetti sulla disponibilità e sui prezzi di alcuni prodotti alimentari.",
    denialConnection:
      "L'agricoltura italiana ed europea è già esposta a stress idrico e caldo estremo crescenti; ignorare il problema non riduce questo rischio per chi produce e per chi acquista cibo.",
    shortMessage:
      "Il prezzo del cibo non è isolato dal clima: la siccità nei bacini agricoli si riflette, prima o poi, sulla spesa quotidiana.",
    sourceIds: ["eea", "ispra"],
  },
  {
    id: "tasse",
    slug: "paghi-con-le-tasse",
    title: "Paghi con le tasse",
    costType: "taxes",
    description:
      "I danni causati da eventi climatici estremi (alluvioni, frane, incendi) generano spese pubbliche per emergenza, ricostruzione e messa in sicurezza del territorio, finanziate dalla fiscalità generale.",
    denialConnection:
      "Più si ritarda la prevenzione e l'adattamento, più aumentano le spese di emergenza post-evento, che ricadono sulla collettività attraverso la spesa pubblica.",
    shortMessage:
      "Investire in prevenzione costa; riparare i danni dopo, di solito, costa di più — e lo paghiamo tutti con le tasse.",
    sourceIds: ["eea"],
  },
  {
    id: "assicurazione",
    slug: "paghi-con-lassicurazione",
    title: "Paghi con l'assicurazione",
    costType: "insurance",
    description:
      "L'aumento della frequenza e dell'intensità di alcuni eventi climatici estremi sta portando il settore assicurativo a rivedere premi e coperture nelle aree più esposte a rischio idrogeologico o climatico.",
    denialConnection:
      "Chi ha risorse può permettersi coperture assicurative più costose o trasferirsi in aree meno esposte; chi non può, rischia di restare senza protezione economica in caso di danno.",
    shortMessage:
      "Il rischio climatico si riflette sempre di più nelle polizze assicurative: ignorarlo non lo rende meno reale, solo meno prevedibile per chi non si assicura in tempo.",
    sourceIds: ["eea"],
  },
  {
    id: "acqua",
    slug: "paghi-con-lacqua",
    title: "Paghi con l'acqua",
    costType: "water",
    description:
      "Periodi di siccità più frequenti e intensi mettono sotto stress le risorse idriche disponibili per uso civile, agricolo e industriale, con possibili restrizioni nei periodi più critici.",
    denialConnection:
      "La gestione dello stress idrico richiede investimenti e pianificazione: ritardare queste scelte aumenta il rischio di razionamenti nei momenti di crisi più acuta.",
    shortMessage:
      "La siccità nel bacino del Po del 2022 ha già mostrato cosa significa stress idrico concreto per famiglie, agricoltura e industria italiana.",
    sourceIds: ["ispra", "eea"],
  },
  {
    id: "lavoro",
    slug: "paghi-con-il-lavoro",
    title: "Paghi con il lavoro",
    costType: "work",
    description:
      "Chi lavora all'aperto (edilizia, agricoltura, logistica) è direttamente esposto ai rischi del caldo estremo, con impatti su salute, sicurezza e produttività nelle giornate più calde.",
    denialConnection:
      "Le politiche di adattamento sul lavoro (orari, pause, protezioni) richiedono pianificazione: ritardarle lascia più lavoratori esposti a un rischio già misurabile nelle statistiche sanitarie.",
    shortMessage:
      "Il caldo estremo non è un fastidio astratto per chi lavora all'aperto: è un rischio diretto per la salute e la sicurezza sul lavoro.",
    sourceIds: ["who-climate-health", "lancet-countdown"],
  },
  {
    id: "energia",
    slug: "paghi-con-lenergia",
    title: "Paghi con l'energia",
    costType: "energy",
    description:
      "La dipendenza da combustibili fossili importati espone i consumatori a shock di prezzo legati a crisi geopolitiche e mercati internazionali, un rischio che l'Italia ha già vissuto concretamente negli anni recenti.",
    denialConnection:
      "Ritardare la diversificazione energetica e l'efficienza mantiene questa esposizione ai prezzi internazionali, invece di ridurla nel tempo.",
    shortMessage:
      "Ogni anno di ritardo nella transizione energetica è un anno in più di esposizione a shock di prezzo sull'energia importata.",
    sourceIds: ["eea"],
  },
];

export function getCostCardBySlug(slug: string): CostCard | undefined {
  return costCards.find((card) => card.slug === slug);
}

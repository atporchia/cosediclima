export interface ScienceHighlight {
  id: string;
  slug: string;
  title: string;
  organization: string;
  year: string;
  summary: string;
  sourceIds: string[];
}

export interface IndustryInfluenceCase {
  id: string;
  slug: string;
  title: string;
  actor: string;
  whatHappened: string;
  conflictOfInterest: string;
  whatEvidenceShows: string;
  sourceIds: string[];
  tags: string[];
}

export const scienceHighlights: ScienceHighlight[] = [
  {
    id: "ipcc-ar6-synthesis",
    slug: "ipcc-ar6-synthesis-report",
    title: "Il consenso scientifico sul riscaldamento globale di origine umana",
    organization: "IPCC",
    year: "2023",
    summary:
      "Il rapporto di sintesi del sesto ciclo di valutazione dell'IPCC, scritto e revisionato da migliaia di scienziati e approvato riga per riga dai governi di quasi 200 paesi, conclude che l'influenza umana ha inequivocabilmente riscaldato l'atmosfera, l'oceano e la terraferma.",
    sourceIds: ["ipcc"],
  },
  {
    id: "copernicus-serie-storiche",
    slug: "copernicus-serie-storiche-temperatura",
    title: "Le serie storiche di temperatura mostrano un riscaldamento continuo",
    organization: "Copernicus Climate Change Service",
    year: "2024",
    summary:
      "Il servizio climatico dell'Unione Europea pubblica ogni mese aggiornamenti sulle temperature globali ed europee, basati su osservazioni dirette e reanalisi dati, che documentano un trend di riscaldamento di lungo periodo tra gli anni più caldi mai registrati nelle serie storiche disponibili.",
    sourceIds: ["copernicus-c3s"],
  },
  {
    id: "lancet-countdown-mortalita-caldo",
    slug: "lancet-countdown-mortalita-caldo",
    title: "Il caldo estremo è già una causa di mortalità in aumento",
    organization: "The Lancet",
    year: "2023",
    summary:
      "Il rapporto annuale Lancet Countdown, prodotto da una collaborazione accademica internazionale con metodologia peer-reviewed, documenta un aumento dell'esposizione della popolazione a ondate di calore e della mortalità correlata al caldo rispetto ai decenni precedenti.",
    sourceIds: ["lancet-countdown", "who-climate-health"],
  },
  {
    id: "world-weather-attribution-metodo",
    slug: "world-weather-attribution-metodologia",
    title: "Gli eventi estremi possono essere analizzati con metodi di attribuzione",
    organization: "World Weather Attribution",
    year: "2024",
    summary:
      "World Weather Attribution pubblica analisi rapide e metodologicamente trasparenti su singoli eventi estremi, quantificando con linguaggio probabilistico quanto il riscaldamento globale ne abbia aumentato la probabilità o l'intensità, senza attribuire ogni evento al clima in modo indiscriminato.",
    sourceIds: ["world-weather-attribution"],
  },
];

export const industryInfluenceCases: IndustryInfluenceCase[] = [
  {
    id: "exxonmobil-ricerca-interna",
    slug: "exxonmobil-ricerca-interna-vs-comunicazione-pubblica",
    title: "ExxonMobil: cosa sapeva internamente e cosa comunicava pubblicamente",
    actor: "ExxonMobil",
    whatHappened:
      "Documenti interni e ricerche svolte a partire dagli anni '70 mostrano che gli scienziati impiegati dall'allora Exxon avevano prodotto stime del riscaldamento globale futuro sorprendentemente vicine a quelle poi confermate dai dati osservati negli anni successivi.",
    conflictOfInterest:
      "Nello stesso periodo in cui la sua ricerca interna confermava il riscaldamento di origine umana, l'azienda ha pubblicamente sostenuto comunicazioni che alimentavano il dubbio sul consenso scientifico, un pattern analizzato sistematicamente da uno studio accademico peer-reviewed.",
    whatEvidenceShows:
      "Lo studio di Supran & Oreskes (2017), basato su un'analisi sistematica di decenni di documenti interni e comunicazioni pubbliche dell'azienda, ha trovato una divergenza sistematica tra le due categorie di testi. ExxonMobil ha contestato pubblicamente le conclusioni dello studio.",
    sourceIds: ["supran-oreskes-2017", "insideclimate-news-exxon"],
    tags: ["combustibili-fossili", "conflitto-di-interesse", "exxon"],
  },
  {
    id: "heartland-institute-finanziamenti",
    slug: "heartland-institute-finanziamenti-combustibili-fossili",
    title: "Heartland Institute: chi ha finanziato le campagne di dubbio climatico",
    actor: "Heartland Institute",
    whatHappened:
      "Un think tank statunitense che ha organizzato per anni conferenze e pubblicazioni volte a mettere in dubbio il consenso scientifico sul cambiamento climatico, presentandosi come fonte di ricerca indipendente.",
    conflictOfInterest:
      "Ricerche di trasparenza sui finanziamenti hanno documentato legami finanziari tra l'organizzazione e aziende con interessi nei combustibili fossili, un pattern di finanziamento del dubbio scientifico documentato anche in altri settori, come quello del tabacco.",
    whatEvidenceShows:
      "Organizzazioni indipendenti di ricerca sulla trasparenza dei finanziamenti hanno raccolto e pubblicato documentazione su questi legami, in parte contestata nei dettagli dalla stessa organizzazione.",
    sourceIds: ["desmog", "climate-investigations-center", "ucs-climate-deception-dossiers"],
    tags: ["think-tank", "conflitto-di-interesse", "finanziamenti"],
  },
  {
    id: "willie-soon-finanziamenti-non-dichiarati",
    slug: "willie-soon-finanziamenti-non-dichiarati",
    title: "Il caso Willie Soon: finanziamenti non dichiarati dietro ricerche scettiche",
    actor: "Willie Soon (Harvard-Smithsonian Center for Astrophysics)",
    whatHappened:
      "Un astrofisico che ha pubblicato per anni articoli e testimonianze pubbliche scettiche sul ruolo umano nel riscaldamento globale, attribuendolo prevalentemente a variazioni dell'attività solare.",
    conflictOfInterest:
      "Un'inchiesta giornalistica, basata su documenti ottenuti tramite richieste di trasparenza, ha rivelato che gran parte del suo lavoro era finanziato da aziende e fondazioni con interessi nei combustibili fossili, finanziamenti non sistematicamente dichiarati in diverse pubblicazioni.",
    whatEvidenceShows:
      "La rivelazione, riportata dal New York Times sulla base di documenti raccolti da Greenpeace e dal Climate Investigations Center, ha portato alcune riviste scientifiche a rivedere le proprie regole di dichiarazione dei conflitti di interesse per le pubblicazioni future.",
    sourceIds: ["climate-investigations-center", "desmog"],
    tags: ["ricercatore", "conflitto-di-interesse", "finanziamenti-non-dichiarati"],
  },
  {
    id: "global-climate-coalition",
    slug: "global-climate-coalition-lobbying-anni-90",
    title: "Global Climate Coalition: la lobby industriale degli anni '90",
    actor: "Global Climate Coalition",
    whatHappened:
      "Una coalizione di aziende e associazioni industriali, attiva soprattutto negli anni '90, che ha condotto campagne di lobbying e comunicazione per contrastare le politiche internazionali di riduzione delle emissioni.",
    conflictOfInterest:
      "La coalizione era finanziata principalmente da aziende dei settori automobilistico, petrolifero e del carbone, con un interesse economico diretto nel ritardare le politiche climatiche.",
    whatEvidenceShows:
      "Documenti interni resi pubblici tramite cause legali e richieste di trasparenza, raccolti da organizzazioni di ricerca come l'Union of Concerned Scientists, mostrano che la coalizione operava pur disponendo di proprie analisi tecniche interne che non mettevano in dubbio la validità di base del riscaldamento globale.",
    sourceIds: ["ucs-climate-deception-dossiers", "desmog"],
    tags: ["lobbying", "combustibili-fossili", "anni-90"],
  },
];

export function getScienceHighlightBySlug(slug: string): ScienceHighlight | undefined {
  return scienceHighlights.find((item) => item.slug === slug);
}

export function getIndustryInfluenceCaseBySlug(slug: string): IndustryInfluenceCase | undefined {
  return industryInfluenceCases.find((item) => item.slug === slug);
}

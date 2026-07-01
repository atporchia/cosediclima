import type { Locale } from "@/i18n/routing";
import { sources as sourcesEn } from "./en/sources";

export type SourceType =
  | "scientific_report"
  | "government"
  | "climate_service"
  | "health"
  | "attribution"
  | "peer_reviewed"
  | "data_portal"
  | "investigative_journalism"
  | "fact_checking";

export interface Source {
  id: string;
  name: string;
  organization: string;
  type: SourceType;
  credibilityNote: string;
  keyUse: string;
  url?: string;
}

export const sources: Source[] = [
  {
    id: "ipcc",
    name: "Assessment Reports",
    organization: "IPCC — Intergovernmental Panel on Climate Change",
    type: "scientific_report",
    credibilityNote:
      "Sintesi di migliaia di studi scientifici, scritta e revisionata da migliaia di scienziati e approvata riga per riga dai governi di quasi 200 paesi.",
    keyUse: "Consenso scientifico globale, attribuzione del riscaldamento, rischio climatico.",
    url: "https://www.ipcc.ch",
  },
  {
    id: "ispra",
    name: "Indicatori climatici nazionali",
    organization: "ISPRA — Istituto Superiore per la Protezione e la Ricerca Ambientale",
    type: "government",
    credibilityNote:
      "Ente pubblico di ricerca italiano, principale fonte ufficiale per i dati ambientali e climatici nazionali.",
    keyUse: "Anomalie di temperatura in Italia, ondate di calore, indicatori ambientali nazionali.",
    url: "https://www.isprambiente.gov.it",
  },
  {
    id: "copernicus-c3s",
    name: "Climate Change Service",
    organization: "Copernicus — Programma dell'Unione Europea",
    type: "climate_service",
    credibilityNote:
      "Servizio ufficiale dell'UE per il monitoraggio del clima, basato su osservazioni satellitari e reanalisi dati.",
    keyUse: "Serie storiche di temperatura europee e globali, monitoraggio mensile del clima.",
    url: "https://climate.copernicus.eu",
  },
  {
    id: "world-weather-attribution",
    name: "Studi di attribuzione",
    organization: "World Weather Attribution",
    type: "attribution",
    credibilityNote:
      "Rete di scienziati che pubblica analisi rapide e metodologicamente trasparenti su quanto il cambiamento climatico abbia influenzato un evento estremo specifico.",
    keyUse:
      "Collegare singoli eventi estremi (ondate di calore, alluvioni, siccità) all'influenza del riscaldamento globale, con linguaggio probabilistico.",
    url: "https://www.worldweatherattribution.org",
  },
  {
    id: "who-climate-health",
    name: "Climate change and health",
    organization: "OMS — Organizzazione Mondiale della Sanità (WHO)",
    type: "health",
    credibilityNote:
      "Agenzia delle Nazioni Unite per la salute, riferimento globale su rischi sanitari, incluso l'impatto del clima.",
    keyUse: "Rischi sanitari del cambiamento climatico, mortalità legata al caldo, dichiarazioni ufficiali su ondate di calore in corso.",
    url: "https://www.who.int/health-topics/climate-change",
  },
  {
    id: "lancet-countdown",
    name: "Lancet Countdown on Health and Climate Change",
    organization: "The Lancet",
    type: "health",
    credibilityNote:
      "Collaborazione accademica internazionale che pubblica un report annuale peer-reviewed sugli impatti sanitari del cambiamento climatico.",
    keyUse: "Mortalità da caldo estremo, impatti sanitari quantificati con metodologia trasparente.",
    url: "https://www.lancetcountdown.org",
  },
  {
    id: "eea",
    name: "European Climate Risk Assessment",
    organization: "European Environment Agency",
    type: "government",
    credibilityNote:
      "Agenzia dell'Unione Europea che monitora rischi climatici, danni economici e stato dell'adattamento nei paesi membri.",
    keyUse: "Rischio climatico europeo, danni economici, stato dell'adattamento in Italia e UE.",
    url: "https://www.eea.europa.eu",
  },
  {
    id: "nasa-climate",
    name: "NASA Global Climate Change",
    organization: "NASA",
    type: "data_portal",
    credibilityNote:
      "Agenzia spaziale statunitense, fornisce dati satellitari e spiegazioni accessibili sui meccanismi fisici del cambiamento climatico.",
    keyUse: "Spiegazioni scientifiche di base, indicatori climatici globali, serie storiche di CO₂ e temperatura.",
    url: "https://climate.nasa.gov",
  },
  {
    id: "noaa",
    name: "Climate.gov",
    organization: "NOAA — National Oceanic and Atmospheric Administration",
    type: "data_portal",
    credibilityNote:
      "Agenzia scientifica federale statunitense, riferimento per il monitoraggio oceanico e atmosferico globale.",
    keyUse: "Monitoraggio climatico globale, dati storici di temperatura e CO₂.",
    url: "https://www.climate.gov",
  },
  {
    id: "supran-oreskes-2017",
    name: "Assessing ExxonMobil's climate change communications (1977–2014)",
    organization: "Environmental Research Letters (Supran & Oreskes, 2017)",
    type: "peer_reviewed",
    credibilityNote:
      "Studio accademico peer-reviewed che confronta sistematicamente la ricerca interna di ExxonMobil con le sue comunicazioni pubbliche sul clima.",
    keyUse:
      "Documentare lo scarto tra ciò che gli scienziati di una compagnia petrolifera sapevano internamente e ciò che l'azienda comunicava pubblicamente.",
    url: "https://iopscience.iop.org/article/10.1088/1748-9326/aa815f",
  },
  {
    id: "insideclimate-news-exxon",
    name: "Exxon: The Road Not Taken",
    organization: "InsideClimate News",
    type: "investigative_journalism",
    credibilityNote:
      "Inchiesta giornalistica vincitrice di premi (basata su documenti interni aziendali) sulla ricerca climatica di Exxon negli anni '70-'80.",
    keyUse: "Ricostruzione documentale di cosa sapeva Exxon sul cambiamento climatico e quando.",
    url: "https://insideclimatenews.org/project/exxon-the-road-not-taken/",
  },
  {
    id: "ucs-climate-deception-dossiers",
    name: "The Climate Deception Dossiers",
    organization: "Union of Concerned Scientists",
    type: "investigative_journalism",
    credibilityNote:
      "Organizzazione scientifica no-profit; il dossier raccoglie documenti aziendali interni resi pubblici tramite cause legali e richieste di trasparenza.",
    keyUse: "Documentare campagne organizzate di dubbio finanziate da aziende con interessi nei combustibili fossili.",
    url: "https://www.ucsusa.org/resources/climate-deception-dossiers",
  },
  {
    id: "desmog",
    name: "Climate Disinformation Database",
    organization: "DeSmog",
    type: "investigative_journalism",
    credibilityNote:
      "Testata giornalistica specializzata nel tracciare finanziamenti e legami tra organizzazioni negazioniste e industria dei combustibili fossili.",
    keyUse: "Mappare i finanziamenti e i legami organizzativi dietro campagne di disinformazione climatica.",
    url: "https://www.desmog.com",
  },
  {
    id: "climate-investigations-center",
    name: "Climate Investigations Center",
    organization: "Climate Investigations Center",
    type: "investigative_journalism",
    credibilityNote:
      "Organizzazione di ricerca no-profit specializzata in richieste di trasparenza (FOIA) su finanziamenti e conflitti di interesse scientifici.",
    keyUse: "Documentare finanziamenti non dichiarati a singoli ricercatori e organizzazioni scettiche.",
    url: "https://climateinvestigations.org",
  },
];

export function getSourceById(id: string): Source | undefined {
  return sources.find((source) => source.id === id);
}

export function getSources(locale: Locale): Source[] {
  return locale === "en" ? sourcesEn : sources;
}

export function getSourceByIdForLocale(id: string, locale: Locale): Source | undefined {
  return getSources(locale).find((source) => source.id === id);
}

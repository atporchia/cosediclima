import type { Source } from "../sources";

export const sources: Source[] = [
  {
    id: "ipcc",
    name: "Assessment Reports",
    organization: "IPCC — Intergovernmental Panel on Climate Change",
    type: "scientific_report",
    credibilityNote:
      "A synthesis of thousands of scientific studies, written and reviewed by thousands of scientists and approved line by line by the governments of nearly 200 countries.",
    keyUse: "Global scientific consensus, attribution of warming, climate risk.",
    url: "https://www.ipcc.ch",
  },
  {
    id: "ispra",
    name: "National Climate Indicators",
    organization: "ISPRA — Italian Institute for Environmental Protection and Research",
    type: "government",
    credibilityNote:
      "Italy's public research body and the main official source for national environmental and climate data.",
    keyUse: "Temperature anomalies in Italy, heatwaves, national environmental indicators.",
    url: "https://www.isprambiente.gov.it",
  },
  {
    id: "copernicus-c3s",
    name: "Climate Change Service",
    organization: "Copernicus — European Union Programme",
    type: "climate_service",
    credibilityNote:
      "The EU's official climate monitoring service, based on satellite observations and data reanalysis.",
    keyUse: "European and global historical temperature series, monthly climate monitoring.",
    url: "https://climate.copernicus.eu",
  },
  {
    id: "world-weather-attribution",
    name: "Attribution Studies",
    organization: "World Weather Attribution",
    type: "attribution",
    credibilityNote:
      "A network of scientists that publishes rapid, methodologically transparent analyses of how much climate change has influenced a specific extreme event.",
    keyUse:
      "Linking individual extreme events (heatwaves, floods, droughts) to the influence of global warming, using probabilistic language.",
    url: "https://www.worldweatherattribution.org",
  },
  {
    id: "who-climate-health",
    name: "Climate change and health",
    organization: "WHO — World Health Organization",
    type: "health",
    credibilityNote:
      "A United Nations health agency and global reference point on health risks, including the impact of climate.",
    keyUse: "Health risks of climate change, heat-related mortality, official statements on ongoing heatwaves.",
    url: "https://www.who.int/health-topics/climate-change",
  },
  {
    id: "lancet-countdown",
    name: "Lancet Countdown on Health and Climate Change",
    organization: "The Lancet",
    type: "health",
    credibilityNote:
      "An international academic collaboration that publishes an annual peer-reviewed report on the health impacts of climate change.",
    keyUse: "Extreme heat mortality, health impacts quantified with transparent methodology.",
    url: "https://www.lancetcountdown.org",
  },
  {
    id: "eea",
    name: "European Climate Risk Assessment",
    organization: "European Environment Agency",
    type: "government",
    credibilityNote:
      "An EU agency that monitors climate risks, economic damage, and the state of adaptation across member countries.",
    keyUse: "European climate risk, economic damage, state of adaptation in Italy and the EU.",
    url: "https://www.eea.europa.eu",
  },
  {
    id: "nasa-climate",
    name: "NASA Global Climate Change",
    organization: "NASA",
    type: "data_portal",
    credibilityNote:
      "The U.S. space agency, providing satellite data and accessible explanations of the physical mechanisms behind climate change.",
    keyUse: "Basic scientific explanations, global climate indicators, historical CO2 and temperature series.",
    url: "https://climate.nasa.gov",
  },
  {
    id: "noaa",
    name: "Climate.gov",
    organization: "NOAA — National Oceanic and Atmospheric Administration",
    type: "data_portal",
    credibilityNote:
      "A U.S. federal scientific agency and reference point for global ocean and atmospheric monitoring.",
    keyUse: "Global climate monitoring, historical temperature and CO2 data.",
    url: "https://www.climate.gov",
  },
  {
    id: "supran-oreskes-2017",
    name: "Assessing ExxonMobil's climate change communications (1977–2014)",
    organization: "Environmental Research Letters (Supran & Oreskes, 2017)",
    type: "peer_reviewed",
    credibilityNote:
      "A peer-reviewed academic study that systematically compares ExxonMobil's internal research with its public communications on climate.",
    keyUse:
      "Documenting the gap between what an oil company's scientists knew internally and what the company communicated publicly.",
    url: "https://iopscience.iop.org/article/10.1088/1748-9326/aa815f",
  },
  {
    id: "insideclimate-news-exxon",
    name: "Exxon: The Road Not Taken",
    organization: "InsideClimate News",
    type: "investigative_journalism",
    credibilityNote:
      "An award-winning journalistic investigation (based on internal company documents) into Exxon's climate research in the 1970s and 1980s.",
    keyUse: "Documentary reconstruction of what Exxon knew about climate change, and when.",
    url: "https://insideclimatenews.org/project/exxon-the-road-not-taken/",
  },
  {
    id: "ucs-climate-deception-dossiers",
    name: "The Climate Deception Dossiers",
    organization: "Union of Concerned Scientists",
    type: "investigative_journalism",
    credibilityNote:
      "A nonprofit scientific organization; the dossier collects internal corporate documents made public through lawsuits and transparency requests.",
    keyUse: "Documenting organized doubt campaigns funded by companies with interests in fossil fuels.",
    url: "https://www.ucsusa.org/resources/climate-deception-dossiers",
  },
  {
    id: "desmog",
    name: "Climate Disinformation Database",
    organization: "DeSmog",
    type: "investigative_journalism",
    credibilityNote:
      "A news outlet specialized in tracking funding and ties between denialist organizations and the fossil fuel industry.",
    keyUse: "Mapping the funding and organizational ties behind climate disinformation campaigns.",
    url: "https://www.desmog.com",
  },
  {
    id: "climate-investigations-center",
    name: "Climate Investigations Center",
    organization: "Climate Investigations Center",
    type: "investigative_journalism",
    credibilityNote:
      "A nonprofit research organization specialized in transparency requests (FOIA) concerning funding and scientific conflicts of interest.",
    keyUse: "Documenting undisclosed funding to individual researchers and skeptical organizations.",
    url: "https://climateinvestigations.org",
  },
];

export function getSourceById(id: string): Source | undefined {
  return sources.find((source) => source.id === id);
}

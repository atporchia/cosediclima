import type { ScienceHighlight, IndustryInfluenceCase } from "../scienceWatch";

export const scienceHighlights: ScienceHighlight[] = [
  {
    id: "wwa-2026-european-heatwave",
    slug: "wwa-2026-ondata-di-caldo-europea",
    title: "The June 2026 European heatwave is the most severe ever recorded",
    organization: "World Weather Attribution",
    year: "2026",
    summary:
      "A rapid attribution analysis published on 26 June 2026 describes the European heatwave as the most severe ever recorded in the region, calling fossil fuel emissions \"directly responsible\" for what is happening: temperatures of this magnitude would have been \"virtually impossible\" in the climate of 1976.",
    sourceIds: ["world-weather-attribution"],
  },
  {
    id: "who-europe-2026-dress-rehearsal",
    slug: "oms-europa-2026-prova-generale",
    title: "WHO Europe: \"this heatwave is a dress rehearsal\" for future summers",
    organization: "WHO — Regional Office for Europe",
    year: "2026",
    summary:
      "In a statement on 30 June 2026, WHO Europe linked the ongoing heatwave to more than 1,300 excess deaths across several European countries, noting that heat action plans have already reduced mortality and that more than half the countries in the European region still lack a complete one.",
    sourceIds: ["who-climate-health"],
  },
  {
    id: "ipcc-ar6-synthesis",
    slug: "ipcc-ar6-synthesis-report",
    title: "The scientific consensus on human-caused global warming",
    organization: "IPCC",
    year: "2023",
    summary:
      "The synthesis report of the IPCC's sixth assessment cycle, written and reviewed by thousands of scientists and approved line by line by the governments of nearly 200 countries, concludes that human influence has unequivocally warmed the atmosphere, ocean, and land.",
    sourceIds: ["ipcc"],
  },
  {
    id: "copernicus-serie-storiche",
    slug: "copernicus-serie-storiche-temperatura",
    title: "Historical temperature records show continued warming",
    organization: "Copernicus Climate Change Service",
    year: "2024",
    summary:
      "The European Union's climate service publishes monthly updates on global and European temperatures, based on direct observations and data reanalysis, documenting a long-term warming trend among the hottest years ever recorded in the available historical record.",
    sourceIds: ["copernicus-c3s"],
  },
  {
    id: "lancet-countdown-mortalita-caldo",
    slug: "lancet-countdown-mortalita-caldo",
    title: "Extreme heat is already a rising cause of mortality",
    organization: "The Lancet",
    year: "2023",
    summary:
      "The annual Lancet Countdown report, produced by an international academic collaboration with peer-reviewed methodology, documents an increase in population exposure to heatwaves and in heat-related mortality compared to previous decades.",
    sourceIds: ["lancet-countdown", "who-climate-health"],
  },
  {
    id: "world-weather-attribution-metodo",
    slug: "world-weather-attribution-metodologia",
    title: "Extreme events can be analyzed with attribution methods",
    organization: "World Weather Attribution",
    year: "2024",
    summary:
      "World Weather Attribution publishes rapid, methodologically transparent analyses of individual extreme events, quantifying in probabilistic terms how much global warming increased their likelihood or intensity, without attributing every event to climate indiscriminately.",
    sourceIds: ["world-weather-attribution"],
  },
];

export const industryInfluenceCases: IndustryInfluenceCase[] = [
  {
    id: "exxonmobil-ricerca-interna",
    slug: "exxonmobil-ricerca-interna-vs-comunicazione-pubblica",
    title: "ExxonMobil: what it knew internally versus what it told the public",
    actor: "ExxonMobil",
    year: "2017",
    whatHappened:
      "Internal documents and research dating back to the 1970s show that scientists employed by the company then known as Exxon had produced estimates of future global warming strikingly close to those later confirmed by observed data in subsequent years.",
    conflictOfInterest:
      "During the same period in which its internal research confirmed human-caused warming, the company publicly backed communications that fueled doubt about the scientific consensus, a pattern systematically analyzed in a peer-reviewed academic study.",
    whatEvidenceShows:
      "The study by Supran & Oreskes (2017), based on a systematic analysis of decades of the company's internal documents and public communications, found a systematic divergence between the two categories of text. ExxonMobil has publicly disputed the study's conclusions.",
    sourceIds: ["supran-oreskes-2017", "insideclimate-news-exxon"],
    tags: ["fossil-fuels", "conflict-of-interest", "exxon"],
  },
  {
    id: "heartland-institute-finanziamenti",
    slug: "heartland-institute-finanziamenti-combustibili-fossili",
    title: "Heartland Institute: who funded the climate doubt campaigns",
    actor: "Heartland Institute",
    year: "2012",
    whatHappened:
      "A U.S. think tank that for years organized conferences and publications aimed at casting doubt on the scientific consensus on climate change, presenting itself as an independent research source.",
    conflictOfInterest:
      "Funding transparency research has documented financial ties between the organization and companies with interests in fossil fuels, a pattern of funding scientific doubt also documented in other sectors, such as tobacco.",
    whatEvidenceShows:
      "In February 2012, a researcher, who later publicly admitted his role, obtained and leaked internal documents from the organization to journalists and observers, including funding plans to counter the teaching of climate science in schools. Independent funding-transparency research organizations subsequently gathered and published further documentation on these ties, some of which the organization has disputed in detail.",
    sourceIds: ["desmog", "climate-investigations-center", "ucs-climate-deception-dossiers"],
    tags: ["think-tank", "conflict-of-interest", "funding"],
  },
  {
    id: "willie-soon-finanziamenti-non-dichiarati",
    slug: "willie-soon-finanziamenti-non-dichiarati",
    title: "The Willie Soon case: undisclosed funding behind skeptical research",
    actor: "Willie Soon (Harvard-Smithsonian Center for Astrophysics)",
    year: "2015",
    whatHappened:
      "An astrophysicist who for years published articles and public testimony skeptical of the human role in global warming, attributing it mainly to variations in solar activity.",
    conflictOfInterest:
      "A journalistic investigation, based on documents obtained through transparency requests, revealed that much of his work was funded by companies and foundations with interests in fossil fuels, funding not systematically disclosed in several publications.",
    whatEvidenceShows:
      "The revelation, reported by the New York Times based on documents gathered by Greenpeace and the Climate Investigations Center, led some scientific journals to revise their conflict-of-interest disclosure rules for future publications.",
    sourceIds: ["climate-investigations-center", "desmog"],
    tags: ["researcher", "conflict-of-interest", "undisclosed-funding"],
  },
  {
    id: "global-climate-coalition",
    slug: "global-climate-coalition-lobbying-anni-90",
    title: "Global Climate Coalition: the industry lobby of the 1990s",
    actor: "Global Climate Coalition",
    year: "2002",
    whatHappened:
      "A coalition of companies and industry associations, active from 1989 until its dissolution in 2002, that ran lobbying and communication campaigns to oppose international emissions-reduction policies, including the Kyoto Protocol.",
    conflictOfInterest:
      "The coalition was funded mainly by companies in the automotive, oil, and coal sectors, with a direct economic interest in delaying climate policy.",
    whatEvidenceShows:
      "Internal documents made public through lawsuits and transparency requests, collected by research organizations such as the Union of Concerned Scientists, show that the coalition operated even while possessing its own internal technical analyses that did not question the basic validity of global warming.",
    sourceIds: ["ucs-climate-deception-dossiers", "desmog"],
    tags: ["lobbying", "fossil-fuels", "1990s"],
  },
];

export function getScienceHighlightBySlug(slug: string): ScienceHighlight | undefined {
  return scienceHighlights.find((item) => item.slug === slug);
}

export function getIndustryInfluenceCaseBySlug(slug: string): IndustryInfluenceCase | undefined {
  return industryInfluenceCases.find((item) => item.slug === slug);
}

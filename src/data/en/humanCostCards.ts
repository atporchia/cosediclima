import type { HumanCostCard } from "../humanCostCards";

export const humanCostCards: HumanCostCard[] = [
  {
    id: "europa-estate-2022-caldo",
    slug: "europa-estate-2022-caldo-mortale",
    title: "Europe, summer 2022: deadly heat",
    region: "Europe",
    year: "2022",
    eventType: "heat",
    humanImpact: "Tens of thousands of heat-related deaths across Europe.",
    climateConnection:
      "Attribution studies estimate that a significant share of these deaths would not have occurred without human-caused warming.",
    denialReframe: "This isn't \"just summer.\" It's an increased health risk.",
    shortMessage:
      "When someone says it's just summer heat, remind them that extreme heat is already a cause of death. Denial doesn't lower the temperature — it just delays the solutions.",
    sourceIds: ["lancet-countdown", "who-climate-health", "world-weather-attribution"],
  },
  {
    id: "europa-occidentale-2021-alluvioni",
    slug: "europa-occidentale-2021-alluvioni",
    title: "Western Europe, July 2021: floods in Germany and Belgium",
    region: "Western Europe (Germany, Belgium)",
    year: "2021",
    eventType: "flood",
    humanImpact:
      "Hundreds of deaths and massive infrastructure damage, in one of the most severe flood events in recent European history.",
    climateConnection:
      "A World Weather Attribution study estimated that global warming made this kind of extreme rainfall event more likely and more intense than it would have been in a climate without human influence.",
    denialReframe:
      "Floods have always happened, but the intensity of this event is consistent with a warmer atmosphere carrying more moisture.",
    shortMessage:
      "When someone says floods have always happened, remember that attribution studies show global warming may have made this specific event more likely and more destructive.",
    sourceIds: ["world-weather-attribution", "eea"],
  },
  {
    id: "sicilia-2021-record-temperatura",
    slug: "sicilia-2021-record-temperatura",
    title: "Sicily, August 2021: Europe's temperature record",
    region: "Sicily, Italy",
    year: "2021",
    eventType: "heat",
    humanImpact:
      "An extreme heatwave with some of the highest temperatures ever recorded in Europe, posing direct risks to the most vulnerable populations (the elderly, people with chronic illnesses).",
    climateConnection:
      "Heatwaves of this intensity are consistent with climate projections for the Mediterranean and have become more likely with global warming, according to analyses by ISPRA and Copernicus.",
    denialReframe:
      "This isn't a normal summer: it's a record that fits within a documented trend of increasingly frequent extreme heat in the Mediterranean.",
    shortMessage:
      "A single record doesn't prove anything on its own, but it fits within a documented trend of more frequent and intense heatwaves in Italy and the Mediterranean.",
    sourceIds: ["ispra", "copernicus-c3s"],
  },
  {
    id: "emilia-romagna-2023-alluvioni",
    slug: "emilia-romagna-2023-alluvioni",
    title: "Emilia-Romagna, May 2023: floods",
    region: "Emilia-Romagna, Italy",
    year: "2023",
    eventType: "flood",
    humanImpact:
      "17 deaths and around 36,600 people displaced, with massive economic damage to homes, farms, and infrastructure in one of Italy's hardest-hit regions.",
    climateConnection:
      "For this specific event, a World Weather Attribution study found no significant trend, either increasing or decreasing, in spring rainfall in Emilia-Romagna from 1960 to today: a case where the data does not allow the intensity of the rainfall to be attributed to climate change. The vulnerability of the land — land use and water management — weighed as much as, or more than, the climate.",
    denialReframe:
      "Even CoseDiClima doesn't exaggerate: here, scientists found no clear climate trend. The hydrogeological risk remains real and serious regardless, and it also depends on how we manage the land, not just on the climate.",
    shortMessage:
      "Not every extreme event is \"caused\" by climate change, and the same attribution study says so clearly when the data doesn't confirm it. The risk remains real regardless.",
    sourceIds: ["world-weather-attribution", "ispra", "eea"],
  },
  {
    id: "po-2022-siccita",
    slug: "bacino-del-po-2022-siccita",
    title: "Po River Basin, 2022: extreme drought",
    region: "Po River Basin, Italy",
    year: "2022",
    eventType: "drought",
    humanImpact:
      "One of the most severe droughts in decades in the Po River Basin, causing significant agricultural damage, water restrictions, and stress on an area that produces a significant share of Italy's food.",
    climateConnection:
      "Prolonged drought conditions are consistent with rising temperatures and changes in precipitation patterns observed in the Mediterranean area, a risk factor that climate scientists link to global warming alongside local water management factors.",
    denialReframe:
      "This isn't just an unlucky year: the 2022 drought fits within a growing trend of water stress in the Mediterranean.",
    shortMessage:
      "The drought in the Po River Basin concretely showed what growing water stress means for Italian agriculture — a risk that global warming makes more likely over time.",
    sourceIds: ["ispra", "eea", "copernicus-c3s"],
  },
  {
    id: "grecia-2023-incendi",
    slug: "grecia-2023-incendi-rodi",
    title: "Greece, summer 2023: record wildfires on Rhodes and Evia",
    region: "Greece (Rhodes, Evia)",
    year: "2023",
    eventType: "fire",
    humanImpact:
      "Fatalities and the largest mass evacuation due to wildfires in Greece's recent history, with tens of thousands of residents and tourists evacuated from Rhodes.",
    climateConnection:
      "The extreme heat and drought conditions that fueled the spread of the fires are consistent with the increase in fire-favorable conditions observed in the Mediterranean as a result of global warming.",
    denialReframe:
      "A spark can be deliberate or accidental, but the conditions that made the fire so extensive and uncontrollable are linked to extreme heat and drought.",
    shortMessage:
      "Whoever starts a fire and the conditions that turn it into a disaster are two different things: the second is increasingly tied to climate in the Mediterranean.",
    sourceIds: ["world-weather-attribution", "copernicus-c3s"],
  },
  {
    id: "nord-italia-2023-grandinate",
    slug: "nord-italia-2023-grandinate-estreme",
    title: "Northern Italy, summer 2023: extreme hailstorms and storms",
    region: "Northern Italy (Emilia-Romagna, Veneto)",
    year: "2023",
    eventType: "storm",
    humanImpact:
      "Exceptionally large hail and violent storms caused injuries and extensive damage to crops, vehicles, and buildings across several regions of northern Italy.",
    climateConnection:
      "A warmer atmosphere holds more energy and moisture available for intense storms; climate scientists observe an increase in conditions favorable to violent thunderstorms in Europe, though with greater uncertainty than for other types of extreme events.",
    denialReframe:
      "Not every violent storm is \"caused\" by climate, but the conditions that make them more frequent and intense are consistent with a warmer atmosphere.",
    shortMessage:
      "The extreme hailstorms of 2023 in northern Italy show how a warmer atmosphere can fuel more violent storms, even though attribution for this type of event remains more uncertain than for heat or drought.",
    sourceIds: ["eea", "copernicus-c3s"],
  },
  {
    id: "iberia-2025-incendi-caldo",
    slug: "iberia-2025-incendi-e-caldo-estremo",
    title: "Spain and Portugal, summer 2025: record wildfires and extreme heat",
    region: "Spain and Portugal",
    year: "2025",
    eventType: "fire",
    humanImpact:
      "Eight direct deaths from wildfires, nearly 36,000 people displaced in Spain and around 1,000 in Portugal, and more than 660,000 hectares burned across the two countries — the worst fire season in 30 years on the Iberian Peninsula. An estimate from Spain's Carlos III health institute also links the 16-day heatwave that preceded the fires to more than 1,100 excess deaths in Spain.",
    climateConnection:
      "An analysis by World Weather Attribution estimated that the hot, dry, and windy conditions that fueled the fires were around 40 times more likely due to climate change, and around 30% more intense than in the preindustrial climate: without global warming, similar conditions would occur once every 500 years.",
    denialReframe:
      "It's not \"just the fault of arsonists\": the conditions that made the fires so extensive and uncontrollable — heat, drought, wind — were forty times more likely because of global warming, according to the study.",
    shortMessage:
      "The 2025 fire season in Spain and Portugal was the worst in 30 years, under conditions scientists now describe as common for today's climate, no longer exceptional.",
    sourceIds: ["world-weather-attribution"],
  },
  {
    id: "europa-giugno-2026-caldo",
    slug: "europa-giugno-2026-ondata-di-caldo",
    title: "Europe, June 2026: the most severe heatwave ever recorded",
    region: "Europe (France, Spain, Italy, and other countries)",
    year: "2026",
    eventType: "heat",
    humanImpact:
      "More than 1,300 excess deaths estimated across several European countries within a few days: over 1,000 in France since June 24, more than 300 in Spain, with emergency services under pressure in multiple countries. In Italy, red heat alerts were issued in more than 15 cities, with heat-related deaths and a rise in emergency room visits.",
    climateConnection:
      "An analysis by World Weather Attribution published on 26 June 2026 called the heatwave the most severe ever recorded in Europe, attributing the event directly to fossil fuel emissions: temperatures of this magnitude would have been \"virtually impossible\" in the climate of 50 years ago.",
    denialReframe:
      "This isn't \"just summer\": WHO Europe called it a \"dress rehearsal\" for future summers, noting that more than half the countries in the European region still lack a complete heat action plan.",
    shortMessage:
      "When someone says it's just summer heat, remember that scientists called this heatwave the most severe ever recorded in Europe, with more than 1,300 excess deaths in a matter of days.",
    sourceIds: ["world-weather-attribution", "who-climate-health"],
  },
  {
    id: "libia-2023-alluvione-derna",
    slug: "libia-2023-alluvione-derna",
    title: "Libya (Derna), September 2023: the flood of Storm Daniel",
    region: "Libya (Derna)",
    year: "2023",
    eventType: "flood",
    humanImpact:
      "Nearly 4,000 confirmed deaths in Derna and around 170 elsewhere in Libya, with more than 10,000 people missing, after two dams upstream of the city collapsed during Storm Daniel.",
    climateConnection:
      "An analysis by World Weather Attribution estimated that climate change made rainfall of this intensity up to 50 times more likely and around 50% heavier: an event that, without global warming, would occur once every 300 to 600 years. The same researchers stress, however, that the scale of the tragedy depended decisively on the poor condition of the dams and lack of maintenance, not on rainfall alone.",
    denialReframe:
      "This isn't \"just\" an infrastructure disaster, nor \"just\" climate: the extreme rainfall was made more likely by global warming, but the collapse of the dams turned a severe weather event into a human catastrophe.",
    shortMessage:
      "In Derna, thousands of people died not only because of rainfall made more intense and more likely by climate change, but also because two poorly maintained dams failed. Climate and human responsibility, together.",
    sourceIds: ["world-weather-attribution"],
  },
  {
    id: "valencia-2024-dana",
    slug: "valencia-2024-alluvione-dana",
    title: "Valencia, Spain, October 2024: the DANA flood",
    region: "Valencia, Spain",
    year: "2024",
    eventType: "flood",
    humanImpact:
      "Around 238 deaths in the Valencian Community, the deadliest flood in Western Europe in recent decades, with massive damage to homes, infrastructure, and businesses.",
    climateConnection:
      "An analysis by World Weather Attribution estimated that rainfall of this intensity is now around 12% stronger and twice as likely compared to the preindustrial climate. A subsequent study published in Nature Communications calculated that Mediterranean and Atlantic sea surface temperatures, warmer due to global warming, increased the amount of rainfall by up to 40% compared to a scenario without climate change.",
    denialReframe:
      "The Mediterranean's \"rain bombs\" are not an invention: studies indicate that warmer sea water made this rainfall more intense and more likely.",
    shortMessage:
      "The Valencia DANA wasn't just bad luck: warmer sea water due to global warming made the rainfall up to 40% heavier, according to attribution studies.",
    sourceIds: ["world-weather-attribution"],
  },
  {
    id: "canada-2023-incendi-record",
    slug: "canada-2023-incendi-record",
    title: "Canada, 2023: the most extensive fire season ever recorded",
    region: "Canada (mainly Quebec)",
    year: "2023",
    eventType: "fire",
    humanImpact:
      "More than 16.5 million hectares burned, more than double the previous record, with around 232,000 people evacuated. The smoke worsened air quality across much of North America and was linked to an estimated 82,000 premature deaths worldwide according to one scientific estimate, in addition to 8 firefighters who died in the line of duty.",
    climateConnection:
      "An analysis by World Weather Attribution estimated that climate change made fire-favorable weather conditions in Quebec at least twice as likely and around 20% more intense, and made a fire season of this overall severity at least seven times more likely.",
    denialReframe:
      "Fires start for many different reasons, but the hot, dry conditions that made them so extensive and hard to control were made more likely by global warming, according to scientists.",
    shortMessage:
      "The 2023 fire season in Canada burned an area twice the size of the previous record, under conditions scientists estimate were made at least twice as likely by global warming.",
    sourceIds: ["world-weather-attribution"],
  },
  {
    id: "europa-centrale-2024-tempesta-boris",
    slug: "europa-centrale-2024-tempesta-boris",
    title: "Central Europe, September 2024: the floods of Storm Boris",
    region: "Central Europe (Austria, Czech Republic, Slovakia, Poland, Romania, Hungary)",
    year: "2024",
    eventType: "flood",
    humanImpact:
      "At least 27 deaths and nearly two million people affected across eight countries, with the most intense rainfall ever recorded in Central Europe over a four-day period and economic damage estimated in the billions of euros.",
    climateConnection:
      "An analysis by World Weather Attribution estimated that climate change made rainfall of this intensity around twice as likely and between 7% and 20% heavier, with an area affected by extreme precipitation around 18% larger than in a climate without global warming.",
    denialReframe:
      "This isn't the \"usual\" autumn flood: scientists estimate that global warming made this type of extreme rainfall around twice as likely in Central Europe.",
    shortMessage:
      "The rainfall from Storm Boris was the most intense ever recorded in Central Europe, under conditions that global warming made around twice as likely, according to scientists.",
    sourceIds: ["world-weather-attribution"],
  },
];

export function getHumanCostCardBySlug(slug: string): HumanCostCard | undefined {
  return humanCostCards.find((card) => card.slug === slug);
}

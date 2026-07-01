import type { CostCard } from "../costCards";

export const costCards: CostCard[] = [
  {
    id: "salute",
    slug: "paghi-con-la-salute",
    title: "You pay with your health",
    costType: "health",
    description:
      "Extreme heatwaves increase the risk of illness and death, especially among the elderly, people with chronic conditions, and outdoor workers. A warmer climate can also affect air quality.",
    denialConnection:
      "Every delay in adaptation policy (heat action plans, cooler buildings, a prepared healthcare system) leaves more people exposed to a health risk that is already measurable, not hypothetical.",
    shortMessage:
      "Climate denial doesn't lower the body temperature of someone suffering through extreme heat: it just delays the solutions that could protect them.",
    sourceIds: ["who-climate-health", "lancet-countdown"],
  },
  {
    id: "casa",
    slug: "paghi-con-la-casa",
    title: "You pay with your home",
    costType: "home",
    description:
      "Extreme events such as floods, landslides, and wildfires can damage or destroy homes; extreme heat also raises cooling costs needed to keep homes livable in summer.",
    denialConnection:
      "Those who can afford it protect their homes with insurance, renovations, and air conditioning; those who can't absorb the risk directly, often without a safety net.",
    shortMessage:
      "Delaying climate adaptation doesn't protect homes: it leaves more of them exposed to risks that are already materializing.",
    sourceIds: ["eea"],
  },
  {
    id: "cibo",
    slug: "paghi-con-il-cibo",
    title: "You pay with your food",
    costType: "food",
    description:
      "Droughts, heatwaves, and extreme events can damage agricultural harvests, affecting the availability and prices of some food products.",
    denialConnection:
      "Agriculture around the world is already exposed to growing water stress and extreme heat; ignoring the problem doesn't reduce this risk for producers or consumers.",
    shortMessage:
      "Food prices aren't isolated from climate: drought in farming regions eventually shows up in the weekly grocery bill.",
    sourceIds: ["eea", "ispra"],
  },
  {
    id: "tasse",
    slug: "paghi-con-le-tasse",
    title: "You pay with your taxes",
    costType: "taxes",
    description:
      "Damage caused by extreme climate events (floods, landslides, wildfires) generates public spending on emergency response, reconstruction, and making the land safer again, funded through general taxation.",
    denialConnection:
      "The longer prevention and adaptation are delayed, the higher post-event emergency spending climbs — costs that fall on the public through government budgets.",
    shortMessage:
      "Investing in prevention costs money; repairing the damage afterward usually costs more — and taxpayers foot the bill either way.",
    sourceIds: ["eea"],
  },
  {
    id: "assicurazione",
    slug: "paghi-con-lassicurazione",
    title: "You pay with your insurance",
    costType: "insurance",
    description:
      "The rising frequency and intensity of some extreme climate events is leading insurers to revise premiums and coverage in areas most exposed to flood or climate risk.",
    denialConnection:
      "Those with resources can afford pricier insurance coverage or move to less exposed areas; those without risk being left without financial protection when disaster strikes.",
    shortMessage:
      "Climate risk is increasingly reflected in insurance policies: ignoring it doesn't make it less real, just less predictable for those who don't get covered in time.",
    sourceIds: ["eea"],
  },
  {
    id: "acqua",
    slug: "paghi-con-lacqua",
    title: "You pay with your water",
    costType: "water",
    description:
      "More frequent and intense droughts put pressure on water resources available for household, agricultural, and industrial use, with possible restrictions during the most critical periods.",
    denialConnection:
      "Managing water stress requires investment and planning: delaying these decisions increases the risk of rationing during the most acute moments of crisis.",
    shortMessage:
      "Major droughts in recent years have already shown what real water stress means for households, farmers, and industry.",
    sourceIds: ["ispra", "eea"],
  },
  {
    id: "lavoro",
    slug: "paghi-con-il-lavoro",
    title: "You pay with your work",
    costType: "work",
    description:
      "Outdoor workers (construction, agriculture, logistics) are directly exposed to the risks of extreme heat, with impacts on health, safety, and productivity on the hottest days.",
    denialConnection:
      "Workplace adaptation policies (schedules, breaks, protections) require planning: delaying them leaves more workers exposed to a risk already visible in health statistics.",
    shortMessage:
      "Extreme heat isn't an abstract inconvenience for outdoor workers: it's a direct risk to their health and workplace safety.",
    sourceIds: ["who-climate-health", "lancet-countdown"],
  },
  {
    id: "energia",
    slug: "paghi-con-lenergia",
    title: "You pay with your energy bill",
    costType: "energy",
    description:
      "Dependence on imported fossil fuels exposes consumers to price shocks tied to geopolitical crises and international markets, a risk that many countries have already experienced firsthand in recent years.",
    denialConnection:
      "Delaying energy diversification and efficiency keeps this exposure to international prices in place, instead of reducing it over time.",
    shortMessage:
      "Every year of delay in the energy transition is another year of exposure to price shocks on imported energy.",
    sourceIds: ["eea"],
  },
];

export function getCostCardBySlug(slug: string): CostCard | undefined {
  return costCards.find((card) => card.slug === slug);
}

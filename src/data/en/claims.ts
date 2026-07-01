import type { ClimateClaim } from "../claims";

export const claims: ClimateClaim[] = [
  {
    id: "clima-sempre-cambiato",
    slug: "il-clima-e-sempre-cambiato",
    claim: "The climate has always changed.",
    aliases: [
      "climate has always been changing",
      "it's always been like this with climate",
      "the earth has always had climate cycles",
    ],
    verdict: "fuorviante",
    technique: "mezza_verita",
    shortLabel: "A half-truth that ignores cause and speed",
    whyItPersuades:
      "It's true in the abstract, so it sounds reasonable. But it shifts attention away from the real issue: the speed, cause, impacts, and cost of today's change.",
    emotionalReframe: "This line gets used to make you stop asking who's footing the bill.",
    tenSecondReply:
      "Yes, the climate has always changed. But this time the issue is the speed, the cost, and who's left holding the bill.",
    longerReply:
      "Saying the climate has always changed is like saying fires have always existed. True, but if someone's pouring gasoline on it, the problem changes. Today the question isn't whether the climate changes — it's how fast it's changing, why, and who pays for the damage.",
    scientificBackup:
      "Current warming is attributed primarily to human influence according to the IPCC. Global and European temperatures show a warming trend far faster than past natural climate shifts, and many countries are already recording temperature anomalies and more days of extreme heat.",
    italianAngle:
      "Across the EU, climate change isn't an abstraction: it already shows up as extreme heat, drought, strained agriculture, cities that are barely livable in summer, damage from extreme weather, and pressure on public health systems — the same pattern playing out from Brussels' policy debates to city halls everywhere.",
    sourceIds: ["ipcc", "ispra", "copernicus-c3s"],
    tags: ["natural-change", "rate-of-change", "human-cause"],
  },
  {
    id: "fa-freddo",
    slug: "fa-freddo-quindi-il-riscaldamento-non-esiste",
    claim: "It's cold, so global warming isn't real.",
    aliases: [
      "it snowed, so there's no global warming",
      "it's freezing out, so much for global warming",
    ],
    verdict: "fuorviante",
    technique: "cherry_picking",
    shortLabel: "Confuses one day's weather with decades of climate",
    whyItPersuades:
      "Feeling cold in a specific moment feels like direct, personal proof — more convincing than a statistic spanning the whole globe over many years.",
    emotionalReframe: "It gets you to mistake one day's sensation for evidence spanning decades.",
    tenSecondReply:
      "One cold day or week doesn't erase a warming trend measured over decades across the entire planet.",
    longerReply:
      "Weather is what's happening today in your city; climate is the average trend over decades across the whole planet. A local cold snap can absolutely occur within a planet that, overall and over the long run, is warming: these are different scales, and confusing them is the most common mistake in the climate debate.",
    scientificBackup:
      "Global temperature data from Copernicus and NASA show a long-term warming trend, calculated from global, multi-year averages — not single local events. A local cold snap is entirely compatible with an overall global warming trend.",
    italianAngle:
      "Across Europe you can see both more frequent heat waves and, occasionally, spells of intense cold: what matters is the long-term trend tracked by national climate agencies, not the isolated episode.",
    sourceIds: ["copernicus-c3s", "nasa-climate", "ispra"],
    tags: ["weather-vs-climate", "cherry-picking"],
  },
  {
    id: "truffa-elite",
    slug: "e-tutta-una-truffa-delle-elite",
    claim: "It's all a scam by the elites.",
    aliases: [
      "climate change is an invention of the elites",
      "it's all a globalist conspiracy",
      "they tell us this to control us",
    ],
    verdict: "complotto",
    technique: "complotto",
    shortLabel: "An unfalsifiable conspiracy theory",
    whyItPersuades:
      "It offers a simple explanation (a secret plan) and a clear enemy, and it's immune to counter-evidence, since any rebuttal can be read as part of the conspiracy itself.",
    emotionalReframe:
      "It asks you to believe in a secret plan instead of looking at who actually profits from keeping you passive.",
    tenSecondReply:
      "I'm not asking you to trust the elites. I'm asking you to look at who profits if we stay stuck doing nothing.",
    longerReply:
      "You don't need to believe in a global secret plan to see that the planet is warming: temperature measurements collected by dozens of independent agencies worldwide, using public and replicable methods, are enough. The useful question isn't \"who's conspiring,\" but who actually benefits from keeping us arguing instead of acting — and the answer is often whoever sells fossil fuels.",
    scientificBackup:
      "Temperature measurements come from independent observation networks run by dozens of different countries and agencies (NASA, NOAA, Copernicus, the Met Office), using public methods with consistent results across all of them: agreement like this is very hard to explain as a coordinated conspiracy.",
    italianAngle:
      "National environmental agencies across Europe collect climate data independently of international institutions, and they show the same warming trends observed globally — hardly the signature of a single coordinated plot.",
    sourceIds: ["nasa-climate", "noaa", "copernicus-c3s", "ispra"],
    tags: ["conspiracy", "elites", "distrust"],
  },
  {
    id: "cicli-solari",
    slug: "sono-i-cicli-solari",
    claim: "It's solar cycles.",
    aliases: [
      "it's the sun's fault",
      "solar cycles are heating the earth",
      "sunspots explain the warming",
    ],
    verdict: "falso",
    technique: "mezza_verita",
    shortLabel: "The sun doesn't explain recent warming",
    whyItPersuades:
      "It's true that the sun influences Earth's climate, so the claim starts from a real fact that makes it plausible at first glance.",
    emotionalReframe: "It uses a true fact about another era to explain what's happening today.",
    tenSecondReply:
      "The sun matters, but since the 1980s its activity has stayed flat or slightly declined, while temperatures keep rising: the two trends have decoupled.",
    longerReply:
      "Solar activity is a real climate factor and has influenced Earth's climate in the past. But satellite data show that, since the mid-20th century, solar irradiance has stayed essentially flat or slightly decreased, while global temperatures have risen sharply: if the sun were the main driver, we'd expect the opposite pattern.",
    scientificBackup:
      "The IPCC reports that the contribution of natural factors, including the sun, to warming observed since 1950 is estimated to be minimal compared to the contribution of human activity, based on direct measurements of solar irradiance and models that separate out different climate factors.",
    italianAngle:
      "Temperature anomalies recorded across Europe in recent decades track the rise in greenhouse gas emissions, not the satellite-measured trend in solar activity.",
    sourceIds: ["ipcc", "nasa-climate"],
    tags: ["sun", "natural-causes", "attribution"],
  },
  {
    id: "co2-naturale",
    slug: "la-co2-e-naturale",
    claim: "CO₂ is natural.",
    aliases: [
      "co2 is a natural gas, it can't be a problem",
      "plants breathe co2, so it's good for them",
    ],
    verdict: "fuorviante",
    technique: "mezza_verita",
    shortLabel: "True in the abstract, ignores the amount humans added",
    whyItPersuades:
      "It's technically correct that CO₂ has always existed in nature, so calling it a problem seems absurd.",
    emotionalReframe:
      "It gets you to confuse the existence of a substance with the huge amount added in a very short time.",
    tenSecondReply:
      "Water is natural too, but too much of it in your living room is a flood. The problem with CO₂ isn't that it exists — it's how much we've added and how fast.",
    longerReply:
      "CO₂ has been part of the natural carbon cycle for millions of years — that's true. But by burning fossil fuels, humans have released an excess of CO₂ into the atmosphere that natural processes (oceans, forests) can't absorb at the same pace: atmospheric concentration today is higher than at any point in the hundreds of thousands of years captured in Antarctic ice cores.",
    scientificBackup:
      "Direct measurements of atmospheric CO₂ (Mauna Loa and other stations) show a steady rise since the start of the industrial revolution, and isotopic analysis confirms that the recent increase comes largely from burning fossil fuels, not natural sources.",
    italianAngle:
      "Countries across Europe contribute to this excess through their own energy and transport consumption, and are already exposed to the effects of rising CO₂ on regional climate.",
    sourceIds: ["nasa-climate", "noaa", "ipcc"],
    tags: ["co2", "natural", "concentration"],
  },
  {
    id: "cina-inquina",
    slug: "e-allora-la-cina",
    claim: "China pollutes, so there's nothing we can do.",
    aliases: [
      "what about china",
      "china pollutes more than everyone else anyway",
      "why should we sacrifice if china won't",
    ],
    verdict: "falsa_equivalenza",
    technique: "benaltrismo",
    shortLabel: "Whataboutism that offloads responsibility",
    whyItPersuades:
      "It's true that China has high absolute emissions, so the claim sounds grounded in a real fact and conveniently shifts responsibility elsewhere.",
    emotionalReframe: "It hands you an excuse to do nothing, while the cost of delay still lands on you too.",
    tenSecondReply: "Saying \"what about China?\" is the perfect way to do nothing while the bill still comes due for us too.",
    longerReply:
      "It's true that China today has the highest absolute emissions in the world, largely tied to global industrial production, including plenty of goods consumed in Europe and North America. But that doesn't shrink the impact of emissions from other wealthy countries, nor the climate risks and costs they're already facing. Waiting for others to act first just delays measures that pay off regardless — for public health, the economy, and energy security.",
    scientificBackup:
      "International emissions inventories (used by the IPCC and environmental agencies) show that emissions add up globally: one country's reduction has a real effect on the total, regardless of what other countries do at the same time.",
    italianAngle:
      "As EU member states, European countries have emissions-reduction commitments covering their own energy production, transport, and construction sectors — areas where they have full decision-making power, regardless of choices made in Beijing.",
    sourceIds: ["ipcc", "eea"],
    tags: ["china", "whataboutism", "responsibility"],
  },
  {
    id: "auto-elettriche-inquinano",
    slug: "le-auto-elettriche-inquinano-di-piu",
    claim: "Electric cars pollute more than diesel ones.",
    aliases: [
      "batteries pollute more than gas-powered cars",
      "electric isn't really eco-friendly",
    ],
    verdict: "fuorviante",
    technique: "cherry_picking",
    shortLabel: "Isolates battery production, ignores the full life cycle",
    whyItPersuades:
      "It's true that producing a battery generates more upfront emissions than producing a gas-powered car, so the claim starts from a real but partial fact.",
    emotionalReframe: "It shows you only the starting line of the race, not the whole course.",
    tenSecondReply:
      "Battery production weighs more at the start, but over its full life cycle an electric car emits less than an equivalent diesel one, especially where the charging electricity is less fossil-heavy.",
    longerReply:
      "It's true that building an electric car, because of the battery, generates more emissions than building a diesel one. But a car gets used for years: full life-cycle analyses (production, use, end of life) show that, in most current electricity mixes, an electric car catches up and then beats an equivalent diesel car in emissions avoided within the first few years of use — and the advantage grows the more decarbonized the electricity grid becomes.",
    scientificBackup:
      "Life-cycle analyses published by European environmental agencies compare production, use, and disposal of electric and combustion vehicles, and in the average European electricity mix, electric vehicles show a lower overall CO₂ footprint across their full useful life.",
    italianAngle:
      "The advantage of electric cars depends on each country's electricity mix, which in much of Europe still includes a share of fossil gas: it grows the more national power generation shifts to renewables.",
    sourceIds: ["eea"],
    tags: ["electric-cars", "lifecycle", "cherry-picking"],
  },
  {
    id: "rinnovabili-non-bastano",
    slug: "le-rinnovabili-non-bastano",
    claim: "Renewables aren't enough.",
    aliases: [
      "solar and wind can't replace fossil fuels",
      "renewables are unreliable",
    ],
    verdict: "fuorviante",
    technique: "perfezione_impossibile",
    shortLabel: "Impossible-perfection standard: dismisses a solution for being partial",
    whyItPersuades:
      "It's true that renewables alone don't yet cover all energy demand at every moment, so the objection sounds well-founded.",
    emotionalReframe: "It demands a perfect solution right now, or else none is worth having.",
    tenSecondReply:
      "A solution doesn't have to solve everything by itself to be worthwhile. Every share of renewable energy is fossil emissions avoided, not an all-or-nothing bet.",
    longerReply:
      "No one claims renewables alone solve every aspect of the energy transition: you also need modernized grids, storage, efficiency, and electrification of demand. But \"not enough on their own, today, for everything\" is not the same as \"not worth having\": every installed share of renewable energy replaces fossil energy and cuts real, measurable emissions year after year.",
    scientificBackup:
      "Reports from the European Environment Agency and energy balance data show steady growth in the renewable share of Europe's electricity mix, with a corresponding drop in power-sector emissions in the countries where that growth is fastest.",
    italianAngle:
      "Across much of Europe, renewables (especially solar and wind) already cover a significant and growing share of electricity production, even as many countries remain dependent on imported gas for a large part of their needs.",
    sourceIds: ["eea"],
    tags: ["renewables", "energy-transition", "impossible-perfection"],
  },
  {
    id: "ambientalisti-ipocriti",
    slug: "gli-ambientalisti-sono-ipocriti",
    claim: "Environmentalists are hypocrites.",
    aliases: [
      "eco-activists fly on planes and then tell us what to do",
      "everyone who talks about climate is a hypocrite",
    ],
    verdict: "fuorviante",
    technique: "attacco_identitario",
    shortLabel: "An ad hominem attack that shifts focus from data to messenger",
    whyItPersuades:
      "Finding a personal inconsistency in whoever delivers a message is easy and satisfying, and lets you dismiss the message without engaging with its substance.",
    emotionalReframe: "It lets you ignore the problem by focusing on the person reminding you of it.",
    tenSecondReply:
      "Even if someone who talks about climate took a flight, that doesn't change satellite temperature data by one degree.",
    longerReply:
      "Personal inconsistencies of individual activists or communicators, where they exist, are about those people — not about the climate science, which rests on independent measurements collected by agencies around the world. Focusing on the messenger's consistency instead of the substance of the message is a convenient way to avoid discussing the data.",
    scientificBackup:
      "Measurements of temperature, sea level, and greenhouse gas concentration come from independent scientific instrumentation and don't depend in any way on the personal behavior of whoever communicates this data to the public.",
    italianAngle:
      "Public debate across Europe also tends to fixate on the supposed inconsistencies of individual communicators, distracting from national climate agencies' data on temperatures and extreme events.",
    sourceIds: ["ispra"],
    tags: ["identity-attack", "environmentalists", "messenger"],
  },
  {
    id: "non-possiamo-permetterci-transizione",
    slug: "non-possiamo-permetterci-la-transizione",
    claim: "We can't afford the transition.",
    aliases: [
      "we can't afford it economically",
      "switching to renewables costs too much",
    ],
    verdict: "ritardo",
    technique: "ritardo",
    shortLabel: "Economic delay-ism that ignores the cost of inaction",
    whyItPersuades:
      "The costs of the transition (equipment, upgrades, investment) are immediate and visible, while the costs of inaction are spread out over time and less immediately visible.",
    emotionalReframe: "It shows you only today's bill, hiding tomorrow's — larger — one.",
    tenSecondReply:
      "We can't afford not to do it: delay doesn't eliminate the cost, it pushes it further out and often makes it bigger.",
    longerReply:
      "The energy transition requires real investment — that's true. But continuing to depend on imported fossil fuels also has a cost, often a higher one that's already being paid: energy bills exposed to geopolitical crises, growing climate damage to repair, health costs tied to pollution and extreme heat. The right question isn't \"can we afford to invest,\" but \"can we afford to keep paying twice — today in energy bills, tomorrow in damages.\"",
    scientificBackup:
      "Economic analyses from the European Environment Agency and climate risk reports show that the economic costs of climate impacts (damage from extreme events, lost productivity) are rising across Europe, and tend to grow the longer mitigation and adaptation action is delayed.",
    italianAngle:
      "Many European countries import a significant share of their energy from fossil fuels abroad, exposing them to price shocks, while at the same time facing growing economic damage from extreme weather events such as floods, droughts, and heat waves.",
    sourceIds: ["eea"],
    tags: ["energy-transition", "delayism", "costs"],
  },
  {
    id: "troppo-tardi",
    slug: "ormai-e-troppo-tardi",
    claim: "It's already too late.",
    aliases: [
      "it's over anyway",
      "there's no going back so what's the point of doing anything",
    ],
    verdict: "doomismo",
    technique: "doomismo",
    shortLabel: "Doomism that uses despair as an excuse for inaction",
    whyItPersuades:
      "Faced with alarming information, resignation can feel more rational and less exhausting than action.",
    emotionalReframe: "It offers immediate emotional relief at the cost of giving up on reducing real future harm.",
    tenSecondReply: "Too late to avoid everything doesn't mean too late to avoid the worst: every fraction of a degree less still matters.",
    longerReply:
      "It's true that some warming and its effects are now unavoidable, and it's right to say so without downplaying it. But climate science is clear on one point: the difference between future scenarios — how much the planet warms — depends on emissions in the coming years; it isn't already written. Every fraction of a degree avoided translates into fewer extreme heat waves, fewer destructive weather events, and less economic and health damage. \"We can't avoid everything\" is very different from \"there's no point doing anything.\"",
    scientificBackup:
      "IPCC scenarios show substantial differences in expected impacts (frequency of extreme events, sea-level rise, health risks) between a lower-warming pathway and a higher-warming one, depending on the level of future emissions.",
    italianAngle:
      "For Europe as a whole, staying on a lower-warming pathway concretely means fewer days of extreme heat, less water stress, and less expected damage to coastlines and agriculture compared with a high-warming scenario.",
    sourceIds: ["ipcc"],
    tags: ["doomism", "resignation", "future-scenarios"],
  },
  {
    id: "modelli-sbagliano",
    slug: "i-modelli-climatici-sbagliano-sempre",
    claim: "Climate models are always wrong.",
    aliases: [
      "climate models are unreliable",
      "climate forecasts are always wrong",
    ],
    verdict: "fuorviante",
    technique: "falsa_incertezza",
    shortLabel: "False uncertainty: confuses margin of error with total unreliability",
    whyItPersuades:
      "Every forecast has margins of error, and it's easy to find individual cases where a model over- or under-estimated a detail, which seems to discredit everything else.",
    emotionalReframe: "It moves you from uncertainty about details to the mistaken idea that nothing is known at all.",
    tenSecondReply:
      "Models have margins of error on details, not on the basic fact: the planet is warming from human causes, and that's exactly what historical forecasts got right.",
    longerReply:
      "Climate models, like any scientific model, carry uncertainty on specific details (exact timing, local scale of certain effects). But global warming projections published decades ago by climatologists like James Hansen turned out, in hindsight, to be remarkably close to the temperature data observed in the following years. Uncertainty about details is not the same as uncertainty about the underlying phenomenon.",
    scientificBackup:
      "Retrospective analyses published in scientific journals have compared climate model projections from the 1970s-90s with temperatures observed afterward, finding substantial agreement between forecasts and real data, confirming the models' reliability on the underlying trend.",
    italianAngle:
      "Regional climate projections used by national agencies and Copernicus for the Mediterranean — flagged as a region particularly sensitive to warming — have so far held up consistently against observed temperature anomalies.",
    sourceIds: ["ipcc", "copernicus-c3s"],
    tags: ["climate-models", "false-uncertainty", "predictions"],
  },
  {
    id: "scienziati-in-disaccordo",
    slug: "ci-sono-scienziati-in-disaccordo",
    claim: "There are scientists who disagree.",
    aliases: [
      "not all scientists agree on climate",
      "there are climate skeptic scientists",
    ],
    verdict: "fuorviante",
    technique: "falso_equilibrio",
    shortLabel: "False balance between broad consensus and minority dissent",
    whyItPersuades:
      "It's literally true that individual skeptical scientists exist, so the claim is technically accurate while suggesting a misleading picture.",
    emotionalReframe: "It makes you believe the scientific debate is split down the middle, when it isn't.",
    tenSecondReply:
      "The existence of a minority in disagreement doesn't mean the weight of evidence is split fifty-fifty: consensus among active climatologists is very broad.",
    longerReply:
      "It's true that individual scientists, some with real credentials, express dissent about human-caused climate change. But systematic reviews of the published scientific literature show a very broad consensus among climatologists actively working in the field on global warming and its human cause. Presenting the debate as evenly split, when the evidence isn't, is a false balance.",
    scientificBackup:
      "Systematic reviews of peer-reviewed climate literature report very broad consensus among studies and authors actively working in climatology specifically regarding human-caused global warming, as summarized in IPCC reports.",
    italianAngle:
      "Leading scientific institutions across Europe — universities, national research councils, environmental agencies — align with the international consensus position on human-caused global warming.",
    sourceIds: ["ipcc", "ispra"],
    tags: ["scientific-consensus", "false-balance"],
  },
  {
    id: "medioevo-piu-caldo",
    slug: "nel-medioevo-faceva-piu-caldo",
    claim: "It was warmer in the Middle Ages.",
    aliases: [
      "they grew grapes in england in medieval times so it was warmer",
      "there's always been a medieval warm period",
    ],
    verdict: "fuorviante",
    technique: "cherry_picking",
    shortLabel: "Compares an old regional phenomenon with today's global warming",
    whyItPersuades:
      "The reference to a historical warm period (the so-called \"Medieval Warm Period\") is real, so it seems like a solid counterexample.",
    emotionalReframe:
      "It puts two different things side by side — a past regional phenomenon and today's measured global warming — as if they were equivalent.",
    tenSecondReply:
      "The Medieval Warm Period was mostly a regional phenomenon, not global and simultaneous like today's warming, which is measured everywhere at the same time.",
    longerReply:
      "Climate reconstructions indicate that the so-called \"Medieval Warm Period\" mostly affected certain regions, at different times in different places, without reaching today's temperatures synchronously and globally. Current warming, by contrast, is measured simultaneously across the entire planet with direct instruments, not just reconstructed from indirect proxies (tree rings, sediments, ice cores), and it's faster than any known natural variation of the last several millennia.",
    scientificBackup:
      "Paleoclimate reconstructions reported by the IPCC show that pre-industrial climate variations, including the Medieval Warm Period, were largely regional and not globally synchronous, unlike current warming observed consistently at a planetary scale.",
    italianAngle:
      "European historical temperature series show recent warming that exceeds, in speed and geographic scope, the regional climate fluctuations documented in the medieval period.",
    sourceIds: ["ipcc", "copernicus-c3s"],
    tags: ["climate-history", "medieval-period", "cherry-picking"],
  },
  {
    id: "cause-naturali",
    slug: "il-clima-cambia-per-cause-naturali",
    claim: "Climate changes for natural reasons.",
    aliases: [
      "climate changes naturally, it's not humanity's fault",
      "it's all natural, the earth has always had variations",
    ],
    verdict: "fuorviante",
    technique: "mezza_verita",
    shortLabel: "True in general, but doesn't explain recent warming",
    whyItPersuades:
      "It's true that natural causes of climate variation exist (volcanoes, the sun, orbital cycles), so the claim starts from a real fact.",
    emotionalReframe: "It uses real natural causes to wrongly explain a phenomenon those same causes can't actually account for.",
    tenSecondReply:
      "Natural causes are real, but on their own they don't explain the pace and scale of warming over recent decades: you need the human contribution to make the numbers add up.",
    longerReply:
      "Natural factors like volcanic activity, solar cycles, and orbital variations have always influenced Earth's climate. But when climatologists run models with only these natural factors, without human greenhouse gas emissions, the models fail to reproduce the warming observed from the mid-20th century onward. Only by adding the human contribution do the models match the actual measured data.",
    scientificBackup:
      "Attribution studies cited by the IPCC compare simulations with only natural factors against simulations that also include human factors: only the latter correctly reproduce the warming observed from 1950 to today.",
    italianAngle:
      "Temperature anomalies recorded across Europe in recent decades follow the same attribution pattern: they cannot be explained by natural factors alone.",
    sourceIds: ["ipcc", "ispra"],
    tags: ["natural-causes", "attribution", "half-truth"],
  },
  {
    id: "solo-estate",
    slug: "e-solo-estate",
    claim: "It's just summer.",
    aliases: ["it's normal for it to be hot in summer", "it's just seasonal heat"],
    verdict: "fuorviante",
    technique: "minimizzazione",
    shortLabel: "Minimizes extreme heat by treating it as seasonal routine",
    whyItPersuades:
      "A hot summer is a familiar, expected experience, so treating an extreme heat wave as business as usual sounds reasonable.",
    emotionalReframe: "It gets you to treat as normal a risk that, in intensity and frequency, no longer is.",
    tenSecondReply: "This isn't \"just summer\": it's extreme heat, with a measurably higher health risk than decades ago.",
    longerReply:
      "It's hot in summer — that's normal. The point isn't that summer exists, but that extreme heat waves have become more frequent, more intense, and longer-lasting than in the past, with direct consequences for mortality, especially among the elderly and most vulnerable. Treating this shift as seasonal routine hides a real and growing health risk.",
    scientificBackup:
      "The Lancet Countdown and WHO reports document rising exposure to extreme heat and heat-related mortality over recent decades, explicitly distinguishing between normal summer heat and the intensification of heat waves observed with global warming.",
    italianAngle:
      "National environmental agencies across Europe record an increase in the number of extreme-heat days in many cities compared to historical averages — a trend linked to greater public health risk during the summer months.",
    sourceIds: ["lancet-countdown", "who-climate-health", "ispra"],
    tags: ["extreme-heat", "minimization", "health"],
  },
  {
    id: "alluvioni-sempre-state",
    slug: "le-alluvioni-ci-sono-sempre-state",
    claim: "Floods have always happened.",
    aliases: ["floods have always been around", "flooding has always existed"],
    verdict: "fuorviante",
    technique: "mezza_verita",
    shortLabel: "True in general, ignores the climate-linked rise in intensity",
    whyItPersuades:
      "It's historically true that floods are an ancient phenomenon, so linking them to current climate change seems absurd.",
    emotionalReframe: "It uses the phenomenon's history to hide its recent worsening.",
    tenSecondReply:
      "Floods have always existed, but a warmer atmosphere holds more moisture and can make intense rainfall more likely or more severe in many places.",
    longerReply:
      "Floods aren't a new phenomenon — that's true. But a warmer atmosphere can hold more water vapor, which in many regions increases the likelihood or intensity of extreme rainfall, one of the main triggers of flooding. Attribution studies assess, case by case, how much climate change made a specific event more likely or more intense, without attributing every single flood to climate.",
    scientificBackup:
      "World Weather Attribution has published analyses of individual extreme-rainfall events in Europe indicating that global warming made those events more likely or more intense, using probabilistic rather than deterministic language.",
    italianAngle:
      "Extreme rainfall events in Europe, such as those that struck Emilia-Romagna and parts of Central Europe, have been analyzed by attribution studies linking their intensity, in part, to global warming, alongside local factors like land use and urbanization.",
    sourceIds: ["world-weather-attribution", "ipcc"],
    tags: ["floods", "attribution", "half-truth"],
  },
  {
    id: "incendi-piromani",
    slug: "gli-incendi-sono-colpa-dei-piromani",
    claim: "Wildfires are caused by arsonists, not climate.",
    aliases: [
      "arsonists start wildfires, not the climate",
      "wildfires are the fault of arsonists",
    ],
    verdict: "fuorviante",
    technique: "mezza_verita",
    shortLabel: "A false choice between human ignition and climate conditions",
    whyItPersuades:
      "It's true that many wildfires have a human ignition source (deliberate or accidental), so the claim starts from a real fact about the immediate cause.",
    emotionalReframe: "It makes you choose between two explanations that actually work together, not against each other.",
    tenSecondReply:
      "Who starts the fire and the conditions that let it spread are two different things: climate doesn't strike the match, but it makes fires easier to spread and harder to put out.",
    longerReply:
      "It's true that many wildfires have a human ignition source, deliberate or accidental. But how far and how badly they spread depends heavily on environmental conditions: prolonged drought, dry vegetation, heat waves, and wind make an ignited fire much harder to control and far more destructive. Ignition and favorable conditions are two separate factors that add together — they don't cancel each other out.",
    scientificBackup:
      "Attribution studies on fire weather conditions show that global warming has made the drought and heat conditions that favor large wildfires more frequent in various regions of the world, including the Mediterranean.",
    italianAngle:
      "Summers with more extreme-heat and drought days, tracked by national environmental agencies across southern Europe, are associated with seasons where more forested land burns — regardless of who struck the match on any single fire.",
    sourceIds: ["world-weather-attribution", "ispra"],
    tags: ["wildfires", "drought", "attribution"],
  },
  {
    id: "sovrappopolazione",
    slug: "il-problema-e-la-sovrappopolazione",
    claim: "The problem is overpopulation.",
    aliases: [
      "the real problem is there are too many of us",
      "with all these people on earth it's normal for climate to change",
    ],
    verdict: "fuorviante",
    technique: "benaltrismo",
    shortLabel: "Shifts responsibility onto a factor far from one's own control",
    whyItPersuades:
      "World population growth is a real fact, so linking it to the climate problem seems logical at first glance.",
    emotionalReframe: "It shifts responsibility onto billions of distant people instead of the energy choices closer to home.",
    tenSecondReply:
      "Emissions don't just depend on how many people there are, but above all on how much and how they consume energy: a few high-consumption countries outweigh billions of low-consumption people.",
    longerReply:
      "The world's population has grown — that's true — but greenhouse gas emissions are distributed very unequally: a small share of the global population, in high-income countries, is responsible for a share of emissions far out of proportion to its numbers. Focusing on \"overpopulation\" in the abstract shifts attention away from the concrete energy choices of the countries and sectors that emit the most, including wealthy economies across Europe and North America.",
    scientificBackup:
      "International per-capita emissions inventories show very wide differences between high- and low-income countries, indicating that the level of energy consumption, not just population size, determines a country's contribution to global emissions.",
    italianAngle:
      "Per-capita emissions in much of Europe, while lower than in some other high-income regions, remain far above those of most of the fast-growing-population countries that contribute only marginally to the historical total of global emissions.",
    sourceIds: ["eea", "ipcc"],
    tags: ["overpopulation", "whataboutism", "per-capita-emissions"],
  },
  {
    id: "italia-conta-poco",
    slug: "litalia-conta-troppo-poco",
    claim: "My country counts for too little.",
    aliases: [
      "we pollute barely anything compared to the world",
      "what difference does it make if only we do it",
    ],
    verdict: "ritardo",
    technique: "benaltrismo",
    shortLabel: "Delay-ism that uses a small national share as an excuse",
    whyItPersuades:
      "It's true that any single mid-sized country's emissions are a small share of the world total, so the argument sounds numerically solid.",
    emotionalReframe: "It makes individual and national action feel pointless, when in fact it adds up alongside similar countries.",
    tenSecondReply:
      "If every country with a small share said the same thing, almost no one would act: small shares, added together, make up the majority of global emissions.",
    longerReply:
      "It's true that any single mid-sized country, on its own, represents a small share of world emissions. But this reasoning, if applied by every country with a similar share (most countries in the world), would lead to inaction almost everywhere: the emissions of \"small\" countries, added together, still make up a substantial part of the global total. On top of that, most such countries participate in collective commitments — through the EU or other blocs — that carry real weight when combined.",
    scientificBackup:
      "Emissions inventories show that no single country, except for a handful of the largest economies, accounts on its own for a decisive share of global emissions: overall reduction depends on the sum of contributions from many countries, including mid-sized ones.",
    italianAngle:
      "Most European countries are part of the European Union, which as a bloc represents a historically and currently significant share of global emissions, and carries shared reduction commitments at the EU level.",
    sourceIds: ["eea"],
    tags: ["italy", "delayism", "national-share"],
  },
  {
    id: "europa-tassarci",
    slug: "leuropa-vuole-solo-tassarci",
    claim: "Brussels just wants to tax us.",
    aliases: [
      "the eu just wants to make us pay more green taxes",
      "it's all an excuse to tax us more",
    ],
    verdict: "fuorviante",
    technique: "sfiducia_generalizzata",
    shortLabel: "Generalized distrust of European institutions",
    whyItPersuades:
      "Distrust of taxes and supranational institutions is a widespread, genuine sentiment, so the claim taps into a real emotion.",
    emotionalReframe: "It asks you to ignore the substance of the policies and focus only on distrust of whoever proposes them.",
    tenSecondReply:
      "I'm not asking you to blindly trust the EU. I'm asking you to look at what happens if we keep depending on imported fossil energy: we pay either way, but with no benefit in return.",
    longerReply:
      "Some European climate measures do include carbon-pricing tools — that's true. But the right comparison isn't \"pay or don't pay\": it's between the cost of a planned transition, with investment and support, and the cost of continuing to depend on imported fossil energy, exposed to international price shocks that many European countries have already lived through. Focusing only on distrust of Brussels, while ignoring this comparison, leaves out the most important part of the decision.",
    scientificBackup:
      "European Environment Agency reports on the economic costs of climate change show growing damage across Europe in the absence of action, which should be weighed against the cost of the policy tools proposed at EU level.",
    italianAngle:
      "Many European countries import a large share of their energy from foreign fossil sources, a factor that has left them vulnerable to energy price shocks in recent years, independent of EU climate policy itself.",
    sourceIds: ["eea"],
    tags: ["european-union", "distrust", "taxes"],
  },
  {
    id: "propaganda-woke",
    slug: "e-propaganda-woke",
    claim: "It's woke propaganda.",
    aliases: ["climate is an excuse invented by the left", "it's all woke ideology"],
    verdict: "fuorviante",
    technique: "attacco_identitario",
    shortLabel: "An ad hominem label used to discredit the message",
    whyItPersuades:
      "Attaching a polarizing political label to a topic lets you dismiss it without evaluating its content, leveraging group identity instead.",
    emotionalReframe: "It asks you to pick a team instead of looking at the data.",
    tenSecondReply:
      "Temperature data doesn't carry a political label: it's measured by the same scientific agencies in every country, using the same methods, for decades.",
    longerReply:
      "Labeling climate change as \"propaganda\" from one side of the political spectrum doesn't change the fact that measurements of temperature, sea level, and greenhouse gas concentration come from independent scientific agencies, present in countries with governments of every political stripe, using the same instruments and methods for decades. The physical phenomenon doesn't belong to a political faction, even though the policies for addressing it can be — and legitimately are — debated.",
    scientificBackup:
      "Global climate monitoring networks (NASA, NOAA, Copernicus, national agencies in many countries with different governments) use scientific methodologies independent of political context and produce results consistent with one another.",
    italianAngle:
      "National climate data across Europe is collected by public technical-scientific agencies, using the same methodology regardless of which government happens to be in office.",
    sourceIds: ["nasa-climate", "noaa", "ispra"],
    tags: ["identity-attack", "politics", "polarization"],
  },
  {
    id: "temperature-manipolate",
    slug: "le-temperature-sono-manipolate",
    claim: "The temperatures are manipulated.",
    aliases: ["climate data is falsified", "they've fudged the temperature numbers"],
    verdict: "complotto",
    technique: "complotto",
    shortLabel: "An unfalsifiable conspiracy about data from thousands of independent stations",
    whyItPersuades:
      "It casts doubt on the integrity of the data itself, a doubt that's hard to verify for anyone outside the field, and therefore hard to rebut in a quick conversation.",
    emotionalReframe: "It asks you to suspect thousands of independent scientists instead of looking at the raw, public, verifiable data.",
    tenSecondReply:
      "Temperature data is collected by thousands of independent stations worldwide, run by different countries, and it's public: anyone can re-analyze it, and in fact that's already been done more than once with the same results.",
    longerReply:
      "Global temperature data doesn't come from a single controllable source: it's collected by thousands of land weather stations, ocean buoys, and satellites, run by agencies from different — and often politically opposed — countries. Several independent groups, including projects created specifically to scrutinize this data skeptically, have re-analyzed the raw historical series and obtained results substantially matching those of official agencies.",
    scientificBackup:
      "Independent re-analysis projects of global temperature data, conducted even by researchers initially skeptical of the reliability of official data, have independently confirmed the warming trend reported by major climate agencies.",
    italianAngle:
      "National temperature data across Europe is consistent with Copernicus's European-wide historical series, collected with independent instrumentation and methods.",
    sourceIds: ["nasa-climate", "noaa", "copernicus-c3s", "ispra"],
    tags: ["data", "conspiracy", "manipulation"],
  },
  {
    id: "prima-economia",
    slug: "prima-pensiamo-alleconomia",
    claim: "Let's think about the economy first.",
    aliases: [
      "economy first, then climate",
      "we can't think about climate during an economic crisis",
    ],
    verdict: "ritardo",
    technique: "ritardo",
    shortLabel: "Delay-ism that frames climate and economy as opposites",
    whyItPersuades:
      "In times of perceived economic hardship, prioritizing immediate needs feels more rational than dealing with a problem perceived as distant.",
    emotionalReframe: "It makes you choose between two things that, over time, move together: climate delay has a real economic cost.",
    tenSecondReply:
      "It's not economy or climate: climate delay is already an economic cost, in damage from extreme events and dependence on imported fossil energy.",
    longerReply:
      "Framing the economy and climate as opposed to each other assumes that dealing with climate has only costs and no economic benefit, but the data shows the opposite: economic damage from extreme weather events is already rising, and dependence on imported fossil fuels exposes the economy to international price shocks. Investing in energy efficiency and renewable sources reduces both these risks over time, while also creating jobs in the sectors involved.",
    scientificBackup:
      "European Environment Agency reports on the economic costs of extreme weather events in Europe document a rising trend of damage, distinct from the investment costs of the energy transition.",
    italianAngle:
      "Many European countries have already recorded significant economic damage from floods, droughts, and heat waves in recent years — a cost that adds to, rather than competes with, spending on the energy transition.",
    sourceIds: ["eea"],
    tags: ["economy", "delayism", "costs"],
  },
  {
    id: "tecnologia-risolvera-tutto",
    slug: "la-tecnologia-risolvera-tutto",
    claim: "Technology will solve everything.",
    aliases: [
      "we just need to wait for technology to solve everything",
      "in the future we'll have the technology to fix climate",
    ],
    verdict: "ritardo",
    technique: "ritardo",
    shortLabel: "Tech delay-ism: pushes action off onto future solutions not yet available",
    whyItPersuades:
      "Trust in technological progress is a widespread sentiment, partly justified by real past innovations, so the claim sounds optimistic and reasonable.",
    emotionalReframe: "It offers a comfortable promise to put off, today, what we already know how to do.",
    tenSecondReply:
      "Technology helps, but it's not an excuse to delay the solutions we already have today and that work, like renewables and energy efficiency.",
    longerReply:
      "Technological innovation will likely play an important role in the climate transition, but relying only on future technologies not yet mature (like large-scale carbon capture) as an excuse to delay using solutions already available and working today, like renewables and energy efficiency, means wasting precious time while emissions keep accumulating in the atmosphere.",
    scientificBackup:
      "The IPCC assesses a portfolio of already-available solutions (renewables, efficiency, electrification) as decisive for cutting emissions in the coming decades, distinguishing them from technologies still at an earlier stage of large-scale development.",
    italianAngle:
      "Across Europe, mature renewable technologies (solar, wind) are already deployable and growing fast, while more experimental technologies remain at an earlier stage of commercial rollout.",
    sourceIds: ["ipcc"],
    tags: ["technology", "delayism", "future-solutions"],
  },
  {
    id: "non-cambia-nulla-io",
    slug: "non-cambia-nulla-se-faccio-qualcosa-io",
    claim: "It doesn't change anything if I do something.",
    aliases: ["i alone can't change anything anyway", "what difference does what I do make"],
    verdict: "ritardo",
    technique: "ritardo",
    shortLabel: "Dilutes individual responsibility until it disappears",
    whyItPersuades:
      "Faced with a global problem, one person's contribution seems objectively tiny, which makes the conclusion (why bother acting?) feel intuitive.",
    emotionalReframe:
      "It makes you feel irrelevant on your own, ignoring that collective choices are made up of individual choices, and that they build pressure on bigger political decisions.",
    tenSecondReply:
      "No single person shifts the global climate alone, but individual choices add up and also influence bigger political and market decisions.",
    longerReply:
      "It's true that one person's climate impact, in isolation, is small compared to the global total. But that's true of any individual in any collective system: no single vote decides an election, yet elections are decided by votes. The consumption, voting, and public-pressure choices of individuals add up over time and help shift policy, markets, and infrastructure at a larger scale — which is where the biggest share of emissions reduction actually happens.",
    scientificBackup:
      "Studies on collective behavior change and climate policy indicate that individual action plays a complementary, not a substitute, role relative to systemic policy, but can help shape that policy through market demand and political pressure.",
    italianAngle:
      "Across Europe, citizens' energy-consumption and mobility choices, added together, shape national energy demand and the political priorities debated at both local and national level.",
    sourceIds: ["eea"],
    tags: ["individual-action", "shared-responsibility", "delayism"],
  },
  {
    id: "previsioni-catastrofiste",
    slug: "sono-tutte-previsioni-catastrofiste",
    claim: "It's all doomsday predictions.",
    aliases: ["they're all climate alarmists", "it's climate fearmongering"],
    verdict: "fuorviante",
    technique: "minimizzazione",
    shortLabel: "Minimizes data-based projections as if they were generic alarmism",
    whyItPersuades:
      "The language sometimes used in public debate can appear exaggerated, and it's easier to dismiss a \"doomsday tone\" outright than to evaluate the actual data behind the projections.",
    emotionalReframe: "It asks you to judge the tone instead of the numbers.",
    tenSecondReply:
      "Climate projections aren't generic apocalyptic predictions: they're published scenarios with probability ranges, based on measurable data, not sensationalism.",
    longerReply:
      "Some news headlines may use alarmist tones, but the underlying scientific projections — published in IPCC reports — present ranges of scenarios with different probability levels, tied to different levels of future emissions, not single catastrophic predictions. Media language shouldn't be confused with the underlying scientific content, which is more cautious and quantified than it's often portrayed to be.",
    scientificBackup:
      "IPCC reports systematically present uncertainty ranges and different emissions scenarios (from lower to higher), with associated probabilities, avoiding single or deterministic predictions.",
    italianAngle:
      "Projections for the Mediterranean region, including southern Europe, are published with explicit uncertainty ranges by national agencies and Copernicus, not as single definitive forecasts.",
    sourceIds: ["ipcc", "copernicus-c3s"],
    tags: ["catastrophism", "minimization", "projections"],
  },
  {
    id: "neve-cade-ancora",
    slug: "la-neve-cade-ancora",
    claim: "Snow still falls, so there's no warming.",
    aliases: [
      "it snowed a ton so global warming isn't real",
      "snow disproves changing climate",
    ],
    verdict: "fuorviante",
    technique: "cherry_picking",
    shortLabel: "Cherry-picking: a local event doesn't disprove the global trend",
    whyItPersuades: "Snow is intuitively associated with cold, so its presence seems to contradict the idea of global warming.",
    emotionalReframe: "It gets you to mistake a single local weather event for evidence against a decades-long global trend.",
    tenSecondReply:
      "A warmer atmosphere can hold more moisture, and under some conditions that means heavier snow in a single event, without disproving the long-term average warming.",
    longerReply:
      "Snow falling in a given place and moment doesn't contradict global warming: a warmer atmosphere holds more water vapor, which under still-below-freezing conditions can translate into heavier snowfall in individual events. Global warming is an average trend measured across the whole planet over decades, not the absence of snow in every single place and moment.",
    scientificBackup:
      "Climate analyses distinguish between the average global temperature trend, which is rising, and local weather variability, including heavy snowfall, which can still occur within a planet that's warmer on average.",
    italianAngle:
      "Across the Alps, you can see both a long-term reduction in average snow cover and occasional intense snowfall events — data that national agencies and Copernicus track separately.",
    sourceIds: ["copernicus-c3s", "ispra"],
    tags: ["snow", "weather-vs-climate", "cherry-picking"],
  },
  {
    id: "scienziati-pagati-mentire",
    slug: "gli-scienziati-sono-pagati-per-mentire",
    claim: "Scientists are paid to lie.",
    aliases: [
      "climate scientists are paid to scare us",
      "climate science is a business",
    ],
    verdict: "complotto",
    technique: "complotto",
    shortLabel: "An unfalsifiable conspiracy against thousands of independent researchers",
    whyItPersuades:
      "Suspecting a hidden financial interest is a common distrust heuristic, and in some real cases it has actually happened — but here it's applied to those communicating the scientific consensus, not to those denying it.",
    emotionalReframe:
      "Suspicion about funding is legitimate — but it should point toward whoever actually has a financial interest in making you doubt, which is often the opposite of who you're accusing.",
    tenSecondReply:
      "Funding in science should rightly be scrutinized — but it's well documented that the opposite happened: companies with fossil fuel interests funded research to manufacture doubt, not the scientific consensus.",
    longerReply:
      "Suspicion about conflicts of interest in science is legitimate and should always be checked case by case. But when you do that seriously, with public documents, you find a pattern that's the opposite of what this claim suggests: companies with fossil fuel interests funded research and campaigns for decades specifically designed to manufacture doubt about the scientific consensus, not the other way around. The scientific consensus on global warming, meanwhile, rests on thousands of independent studies produced by institutions in different countries, with no single common funder.",
    scientificBackup:
      "A peer-reviewed study (Supran & Oreskes, 2017) compared ExxonMobil's internal research with its public communications, finding that the company was internally aware of human-caused warming while publicly fueling doubt about it; independent journalistic investigations and transparency research document similar cases of organized funding of climate doubt.",
    italianAngle:
      "The scientific consensus used by national agencies and academic communities across Europe rests on the same independent international scientific literature, not on a single funder or shared financial interest.",
    sourceIds: ["supran-oreskes-2017", "insideclimate-news-exxon", "ucs-climate-deception-dossiers", "ipcc"],
    tags: ["conspiracy", "funding", "conflicts-of-interest"],
  },
  {
    id: "ciclo-non-crisi",
    slug: "il-clima-e-un-ciclo-non-una-crisi",
    claim: "Climate is a cycle, not a crisis.",
    aliases: ["climate is cyclical, not a crisis", "it's just the earth's natural cycles"],
    verdict: "fuorviante",
    technique: "mezza_verita",
    shortLabel: "True that cycles exist, misleading to deny the current crisis",
    whyItPersuades:
      "It's true that Earth's climate has gone through natural cycles over timescales of thousands or millions of years, so the claim starts from a real fact.",
    emotionalReframe: "It uses the word \"cycle\" to make a change that, given its speed, is anything but normal seem unremarkable.",
    tenSecondReply:
      "Natural cycles exist, but they play out over thousands of years: current warming is happening within a few decades, an unprecedented speed by recent standards.",
    longerReply:
      "Earth's climate has gone through natural cycles of warming and cooling over timescales of thousands or millions of years, tied to factors like variations in Earth's orbit. The warming observed over recent decades, however, is happening on a vastly shorter timescale — a few decades instead of millennia — a pace that makes comparison with past natural cycles misleading: the speed of change is itself a risk factor, because it leaves less time for ecosystems and societies to adapt.",
    scientificBackup:
      "IPCC paleoclimate reconstructions show that past natural climate cycles unfolded over timescales of thousands of years, while the temperature increase observed from the 20th century to today has occurred over a much shorter interval, at a pace with no comparable recent precedent in the historical record.",
    italianAngle:
      "Temperature anomalies recorded across Europe in recent decades show a pace of change that is incompatible, in speed, with that of long-term natural climate cycles.",
    sourceIds: ["ipcc", "ispra"],
    tags: ["natural-cycle", "rate-of-change", "half-truth"],
  },
];

export function getClaimBySlug(slug: string): ClimateClaim | undefined {
  return claims.find((claim) => claim.slug === slug);
}

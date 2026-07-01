import type { Persona } from "../personas";

export const personas: Persona[] = [
  {
    id: "complottista-anti-elite",
    slug: "complottista-anti-elite",
    name: "Anti-elite conspiracy theorist",
    description:
      "Doesn't trust governments, media, scientists, or international institutions. Sees climate as an excuse for control, taxes, or manipulation.",
    coreFear: "Being controlled or manipulated by powerful interests.",
    identityDefense: "I'm not a sheep. I don't believe the propaganda.",
    persuasionStrategy:
      "Don't start with \"trust the experts.\" Start with \"follow the money\" and show who profits from delay while ordinary people pick up the tab.",
    avoidSaying: [
      "You have to trust the scientists.",
      "The IPCC says so.",
      "You're ignorant.",
      "This is the official truth.",
    ],
    sayInstead: [
      "I'm not asking you to trust the elites.",
      "I'm asking who profits if we do nothing.",
      "The wealthy can protect themselves. Everyone else picks up the tab.",
      "Let's look at the data, not the spin.",
    ],
    bestFrames: [
      "anti-manipulation",
      "cost to ordinary people",
      "follow the money",
      "health and local damage",
    ],
    exampleReplies: {
      gentle:
        "I get why you don't trust the elites. But that's exactly why we should ask who profits if we sit still while heat, damage, insurance, and costs keep climbing.",
      direct:
        "I'm not asking you to trust politicians. I'm asking you to look at who pays. If the climate gets worse, the wealthy protect themselves. The bill lands on everyone else.",
      sharp:
        "The trick is making you think denial is rebellion. But if you stand still while others dump the costs on you, that's not rebellion — that's getting played.",
    },
  },
  {
    id: "destra-anti-ue",
    slug: "destra-anti-ue",
    name: "Anti-establishment nationalist",
    description:
      "Distrusts climate policy as something imposed by distant international bureaucracies, seen as disconnected from national interests and working people.",
    coreFear: "Losing national sovereignty and purchasing power to decisions made elsewhere, by people who don't answer to them.",
    identityDefense: "I defend my country's interests, not orders from some distant bureaucracy.",
    persuasionStrategy:
      "Don't start by defending international institutions wholesale. Start with the concrete cost of depending on energy imported from abroad, and how a well-managed transition strengthens national energy independence rather than weakening it.",
    avoidSaying: [
      "You have to trust international institutions.",
      "It comes from the top, so it must be right.",
      "You're just a nationalist.",
      "That's the official government line.",
    ],
    sayInstead: [
      "I'm not asking you to trust distant bureaucrats.",
      "I'm asking whether it's smart to keep depending on imported gas and oil.",
      "The more energy produced at home, the less money leaves the country.",
      "Let's look at the national interest with numbers, not slogans.",
    ],
    bestFrames: [
      "energy sovereignty",
      "national interest",
      "independence from foreign suppliers",
      "cost of imports",
    ],
    exampleReplies: {
      gentle:
        "I understand the distrust of decisions made far away. But precisely out of national interest, it's worth asking: does it make sense to keep depending on gas and oil bought abroad?",
      direct:
        "I'm not asking you to trust international bodies. I'm asking whether it makes sense for a country like ours to stay dependent on imported fossil energy instead of producing more of it at home.",
      sharp:
        "The trick is making you think refusing the transition defends the country. In reality, it leaves your country dependent on whoever controls gas and oil abroad.",
    },
  },
  {
    id: "padre-pratico",
    slug: "padre-pratico",
    name: "Practical parent",
    description:
      "Pragmatic, focused on concrete solutions and the household budget rather than ideological debates. Wants to know what's worth doing, not argue theory.",
    coreFear: "Making the wrong call in a way that hits the family budget or puts the kids' safety at risk.",
    identityDefense: "I think about my family, not ideology.",
    persuasionStrategy:
      "Don't open with global alarm. Start with practical, concrete benefits: bills, kids' health, home value, safety from extreme events.",
    avoidSaying: [
      "You have to save the planet.",
      "It's a moral duty to future generations.",
      "Anyone who doesn't act is selfish.",
      "Look at the IPCC data.",
    ],
    sayInstead: [
      "Lower energy use, lower bills.",
      "Less extreme heat, fewer risks for your kids in summer.",
      "An efficient home is worth more and costs less to run.",
      "These are practical choices, not ideology.",
    ],
    bestFrames: ["saving money", "kids' health", "home value", "practical safety"],
    exampleReplies: {
      gentle:
        "I get that you want concrete solutions, not talk. Just look at the bill: a more efficient home means lower energy use and lower costs every month.",
      direct:
        "I'm not asking you to save the planet. I'm asking if you want to pay less on your energy bill and protect your kids from increasingly frequent heat waves.",
      sharp:
        "Ignoring climate isn't neutral for your family: it means higher bills, more health risks in summer, and a home that's worth less over the years.",
    },
  },
  {
    id: "madre-preoccupata",
    slug: "madre-preoccupata",
    name: "Worried parent",
    description:
      "Already sympathetic to the issue but often anxious or overwhelmed by catastrophic news, at risk of sliding into doomism rather than denial.",
    coreFear: "That her kids will grow up in a dangerous world, and that there's nothing she can do to protect them.",
    identityDefense: "I'm a good parent, but I feel powerless in the face of all this.",
    persuasionStrategy:
      "Don't pile on more alarm. Offer concrete, proportionate action: clear information, practical steps, a sense of control — avoiding both minimizing and doom-mongering.",
    avoidSaying: [
      "It's the end of the world.",
      "There's nothing left to do.",
      "If you don't act now your kids won't have a future.",
      "You should feel guilty about how you live.",
    ],
    sayInstead: [
      "It's not all or nothing: every action reduces a real risk.",
      "You can inform yourself and make practical choices without living in panic.",
      "The problem is serious, but it isn't hopeless.",
      "You're not alone: these are collective choices, not just yours.",
    ],
    bestFrames: ["protecting kids", "proportionate action", "risk reduction", "community, not individual guilt"],
    exampleReplies: {
      gentle:
        "I understand the anxiety about your kids' future. The good news is it's not all or nothing: every action, individual and collective, reduces a real risk.",
      direct:
        "You don't need to live in panic or carry the guilt alone. Getting informed and making practical choices is already a useful, concrete response.",
      sharp:
        "Doomism paralyzes just as much as denial does. The best way to protect your kids is to act with a clear head, not with fear.",
    },
  },
  {
    id: "collega-cinico",
    slug: "collega-cinico",
    name: "Cynical coworker",
    description:
      "Doesn't openly deny the problem but waves it off with sarcasm and detachment, treating it as a trendy topic that isn't a priority next to actual work.",
    coreFear: "Looking naive or \"do-gooder\" in front of colleagues by showing interest in the topic.",
    identityDefense: "I'm a realist. I don't follow whatever's trending.",
    persuasionStrategy:
      "Don't ask for enthusiasm. Match the tone: pragmatic and direct, grounded in concrete business risk and cost, not values.",
    avoidSaying: [
      "You should care more about the planet.",
      "You're misinformed.",
      "It's a matter of values.",
      "Don't you care about the future at all?",
    ],
    sayInstead: [
      "It's a concrete operational risk, not a trend.",
      "Companies that ignore it pay higher costs later.",
      "This isn't idealism, it's risk management.",
      "Look at the numbers, not the sentiment.",
    ],
    bestFrames: ["operational risk", "business cost", "risk management", "pragmatism, not values"],
    exampleReplies: {
      gentle:
        "I get the skepticism toward yet another \"trendy\" topic. But look at it as operational risk: companies that ignore it pay more later, not sooner.",
      direct:
        "I'm not asking you to believe in this for values. I'm telling you as a matter of pragmatism: it's a concrete, measurable economic risk that's growing on multiple fronts.",
      sharp:
        "Sarcasm doesn't lower insurance premiums or the cost of extreme-weather damage. It's a real risk, whether you buy into the values or not.",
    },
  },
  {
    id: "giovane-doomista",
    slug: "giovane-doomista",
    name: "Young doomer",
    description:
      "Aware of the problem but paralyzed by despair, convinced it's already too late to do anything meaningful.",
    coreFear: "That any effort is pointless and the future is already locked in for the worse.",
    identityDefense: "I see reality for what it is. I don't kid myself like everyone else.",
    persuasionStrategy:
      "Don't minimize the anxiety or reassure with naive optimism. Draw the line between \"not everything is avoidable\" and \"nothing matters,\" showing that action still reduces real harm even in tough scenarios.",
    avoidSaying: [
      "Everything will be fine.",
      "Don't be so pessimistic.",
      "Just be optimistic and it'll sort itself out.",
      "You're overreacting.",
    ],
    sayInstead: [
      "Not everything is avoidable, but not everything is decided yet.",
      "Every fraction of a degree less means real, measurable harm avoided.",
      "The despair is understandable, but it doesn't change the data on future scenarios.",
      "Even in the worst-case scenario, acting reduces the damage.",
    ],
    bestFrames: ["harm reduction", "scenarios not yet locked in", "acting without naive optimism", "scenario data, not slogans"],
    exampleReplies: {
      gentle:
        "I understand the despair — it's an understandable response to heavy information. But the data shows future scenarios aren't already written: they depend on emissions in the coming years.",
      direct:
        "Not everything is avoidable, but not everything has stopped mattering. Every fraction of a degree less translates into real harm avoided, even in tough scenarios.",
      sharp:
        "Doomism isn't any more \"realistic\" than denial. Both lead to the same inaction, just with a different emotion attached.",
    },
  },
  {
    id: "piccolo-imprenditore",
    slug: "piccolo-imprenditore",
    name: "Small business owner",
    description:
      "Worried about the costs and red tape tied to environmental regulation, fears the transition will hurt the business more than it helps.",
    coreFear: "Unsustainable added costs and rules imposed without regard for the reality of running a small business.",
    identityDefense: "I work hard every single day. I don't have time for green paperwork.",
    persuasionStrategy:
      "Don't start from environmental duty. Start from energy risk, future compliance costs, and concrete opportunities (incentives, efficiency, competitiveness) that matter to a small business.",
    avoidSaying: [
      "Businesses need to do their part for the planet.",
      "If you don't adapt, you're part of the problem.",
      "It's a moral obligation for anyone who produces things.",
      "Big companies pollute more, that's their problem.",
    ],
    sayInstead: [
      "Less dependence on imported energy, less exposure to cost swings.",
      "Investing in efficiency today lowers your fixed costs tomorrow.",
      "There are real incentives for small businesses that adapt early.",
      "Delaying often costs more than getting ahead of it.",
    ],
    bestFrames: ["energy costs", "competitiveness", "available incentives", "risk of delaying"],
    exampleReplies: {
      gentle:
        "I understand the worry about costs. But look at it the other way too: investing in energy efficiency now reduces your fixed costs in the years ahead.",
      direct:
        "I'm not asking you to make sacrifices for the planet. I'm telling you that delaying often costs more than getting ahead of it, with incentives that exist today and might not exist tomorrow.",
      sharp:
        "Red tape is a real problem, but it's not an excuse to ignore an energy risk that will hit your costs eventually, one way or another.",
    },
  },
  {
    id: "odia-ambientalisti",
    slug: "odia-ambientalisti",
    name: "Person who can't stand environmentalists",
    description:
      "Their opposition comes more from irritation with activists and environmentalist messaging (seen as preachy or overbearing) than from any real rejection of the scientific data.",
    coreFear: "Being morally judged or having a lifestyle prescribed to them by people they see as hypocritical or arrogant.",
    identityDefense: "I can't stand people who lecture me on how to live.",
    persuasionStrategy:
      "Explicitly separate the scientific data from the communication style of individual activists. Don't defend the activists — validate the irritation, then pivot to the substance.",
    avoidSaying: [
      "Environmentalists are right about everything.",
      "You have to respect people protesting for climate.",
      "You're heartless if you don't like them.",
      "They're heroes saving the planet.",
    ],
    sayInstead: [
      "You don't have to like activists to look at the data.",
      "You can find a protest annoying and still weigh the numbers.",
      "The messenger doesn't change the satellite temperature record.",
      "Let's talk about the data, not the people delivering it.",
    ],
    bestFrames: ["separate message from messenger", "data independent of activists", "no obligation to like anyone"],
    exampleReplies: {
      gentle:
        "I get the irritation with certain tones. But try separating the people from the data: you can dislike a protest and still look at the temperature measurements.",
      direct:
        "I'm not asking you to like any activist. Satellite temperature data doesn't depend on how likeable you find the person reporting it.",
      sharp:
        "Confusing irritation at a messenger with judgment of the message is convenient, but it doesn't change a single data point.",
    },
  },
  {
    id: "negazionista-pseudo-scientifico",
    slug: "negazionista-pseudo-scientifico",
    name: "Pseudo-scientific denier",
    description:
      "Cites charts, acronyms, and technical jargon to sound informed, often drawing on unverified or out-of-context sources, and presents themselves as someone who \"did their own research.\"",
    coreFear: "Being seen as someone who believes whatever they're told, rather than someone who \"looked into it themselves.\"",
    identityDefense: "I did my own research. I don't just repeat what the news says.",
    persuasionStrategy:
      "Don't dismiss their sources without looking at them. Ask for the primary source, check the methodology together, and compare it against peer-reviewed sources, keeping a peer-to-peer tone, not a lecture.",
    avoidSaying: [
      "Your sources are garbage.",
      "You don't have the background to understand this.",
      "Just trust the experts.",
      "You've only read nonsense.",
    ],
    sayInstead: [
      "Where does this chart actually come from?",
      "Was it published in a peer-reviewed journal?",
      "Let's compare it against IPCC or Copernicus data, which are public and verifiable.",
      "I also prefer to check sources before believing them.",
    ],
    bestFrames: ["checking the primary source", "peer review", "comparing public data", "peer-to-peer, not a lecture"],
    exampleReplies: {
      gentle:
        "I appreciate that you want to check for yourself instead of just trusting blindly. Let's look together at where this data comes from — is it peer-reviewed or not?",
      direct:
        "Your sources need to be checked like any other: where does the chart come from, who published it, and has it been verified by other independent scientists?",
      sharp:
        "\"Doing your own research\" isn't enough if the source doesn't hold up against public, verifiable data like the IPCC's or Copernicus's.",
    },
  },
  {
    id: "non-mi-riguarda",
    slug: "non-mi-riguarda",
    name: "\"This doesn't affect me\" person",
    description:
      "Doesn't deny or actively oppose anything, simply sees the topic as far removed from their daily life and without direct consequences for them.",
    coreFear: "No specific fear: more indifference, a lack of any sense of personal relevance.",
    identityDefense: "I've got other things to worry about. This doesn't touch me.",
    persuasionStrategy:
      "Don't open with abstract global data. Make it immediately local and personal: bills, health, city, home, neighborhood.",
    avoidSaying: [
      "The planet is in danger.",
      "You need to think about future generations.",
      "It's a global emergency.",
      "Everyone should be worried about this.",
    ],
    sayInstead: [
      "It affects your energy bill, this summer.",
      "It affects how hot your city will be in ten years.",
      "It affects the value of the home you live in.",
      "You don't need to think about the planet — just think about your own street.",
    ],
    bestFrames: ["local relevance", "direct personal impact", "bills and home", "neighborhood and city"],
    exampleReplies: {
      gentle:
        "I get that it feels distant. But think about your energy bill, and how hot your city will get in a few summers from now: it's already close to home.",
      direct:
        "I'm not asking you to think about the planet. I'm asking you to think about how much it'll cost to cool your home ten increasingly hot summers from now.",
      sharp:
        "\"This doesn't affect me\" only holds up until you look at your energy bill, your city in summer, or the value of your home near a river.",
    },
  },
];

export function getPersonaBySlug(slug: string): Persona | undefined {
  return personas.find((persona) => persona.slug === slug);
}

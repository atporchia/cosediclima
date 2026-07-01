import type { Technique } from "../techniques";
import type { ManipulationTechnique } from "../claims";

export const techniques: Technique[] = [
  {
    id: "cherry_picking",
    slug: "cherry-picking",
    name: "Cherry-picking",
    definition:
      "Picking a single data point or isolated event while ignoring the long-term trend it sits inside.",
    italianExample: "\"It's cold today.\"",
    whyItWorks:
      "A direct, immediate experience (today's cold snap) feels more convincing than an abstract statistic spanning decades of data.",
    howToRespond:
      "Bring the conversation back from the single day to the long-term trend, drawing a clear line between weather (short-term) and climate (long-term).",
    tenSecondReply:
      "One cold day doesn't disprove a climate trend. Weather and climate aren't the same thing.",
  },
  {
    id: "falso_equilibrio",
    slug: "falso-equilibrio",
    name: "False balance",
    definition:
      "Presenting a minority of dissenting opinions as if they carried the same evidentiary weight as the scientific consensus.",
    italianExample: "\"There are scientists who disagree.\"",
    whyItWorks:
      "The \"two sides\" format looks fair and reasonable, but it hides just how lopsided the actual distribution of evidence is.",
    howToRespond:
      "Make clear that dissent existing doesn't mean the weight is split evenly: what matters is the quantity and quality of evidence, not the number of voices.",
    tenSecondReply:
      "A dissenting minority existing doesn't mean the evidence is split fifty-fifty.",
  },
  {
    id: "complotto",
    slug: "teoria-del-complotto",
    name: "Conspiracy theory",
    definition:
      "Turning a verifiable scientific question into an alleged secret, unfalsifiable plot by powerful actors.",
    italianExample: "\"It's all a plan by the elites.\"",
    whyItWorks:
      "It offers a simple explanation and a clear enemy, and it insulates whoever proposes it from any contrary evidence (\"that's exactly what they want you to believe\").",
    howToRespond:
      "There's no need to defend the elites: shift the focus to verifiable data and to who actually foots the bill for delay.",
    tenSecondReply:
      "You don't need to trust the elites. Just look at the data, the risks, and who pays the price of delay.",
  },
  {
    id: "benaltrismo",
    slug: "benaltrismo",
    name: "Whataboutism",
    definition:
      "Deflecting the discussion by pointing to a different problem or a different responsible party, instead of addressing the point raised.",
    italianExample: "\"What about China, then?\"",
    whyItWorks:
      "It shifts responsibility onto a distant actor perceived as beyond our control, offering a convenient excuse not to act.",
    howToRespond:
      "Acknowledge the point (yes, China emits a lot) but bring the conversation back to what's within our direct control, here and now.",
    tenSecondReply:
      "Saying \"what about China?\" is the perfect way to do nothing while the bill lands on us too.",
  },
  {
    id: "ritardo",
    slug: "ritardismo",
    name: "Delayism",
    definition:
      "Accepting the problem in theory but pushing action off indefinitely with an endless string of new conditions.",
    italianExample: "\"Let's think about the economy first.\"",
    whyItWorks:
      "It sounds like a reasonable, cautious position rather than denial, which makes it harder to challenge than outright denialism.",
    howToRespond:
      "Show that delay isn't neutral: it carries a growing economic cost that just gets pushed into the future, and usually gets worse.",
    tenSecondReply:
      "Delaying climate action doesn't protect the economy. It just shifts the costs into the future, usually at a higher price.",
  },
  {
    id: "doomismo",
    slug: "doomismo",
    name: "Doomism",
    definition:
      "Using despair or a sense of inevitability as a justification for doing nothing.",
    italianExample: "\"It's already too late anyway.\"",
    whyItWorks:
      "It offers emotional protection from climate anxiety: if it's already lost, there's no need to act or to feel guilty about not acting.",
    howToRespond:
      "Draw the line between \"impossible to avoid every effect\" and \"pointless to act\": every fraction of a degree avoided reduces real harm.",
    tenSecondReply:
      "Too late to avoid everything doesn't mean too late to avoid the worst of it.",
  },
  {
    id: "perfezione_impossibile",
    slug: "perfezione-impossibile",
    name: "Impossible perfection",
    definition:
      "Rejecting a partial solution because it doesn't solve the whole problem.",
    italianExample: "\"Renewables don't fix everything.\"",
    whyItWorks:
      "It exploits the ideal of a perfect solution to discredit any intermediate step, even a useful one.",
    howToRespond:
      "Point out that reducing harm has value even without eliminating it entirely: a solution doesn't need to be perfect to justify acting on it.",
    tenSecondReply:
      "A solution doesn't have to fix everything by itself to be worth it. Reducing the damage still counts.",
  },
  {
    id: "attacco_identitario",
    slug: "attacco-identitario",
    name: "Identity attack",
    definition:
      "Attacking the identity or lifestyle of people who care about the problem, instead of discussing the problem itself.",
    italianExample: "\"That's just virtue-signaling nonsense.\"",
    whyItWorks:
      "It turns a factual question into a question of group belonging, making it harder to change your mind without feeling like you're \"betraying\" your own identity.",
    howToRespond:
      "Separate the person from the data: you don't need to love environmentalists to recognize a real, evidence-backed risk.",
    tenSecondReply: "You don't have to love environmentalists to recognize a real risk.",
  },
  {
    id: "mezza_verita",
    slug: "mezza-verita",
    name: "Half-truth",
    definition:
      "Using a statement that's true in the abstract to distract from a specific problem that the statement, on its own, doesn't actually disprove.",
    italianExample: "\"The climate has always changed.\"",
    whyItWorks:
      "It's technically correct, so it feels hard to argue with — but it hides the fact that the real point in question is something else entirely (speed, cause, cost).",
    howToRespond:
      "Confirm the part that's true, then immediately shift attention to what makes the current change different: speed, human cause, cost.",
    tenSecondReply:
      "Sure, the climate has always changed. But this time the issue is the speed, the cost, and who's left holding the bill.",
  },
  {
    id: "sfiducia_generalizzata",
    slug: "sfiducia-generalizzata",
    name: "Blanket distrust",
    definition:
      "Discrediting a scientific finding not by challenging the finding itself, but by rejecting wholesale, and in advance, the institutional source reporting it.",
    italianExample: "\"I don't trust whatever the government or the media says.\"",
    whyItWorks:
      "It leverages a genuine distrust of institutions to avoid ever having to evaluate the specific data on its merits.",
    howToRespond:
      "Don't ask for blind trust: invite them to look at verifiable data, public methods, and who has a financial interest in denial — not just who's delivering the message.",
    tenSecondReply:
      "I'm not asking you to trust institutions. I'm asking you to look at the data and at who benefits from you ignoring it.",
  },
  {
    id: "falsa_incertezza",
    slug: "falsa-incertezza",
    name: "False uncertainty",
    definition:
      "Presenting the normal, quantified uncertainty of science (about details, timing, magnitude) as if it were uncertainty about the underlying phenomenon itself.",
    italianExample: "\"Climate models are always wrong.\"",
    whyItWorks:
      "It conflates two very different kinds of uncertainty: exactly how something will unfold (uncertain in the details) versus whether it's happening at all (not uncertain).",
    howToRespond:
      "Draw the distinction: models have margins of error on details and timing, but the core predictions about human-caused warming have proven accurate over time.",
    tenSecondReply:
      "Models have margins of error on the details, not on whether the planet is warming because of human activity.",
  },
  {
    id: "minimizzazione",
    slug: "minimizzazione",
    name: "Minimizing",
    definition:
      "Downplaying a real phenomenon by treating it as normal seasonal routine or as marginal.",
    italianExample: "\"It's just summer.\"",
    whyItWorks:
      "It leverages a familiar, harmless experience (summer) to make an increased risk look normal when it no longer is.",
    howToRespond:
      "Acknowledge that the underlying phenomenon is normal, but show that its current intensity or frequency no longer is.",
    tenSecondReply:
      "It's not \"just summer.\" It's extreme heat with a measurably higher health risk than before.",
  },
];

export function getTechniqueById(id: ManipulationTechnique): Technique | undefined {
  return techniques.find((technique) => technique.id === id);
}

import { Character } from "../character/character";
import { getRandomArrayValue } from "../utils/dice-roller";

const culturalValues: readonly {
  readonly values: readonly string[];
  readonly suggestedMotivation: string;
}[] = [
  {
    values: ["wealth", "prosperity"],
    suggestedMotivation: "To gather wealth and prestige",
  },
  {
    values: ["generosity", "charity"],
    suggestedMotivation: "To offer aid where needed",
  },
  {
    values: ["religious piety", "devotion"],
    suggestedMotivation: "To honor the gods decrees",
  },
  {
    values: ["knowledge", "discovery"],
    suggestedMotivation: "To investigate tomes and records",
  },
  {
    values: ["discipline", "training"],
    suggestedMotivation: "To hone my numerous skills",
  },
  {
    values: ["hospitality", "community"],
    suggestedMotivation: "To bring people together & keep them safe",
  },
  {
    values: ["compassion", "animal husbandry"],
    suggestedMotivation: "To care for animals, even in the wilds",
  },
  {
    values: ["individuality", "opportunism"],
    suggestedMotivation: "To get ahead no matter the cost",
  },
  {
    values: ["innovation", "experimentation"],
    suggestedMotivation: "To build highly functional crafts & devices",
  },
  {
    values: ["curiosity", "exploration"],
    suggestedMotivation: "To seek out new peoples and places",
  },
  {
    values: ["authoritarianism", "spectacle"],
    suggestedMotivation: "To be renowned and command respect",
  },
  {
    values: ["acquisition", "enterprise"],
    suggestedMotivation: "To increase your holdings and lands",
  },
  {
    values: ["creation", "expression"],
    suggestedMotivation: "To support art, music, and artistry",
  },
  {
    values: ["craftsmanship", "status"],
    suggestedMotivation: "To gain influence by or with crafts",
  },
  {
    values: ["animism", "ritual"],
    suggestedMotivation: "To evoke traditional ritual knowledge",
  },
  {
    values: ["progress", "education"],
    suggestedMotivation: "To resist superstition and promote ideas",
  },
  {
    values: ["community growth", "commerce"],
    suggestedMotivation: "To witness a settlement thrive and grow",
  },
  {
    values: ["self-reliance", "autonomy"],
    suggestedMotivation: "To be able to do things myself",
  },
  {
    values: ["duty", "service"],
    suggestedMotivation: "To serve among the honored elite",
  },
  {
    values: ["ancestry", "local history"],
    suggestedMotivation: "To learn about heraldry and lore",
  },
];

const rollCulturalValues = (character: Character) => {
  const { values, suggestedMotivation } = getRandomArrayValue(culturalValues);

  character.origins.culturalValues = getRandomArrayValue(values);
  character.origins.suggestedMotivation = suggestedMotivation;
};

export { rollCulturalValues };

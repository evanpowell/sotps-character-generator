import { getRandomArrayValue } from "../utils/dice-roller";
import { Attribute, AttributeEnum } from "../character/attributes";
import { Character } from "../character/character";

const reputations: readonly {
  readonly description: string;
  attributeAdjustments: readonly { target: Attribute; amount: number }[];
}[] = [
  {
    description: "Despised by locals due to unfortunate events",
    attributeAdjustments: [
      {
        target: AttributeEnum.AGI,
        amount: 2,
      },
      {
        target: AttributeEnum.INT,
        amount: 1,
      },
      {
        target: AttributeEnum.WIS,
        amount: -2,
      },
    ],
  },
  {
    description: "Wanted for crimes by local authorities",
    attributeAdjustments: [
      {
        target: AttributeEnum.PER,
        amount: 2,
      },
      {
        target: AttributeEnum.ACC,
        amount: 1,
      },
      {
        target: AttributeEnum.CHA,
        amount: -2,
      },
    ],
  },
  {
    description: "Cast out from household or exiled from area",
    attributeAdjustments: [
      {
        target: AttributeEnum.ACC,
        amount: 2,
      },
      {
        target: AttributeEnum.STR,
        amount: 1,
      },
      {
        target: AttributeEnum.INT,
        amount: -2,
      },
    ],
  },
  {
    description: "Unknown and unnoticed by unimpressed locals",
    attributeAdjustments: [
      {
        target: AttributeEnum.WIS,
        amount: 2,
      },
      {
        target: AttributeEnum.INT,
        amount: 1,
      },
      {
        target: AttributeEnum.STR,
        amount: -2,
      },
    ],
  },
  {
    description: "Misunderstood and underappreciated by many",
    attributeAdjustments: [
      {
        target: AttributeEnum.END,
        amount: 2,
      },
      {
        target: AttributeEnum.CHA,
        amount: 1,
      },
      {
        target: AttributeEnum.ACC,
        amount: -2,
      },
    ],
  },
  {
    description: "Involved in a dangerous, controversial event",
    attributeAdjustments: [
      {
        target: AttributeEnum.INT,
        amount: 2,
      },
      {
        target: AttributeEnum.PER,
        amount: 1,
      },
      {
        target: AttributeEnum.AGI,
        amount: -2,
      },
    ],
  },
  {
    description: "Involved in a heroic communal endeavor",
    attributeAdjustments: [
      {
        target: AttributeEnum.CHA,
        amount: 2,
      },
      {
        target: AttributeEnum.INT,
        amount: 2,
      },
      {
        target: AttributeEnum.PER,
        amount: -2,
      },
    ],
  },
  {
    description: "Overworked and exploited by the community",
    attributeAdjustments: [
      {
        target: AttributeEnum.STR,
        amount: 2,
      },
      {
        target: AttributeEnum.END,
        amount: 1,
      },
      {
        target: AttributeEnum.CHA,
        amount: -2,
      },
    ],
  },
  {
    description: "Mistrusted and regarded with uncertainty",
    attributeAdjustments: [
      {
        target: AttributeEnum.AGI,
        amount: 2,
      },
      {
        target: AttributeEnum.ACC,
        amount: 1,
      },
      {
        target: AttributeEnum.END,
        amount: -2,
      },
    ],
  },
  {
    description: "Friendly and cordial with local community",
    attributeAdjustments: [
      {
        target: AttributeEnum.ACC,
        amount: 2,
      },
      {
        target: AttributeEnum.AGI,
        amount: 1,
      },
      {
        target: AttributeEnum.PER,
        amount: 2,
      },
    ],
  },
  {
    description: "Respected and admired by nearby locals",
    attributeAdjustments: [
      {
        target: AttributeEnum.WIS,
        amount: 2,
      },
      {
        target: AttributeEnum.INT,
        amount: 1,
      },
      {
        target: AttributeEnum.ACC,
        amount: -2,
      },
    ],
  },
  {
    description: "Honored and supported by most of the locals",
    attributeAdjustments: [
      {
        target: AttributeEnum.CHA,
        amount: 2,
      },
      {
        target: AttributeEnum.WIS,
        amount: 1,
      },
      {
        target: AttributeEnum.STR,
        amount: -2,
      },
    ],
  },
] as const;

const rollReputation = (character: Character) => {
  const { description, attributeAdjustments } =
    getRandomArrayValue(reputations);

  character.origins.reputation = description;

  attributeAdjustments.forEach(({ target, amount }) => {
    character.attributes.adjustments[target] += amount;
  });
};

export { rollReputation };

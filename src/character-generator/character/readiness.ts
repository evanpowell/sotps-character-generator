import { AttributeEnum } from "./attributes";
import { Character } from "./character";
import { ConditioningEnum } from "./conditioning";

const calculateReadiness = (character: Character) => {
  const poiseConditioning = character.conditioning[ConditioningEnum.POISE];
  const avoidanceConditioning =
    character.conditioning[ConditioningEnum.AVOIDANCE];
  const capacityConditioning =
    character.conditioning[ConditioningEnum.CAPACITY];

  const bonusPenalties = character.attributes.bonusPenalties;

  return {
    poise: bonusPenalties[AttributeEnum.WIS] + poiseConditioning + 8,
    avoidance: bonusPenalties[AttributeEnum.AGI] + avoidanceConditioning + 8,
    capacity: bonusPenalties[AttributeEnum.END] * capacityConditioning + 8,
  };
};

export { calculateReadiness };

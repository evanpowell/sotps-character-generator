import type { Character } from "../character/character";
import type { Modification, ModificationType } from "./modifications";
import { ModificationTypeEnum } from "./modifications";

const rollAmount = (
  character: Character,
  type: ModificationType,
  callback: (amount?: number) => number
): number => {
  if (type === ModificationTypeEnum.WEIGHT) {
    return callback(character.characteristics.weight);
  } else if (type === ModificationTypeEnum.HEIGHT) {
    return callback(character.characteristics.height);
  } else {
    return callback();
  }
};

const applyModifications = (
  character: Character,
  modifications: Modification[]
): void => {
  modifications.forEach((modification) => {
    let { amount } = modification;

    if (typeof amount !== "number") {
      amount = rollAmount(character, modification.type, amount);
    }

    switch (modification.type) {
      case ModificationTypeEnum.ATTRIBUTE: {
        if (modification.target) {
          character.attributes.adjustments[modification.target] += amount;
        }
        break;
      }
      case ModificationTypeEnum.HEIGHT: {
        character.characteristics.height += amount;
        break;
      }

      case ModificationTypeEnum.SKILL: {
        const { target } = modification;
        break;
      }
      case ModificationTypeEnum.WEALTH: {
        character.wealth += amount;
        break;
      }
      case ModificationTypeEnum.WEIGHT: {
        character.characteristics.weight += amount;
        break;
      }
    }
  });
};

export { applyModifications };

import {
  getRandomArrayValue,
  getRandomObjectEntry,
  rollDice,
  rollDie,
} from "../utils/dice-roller";
import { Ancestry, AncestryEnum, Sex } from "../character/characteristics";
import { ancestryHeightRollMap } from "./height";
import { styles } from "./style";
import { ancestryWeightRollMap } from "./weight";
import { Character } from "../character/character";
import { ancestryAgeRollMap } from "./age";

const rollSex = (): Sex => {
  const roll = rollDie(8);

  if (roll >= 7) {
    return "Inter";
  }

  return roll % 2 ? "M" : "F";
};

const rollAncestry = (): Ancestry => {
  return getRandomObjectEntry(AncestryEnum)[1];
};

const rollHeight = (ancestry: Ancestry): number => {
  const { numDice, sides, modifier } = ancestryHeightRollMap[ancestry];
  return rollDice(numDice, sides, modifier);
};

const rollWeight = (ancestry: Ancestry): number => {
  const { numDice, sides, modifier } = ancestryWeightRollMap[ancestry];
  return rollDice(numDice, sides, modifier);
};

const rollAge = (ancestry: Ancestry): number => {
  const { numDice, sides, modifier } = ancestryAgeRollMap[ancestry];
  return rollDice(numDice, sides, modifier);
};

const rollStyle = (): string => {
  return getRandomArrayValue(getRandomArrayValue(styles));
};

function determineCharacteristics(character: Character) {
  const ancestry = rollAncestry();

  character.characteristics = {
    sex: rollSex(),
    ancestry,
    height: rollHeight(ancestry),
    weight: rollWeight(ancestry),
    age: rollAge(ancestry),
    style: rollStyle(),
  };
}

export { determineCharacteristics };

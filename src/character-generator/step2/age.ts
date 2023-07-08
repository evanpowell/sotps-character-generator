import { DiceParamsAsObject } from "../utils/dice-roller";
import { Ancestry, AncestryEnum } from "../character/characteristics";

type AncestryAgeRollMap = Record<Ancestry, DiceParamsAsObject>;

const ancestryAgeRollMap: AncestryAgeRollMap = {
  [AncestryEnum.AISLUN]: {
    numDice: 1,
    sides: 12,
    modifier: 19,
  },
  [AncestryEnum.DJENNDAN]: {
    numDice: 1,
    sides: 8,
    modifier: 13,
  },
  [AncestryEnum.HUMAN]: {
    numDice: 1,
    sides: 10,
    modifier: 15,
  },
  [AncestryEnum.KAHLNISSA]: {
    numDice: 1,
    sides: 10,
    modifier: 17,
  },
  [AncestryEnum.PULNAGA]: {
    numDice: 1,
    sides: 10,
    modifier: 15,
  },
  [AncestryEnum.VIANTU]: {
    numDice: 1,
    sides: 8,
    modifier: 11,
  },
} as const;

export { ancestryAgeRollMap };

import { DiceParamsAsObject } from "../utils/dice-roller";
import { Ancestry, AncestryEnum } from "../character/characteristics";

type AncestryWeightRollMap = Record<Ancestry, DiceParamsAsObject>;

const ancestryWeightRollMap: AncestryWeightRollMap = {
  [AncestryEnum.AISLUN]: {
    numDice: 5,
    sides: 20,
    modifier: 60,
  },
  [AncestryEnum.DJENNDAN]: {
    numDice: 6,
    sides: 20,
    modifier: 250,
  },
  [AncestryEnum.HUMAN]: {
    numDice: 6,
    sides: 20,
    modifier: 100,
  },
  [AncestryEnum.KAHLNISSA]: {
    numDice: 5,
    sides: 20,
    modifier: 50,
  },
  [AncestryEnum.PULNAGA]: {
    numDice: 5,
    sides: 20,
    modifier: 100,
  },
  [AncestryEnum.VIANTU]: {
    numDice: 3,
    sides: 20,
    modifier: 40,
  },
} as const;

export { ancestryWeightRollMap };

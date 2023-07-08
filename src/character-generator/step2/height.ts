import { DiceParamsAsObject } from "../utils/dice-roller";
import { Ancestry, AncestryEnum } from "../character/characteristics";

type AncestryHeightRollMap = Record<Ancestry, DiceParamsAsObject>;

const ancestryHeightRollMap: AncestryHeightRollMap = {
  [AncestryEnum.AISLUN]: {
    numDice: 3,
    sides: 6,
    modifier: 40,
  },
  [AncestryEnum.DJENNDAN]: {
    numDice: 3,
    sides: 6,
    modifier: 84,
  },
  [AncestryEnum.HUMAN]: {
    numDice: 3,
    sides: 6,
    modifier: 60,
  },
  [AncestryEnum.KAHLNISSA]: {
    numDice: 4,
    sides: 6,
    modifier: 48,
  },
  [AncestryEnum.PULNAGA]: {
    numDice: 3,
    sides: 6,
    modifier: 60,
  },
  [AncestryEnum.VIANTU]: {
    numDice: 4,
    sides: 6,
    modifier: 36,
  },
} as const;

export { ancestryHeightRollMap };

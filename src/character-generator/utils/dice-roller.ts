import { ObjectValue } from "./utility-types";
import { objectKeys } from "./general-utils";

const rollDie = (sides: number): number => {
  return Math.floor(Math.random() * sides + 1);
};

const rollDice = (
  numDice: number,
  sides: number,
  modifier: number = 0
): number => {
  let sum = 0;

  for (let i = 0; i < numDice; i++) {
    sum += rollDie(sides);
  }

  return sum + modifier;
};

const randomizeIndex = <Type>(array: Type[] | readonly Type[]): number => {
  return rollDie(array.length) - 1;
};

const getRandomArrayValue = <Type>(array: Type[] | readonly Type[]): Type => {
  return array[randomizeIndex(array)];
};

const getRandomObjectKey = <Obj extends {}>(obj: Obj): keyof Obj => {
  return getRandomArrayValue(objectKeys(obj));
};

const getRandomObjectEntry = <Obj extends {}>(
  obj: Obj
): [keyof Obj, ObjectValue<Obj>] => {
  const key = getRandomObjectKey(obj);
  return [key, obj[key]];
};

const rollOddsOutOf100 = (percentage: number): boolean => {
  return rollDie(100) <= percentage;
};

enum FourD6DiceResult {
  ALL_NUMBERS_DISTINCT,
  SEQUENTIAL_NUMBERS,
  ONE_EQUAL_PAIR,
  THREE_EQUAL_NUMBERS,
  TWO_EQUAL_PAIRS,
  ALL_EQUAL_NUMBERS,
}

const roll4D6DiceResults = (): { total: number; result: FourD6DiceResult } => {
  const rolls = new Array(4).fill(null).map(() => rollDie(6));
  const total = rolls.reduce((sum, roll) => sum + roll, 0);
  const rollOccurrenceMap = rolls.reduce((map, roll) => {
    return {
      ...map,
      [roll]: (map[roll] || 0) + 1,
    };
  }, {} as { [key: number]: number });

  const occurences = Object.values(rollOccurrenceMap);

  let result: FourD6DiceResult;
  if (occurences.includes(4)) {
    result = FourD6DiceResult.ALL_EQUAL_NUMBERS;
  } else if (occurences.includes(2) && !occurences.includes(1)) {
    result = FourD6DiceResult.TWO_EQUAL_PAIRS;
  } else if (occurences.includes(3)) {
    result = FourD6DiceResult.THREE_EQUAL_NUMBERS;
  } else if (occurences.includes(2)) {
    result = FourD6DiceResult.ONE_EQUAL_PAIR;
  } else {
    result = FourD6DiceResult.ALL_NUMBERS_DISTINCT;
  }

  return { total, result };
};

type DiceParamsAsObject = {
  numDice: number;
  sides: number;
  modifier: number;
};

export type { DiceParamsAsObject };

export {
  rollDie,
  rollDice,
  rollOddsOutOf100,
  roll4D6DiceResults,
  randomizeIndex,
  getRandomArrayValue,
  getRandomObjectEntry,
  objectKeys,
  FourD6DiceResult,
};

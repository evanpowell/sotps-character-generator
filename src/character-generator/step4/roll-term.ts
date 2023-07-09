import { Character } from "../character/character";
import {
  TrainedValueType,
  addNote,
  addPointsToRandomAttribute,
  addPointsToRandomTrainedValue,
} from "../utils/character-utils";
import {
  FourD6DiceResult,
  getRandomArrayValue,
  roll4D6DiceResults,
  rollDice,
} from "../utils/dice-roller";
import { forNumTimes } from "../utils/general-utils";

const trainingBonuses: {
  trainedValueType?: TrainedValueType;
  numPoints: number;
}[] = [
  { numPoints: 1 },
  { trainedValueType: TrainedValueType.PROFICIENCY, numPoints: 1 },
  { trainedValueType: TrainedValueType.CONDITIONING, numPoints: 1 },
  { trainedValueType: TrainedValueType.SKILL, numPoints: 1 },
  { trainedValueType: TrainedValueType.RESISTANCE, numPoints: 1 },
  { trainedValueType: TrainedValueType.INSIGHT, numPoints: 1 },
  { trainedValueType: TrainedValueType.INSIGHT, numPoints: 2 },
  { trainedValueType: TrainedValueType.RESISTANCE, numPoints: 2 },
  { trainedValueType: TrainedValueType.SKILL, numPoints: 2 },
  { trainedValueType: TrainedValueType.CONDITIONING, numPoints: 2 },
  { trainedValueType: TrainedValueType.PROFICIENCY, numPoints: 2 },
  { numPoints: 2 },
];

const obstacles = [
  "Stubborn, avoids showing weakness or vulnerability",
  "Is cynical, pessimistic, or suspicious of opportunities",
  "Can't and won't back down from a fight",
  "Craves attention or recognition",
  "Is overly compelled by rumors and gossip",
  "Excessively deferential or subservient toward authority",
  "Always avoids conflict or confrontation",
  "Irreverent or uneasy around nobility or authority",
  "Mistrustful of others, with a noticeable hesitance",
  "Experiences social or performance anxiety",
  "Tends to be too trusting of others, gullible",
  "Is incessantly positive and optimistic ",
];

const accolades: { accolade: string; applyBenefit: (c: Character) => void }[] =
  [
    {
      accolade: "Considered lucky or dependable",
      applyBenefit: (c) => {
        addPointsToRandomAttribute(c);
      },
    },
    {
      accolade: "Gained the respect of numerous peers",
      applyBenefit: (c) => {
        c.recognition += 1;
      },
    },
    {
      accolade: "Became a trusted mentor for another",
      applyBenefit: (c) => {
        addNote(c, "1 Gifted Item (accolade)");
      },
    },
    {
      accolade: "Favored by the Order of Anesh",
      applyBenefit: (c) => {
        addNote(c, "1 Coded message (accolade)");
      },
    },
    {
      accolade: "Mentored by a paragon of your field",
      applyBenefit: (c) => {
        c.recognition += 2;
      },
    },
    {
      accolade: "Received an endowment in vocation",
      applyBenefit: (c) => {
        c.wealth += rollDice(6, 6);
      },
    },
    {
      accolade: "Forged strong vocational relationships",
      applyBenefit: (c) => {
        addNote(c, "2 Gifted Items (accolade)");
      },
    },
    {
      accolade: "Challenged many entrenched traditions",
      applyBenefit: (c) => {
        c.recognition += 3;
      },
    },
    {
      accolade: "Honored by a traveler from the old kingdom",
      applyBenefit: (c) => {
        c.treasures.push(`${rollDice(2, 6)} Scorthan Mitheers (accolade)`);
      },
    },
    {
      accolade: "Favored by the Order of the Bayat",
      applyBenefit: (c) => {
        addNote(c, "1 Fast Travel (accolade)");
      },
    },
    {
      accolade: "Served a prominent family or court",
      applyBenefit: (c) => {
        c.recognition += 4;
      },
    },
    {
      accolade: "Well-suited or celebrated in vocation",
      applyBenefit: (c) => {
        addPointsToRandomAttribute(c);
      },
    },
  ];

const diceResultVocationOutcomesMap: Record<
  FourD6DiceResult,
  { numTrainingBonuses: number; numObstacles: number; numAccolades: number }
> = {
  [FourD6DiceResult.ALL_NUMBERS_DISTINCT]: {
    numTrainingBonuses: 1,
    numObstacles: 1,
    numAccolades: 2,
  },
  [FourD6DiceResult.SEQUENTIAL_NUMBERS]: {
    numTrainingBonuses: 1,
    numObstacles: 1,
    numAccolades: 1,
  },
  [FourD6DiceResult.ONE_EQUAL_PAIR]: {
    numTrainingBonuses: 2,
    numObstacles: 1,
    numAccolades: 1,
  },
  [FourD6DiceResult.THREE_EQUAL_NUMBERS]: {
    numTrainingBonuses: 3,
    numObstacles: 1,
    numAccolades: 2,
  },
  [FourD6DiceResult.TWO_EQUAL_PAIRS]: {
    numTrainingBonuses: 4,
    numObstacles: 1,
    numAccolades: 3,
  },
  [FourD6DiceResult.ALL_EQUAL_NUMBERS]: {
    numTrainingBonuses: 4,
    numObstacles: 0,
    numAccolades: 4,
  },
};

const applyDiceResult = (character: Character, result: FourD6DiceResult) => {
  const { numTrainingBonuses, numObstacles, numAccolades } =
    diceResultVocationOutcomesMap[result];

  forNumTimes(numTrainingBonuses, () => {
    const { trainedValueType, numPoints } =
      getRandomArrayValue(trainingBonuses);
    addPointsToRandomTrainedValue({ character, trainedValueType, numPoints });
  });

  forNumTimes(numObstacles, () => {
    character.profile.obstacles.push(getRandomArrayValue(obstacles));
  });

  let availableAccolades = accolades;
  forNumTimes(numAccolades, () => {
    const { accolade, applyBenefit } = getRandomArrayValue(availableAccolades);
    availableAccolades = availableAccolades.filter(
      ({ accolade: _accolade }) => accolade !== _accolade
    );
    character.profile.accolades.push(accolade);
    applyBenefit(character);
  });
};

const rollTerm = (character: Character) => {
  const { total, result } = roll4D6DiceResults();
  character.profile.term = total;
  character.characteristics.age += total;
  applyDiceResult(character, result);
};

export { rollTerm };

import { Attribute } from "../character/attributes";
import { Character } from "../character/character";
import {
  Conditioning,
  conditioningAttributeMap,
} from "../character/conditioning";
import { Insight, insightAttributeMap } from "../character/insights";
import {
  Proficiency,
  proficiencyAttributeMap,
} from "../character/proficiencies";
import { Resistance, resistanceAttributeMap } from "../character/resistances";
import { Skill, skillAttributeMap } from "../character/skills";
import {
  getRandomArrayValue,
  objectKeys,
  rollDie,
  rollOddsOutOf100,
} from "./dice-roller";
import { objectEntries } from "./general-utils";

const trainedValueAttributeMap = {
  ...proficiencyAttributeMap,
  ...skillAttributeMap,
  ...conditioningAttributeMap,
  ...resistanceAttributeMap,
  ...insightAttributeMap,
};

const addSkillPoints = (character: Character, name: Skill, numPoints = 1) => {
  for (let skillAndPoints of character.skills) {
    if (skillAndPoints.name === name) {
      skillAndPoints.points += numPoints;
      return;
    }
  }

  character.skills.push({
    name,
    points: numPoints,
  });
};

const addProficiencyPoints = (
  character: Character,
  name: Proficiency,
  numPoints = 1
) => {
  for (let proficiencyAndPoints of character.proficiencies) {
    if (proficiencyAndPoints.name === name) {
      proficiencyAndPoints.points += numPoints;
      return;
    }
  }

  character.proficiencies.push({
    name,
    points: numPoints,
  });
};

const addAttributePoints = (
  character: Character,
  name: Attribute,
  numPoints = 1
) => {
  character.attributes.adjustments[name] += numPoints;
};

const getLikelihoodByAttributeScore = (attributeScore: number): number => {
  let probability = Math.floor(attributeScore * (attributeScore / 10));
  let probabilityModifier = Math.floor(Math.abs(attributeScore - 10) / 2);
  if (attributeScore - 10 < 0) {
    probabilityModifier = -probabilityModifier;
  }

  probability += probabilityModifier;

  if (probability < 10) {
    probability -= 1;
  }

  if (probability < 0) {
    probability = 1;
  }

  return probability;
};

const getLikelihoodByAttribute = (
  character: Character,
  attribute: Attribute
): number => {
  const attributeVal = character.attributes.adjustedScores[attribute];
  return getLikelihoodByAttributeScore(attributeVal);
};

const determineValueToIncrease = <T>(
  valuesWithLikelihood: { name: T; likelihood: number }[]
): T => {
  const sides = valuesWithLikelihood.reduce(
    (acc, { likelihood }) => acc + likelihood,
    0
  );
  const rollResult = rollDie(sides);
  let min = 0;
  let max = 0;

  for (const item of valuesWithLikelihood) {
    min = max;
    max += item.likelihood;

    if (rollResult > min && rollResult <= max) {
      return item.name;
    }
  }

  // SHOULD NEVER HAPPEN
  return valuesWithLikelihood[0].name;
};

const addPointsToRandomAttribute = (character: Character, numPoints = 1) => {
  const attributesWithLikelihood = objectEntries(
    character.attributes.adjustedScores
  )
    .filter(([, score]) => score < 19)

    .map(([attribute, score]) => {
      return {
        name: attribute,
        likelihood: getLikelihoodByAttributeScore(score),
      };
    });

  const attributeToIncrease = determineValueToIncrease(
    attributesWithLikelihood
  );
  character.attributes.adjustments[attributeToIncrease] += numPoints;
};

enum TrainedValueType {
  PROFICIENCY = "PROFICIENCY",
  SKILL = "SKILL",
  RESISTANCE = "RESISTANCE",
  INSIGHT = "INSIGHT",
  CONDITIONING = "CONDITIONING",
}

const getExistingTrainedValuesByType = (
  character: Character,
  type: TrainedValueType
) => {
  switch (type) {
    case TrainedValueType.INSIGHT: {
      return objectKeys(character.insights);
    }
    case TrainedValueType.CONDITIONING: {
      return objectKeys(character.conditioning);
    }
    case TrainedValueType.RESISTANCE: {
      return objectKeys(character.resistances);
    }
    case TrainedValueType.SKILL: {
      return character.skills.map(({ name }) => name);
    }
    case TrainedValueType.PROFICIENCY: {
      return character.proficiencies.map(({ name }) => name);
    }
    default: {
      throw new Error(`Unrecognized Trained Value Type: ${type}`);
    }
  }
};

const mapLikelihoodToTrainedValues = (
  character: Character,
  names: Skill[] | Proficiency[],
  type?: TrainedValueType.SKILL | TrainedValueType.PROFICIENCY
): { name: Skill | Proficiency; likelihood: number }[] => {
  let potentialExistingTrainedValues;

  if (type === TrainedValueType.SKILL) {
    potentialExistingTrainedValues = character.skills
      .filter(({ name }) => {
        return (names as Skill[]).includes(name);
      })
      .map(({ name }) => name);
  } else {
    potentialExistingTrainedValues = character.proficiencies
      .filter(({ name }) => {
        return (names as Proficiency[]).includes(name);
      })
      .map(({ name }) => name);
  }

  if (potentialExistingTrainedValues.length >= 2 && rollOddsOutOf100(90)) {
    return potentialExistingTrainedValues.map((name) => {
      return {
        name,
        likelihood: getLikelihoodByAttribute(
          character,
          trainedValueAttributeMap[name]
        ),
      };
    });
  } else {
    return names.map((name) => {
      return {
        name,
        likelihood: getLikelihoodByAttribute(
          character,
          trainedValueAttributeMap[name]
        ),
      };
    });
  }
};

type AddPointsToRandomTrainedValueParams = {
  character: Character;
  numPoints?: number;
  trainedValueType?: TrainedValueType;
  restrictedValues?: Skill[] | Proficiency[];
};

const addPointsToRandomTrainedValue = ({
  character,
  numPoints = 1,
  trainedValueType,
  restrictedValues,
}: AddPointsToRandomTrainedValueParams) => {
  const type: TrainedValueType =
    trainedValueType ||
    (getRandomArrayValue(objectKeys(TrainedValueType)) as TrainedValueType);

  let potentialTrainedValuesWithLikelihood = [];

  if (restrictedValues) {
    potentialTrainedValuesWithLikelihood = mapLikelihoodToTrainedValues(
      character,
      restrictedValues,
      type as TrainedValueType.PROFICIENCY | TrainedValueType.SKILL
    );
  } else {
    potentialTrainedValuesWithLikelihood = getExistingTrainedValuesByType(
      character,
      type
    ).map((item) => {
      return {
        name: item,
        likelihood: getLikelihoodByAttribute(
          character,
          trainedValueAttributeMap[
            item as keyof typeof trainedValueAttributeMap
          ]
        ),
      };
    });
  }

  const trainedValue = determineValueToIncrease(
    potentialTrainedValuesWithLikelihood
  );

  switch (type) {
    case TrainedValueType.CONDITIONING: {
      character.conditioning[trainedValue as Conditioning] += 1;
      break;
    }
    case TrainedValueType.RESISTANCE: {
      character.resistances[trainedValue as Resistance] += 1;
      break;
    }
    case TrainedValueType.INSIGHT: {
      character.insights[trainedValue as Insight] += 1;
      break;
    }
    case TrainedValueType.PROFICIENCY: {
      addProficiencyPoints(character, trainedValue as Proficiency);
      break;
    }
    case TrainedValueType.SKILL: {
      addSkillPoints(character, trainedValue as Skill);
      break;
    }
  }
};

const addNote = (character: Character, note: string) => {
  character.notes.push(note);
};

export {
  addSkillPoints,
  addAttributePoints,
  addProficiencyPoints,
  addNote,
  determineValueToIncrease,
  addPointsToRandomTrainedValue,
  addPointsToRandomAttribute,
  TrainedValueType,
};

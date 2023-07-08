import { Attribute, Attributes } from "../character/attributes";
import { Character } from "../character/character";
import { Resistances } from "../character/resistances";
import { SkillAndPoints } from "../character/skills";
import { sortAttributesDescending } from "../utils/attributes-utils";
import { getRandomArrayValue, rollDie } from "../utils/dice-roller";
import { deepClone, forNumTimes } from "../utils/general-utils";
import {
  TrainedValueType,
  addPointsToRandomTrainedValue,
} from "../utils/character-utils";
import { AptitudeObj } from "./aptitudes/aptitude-types";
import { aptitudes } from "./aptitudes/aptitudes";

const getHighestAttributes = (attributes: Attributes): Attribute[] => {
  const attributesDescending = sortAttributesDescending(attributes);
  const highestValue = attributesDescending[0].value;
  return attributesDescending
    .filter(({ value }) => value === highestValue)
    .map(({ attribute }) => attribute);
};

const rollAndApplySkillPoints = (
  character: Character,
  aptitudeSkills: SkillAndPoints[]
) => {
  aptitudeSkills.forEach(({ name, points }) => {
    if (points !== 0) {
      character.skills.push({
        name,
        points,
      });
    }
  });

  const aptitudeSkillNames = aptitudeSkills.map(({ name }) => name);

  forNumTimes(rollDie(4), () => {
    addPointsToRandomTrainedValue({
      character,
      trainedValueType: TrainedValueType.SKILL,
      restrictedValues: aptitudeSkillNames,
    });
  });
};

const rollAndApplyResistancePoints = (
  character: Character,
  resistances: Resistances
) => {
  character.resistances = resistances;
  forNumTimes(rollDie(6), () => {
    addPointsToRandomTrainedValue({
      character,
      trainedValueType: TrainedValueType.RESISTANCE,
    });
  });
};

const establishAptitude = (character: Character) => {
  const highestAttributes = getHighestAttributes(character.attributes);
  const aptitudeSourceAttribute = getRandomArrayValue(highestAttributes);

  const { aptitude, skills, resistances, advantage } = deepClone(
    aptitudes.find(
      ({ sourceAttribute }) => sourceAttribute === aptitudeSourceAttribute
    )
  ) as AptitudeObj;

  character.profile.aptitude = aptitude;
  character.advantage = advantage;
  rollAndApplySkillPoints(character, skills);
  rollAndApplyResistancePoints(character, resistances);
};

export { establishAptitude };

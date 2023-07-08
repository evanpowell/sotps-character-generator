import { Character } from "../character/character";
import { ProficiencyAndPoints } from "../character/proficiencies";
import {
  addPointsToRandomTrainedValue,
  addSkillPoints,
  TrainedValueType,
} from "../utils/character-utils";
import {
  getRandomArrayValue,
  rollDie,
  rollOddsOutOf100,
} from "../utils/dice-roller";
import {
  deepClone,
  forNumTimes,
  objectEntries,
  objectKeys,
} from "../utils/general-utils";
import { ExpertiseObj } from "./expertises/expertise-types";
import { expertises } from "./expertises/expertises";

const rollAndApplyProficiencyPoints = (
  character: Character,
  expertiseObj: ExpertiseObj
) => {
  const startingProficiencies: ProficiencyAndPoints[] = objectEntries(
    expertiseObj.proficiencies
  )
    .filter(([, points]) => points !== 0)
    .map(([name, points]) => ({
      name,
      points: points as number,
    }));

  character.proficiencies = startingProficiencies;

  const expertiseProficiencyNames = objectKeys(expertiseObj.proficiencies);

  forNumTimes(rollDie(4), () => {
    addPointsToRandomTrainedValue({
      character,
      trainedValueType: TrainedValueType.PROFICIENCY,
      restrictedValues: expertiseProficiencyNames,
    });
  });
};

const rollAndApplyAuxiliarySkillPoints = (
  character: Character,
  expertiseObj: ExpertiseObj
) => {
  expertiseObj.auxiliarySkills.forEach(({ name, points }) => {
    forNumTimes(points, () => {
      addSkillPoints(character, name);
    });
  });

  const auxiliarySkillNames = expertiseObj.auxiliarySkills.map(
    ({ name }) => name
  );

  forNumTimes(rollDie(4), () => {
    addPointsToRandomTrainedValue({
      character,
      trainedValueType: TrainedValueType.SKILL,
      restrictedValues: auxiliarySkillNames,
    });
  });
};

const rollAndApplyInsightPoints = (
  character: Character,
  expertiseObj: ExpertiseObj
) => {
  character.insights = expertiseObj.insights;

  forNumTimes(rollDie(4), () => {
    addPointsToRandomTrainedValue({
      character,
      trainedValueType: TrainedValueType.INSIGHT,
    });
  });
};

const rollAndApplyConditioningPoints = (
  character: Character,
  expertiseObj: ExpertiseObj
) => {
  character.conditioning = expertiseObj.conditioning;

  forNumTimes(rollDie(4), () => {
    addPointsToRandomTrainedValue({
      character,
      trainedValueType: TrainedValueType.CONDITIONING,
    });
  });
};

const establishExpertise = (character: Character) => {
  let expertiseObj: ExpertiseObj;
  if (rollOddsOutOf100(95)) {
    expertiseObj = expertises.find(
      (e) => e.expertise === character.origins.suggestedExpertise
    ) as ExpertiseObj;
  } else {
    expertiseObj = getRandomArrayValue(expertises);
  }

  expertiseObj = deepClone(expertiseObj);

  character.profile.expertise = expertiseObj.expertise;
  rollAndApplyProficiencyPoints(character, expertiseObj);
  rollAndApplyAuxiliarySkillPoints(character, expertiseObj);
  rollAndApplyInsightPoints(character, expertiseObj);
  rollAndApplyConditioningPoints(character, expertiseObj);
};

export { establishExpertise };

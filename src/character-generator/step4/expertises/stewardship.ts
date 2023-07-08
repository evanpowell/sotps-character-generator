import { ConditioningEnum } from "../../character/conditioning";
import { InsightEnum } from "../../character/insights";
import { ProficiencyEnum } from "../../character/proficiencies";
import { ExpertiseEnum } from "../../character/profile/expertise";
import { SkillEnum } from "../../character/skills";
import { ExpertiseObj } from "./expertise-types";

const stewardship: ExpertiseObj = {
  expertise: ExpertiseEnum.STEWARDSHIP,
  proficiencies: {
    [ProficiencyEnum.ANIMAL_HANDLING]: 0,
    [ProficiencyEnum.FOOD_HANDLING]: 0,
    [ProficiencyEnum.OPERATIONS]: 0,
    [ProficiencyEnum.PROVISIONING]: 0,
    [ProficiencyEnum.SURVIVALISM]: 1,
  },
  auxiliarySkills: [
    { name: SkillEnum.FISH, points: 0 },
    { name: SkillEnum.FORAGE, points: 1 },
    { name: SkillEnum.GATHER, points: 0 },
    { name: SkillEnum.HUNT, points: 1 },
    { name: SkillEnum.TELL_STORY, points: 0 },
    { name: SkillEnum.TIE_KNOT, points: 0 },
  ],
  insights: {
    [InsightEnum.DETECTION]: 1,
    [InsightEnum.HAGGLING]: 1,
    [InsightEnum.INFORMATION]: 1,
    [InsightEnum.INVESTIGATION]: 2,
    [InsightEnum.NAVIGATION]: 2,
    [InsightEnum.THREAT]: 1,
  },
  conditioning: {
    [ConditioningEnum.POISE]: 0,
    [ConditioningEnum.AVOIDANCE]: 1,
    [ConditioningEnum.CAPACITY]: 1,
  },
};

export { stewardship };

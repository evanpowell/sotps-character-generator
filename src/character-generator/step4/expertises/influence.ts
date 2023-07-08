import { ConditioningEnum } from "../../character/conditioning";
import { InsightEnum } from "../../character/insights";
import { ProficiencyEnum } from "../../character/proficiencies";
import { ExpertiseEnum } from "../../character/profile/expertise";
import { SkillEnum } from "../../character/skills";
import { ExpertiseObj } from "./expertise-types";

const influence: ExpertiseObj = {
  expertise: ExpertiseEnum.INFLUENCE,
  proficiencies: {
    [ProficiencyEnum.CONNECTIONS]: 0,
    [ProficiencyEnum.DIPLOMACY]: 0,
    [ProficiencyEnum.LEADERSHIP]: 0,
    [ProficiencyEnum.ORATION]: 1,
    [ProficiencyEnum.WIT]: 0,
  },
  auxiliarySkills: [
    { name: SkillEnum.ATTUNE, points: 0 },
    { name: SkillEnum.DANCE, points: 0 },
    { name: SkillEnum.GAMBLE, points: 0 },
    { name: SkillEnum.PERFORM_MUSIC, points: 0 },
    { name: SkillEnum.TELL_FORTUNE, points: 1 },
    { name: SkillEnum.TELL_STORY, points: 1 },
  ],
  insights: {
    [InsightEnum.DETECTION]: 1,
    [InsightEnum.HAGGLING]: 2,
    [InsightEnum.INFORMATION]: 1,
    [InsightEnum.INVESTIGATION]: 1,
    [InsightEnum.NAVIGATION]: 1,
    [InsightEnum.THREAT]: 2,
  },
  conditioning: {
    [ConditioningEnum.POISE]: 1,
    [ConditioningEnum.AVOIDANCE]: 0,
    [ConditioningEnum.CAPACITY]: 1,
  },
};

export { influence };

import { ConditioningEnum } from "../../character/conditioning";
import { InsightEnum } from "../../character/insights";
import { ProficiencyEnum } from "../../character/proficiencies";
import { ExpertiseEnum } from "../../character/profile/expertise";
import { SkillEnum } from "../../character/skills";
import { ExpertiseObj } from "./expertise-types";

const manipulation: ExpertiseObj = {
  expertise: ExpertiseEnum.MANIPULATION,
  proficiencies: {
    [ProficiencyEnum.DISGUISES]: 0,
    [ProficiencyEnum.INTELLIGENCE]: 1,
    [ProficiencyEnum.MISDIRECTION]: 0,
    [ProficiencyEnum.SKULLDUGGERY]: 0,
    [ProficiencyEnum.STEALTH]: 0,
  },
  auxiliarySkills: [
    { name: SkillEnum.APPRAISE, points: 0 },
    { name: SkillEnum.BRIBE, points: 1 },
    { name: SkillEnum.DECIPHER_CODE, points: 0 },
    { name: SkillEnum.FORGERY, points: 0 },
    { name: SkillEnum.GAMBLE, points: 1 },
    { name: SkillEnum.MOVE_QUIETLY, points: 0 },
  ],
  insights: {
    [InsightEnum.DETECTION]: 2,
    [InsightEnum.HAGGLING]: 1,
    [InsightEnum.INFORMATION]: 2,
    [InsightEnum.INVESTIGATION]: 1,
    [InsightEnum.NAVIGATION]: 1,
    [InsightEnum.THREAT]: 1,
  },
  conditioning: {
    [ConditioningEnum.POISE]: 0,
    [ConditioningEnum.AVOIDANCE]: 1,
    [ConditioningEnum.CAPACITY]: 1,
  },
};

export { manipulation };

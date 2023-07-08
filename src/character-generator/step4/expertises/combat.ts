import { ConditioningEnum } from "../../character/conditioning";
import { InsightEnum } from "../../character/insights";
import { ProficiencyEnum } from "../../character/proficiencies";
import { ExpertiseEnum } from "../../character/profile/expertise";
import { SkillEnum } from "../../character/skills";
import { ExpertiseObj } from "./expertise-types";

const combat: ExpertiseObj = {
  expertise: ExpertiseEnum.COMBAT,
  proficiencies: {
    [ProficiencyEnum.FIELD_TACTICS]: 0,
    [ProficiencyEnum.FINESSE_MANEUVERS]: 0,
    [ProficiencyEnum.IMMOBILIZATION]: 0,
    [ProficiencyEnum.POWER_STRIKES]: 1,
    [ProficiencyEnum.ACCURACY_STRIKES]: 0,
  },
  auxiliarySkills: [
    { name: SkillEnum.ACROBATIC_FEAT, points: 0 },
    { name: SkillEnum.BANDAGE_INJURY, points: 1 },
    { name: SkillEnum.BRAWL, points: 0 },
    { name: SkillEnum.PROVOKE, points: 0 },
    { name: SkillEnum.REPAIR_MEND, points: 1 },
    { name: SkillEnum.RUN, points: 0 },
  ],
  insights: {
    [InsightEnum.DETECTION]: 1,
    [InsightEnum.HAGGLING]: 1,
    [InsightEnum.INFORMATION]: 1,
    [InsightEnum.INVESTIGATION]: 1,
    [InsightEnum.NAVIGATION]: 2,
    [InsightEnum.THREAT]: 2,
  },
  conditioning: {
    [ConditioningEnum.POISE]: 0,
    [ConditioningEnum.AVOIDANCE]: 0,
    [ConditioningEnum.CAPACITY]: 2,
  },
};

export { combat };

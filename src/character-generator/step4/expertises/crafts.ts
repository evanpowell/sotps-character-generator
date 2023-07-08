import { ConditioningEnum } from "../../character/conditioning";
import { InsightEnum } from "../../character/insights";
import { ProficiencyEnum } from "../../character/proficiencies";
import { ExpertiseEnum } from "../../character/profile/expertise";
import { SkillEnum } from "../../character/skills";
import { ExpertiseObj } from "./expertise-types";

const crafts: ExpertiseObj = {
  expertise: ExpertiseEnum.CRAFTS,
  proficiencies: {
    [ProficiencyEnum.CONSTRUCTION]: 1,
    [ProficiencyEnum.FINE_CRAFTS]: 0,
    [ProficiencyEnum.MECHANISMS]: 0,
    [ProficiencyEnum.SMITHING]: 0,
    [ProficiencyEnum.TRANSPORTS]: 0,
  },
  auxiliarySkills: [
    { name: SkillEnum.ALTER_MECHANISM, points: 1 },
    { name: SkillEnum.APPRAISE, points: 0 },
    { name: SkillEnum.GATHER, points: 0 },
    { name: SkillEnum.PERSUADE, points: 0 },
    { name: SkillEnum.REPAIR_MEND, points: 1 },
    { name: SkillEnum.TIE_KNOT, points: 0 },
  ],
  insights: {
    [InsightEnum.DETECTION]: 1,
    [InsightEnum.HAGGLING]: 2,
    [InsightEnum.INFORMATION]: 1,
    [InsightEnum.INVESTIGATION]: 2,
    [InsightEnum.NAVIGATION]: 1,
    [InsightEnum.THREAT]: 1,
  },
  conditioning: {
    [ConditioningEnum.POISE]: 1,
    [ConditioningEnum.AVOIDANCE]: 0,
    [ConditioningEnum.CAPACITY]: 1,
  },
};

export { crafts };

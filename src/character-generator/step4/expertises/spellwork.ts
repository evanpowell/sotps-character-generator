import { ConditioningEnum } from "../../character/conditioning";
import { InsightEnum } from "../../character/insights";
import { ProficiencyEnum } from "../../character/proficiencies";
import { ExpertiseEnum } from "../../character/profile/expertise";
import { SkillEnum } from "../../character/skills";
import { ExpertiseObj } from "./expertise-types";

const spellwork: ExpertiseObj = {
  expertise: ExpertiseEnum.SPELLWORK,
  proficiencies: {
    [ProficiencyEnum.ARTIFICE]: 1,
    [ProficiencyEnum.CHARMS]: 0,
    [ProficiencyEnum.EMERGENCE]: 0,
    [ProficiencyEnum.SPELLCASTING]: 0,
    [ProficiencyEnum.TRANSFERENCE]: 0,
  },
  auxiliarySkills: [
    { name: SkillEnum.ATTUNE, points: 0 },
    { name: SkillEnum.DECIPHER_CODE, points: 0 },
    { name: SkillEnum.GATHER, points: 1 },
    { name: SkillEnum.INSCRIBE, points: 1 },
    { name: SkillEnum.PROVOKE, points: 0 },
    { name: SkillEnum.SEND_SIGNAL, points: 0 },
  ],
  insights: {
    [InsightEnum.DETECTION]: 2,
    [InsightEnum.HAGGLING]: 1,
    [InsightEnum.INFORMATION]: 1,
    [InsightEnum.INVESTIGATION]: 2,
    [InsightEnum.NAVIGATION]: 1,
    [InsightEnum.THREAT]: 1,
  },
  conditioning: {
    [ConditioningEnum.POISE]: 0,
    [ConditioningEnum.AVOIDANCE]: 1,
    [ConditioningEnum.CAPACITY]: 1,
  },
};

export { spellwork };

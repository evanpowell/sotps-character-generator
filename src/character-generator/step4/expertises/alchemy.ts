import { ConditioningEnum } from "../../character/conditioning";
import { InsightEnum } from "../../character/insights";
import { ProficiencyEnum } from "../../character/proficiencies";
import { ExpertiseEnum } from "../../character/profile/expertise";
import { SkillEnum } from "../../character/skills";
import { ExpertiseObj } from "./expertise-types";

const alchemy: ExpertiseObj = {
  expertise: ExpertiseEnum.ALCHEMY,
  proficiencies: {
    [ProficiencyEnum.COMPOUNDS]: 0,
    [ProficiencyEnum.ELIXIRS]: 0,
    [ProficiencyEnum.HERBALISM]: 1,
    [ProficiencyEnum.SALVES]: 0,
    [ProficiencyEnum.TONICS]: 0,
  },
  auxiliarySkills: [
    { name: SkillEnum.BANDAGE_INJURY, points: 0 },
    { name: SkillEnum.GATHER, points: 1 },
    { name: SkillEnum.READ_MAP, points: 0 },
    { name: SkillEnum.SEND_SIGNAL, points: 0 },
    { name: SkillEnum.TRACK, points: 1 },
    { name: SkillEnum.TREK, points: 0 },
  ],
  insights: {
    [InsightEnum.DETECTION]: 1,
    [InsightEnum.HAGGLING]: 1,
    [InsightEnum.INFORMATION]: 2,
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

export { alchemy };

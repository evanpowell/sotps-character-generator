import { ConditioningEnum } from "../../character/conditioning";
import { InsightEnum } from "../../character/insights";
import { ProficiencyEnum } from "../../character/proficiencies";
import { ExpertiseEnum } from "../../character/profile/expertise";
import { SkillEnum } from "../../character/skills";
import { ExpertiseObj } from "./expertise-types";

const lore: ExpertiseObj = {
  expertise: ExpertiseEnum.LORE,
  proficiencies: {
    [ProficiencyEnum.FOCUSED_STUDY]: 0,
    [ProficiencyEnum.INCANTATION]: 0,
    [ProficiencyEnum.KNOWLEDGE]: 0,
    [ProficiencyEnum.RHETORIC]: 1,
    [ProficiencyEnum.RITUAL]: 0,
  },
  auxiliarySkills: [
    { name: SkillEnum.COMFORT, points: 1 },
    { name: SkillEnum.EVOKE, points: 1 },
    { name: SkillEnum.INSCRIBE, points: 0 },
    { name: SkillEnum.READ_MAP, points: 0 },
    { name: SkillEnum.SEND_SIGNAL, points: 0 },
    { name: SkillEnum.TELL_FORTUNE, points: 0 },
  ],
  insights: {
    [InsightEnum.DETECTION]: 2,
    [InsightEnum.HAGGLING]: 1,
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

export { lore };

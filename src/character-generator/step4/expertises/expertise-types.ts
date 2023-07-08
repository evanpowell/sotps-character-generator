import { ConditioningValues } from "../../character/conditioning";
import { Insights } from "../../character/insights";
import { ProficiencyEnum } from "../../character/proficiencies";
import { Expertise } from "../../character/profile/expertise";
import { SkillAndPoints } from "../../character/skills";

type ExpertiseObj = {
  expertise: Expertise;
  proficiencies: { [K in ProficiencyEnum]?: number };
  auxiliarySkills: SkillAndPoints[];
  insights: Insights;
  conditioning: ConditioningValues;
};

export type { ExpertiseObj };

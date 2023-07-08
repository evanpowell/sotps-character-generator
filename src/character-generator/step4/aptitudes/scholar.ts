import { AptitudeEnum } from "../../character/profile/aptitude";
import { AttributeEnum } from "../../character/attributes";
import { ResistanceEnum } from "../../character/resistances";
import { SkillEnum } from "../../character/skills";
import { AptitudeObj } from "./aptitude-types";

const scholarAptitude: AptitudeObj = {
  aptitude: AptitudeEnum.SCHOLAR,
  sourceAttribute: AttributeEnum.WIS,
  skills: [
    {
      name: SkillEnum.APPRAISE,
      points: 0,
    },
    {
      name: SkillEnum.INSCRIBE,
      points: 1,
    },
    {
      name: SkillEnum.EVOKE,
      points: 0,
    },
    {
      name: SkillEnum.MEDITATE,
      points: 0,
    },
    {
      name: SkillEnum.NEGOTIATE,
      points: 0,
    },
    {
      name: SkillEnum.READ_MAP,
      points: 1,
    },
  ],
  resistances: {
    [ResistanceEnum.AVERSION]: 2,
    [ResistanceEnum.DEBILITY]: 1,
    [ResistanceEnum.EXPLOSION]: 1,
    [ResistanceEnum.HANGOVER]: 1,
    [ResistanceEnum.INFECTION]: 2,
    [ResistanceEnum.TOXIN]: 1,
  },
  advantage:
    "Well Versed: Retry any failed WIS-based action test once per day.",
};

export { scholarAptitude };

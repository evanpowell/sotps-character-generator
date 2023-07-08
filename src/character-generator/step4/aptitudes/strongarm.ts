import { AptitudeEnum } from "../../character/profile/aptitude";
import { AttributeEnum } from "../../character/attributes";
import { ResistanceEnum } from "../../character/resistances";
import { SkillEnum } from "../../character/skills";
import { AptitudeObj } from "./aptitude-types";

const strongarmAptitude: AptitudeObj = {
  aptitude: AptitudeEnum.STRONGARM,
  sourceAttribute: AttributeEnum.STR,
  skills: [
    {
      name: SkillEnum.BRAWL,
      points: 0,
    },
    {
      name: SkillEnum.CLIMB,
      points: 0,
    },
    {
      name: SkillEnum.FOCUS_STRENGTH,
      points: 1,
    },
    {
      name: SkillEnum.HURL_OBJECT,
      points: 0,
    },
    {
      name: SkillEnum.SUSTAIN_STRENGTH,
      points: 1,
    },
    {
      name: SkillEnum.SCALE_ROPE,
      points: 0,
    },
  ],
  resistances: {
    [ResistanceEnum.AVERSION]: 1,
    [ResistanceEnum.DEBILITY]: 2,
    [ResistanceEnum.EXPLOSION]: 1,
    [ResistanceEnum.HANGOVER]: 1,
    [ResistanceEnum.INFECTION]: 1,
    [ResistanceEnum.TOXIN]: 2,
  },
  advantage:
    "Summon Strength: Retry any failed STR-based action test once per day.",
};

export { strongarmAptitude };

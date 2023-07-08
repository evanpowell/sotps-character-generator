import { AptitudeEnum } from "../../character/profile/aptitude";
import { AttributeEnum } from "../../character/attributes";
import { ResistanceEnum } from "../../character/resistances";
import { SkillEnum } from "../../character/skills";
import { AptitudeObj } from "./aptitude-types";

const acrobatAptitude: AptitudeObj = {
  aptitude: AptitudeEnum.ACROBAT,
  sourceAttribute: AttributeEnum.AGI,
  skills: [
    {
      name: SkillEnum.ACROBATIC_FEAT,
      points: 0,
    },
    {
      name: SkillEnum.CATCH_THROW,
      points: 0,
    },
    {
      name: SkillEnum.DANCE,
      points: 0,
    },
    {
      name: SkillEnum.JUMP,
      points: 1,
    },
    {
      name: SkillEnum.MOVE_QUIETLY,
      points: 0,
    },
    {
      name: SkillEnum.TUMBLE,
      points: 1,
    },
  ],
  resistances: {
    [ResistanceEnum.AVERSION]: 1,
    [ResistanceEnum.DEBILITY]: 1,
    [ResistanceEnum.EXPLOSION]: 2,
    [ResistanceEnum.HANGOVER]: 2,
    [ResistanceEnum.INFECTION]: 1,
    [ResistanceEnum.TOXIN]: 1,
  },
  advantage: "Deftness: Retry any failed AGI-based action test once per day.",
};

export { acrobatAptitude };

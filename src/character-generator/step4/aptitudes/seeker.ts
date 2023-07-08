import { AptitudeEnum } from "../../character/profile/aptitude";
import { AttributeEnum } from "../../character/attributes";
import { ResistanceEnum } from "../../character/resistances";
import { SkillEnum } from "../../character/skills";
import { AptitudeObj } from "./aptitude-types";

const seekerAptitude: AptitudeObj = {
  aptitude: AptitudeEnum.SEEKER,
  sourceAttribute: AttributeEnum.ACC,
  skills: [
    {
      name: SkillEnum.AIM,
      points: 1,
    },
    {
      name: SkillEnum.BANDAGE_INJURY,
      points: 0,
    },
    {
      name: SkillEnum.FORGERY,
      points: 0,
    },
    {
      name: SkillEnum.PERFORM_MUSIC,
      points: 0,
    },
    {
      name: SkillEnum.REPAIR_MEND,
      points: 0,
    },
    {
      name: SkillEnum.TIE_KNOT,
      points: 1,
    },
  ],
  resistances: {
    [ResistanceEnum.AVERSION]: 2,
    [ResistanceEnum.DEBILITY]: 2,
    [ResistanceEnum.EXPLOSION]: 1,
    [ResistanceEnum.HANGOVER]: 1,
    [ResistanceEnum.INFECTION]: 1,
    [ResistanceEnum.TOXIN]: 1,
  },
  advantage: "Finesse: Retry any failed ACC-based action test once per day.",
};

export { seekerAptitude };

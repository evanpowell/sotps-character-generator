import { AptitudeEnum } from "../../character/profile/aptitude";
import { AttributeEnum } from "../../character/attributes";
import { ResistanceEnum } from "../../character/resistances";
import { SkillEnum } from "../../character/skills";
import { AptitudeObj } from "./aptitude-types";

const survivalistAptitude: AptitudeObj = {
  aptitude: AptitudeEnum.SURVIVALIST,
  sourceAttribute: AttributeEnum.END,
  skills: [
    {
      name: SkillEnum.FISH,
      points: 1,
    },
    {
      name: SkillEnum.HUNT,
      points: 1,
    },
    {
      name: SkillEnum.KEEP_WATCH,
      points: 0,
    },
    {
      name: SkillEnum.RUN,
      points: 0,
    },
    {
      name: SkillEnum.SWIM,
      points: 0,
    },
    {
      name: SkillEnum.TREK,
      points: 0,
    },
  ],
  resistances: {
    [ResistanceEnum.AVERSION]: 2,
    [ResistanceEnum.DEBILITY]: 1,
    [ResistanceEnum.EXPLOSION]: 1,
    [ResistanceEnum.HANGOVER]: 1,
    [ResistanceEnum.INFECTION]: 1,
    [ResistanceEnum.TOXIN]: 2,
  },
  advantage: "Fortitude: Retry any failed END-based action test once per day.",
};

export { survivalistAptitude };

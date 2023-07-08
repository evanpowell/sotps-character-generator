import { AptitudeEnum } from "../../character/profile/aptitude";
import { AttributeEnum } from "../../character/attributes";
import { ResistanceEnum } from "../../character/resistances";
import { SkillEnum } from "../../character/skills";
import { AptitudeObj } from "./aptitude-types";

const watcherAptitude: AptitudeObj = {
  aptitude: AptitudeEnum.WATCHER,
  sourceAttribute: AttributeEnum.PER,
  skills: [
    {
      name: SkillEnum.ATTUNE,
      points: 0,
    },
    {
      name: SkillEnum.DISCERN,
      points: 1,
    },
    {
      name: SkillEnum.FORAGE,
      points: 0,
    },
    {
      name: SkillEnum.GATHER,
      points: 0,
    },
    {
      name: SkillEnum.HIDE,
      points: 1,
    },
    {
      name: SkillEnum.TRACK,
      points: 0,
    },
  ],
  resistances: {
    [ResistanceEnum.AVERSION]: 2,
    [ResistanceEnum.DEBILITY]: 1,
    [ResistanceEnum.EXPLOSION]: 2,
    [ResistanceEnum.HANGOVER]: 1,
    [ResistanceEnum.INFECTION]: 1,
    [ResistanceEnum.TOXIN]: 1,
  },
  advantage:
    "Ascertaining: Retry any failed PER-based action test once per day.",
};

export { watcherAptitude };

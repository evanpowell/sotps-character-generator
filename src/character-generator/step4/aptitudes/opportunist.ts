import { AptitudeEnum } from "../../character/profile/aptitude";
import { AttributeEnum } from "../../character/attributes";
import { ResistanceEnum } from "../../character/resistances";
import { SkillEnum } from "../../character/skills";
import { AptitudeObj } from "./aptitude-types";

const opportunistAptitude: AptitudeObj = {
  aptitude: AptitudeEnum.OPPORTUNIST,
  sourceAttribute: AttributeEnum.CHA,
  skills: [
    {
      name: SkillEnum.BRIBE,
      points: 0,
    },
    {
      name: SkillEnum.COMFORT,
      points: 1,
    },
    {
      name: SkillEnum.PERSUADE,
      points: 0,
    },
    {
      name: SkillEnum.PROVOKE,
      points: 0,
    },
    {
      name: SkillEnum.TELL_FORTUNE,
      points: 1,
    },
    {
      name: SkillEnum.TELL_STORY,
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
  advantage: "Convincing: Retry any failed CHA-based action test once per day.",
};

export { opportunistAptitude };

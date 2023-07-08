import { AptitudeEnum } from "../../character/profile/aptitude";
import { AttributeEnum } from "../../character/attributes";
import { ResistanceEnum } from "../../character/resistances";
import { SkillEnum } from "../../character/skills";
import { AptitudeObj } from "./aptitude-types";

const deviserAptitude: AptitudeObj = {
  aptitude: AptitudeEnum.DEVISER,
  sourceAttribute: AttributeEnum.INT,
  skills: [
    {
      name: SkillEnum.ALTER_MECHANISM,
      points: 0,
    },
    {
      name: SkillEnum.DECIPHER_CODE,
      points: 0,
    },
    {
      name: SkillEnum.ENVISION,
      points: 0,
    },
    {
      name: SkillEnum.GAMBLE,
      points: 0,
    },
    {
      name: SkillEnum.RECOLLECT,
      points: 1,
    },
    {
      name: SkillEnum.SEND_SIGNAL,
      points: 1,
    },
  ],
  resistances: {
    [ResistanceEnum.AVERSION]: 2,
    [ResistanceEnum.DEBILITY]: 1,
    [ResistanceEnum.EXPLOSION]: 1,
    [ResistanceEnum.HANGOVER]: 2,
    [ResistanceEnum.INFECTION]: 1,
    [ResistanceEnum.TOXIN]: 1,
  },
  advantage: "Mastermind: Retry any failed INT-based action test once per day.",
};

export { deviserAptitude };

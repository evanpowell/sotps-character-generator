import { Aptitude } from "../../character/profile/aptitude";
import { Attribute } from "../../character/attributes";
import { Resistances } from "../../character/resistances";
import { SkillAndPoints } from "../../character/skills";

type AptitudeObj = {
  aptitude: Aptitude;
  sourceAttribute: Attribute;
  skills: SkillAndPoints[];
  resistances: Resistances;
  advantage: string;
};

export type { AptitudeObj };

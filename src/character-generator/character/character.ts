import { Attributes } from "./attributes";
import { Characteristics } from "./characteristics";
import type { SkillAndPoints } from "./skills";
import { Resistances } from "./resistances";
import { Origins } from "./origins/origins";
import { ConditioningValues } from "./conditioning";
import { Insights } from "./insights";
import { Profile } from "./profile/profile";
import { ProficiencyAndPoints } from "./proficiencies";

class Character {
  name = "";
  attributes = new Attributes();
  characteristics = new Characteristics();
  origins = new Origins();
  profile = new Profile();
  skills: SkillAndPoints[] = [];
  resistances = new Resistances();
  conditioning = new ConditioningValues();
  insights = new Insights();
  proficiencies: ProficiencyAndPoints[] = [];
  advantage = "";
  wealth = 0;
  recognition = 0;
  notes: string[] = [];
}

export { Character };

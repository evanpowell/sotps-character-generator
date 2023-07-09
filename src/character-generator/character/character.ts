import { AttributeEnum, Attributes } from "./attributes";
import { Characteristics } from "./characteristics";
import type { SkillAndPoints } from "./skills";
import { Resistances } from "./resistances";
import { Origins } from "./origins/origins";
import { ConditioningValues } from "./conditioning";
import { Insights } from "./insights";
import { Profile } from "./profile/profile";
import { ProficiencyAndPoints } from "./proficiencies";
import { calculateReadiness } from "./readiness";

class Character {
  name = "";
  attributes = new Attributes();
  characteristics = new Characteristics();
  origins = new Origins();
  profile = new Profile();
  paleStoneEncounter = {
    story: "",
    outcome: "",
  };
  advantage = "";
  skills: SkillAndPoints[] = [];
  proficiencies: ProficiencyAndPoints[] = [];
  resistances = new Resistances();
  conditioning = new ConditioningValues();
  insights = new Insights();
  get readiness() {
    return calculateReadiness(this);
  }
  wealth = 0;
  treasures: string[] = [];
  recognition = 0;
  mastery: string[] = [];
  notes: string[] = [];
  isDead = false;
}

export { Character };

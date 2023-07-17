import { Expertise } from "../profile/expertise";
import { Language } from "./language";
import { Lineage } from "./lineage";
import { Region } from "./region";

type Relation = {
  description: string;
  status?: string;
};

class Origins {
  connection: Relation = { description: "" };
  parentage: Relation = { description: "" };
  relations: Relation[] = [];
  birthDate: string = "";
  settlement: string = "";
  lineage: Lineage | "" = "";
  language: Language | "" = "";
  region: Region | "" = "";
  isDiasporic = false;
  community: string = "";
  culturalValues: string = "";
  suggestedMotivation: string = "";
  suggestedExpertise: Expertise | "" = "";
  reputation: string = "";
  backgroundStory: string = "";
}

export { Origins };

export type { Relation };

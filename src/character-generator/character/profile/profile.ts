import { Aptitude } from "./aptitude";
import { Expertise } from "./expertise";
import { Vocation } from "./vocation";

class Profile {
  aptitude: Aptitude | "" = "";
  expertise: Expertise | "" = "";
  vocation: {
    name: Vocation | "";
    description: string;
  } = { name: "", description: "" };
  term = 0;
  obstacles: string[] = [];
  accolades: string[] = [];
}

export { Profile };

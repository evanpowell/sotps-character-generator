import { Character } from "./character/character";
import { logCharacter } from "./log-character";
import { generateAttributes } from "./step1/generate-attributes";
import { determineCharacteristics } from "./step2/determine-characteristics";
import { discoverOrigins } from "./step3/discover-origins";
import { establishProfile } from "./step4/establish-profile";

const generateInstantCharacter = (): Character => {
  const character = new Character();

  generateAttributes(character);
  determineCharacteristics(character);
  discoverOrigins(character);
  establishProfile(character);

  logCharacter(character);

  return character;
};

export { generateInstantCharacter };

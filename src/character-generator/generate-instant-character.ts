import { Character } from "./character/character";
import { fillCharacterSheet } from "./fill-character-sheet";
import { generateAttributes } from "./step1/generate-attributes";
import { determineCharacteristics } from "./step2/determine-characteristics";
import { discoverOrigins } from "./step3/discover-origins";
import { establishProfile } from "./step4/establish-profile";
import { encounterPaleStone } from "./step5/encounter-pale-stone";
import { prepareForAdventure } from "./step6/prepare-for-adventure";

const generateInstantCharacter = async (): Promise<{
  pdfUrl: string;
  character: Character;
}> => {
  const character = new Character();

  generateAttributes(character);
  determineCharacteristics(character);
  discoverOrigins(character);
  establishProfile(character);
  encounterPaleStone(character);
  prepareForAdventure(character);
  const pdfUrl = await fillCharacterSheet(character);

  return { pdfUrl, character };
};

export { generateInstantCharacter };

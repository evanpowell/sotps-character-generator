// STANDARD - [in the company of/alongside/surrounded by/together with/under the watch of/in the midst of] artisans that valued self-reliance.
// WOLDARKIN -

import { Character } from "../../character/character";
import { getRandomArrayValue } from "../../utils/dice-roller";

const generateBackgroundStoryPart2 = (character: Character): string => {
  return (
    getRandomArrayValue([
      "in the company of",
      "alongside",
      "surrounded by",
      "together with",
      "under the watch of",
      "in the midst of",
    ]) +
    ` ${character.origins.community} that valued ${character.origins.culturalValues}`
  );
};

export { generateBackgroundStoryPart2 };

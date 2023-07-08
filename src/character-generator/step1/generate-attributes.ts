import { Character } from "../character/character";
import { rollDice } from "../utils/dice-roller";
import { objectKeys } from "../utils/general-utils";

function generateAttributes(character: Character) {
  objectKeys(character.attributes.initialScores).forEach((attribute) => {
    character.attributes.initialScores[attribute] = rollDice(3, 6);
  });
}

export { generateAttributes };

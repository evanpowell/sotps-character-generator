import { Character } from "../character/character";
import { rollDice } from "../utils/dice-roller";

const prepareForAdventure = (character: Character) => {
  character.wealth += rollDice(3, 6);
};

export { prepareForAdventure };

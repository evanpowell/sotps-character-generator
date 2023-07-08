import { Character } from "./character/character";

const logCharacter = (character: Character) => {
  const characterObj = {
    ...character,
    attributes: {
      ...character.attributes,
      adjustedScores: character.attributes.adjustedScores,
      bonusPenalties: character.attributes.bonusPenalties,
    },
  };
  console.log(JSON.stringify(characterObj, null, 2).replace(/["]/g, ""));
};

export { logCharacter };

import { Character } from "../character/character";
import { SettlementEnum } from "../character/origins/settlement";
import { getRandomArrayValue } from "../utils/dice-roller";

const rollSettlement = (character: Character) => {
  character.origins.settlement = getRandomArrayValue(
    Object.values(SettlementEnum)
  );
};

export { rollSettlement };

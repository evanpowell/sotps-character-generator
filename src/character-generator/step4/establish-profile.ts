import { Character } from "../character/character";
import { establishAptitude } from "./establish-aptitude";
import { establishExpertise } from "./establish-expertise";
import { establishVocation } from "./establish-vocation";

const establishProfile = (character: Character) => {
  establishAptitude(character);
  establishExpertise(character);
  establishVocation(character);
};

export { establishProfile };

import { Character } from "../character/character";
import { Aptitude } from "../character/profile/aptitude";
import { Expertise } from "../character/profile/expertise";
import { getRandomArrayValue } from "../utils/dice-roller";
import { rollTerm } from "./roll-term";
import { vocationDescriptions } from "./vocation-descriptions";
import { vocationIntersection } from "./vocations-intersections";

const rollVocationNameAndDescription = (character: Character) => {
  const vocationsByExpertise =
    vocationIntersection[character.profile.expertise as Expertise];
  const possibleVocations =
    vocationsByExpertise[character.profile.aptitude as Aptitude];
  const vocation = getRandomArrayValue(possibleVocations);
  character.profile.vocation = {
    name: vocation,
    description: vocationDescriptions[vocation],
  };
};

const establishVocation = (character: Character) => {
  rollVocationNameAndDescription(character);
  rollTerm(character);
};

export { establishVocation };

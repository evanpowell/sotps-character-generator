import { rollBirthDate } from "./birth-date/birth-date";
import { rollCommunity } from "./communities";
import { rollParentageRelationsConnections } from "./connections";
import { rollCulturalValues } from "./culturalValues";
import { rollLineage } from "./lineage/lineage";
import { rollSettlement } from "./settlement";
import { rollReputation } from "./reputation";
import { rollName } from "./name";
import { Character } from "../character/character";

const discoverOrigins = (character: Character) => {
  rollBirthDate(character);
  rollLineage(character);
  rollSettlement(character);
  rollCommunity(character);
  rollCulturalValues(character);
  rollParentageRelationsConnections(character);
  rollReputation(character);
  rollName(character);
};

export { discoverOrigins };

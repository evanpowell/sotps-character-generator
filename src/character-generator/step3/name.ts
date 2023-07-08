import { getRandomArrayValue } from "../utils/dice-roller";
import {
  GenderedNamesObj,
  isGenderedNamesObj,
} from "../character/origins/names/names-types";
import { LanguageEnum } from "../character/origins/language";
import { NamesObj, namesByLanguage } from "../character/origins/names/names";
import { Character } from "../character/character";

const rollGenderedName = (
  sex: "M" | "F",
  namesObj: GenderedNamesObj
): string => {
  const { masculine, feminine, ...nonGenderedNamesObj } = namesObj;
  const genderedNames = sex === "M" ? masculine : feminine;
  const nonGenderedNames = Object.values(nonGenderedNamesObj).reduce(
    (acc, names) => {
      return acc.concat(names);
    },
    []
  );

  return getRandomArrayValue(genderedNames.concat(nonGenderedNames));
};

const rollRandomName = (namesObj: NamesObj): string => {
  const allNames = Object.values(namesObj).reduce((acc, names) => {
    return acc.concat(names);
  }, []);

  return getRandomArrayValue(allNames);
};

const rollName = (character: Character) => {
  const namesObj = namesByLanguage[character.origins.language as LanguageEnum];
  const { sex } = character.characteristics;
  if (isGenderedNamesObj(namesObj) && sex !== "Inter") {
    character.name = rollGenderedName(sex as "M" | "F", namesObj);
  }

  character.name = rollRandomName(namesObj);
};

export { rollName };

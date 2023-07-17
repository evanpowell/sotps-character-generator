import { Character } from "../../character/character";
import { LineageEnum } from "../../character/origins/lineage";
import { getRandomArrayValue } from "../../utils/dice-roller";
import {
  backgroundStoryPart1Lineage,
  backgroundStoryPart1Valiarch,
  backgroundStoryPart1Woldarkin,
} from "./part1";
import { generateBackgroundStoryPart2 } from "./part2";

const rollBackgroundStoryPart1 = (character: Character): string => {
  const { isDiasporic, lineage, settlement, region } = character.origins;
  if (isDiasporic) {
    if (lineage === LineageEnum.SEVERED) {
      // TODO: roll severed lineage part 1
    }
    // TODO: roll diasporic part 1
    return "";
  }
  switch (lineage) {
    case LineageEnum.WOLDARKIN: {
      return getRandomArrayValue(backgroundStoryPart1Woldarkin);
    }
    case LineageEnum.VALIARCH_BLOODLINE: {
      const _region = region.replace("The", "the");
      return getRandomArrayValue(backgroundStoryPart1Valiarch).replace(
        "[REGION]",
        _region
      );
    }
    default: {
      const lineageStoryPart1 =
        //@ts-ignore
        backgroundStoryPart1Lineage[lineage][settlement];
      return getRandomArrayValue(lineageStoryPart1);
    }
  }
};

const discoverBackgroundStory = (character: Character) => {
  const part1 = rollBackgroundStoryPart1(character);
  let part2;
  if (character.origins.lineage === LineageEnum.WOLDARKIN) {
    // TODO: generate Woldarkin background story part 2
  } else {
    part2 = generateBackgroundStoryPart2(character);
  }

  character.origins.backgroundStory = `${part1}, ${part2}`;
};

export { discoverBackgroundStory };

import { Character } from "../character/character";
import { Expertise, ExpertiseEnum } from "../character/profile/expertise";
import { getRandomArrayValue } from "../utils/dice-roller";

const communities: readonly {
  readonly descriptors: readonly string[];
  readonly expertiseSuggestions: readonly Expertise[];
}[] = [
  {
    descriptors: ["caretakers", "healers"],
    expertiseSuggestions: [ExpertiseEnum.STEWARDSHIP, ExpertiseEnum.ALCHEMY],
  },
  {
    descriptors: ["cultists", "mystics"],
    expertiseSuggestions: [ExpertiseEnum.SPELLWORK, ExpertiseEnum.LORE],
  },
  {
    descriptors: ["entertainers", "artists"],
    expertiseSuggestions: [ExpertiseEnum.LORE, ExpertiseEnum.INFLUENCE],
  },
  {
    descriptors: ["farmers", "fishers"],
    expertiseSuggestions: [ExpertiseEnum.STEWARDSHIP, ExpertiseEnum.LORE],
  },
  {
    descriptors: ["gardeners", "shepherds"],
    expertiseSuggestions: [ExpertiseEnum.ALCHEMY, ExpertiseEnum.CRAFTS],
  },
  {
    descriptors: ["guardians", "sellswords"],
    expertiseSuggestions: [ExpertiseEnum.COMBAT, ExpertiseEnum.MANIPULATION],
  },
  {
    descriptors: ["laborers", "servants"],
    expertiseSuggestions: [ExpertiseEnum.STEWARDSHIP, ExpertiseEnum.INFLUENCE],
  },
  {
    descriptors: ["dyers", "weavers"],
    expertiseSuggestions: [ExpertiseEnum.MANIPULATION, ExpertiseEnum.ALCHEMY],
  },
  {
    descriptors: ["paupers", "beggars"],
    expertiseSuggestions: [ExpertiseEnum.COMBAT, ExpertiseEnum.MANIPULATION],
  },
  {
    descriptors: ["veterans", "enforcers"],
    expertiseSuggestions: [ExpertiseEnum.COMBAT, ExpertiseEnum.INFLUENCE],
  },
  {
    descriptors: ["fortune tellers", "diviners"],
    expertiseSuggestions: [ExpertiseEnum.SPELLWORK, ExpertiseEnum.ALCHEMY],
  },
  {
    descriptors: ["dock workers", "cargo haulers"],
    expertiseSuggestions: [ExpertiseEnum.MANIPULATION, ExpertiseEnum.CRAFTS],
  },
  {
    descriptors: ["artisans", "makers"],
    expertiseSuggestions: [ExpertiseEnum.CRAFTS, ExpertiseEnum.STEWARDSHIP],
  },
  {
    descriptors: ["intellectuals", "architects"],
    expertiseSuggestions: [ExpertiseEnum.SPELLWORK, ExpertiseEnum.CRAFTS],
  },
  {
    descriptors: ["luminaries", "nobles"],
    expertiseSuggestions: [ExpertiseEnum.LORE, ExpertiseEnum.INFLUENCE],
  },
  {
    descriptors: ["merchants", "curio traders"],
    expertiseSuggestions: [ExpertiseEnum.SPELLWORK, ExpertiseEnum.MANIPULATION],
  },
  {
    descriptors: ["philosophers", "scholars"],
    expertiseSuggestions: [ExpertiseEnum.LORE, ExpertiseEnum.ALCHEMY],
  },
  {
    descriptors: ["curio peddlers", "smugglers"],
    expertiseSuggestions: [ExpertiseEnum.SPELLWORK, ExpertiseEnum.COMBAT],
  },
  {
    descriptors: ["traders", "innkeepers"],
    expertiseSuggestions: [ExpertiseEnum.STEWARDSHIP, ExpertiseEnum.INFLUENCE],
  },
  {
    descriptors: ["travelers", "adventurers"],
    expertiseSuggestions: [ExpertiseEnum.COMBAT, ExpertiseEnum.CRAFTS],
  },
] as const;

const rollCommunity = (character: Character) => {
  const { descriptors, expertiseSuggestions } =
    getRandomArrayValue(communities);

  character.origins.community = getRandomArrayValue(descriptors);
  character.origins.suggestedExpertise =
    getRandomArrayValue(expertiseSuggestions);
};

export { rollCommunity };

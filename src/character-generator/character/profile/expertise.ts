import { EnumValue } from "../../utils/utility-types";

enum ExpertiseEnum {
  ALCHEMY = "Alchemy",
  COMBAT = "Combat",
  CRAFTS = "Crafts",
  INFLUENCE = "Influence",
  LORE = "Lore",
  MANIPULATION = "Manipulation",
  SPELLWORK = "Spellwork",
  STEWARDSHIP = "Stewardship",
}

type Expertise = EnumValue<typeof ExpertiseEnum>;

export type { Expertise };

export { ExpertiseEnum };

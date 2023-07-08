import { alchemy } from "./alchemy";
import { combat } from "./combat";
import { crafts } from "./crafts";
import { influence } from "./influence";
import { lore } from "./lore";
import { manipulation } from "./manipulation";
import { spellwork } from "./spellwork";
import { stewardship } from "./stewardship";

const expertises = [
  alchemy,
  combat,
  crafts,
  influence,
  lore,
  manipulation,
  spellwork,
  stewardship,
] as const;

export { expertises };

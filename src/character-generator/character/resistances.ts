import type { EnumValue } from "../utils/utility-types";
import { AttributeEnum } from "./attributes";

enum ResistanceEnum {
  AVERSION = "Aversion",
  DEBILITY = "Debility",
  EXPLOSION = "Explosion",
  HANGOVER = "Hangover",
  INFECTION = "Infection",
  TOXIN = "Toxin",
}

type Resistance = EnumValue<typeof ResistanceEnum>;

class Resistances {
  [ResistanceEnum.AVERSION] = 0;
  [ResistanceEnum.DEBILITY] = 0;
  [ResistanceEnum.EXPLOSION] = 0;
  [ResistanceEnum.HANGOVER] = 0;
  [ResistanceEnum.INFECTION] = 0;
  [ResistanceEnum.TOXIN] = 0;
}

const resistanceAttributeMap = {
  [ResistanceEnum.AVERSION]: AttributeEnum.WIS,
  [ResistanceEnum.DEBILITY]: AttributeEnum.END,
  [ResistanceEnum.EXPLOSION]: AttributeEnum.AGI,
  [ResistanceEnum.HANGOVER]: AttributeEnum.END,
  [ResistanceEnum.INFECTION]: AttributeEnum.END,
  [ResistanceEnum.TOXIN]: AttributeEnum.END,
} as const;

export type { Resistance };

export { ResistanceEnum, Resistances, resistanceAttributeMap };

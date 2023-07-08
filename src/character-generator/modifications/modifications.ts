import type { Attribute } from "../character/attributes";
import { Skill } from "../character/skills";
import type { EnumValue } from "../utils/utility-types";

enum ModificationTypeEnum {
  ATTRIBUTE = "Attribute",
  CONDITIONING = "Conditioning",
  HEALING_RATE = "Healing Rate",
  HEIGHT = "Height",
  INSIGHT = "Insight",
  PROFICIENCY = "Proficiency",
  RECOGNITION = "Recognition",
  RESISTANCE = "Resistance",
  SKILL = "Skill",
  WEALTH = "Wealth",
  WEIGHT = "Weight",
}

type ModificationType = EnumValue<typeof ModificationTypeEnum>;

type ModificationBase = {
  amount: number | ((baseNum?: number) => number);
};

type WeightModification = ModificationBase & {
  type: ModificationTypeEnum.WEIGHT;
};

type HeightModification = ModificationBase & {
  type: ModificationTypeEnum.HEIGHT;
};

type WealthModification = ModificationBase & {
  type: ModificationTypeEnum.WEALTH;
};

type SkillModification = ModificationBase & {
  type: ModificationTypeEnum.SKILL;
  target?: Skill;
};

type AttributeModification = ModificationBase & {
  type: ModificationTypeEnum.ATTRIBUTE;
  target?: Attribute;
};

type Modification =
  | HeightModification
  | SkillModification
  | AttributeModification
  | WeightModification
  | WealthModification;

export { ModificationTypeEnum };

export type { Modification, ModificationType };

import type { EnumValue } from "../utils/utility-types";
import { objectEntries } from "../utils/general-utils";

enum AttributeEnum {
  STR = "STR",
  END = "END",
  AGI = "AGI",
  ACC = "ACC",
  INT = "INT",
  WIS = "WIS",
  PER = "PER",
  CHA = "CHA",
}

type Attribute = EnumValue<typeof AttributeEnum>;

type AttributeValueMap = {
  [K in AttributeEnum]: number;
};

const getInitAttributeValueMap = (): AttributeValueMap => ({
  [AttributeEnum.STR]: 0,
  [AttributeEnum.END]: 0,
  [AttributeEnum.AGI]: 0,
  [AttributeEnum.ACC]: 0,
  [AttributeEnum.INT]: 0,
  [AttributeEnum.WIS]: 0,
  [AttributeEnum.PER]: 0,
  [AttributeEnum.CHA]: 0,
});

class Attributes {
  initialScores = getInitAttributeValueMap();
  adjustments = getInitAttributeValueMap();

  get adjustedScores(): AttributeValueMap {
    const _adjusted = getInitAttributeValueMap();
    objectEntries(this.initialScores).forEach(([attribute, value]) => {
      _adjusted[attribute] = value + this.adjustments[attribute];
    });
    return _adjusted;
  }

  private calculateBonusPenalty(value: number) {
    if (value >= 19) {
      return 5;
    }

    if (value <= 2) {
      return -5;
    }

    return Math.floor((value - 10) / 2);
  }

  get bonusPenalties(): AttributeValueMap {
    const _bonusPenalties = getInitAttributeValueMap();
    objectEntries(this.adjustedScores).forEach(([attribute, value]) => {
      _bonusPenalties[attribute] = this.calculateBonusPenalty(value);
    });
    return _bonusPenalties;
  }
}

export { AttributeEnum, Attributes };

export type { Attribute };

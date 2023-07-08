import type { EnumValue } from "../utils/utility-types";
import { AttributeEnum } from "./attributes";

enum ConditioningEnum {
  POISE = "Poise",
  AVOIDANCE = "Avoidance",
  CAPACITY = "Capacity",
}

type Conditioning = EnumValue<typeof ConditioningEnum>;

class ConditioningValues {
  [ConditioningEnum.POISE] = 0;
  [ConditioningEnum.AVOIDANCE] = 0;
  [ConditioningEnum.CAPACITY] = 0;
}

const conditioningAttributeMap = {
  [ConditioningEnum.POISE]: AttributeEnum.WIS,
  [ConditioningEnum.AVOIDANCE]: AttributeEnum.AGI,
  [ConditioningEnum.CAPACITY]: AttributeEnum.END,
} as const;

export type { Conditioning };

export { ConditioningEnum, ConditioningValues, conditioningAttributeMap };

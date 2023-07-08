import type { EnumValue } from "../utils/utility-types";
import { AttributeEnum } from "./attributes";

enum InsightEnum {
  DETECTION = "Detection",
  HAGGLING = "Haggling",
  INFORMATION = "Information",
  INVESTIGATION = "Investigation",
  NAVIGATION = "Navigation",
  THREAT = "Threat",
}

type Insight = EnumValue<typeof InsightEnum>;

class Insights {
  [InsightEnum.DETECTION] = 0;
  [InsightEnum.HAGGLING] = 0;
  [InsightEnum.INFORMATION] = 0;
  [InsightEnum.INVESTIGATION] = 0;
  [InsightEnum.NAVIGATION] = 0;
  [InsightEnum.THREAT] = 0;
}

const insightAttributeMap = {
  [InsightEnum.DETECTION]: AttributeEnum.PER,
  [InsightEnum.HAGGLING]: AttributeEnum.CHA,
  [InsightEnum.INFORMATION]: AttributeEnum.PER,
  [InsightEnum.INVESTIGATION]: AttributeEnum.PER,
  [InsightEnum.NAVIGATION]: AttributeEnum.INT,
  [InsightEnum.THREAT]: AttributeEnum.PER,
} as const;

export type { Insight };

export { InsightEnum, Insights, insightAttributeMap };

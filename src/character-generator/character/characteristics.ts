import type { EnumValue } from "../utils/utility-types";

enum AncestryEnum {
  AISLUN = `Ais'lun`,
  DJENNDAN = "Djenndan",
  HUMAN = "Human",
  KAHLNISSA = `Kahlnissá`,
  PULNAGA = `Pulnagá`,
  VIANTU = "Viantu",
}

type Sex = "M" | "F" | "Inter";

type Ancestry = EnumValue<typeof AncestryEnum>;

class Characteristics {
  ancestry: Ancestry | "" = "";
  sex: Sex | "" = "";
  height: number = 0;
  weight: number = 0;
  age: number = 0;
  style: string = "";
  // distinguishingFeatures: string[];
}

export { AncestryEnum, Characteristics };
export type { Ancestry, Sex };

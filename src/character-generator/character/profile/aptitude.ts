import type { EnumValue } from "../../utils/utility-types";

enum AptitudeEnum {
  STRONGARM = "Strongarm",
  SURVIVALIST = "Survivalist",
  ACROBAT = "Acrobat",
  SEEKER = "Seeker",
  DEVISER = "Deviser",
  SCHOLAR = "Scholar",
  WATCHER = "Watcher",
  OPPORTUNIST = "Opportunist",
}

type Aptitude = EnumValue<typeof AptitudeEnum>;

export type { Aptitude };

export { AptitudeEnum };

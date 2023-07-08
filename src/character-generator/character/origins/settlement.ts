import { EnumValue } from "../../utils/utility-types";

enum SettlementEnum {
  HAMLET = "Hamlet",
  REDOUBT = "Redoubt",
  VILLAGE = "Village",
  SMALL_TOWN = "Small town",
  LARGE_TOWNSHIP = "Large township",
  SMALL_CITY = "Small city",
  LARGE_CITY = "Large city",
  NOMADIC = "Nomadic",
}

type Settlement = EnumValue<typeof SettlementEnum>;

export { SettlementEnum };

export type { Settlement };

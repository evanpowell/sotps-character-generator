import { EnumValue } from "../../utils/utility-types";

enum RegionEnum {
  BROLEAN_EXPANCE = "The Brolean Expanse",
  CENTRAL_BOSEN = "Central Bosen",
  CLIFFS_OF_BORALIS = "Cliffs of Boralis",
  COASTAL_BOSEN = "Coastal Bosen",
  DELONIAN_HINN = "Delonian Hinn",
  DJENNDAN_PROTECTORATE = "Djenndan Protectorate",
  EAST_WENDAJII = "East Wendajii",
  EASTERN_BORDERLANDS = "The Eastern Borderlands",
  FORESTS_OF_CREONA = "Forests of Creona",
  FORKLANDS = "The Forklands",
  HINN_DELTA = "The Hinn Delta",
  MAINLAND_SCHELK = "Mainland Schelk",
  NEW_SCORTH = "New Scorth",
  NEW_VOLAND = "New Voland",
  NORTH_VALADAGAL = "North Valadagal",
  NORTH_WENDAJII = "North Wendajii",
  NORTHERN_HINN = "Northern Hinn",
  NORTHERN_WILDS = "The Northern Wilds",
  OMMULTIC_FRONT = "The Ommultic Front",
  PLENITH_SOUTH = "Plenith South",
  REVIAK_PROPER = "Reviak Proper",
  SCHELK_ISLANDS = "The Schelk Islands",
  SHIMMERING_GULF = "The Shimmering Gulf",
  SIADAGAL = "Siadagal",
  SOUTH_WENDAJII = "South Wendajii",
  SOUTHWEST_HINN = "Southwest Hinn",
  STORMPLAINS = "The Stormplains",
  VALADAGAL = "Valadagal",
  WENDAJII = "Wendajii",
  WEYELL = "Weyell",
  WEYELL_GROVES = "The Weyell Groves",
  WEYELL_NORTH = "The Weyell North",
}

type Region = EnumValue<typeof RegionEnum>;

export { RegionEnum };

export type { Region };

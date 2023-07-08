import { Region, RegionEnum } from "../../character/origins/region";
import { Language, LanguageEnum } from "../../character/origins/language";

// From the diasporic and Valiarch Bloodline regions chart
const diasporicRegions: readonly {
  readonly region: Region;
  readonly languages: readonly Language[];
}[] = [
  {
    region: RegionEnum.OMMULTIC_FRONT,
    languages: [
      LanguageEnum.OMMULTIC,
      LanguageEnum.KIMENIAN,
      LanguageEnum.BROLEAN,
    ],
  },
  {
    region: RegionEnum.WENDAJII,
    languages: [
      LanguageEnum.BWANTAAL,
      LanguageEnum.VOLAANI,
      LanguageEnum.BROLEAN,
    ],
  },
  {
    region: RegionEnum.BROLEAN_EXPANCE,
    languages: [
      LanguageEnum.BROLEAN,
      LanguageEnum.BWANTAAL,
      LanguageEnum.CHENACHUA,
    ],
  },
  {
    region: RegionEnum.DELONIAN_HINN,
    languages: [
      LanguageEnum.DELONIAN,
      LanguageEnum.KIMENIAN,
      LanguageEnum.VOLAANI,
    ],
  },
  {
    region: RegionEnum.NEW_SCORTH,
    languages: [
      LanguageEnum.ESAHN,
      LanguageEnum.TORLISH,
      LanguageEnum.ALLDEDAN,
    ],
  },
  {
    region: RegionEnum.WEYELL,
    languages: [
      LanguageEnum.THELEAN,
      LanguageEnum.KIMENIAN,
      LanguageEnum.ESAHN,
    ],
  },
  {
    region: RegionEnum.VALADAGAL,
    languages: [
      LanguageEnum.MELGHUUR,
      LanguageEnum.ALLDEDAN,
      LanguageEnum.ESAHN,
    ],
  },
  {
    region: RegionEnum.MAINLAND_SCHELK,
    languages: [
      LanguageEnum.LOROSIAN,
      LanguageEnum.ARDONIC,
      LanguageEnum.ESAHN,
    ],
  },
  {
    region: RegionEnum.NEW_VOLAND,
    languages: [
      LanguageEnum.VOLAANI,
      LanguageEnum.BROLEAN,
      LanguageEnum.BWANTAAL,
    ],
  },
  {
    region: RegionEnum.DJENNDAN_PROTECTORATE,
    languages: [
      LanguageEnum.ALLDEDAN,
      LanguageEnum.MELGHUUR,
      LanguageEnum.ESAHN,
    ],
  },
  {
    region: RegionEnum.COASTAL_BOSEN,
    languages: [
      LanguageEnum.ELMECIAN,
      LanguageEnum.CREONIC,
      LanguageEnum.ALLDEDAN,
    ],
  },
  {
    region: RegionEnum.SIADAGAL,
    languages: [
      LanguageEnum.ARDONIC,
      LanguageEnum.LOROSIAN,
      LanguageEnum.CREONIC,
    ],
  },
  {
    region: RegionEnum.FORESTS_OF_CREONA,
    languages: [
      LanguageEnum.CREONIC,
      LanguageEnum.ELMECIAN,
      LanguageEnum.TALUAN,
    ],
  },
  {
    region: RegionEnum.PLENITH_SOUTH,
    languages: [LanguageEnum.TALUAN, LanguageEnum.CREONIC, LanguageEnum.ESAHN],
  },
  {
    region: RegionEnum.REVIAK_PROPER,
    languages: [
      LanguageEnum.USKELIAN,
      LanguageEnum.ELMECIAN,
      LanguageEnum.VOLAANI,
    ],
  },
  {
    region: RegionEnum.EASTERN_BORDERLANDS,
    languages: [
      LanguageEnum.USKELIAN,
      LanguageEnum.ELMECIAN,
      LanguageEnum.VOLAANI,
    ],
  },
  {
    region: RegionEnum.SOUTHWEST_HINN,
    languages: [
      LanguageEnum.DELONIAN,
      LanguageEnum.KIMENIAN,
      LanguageEnum.VOLAANI,
    ],
  },
  {
    region: RegionEnum.SCHELK_ISLANDS,
    languages: [
      LanguageEnum.ELMECIAN,
      LanguageEnum.LOROSIAN,
      LanguageEnum.ARDONIC,
    ],
  },
  {
    region: RegionEnum.CENTRAL_BOSEN,
    languages: [
      LanguageEnum.ALLDEDAN,
      LanguageEnum.ELMECIAN,
      LanguageEnum.CREONIC,
    ],
  },
  {
    region: RegionEnum.NORTHERN_WILDS,
    languages: [
      LanguageEnum.KIMENIAN,
      LanguageEnum.OMMULTIC,
      LanguageEnum.ALLDEDAN,
    ],
  },
] as const;

export { diasporicRegions };

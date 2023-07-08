import { getRandomArrayValue, rollDie } from "../../utils/dice-roller";
import { Ancestry, AncestryEnum } from "../../character/characteristics";
import type { EnumValue } from "../../utils/utility-types";
import { diasporicRegions } from "./diasporic-regions";
import { Lineage, LineageEnum } from "../../character/origins/lineage";
import { Region, RegionEnum } from "../../character/origins/region";
import { Language, LanguageEnum } from "../../character/origins/language";
import { Character } from "../../character/character";

type LineageRegionLanguages = {
  readonly lineage: Lineage;
  readonly region: Region;
  readonly languages: readonly Language[];
};

type NonPulnagaAncestry = EnumValue<Omit<typeof AncestryEnum, "PULNAGA">>;

const lineageByAncestry: {
  readonly [key in NonPulnagaAncestry]: readonly LineageRegionLanguages[];
} = {
  [AncestryEnum.AISLUN]: [
    {
      lineage: LineageEnum.FARRAK,
      region: RegionEnum.NEW_SCORTH,
      languages: [LanguageEnum.ESAHN],
    },
    {
      lineage: LineageEnum.LORISS,
      region: RegionEnum.MAINLAND_SCHELK,
      languages: [LanguageEnum.LOROSIAN],
    },
    {
      lineage: LineageEnum.UJEREN,
      region: RegionEnum.REVIAK_PROPER,
      languages: [LanguageEnum.USKELIAN],
    },
    {
      lineage: LineageEnum.WEYELLIAN,
      region: RegionEnum.WEYELL_GROVES,
      languages: [LanguageEnum.THELEAN],
    },
    {
      lineage: LineageEnum.ORAN,
      region: RegionEnum.HINN_DELTA,
      languages: [LanguageEnum.THELEAN],
    },
  ],
  [AncestryEnum.DJENNDAN]: [
    {
      lineage: LineageEnum.MELGHUUR,
      region: RegionEnum.NORTH_VALADAGAL,
      languages: [LanguageEnum.MELGHUUR],
    },
    {
      lineage: LineageEnum.DJENASH,
      region: RegionEnum.DJENNDAN_PROTECTORATE,
      languages: [LanguageEnum.ALLDEDAN],
    },
    {
      lineage: LineageEnum.GORAK,
      region: RegionEnum.CENTRAL_BOSEN,
      languages: [LanguageEnum.ALLDEDAN],
    },
    {
      lineage: LineageEnum.DJELLAK,
      region: RegionEnum.NORTHERN_WILDS,
      languages: [LanguageEnum.KIMENIAN],
    },
    {
      lineage: LineageEnum.KRIDAT,
      region: RegionEnum.FORKLANDS,
      languages: [LanguageEnum.ALLDEDAN],
    },
  ],
  [AncestryEnum.HUMAN]: [
    {
      lineage: LineageEnum.VARAWAK,
      region: RegionEnum.OMMULTIC_FRONT,
      languages: [LanguageEnum.OMMULTIC],
    },
    {
      lineage: LineageEnum.SARPENDII,
      region: RegionEnum.NORTH_WENDAJII,
      languages: [LanguageEnum.BWANTAAL],
    },
    {
      lineage: LineageEnum.DELONIAN,
      region: RegionEnum.DELONIAN_HINN,
      languages: [LanguageEnum.DELONIAN],
    },
    {
      lineage: LineageEnum.KIMENIAN,
      region: RegionEnum.WEYELL_NORTH,
      languages: [LanguageEnum.KIMENIAN],
    },
    {
      lineage: LineageEnum.BOSENITE,
      region: RegionEnum.COASTAL_BOSEN,
      languages: [LanguageEnum.ALLDEDAN],
    },
    {
      lineage: LineageEnum.FIERLAN,
      region: RegionEnum.SIADAGAL,
      languages: [LanguageEnum.ARDONIC],
    },
    {
      lineage: LineageEnum.CREONAN,
      region: RegionEnum.FORESTS_OF_CREONA,
      languages: [LanguageEnum.CREONIC],
    },
    {
      lineage: LineageEnum.REINEIKA,
      region: RegionEnum.PLENITH_SOUTH,
      languages: [LanguageEnum.TALUAN],
    },
    {
      lineage: LineageEnum.BALENDIAN,
      region: RegionEnum.STORMPLAINS,
      languages: [LanguageEnum.USKELIAN, LanguageEnum.ELMECIAN],
    },
    {
      lineage: LineageEnum.ISLANDER,
      region: RegionEnum.SCHELK_ISLANDS,
      languages: [LanguageEnum.LOROSIAN],
    },
    {
      lineage: LineageEnum.WOLDARKIN,
      region: RegionEnum.NORTHERN_WILDS,
      languages: [LanguageEnum.KIMENIAN, LanguageEnum.ALLDEDAN],
    },
  ],
  [AncestryEnum.KAHLNISSA]: [
    {
      lineage: LineageEnum.KALMORIAN,
      region: RegionEnum.BROLEAN_EXPANCE,
      languages: [LanguageEnum.BROLEAN],
    },
    {
      lineage: LineageEnum.GRASSLANDER,
      region: RegionEnum.EAST_WENDAJII,
      languages: [LanguageEnum.BWANTAAL],
    },
    {
      lineage: LineageEnum.SULOSSI,
      region: RegionEnum.SHIMMERING_GULF,
      languages: [LanguageEnum.BROLEAN],
    },
    {
      lineage: LineageEnum.VARAWAK,
      region: RegionEnum.OMMULTIC_FRONT,
      languages: [LanguageEnum.OMMULTIC],
    },
    {
      lineage: LineageEnum.ICEWALKER,
      region: RegionEnum.NORTHERN_WILDS,
      languages: [LanguageEnum.DELONIAN, LanguageEnum.USKELIAN],
    },
  ],
  [AncestryEnum.VIANTU]: [
    {
      lineage: LineageEnum.ALMAZHAN,
      region: RegionEnum.NEW_VOLAND,
      languages: [LanguageEnum.VOLAANI],
    },
    {
      lineage: LineageEnum.VITXIPLALAX,
      region: RegionEnum.SOUTH_WENDAJII,
      languages: [LanguageEnum.VOLAANI],
    },
    {
      lineage: LineageEnum.ITHERIAN,
      region: RegionEnum.CLIFFS_OF_BORALIS,
      languages: [LanguageEnum.BROLEAN],
    },
    {
      lineage: LineageEnum.FOUNDFOLK,
      region: RegionEnum.NORTHERN_HINN,
      languages: [LanguageEnum.KIMENIAN],
    },
    {
      lineage: LineageEnum.BALENDIAN,
      region: RegionEnum.EASTERN_BORDERLANDS,
      languages: [LanguageEnum.USKELIAN],
    },
  ],
} as const;

type LineageResult = {
  lineage: Lineage;
  region: Region;
  language: Language;
  isDiasporic?: boolean;
};

const rollDiasporicLineage = (
  lineages?: readonly LineageRegionLanguages[]
): LineageResult => {
  let lineage: Lineage;
  if (!lineages || rollDie(10) === 10) {
    lineage = LineageEnum.SEVERED;
  } else {
    lineage = getRandomArrayValue(lineages).lineage;
  }

  const { region, languages } = getRandomArrayValue(diasporicRegions);

  return {
    lineage,
    region,
    language: getRandomArrayValue(languages),
    isDiasporic: true,
  };
};

const rollPulnagaLineage = (ignoreDiasporic?: boolean): LineageResult => {
  const dieRoll = rollDie(ignoreDiasporic ? 3 : 4);
  switch (dieRoll) {
    case 1: {
      return getLineageResult(AncestryEnum.HUMAN);
    }
    case 2: {
      return getLineageResult(AncestryEnum.KAHLNISSA);
    }
    case 3: {
      const lineage = LineageEnum.VALIARCH_BLOODLINE;
      const { region, language } = rollDiasporicLineage();
      return { lineage, region, language };
    }
    default: {
      const { lineage } = rollPulnagaLineage(true);
      const { region, language } = rollDiasporicLineage();
      return { lineage, region, language, isDiasporic: true };
    }
  }
};

const getLineageResult = (ancestry: Ancestry): LineageResult => {
  if (ancestry === AncestryEnum.PULNAGA) {
    return rollPulnagaLineage();
  }

  const lineages = lineageByAncestry[ancestry];
  const lineageRoll = rollDie(lineages.length + 1);

  if (lineageRoll > lineages.length) {
    return rollDiasporicLineage(lineages);
  }

  const { lineage, region, languages } = getRandomArrayValue(lineages);
  return {
    lineage,
    region,
    language: getRandomArrayValue(languages),
  };
};

const rollLineage = (character: Character) => {
  const {
    lineage,
    region,
    language,
    isDiasporic = false,
  } = getLineageResult(character.characteristics.ancestry as Ancestry);
  character.origins.lineage = lineage;
  character.origins.region = region;
  character.origins.language = language;
  character.origins.isDiasporic = isDiasporic;
};

export { rollLineage };

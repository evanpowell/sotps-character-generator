import { AptitudeEnum } from "../character/profile/aptitude";
import { ExpertiseEnum } from "../character/profile/expertise";
import { VocationEnum } from "../character/profile/vocation";

const vocationIntersection = {
  [ExpertiseEnum.ALCHEMY]: {
    [AptitudeEnum.STRONGARM]: [VocationEnum.BREWER, VocationEnum.SALVAGER],
    [AptitudeEnum.SURVIVALIST]: [VocationEnum.GATHERER, VocationEnum.WITCH],
    [AptitudeEnum.ACROBAT]: [VocationEnum.MIXOLOGIST, VocationEnum.SLEEPER],
    [AptitudeEnum.SEEKER]: [
      VocationEnum.DISTILLER,
      VocationEnum.MEDICINE_MAKER,
    ],
    [AptitudeEnum.DEVISER]: [VocationEnum.APOTHECARY, VocationEnum.BREWMASTER],
    [AptitudeEnum.SCHOLAR]: [VocationEnum.HEALER, VocationEnum.HERBALIST],
    [AptitudeEnum.WATCHER]: [VocationEnum.ALCHEMIST, VocationEnum.BOTANIST],
    [AptitudeEnum.OPPORTUNIST]: [
      VocationEnum.NOSTRUMIST,
      VocationEnum.PERFUMER,
    ],
  },
  [ExpertiseEnum.COMBAT]: {
    [AptitudeEnum.STRONGARM]: [VocationEnum.VANGUARD, VocationEnum.WARRIOR],
    [AptitudeEnum.SURVIVALIST]: [VocationEnum.BULWARK, VocationEnum.GRAPPLER],
    [AptitudeEnum.ACROBAT]: [VocationEnum.ARCHER, VocationEnum.DUELIST],
    [AptitudeEnum.SEEKER]: [VocationEnum.ASSASSIN, VocationEnum.SCORPION],
    [AptitudeEnum.DEVISER]: [VocationEnum.STRATEGIST, VocationEnum.VIPER],
    [AptitudeEnum.SCHOLAR]: [VocationEnum.CLERIC, VocationEnum.MONK],
    [AptitudeEnum.WATCHER]: [VocationEnum.MILITIA_LEADER, VocationEnum.RIVAL],
    [AptitudeEnum.OPPORTUNIST]: [
      VocationEnum.FREERIDER,
      VocationEnum.SELLSWORD,
    ],
  },
  [ExpertiseEnum.CRAFTS]: {
    [AptitudeEnum.STRONGARM]: [VocationEnum.FORGEMASTER, VocationEnum.SMITH],
    [AptitudeEnum.SURVIVALIST]: [VocationEnum.PREPPER, VocationEnum.TRAPPER],
    [AptitudeEnum.ACROBAT]: [VocationEnum.SCAFFOLDER, VocationEnum.WEAVER],
    [AptitudeEnum.SEEKER]: [VocationEnum.JEWELER, VocationEnum.MECHANIC],
    [AptitudeEnum.DEVISER]: [VocationEnum.ENGINEER, VocationEnum.SPIDER],
    [AptitudeEnum.SCHOLAR]: [VocationEnum.MAKER, VocationEnum.TAILOR],
    [AptitudeEnum.WATCHER]: [VocationEnum.ARCHITECT, VocationEnum.BUILDER],
    [AptitudeEnum.OPPORTUNIST]: [VocationEnum.PEDDLER, VocationEnum.TRADER],
  },
  [ExpertiseEnum.INFLUENCE]: {
    [AptitudeEnum.STRONGARM]: [VocationEnum.STALWART, VocationEnum.WRANGLER],
    [AptitudeEnum.SURVIVALIST]: [VocationEnum.GATEKEEPER, VocationEnum.TRACKER],
    [AptitudeEnum.ACROBAT]: [VocationEnum.ENTERTAINER, VocationEnum.JUGGLER],
    [AptitudeEnum.SEEKER]: [VocationEnum.DIPLOMAT, VocationEnum.TACTICIAN],
    [AptitudeEnum.DEVISER]: [VocationEnum.MYSTIC, VocationEnum.SAVANT],
    [AptitudeEnum.SCHOLAR]: [VocationEnum.ADVISOR, VocationEnum.AUGUR],
    [AptitudeEnum.WATCHER]: [VocationEnum.POLITICIAN, VocationEnum.SPYMASTER],
    [AptitudeEnum.OPPORTUNIST]: [VocationEnum.FENCE, VocationEnum.RINGLEADER],
  },
  [ExpertiseEnum.LORE]: {
    [AptitudeEnum.STRONGARM]: [VocationEnum.HERALD, VocationEnum.MOUNTAINEER],
    [AptitudeEnum.SURVIVALIST]: [
      VocationEnum.CARTOGRAPHER,
      VocationEnum.STORYTELLER,
    ],
    [AptitudeEnum.ACROBAT]: [VocationEnum.CHRONICLER, VocationEnum.DANCER],
    [AptitudeEnum.SEEKER]: [VocationEnum.SAGE, VocationEnum.PHILOSOPHER],
    [AptitudeEnum.DEVISER]: [VocationEnum.AMBASSADOR, VocationEnum.ORACLE],
    [AptitudeEnum.SCHOLAR]: [VocationEnum.ELDER, VocationEnum.HISTORIAN],
    [AptitudeEnum.WATCHER]: [VocationEnum.PRIEST, VocationEnum.SHAMAN],
    [AptitudeEnum.OPPORTUNIST]: [VocationEnum.BARD, VocationEnum.TRAVELER],
  },
  [ExpertiseEnum.MANIPULATION]: {
    [AptitudeEnum.STRONGARM]: [VocationEnum.ROCKCLIMBER, VocationEnum.SHIPMAN],
    [AptitudeEnum.SURVIVALIST]: [VocationEnum.PROWLER, VocationEnum.RANGER],
    [AptitudeEnum.ACROBAT]: [VocationEnum.GHOST, VocationEnum.SCOUT],
    [AptitudeEnum.SEEKER]: [VocationEnum.FOX, VocationEnum.PICKPOCKET],
    [AptitudeEnum.DEVISER]: [
      VocationEnum.CRYPTOGRAPHER,
      VocationEnum.MENTALIST,
    ],
    [AptitudeEnum.SCHOLAR]: [VocationEnum.ANTAGONIST, VocationEnum.DIVINER],
    [AptitudeEnum.WATCHER]: [VocationEnum.OVERSEER, VocationEnum.PUPPETEER],
    [AptitudeEnum.OPPORTUNIST]: [VocationEnum.ROGUE, VocationEnum.THIEF],
  },
  [ExpertiseEnum.SPELLWORK]: {
    [AptitudeEnum.STRONGARM]: [VocationEnum.AWAKENER, VocationEnum.BLACKGUARD],
    [AptitudeEnum.SURVIVALIST]: [VocationEnum.DRUID, VocationEnum.WHISPERER],
    [AptitudeEnum.ACROBAT]: [VocationEnum.SHADOWDANCER, VocationEnum.SORCERER],
    [AptitudeEnum.SEEKER]: [VocationEnum.COLDRUNNER, VocationEnum.SANDMAN],
    [AptitudeEnum.DEVISER]: [VocationEnum.BATTLEMAGE, VocationEnum.WIZARD],
    [AptitudeEnum.SCHOLAR]: [VocationEnum.EVOKER, VocationEnum.THAUMATURGE],
    [AptitudeEnum.WATCHER]: [VocationEnum.ARTIFICER, VocationEnum.ENCHANTER],
    [AptitudeEnum.OPPORTUNIST]: [VocationEnum.CONJURER, VocationEnum.WARLOCK],
  },
  [ExpertiseEnum.STEWARDSHIP]: {
    [AptitudeEnum.STRONGARM]: [
      VocationEnum.CHAMBERLAIN,
      VocationEnum.STABLEHAND,
    ],
    [AptitudeEnum.SURVIVALIST]: [
      VocationEnum.BEASTMASTER,
      VocationEnum.PILGRIM,
    ],
    [AptitudeEnum.ACROBAT]: [VocationEnum.FARMHAND, VocationEnum.SHEPHERD],
    [AptitudeEnum.SEEKER]: [VocationEnum.FORAGER, VocationEnum.HUNTER],
    [AptitudeEnum.DEVISER]: [VocationEnum.DELEGATOR, VocationEnum.SCAVENGER],
    [AptitudeEnum.SCHOLAR]: [VocationEnum.CARETAKER, VocationEnum.MENDER],
    [AptitudeEnum.WATCHER]: [VocationEnum.CHEF, VocationEnum.PROVISIONER],
    [AptitudeEnum.OPPORTUNIST]: [VocationEnum.ACOLYTE, VocationEnum.SQUIRE],
  },
};

export { vocationIntersection };

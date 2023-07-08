import type { EnumValue } from "../utils/utility-types";
import { AttributeEnum } from "./attributes";

enum SkillEnum {
  BRAWL = "Brawl",
  CLIMB = "Climb",
  FOCUS_STRENGTH = "Focus Strength",
  HURL_OBJECT = "Hurl Object",
  SUSTAIN_STRENGTH = "Sustain Strength",
  SCALE_ROPE = "Scale Rope",
  FISH = "Fish",
  HUNT = "Hunt",
  KEEP_WATCH = "Keep Watch",
  RUN = "Run",
  SWIM = "Swim",
  TREK = "Trek",
  ACROBATIC_FEAT = "Acrobatic Feat",
  CATCH_THROW = "Catch/Throw",
  DANCE = "Dance",
  JUMP = "Jump",
  MOVE_QUIETLY = "Move Quietly",
  TUMBLE = "Tumble",
  AIM = "Aim",
  BANDAGE_INJURY = "Bandage Injury",
  FORGERY = "Forgery",
  PERFORM_MUSIC = "Perform Music",
  REPAIR_MEND = "Repair Mend",
  TIE_KNOT = "Tie Knot",
  ALTER_MECHANISM = "Alter Mechanism",
  DECIPHER_CODE = "Decipher Code",
  ENVISION = "Envision",
  GAMBLE = "Gamble",
  RECOLLECT = "Recollect",
  SEND_SIGNAL = "Send Signal",
  APPRAISE = "Appraise",
  INSCRIBE = "Inscribe",
  EVOKE = "Evoke",
  MEDITATE = "Meditate",
  NEGOTIATE = "Negotiate",
  READ_MAP = "Read Map",
  ATTUNE = "Attune",
  DISCERN = "Discern",
  FORAGE = "Forage",
  GATHER = "Gather",
  HIDE = "Hide",
  TRACK = "Track",
  BRIBE = "Bribe",
  COMFORT = "Comfort",
  PERSUADE = "Persuade",
  PROVOKE = "Provoke",
  TELL_FORTUNE = "Tell Fortune",
  TELL_STORY = "Tell Story",
}

type Skill = EnumValue<typeof SkillEnum>;

type SkillAndPoints = {
  name: Skill;
  points: number;
};

const skillAttributeMap = {
  [SkillEnum.BRAWL]: AttributeEnum.STR,
  [SkillEnum.CLIMB]: AttributeEnum.STR,
  [SkillEnum.FOCUS_STRENGTH]: AttributeEnum.STR,
  [SkillEnum.HURL_OBJECT]: AttributeEnum.STR,
  [SkillEnum.SUSTAIN_STRENGTH]: AttributeEnum.STR,
  [SkillEnum.SCALE_ROPE]: AttributeEnum.STR,
  [SkillEnum.FISH]: AttributeEnum.END,
  [SkillEnum.HUNT]: AttributeEnum.END,
  [SkillEnum.KEEP_WATCH]: AttributeEnum.END,
  [SkillEnum.RUN]: AttributeEnum.END,
  [SkillEnum.SWIM]: AttributeEnum.END,
  [SkillEnum.TREK]: AttributeEnum.END,
  [SkillEnum.ACROBATIC_FEAT]: AttributeEnum.AGI,
  [SkillEnum.CATCH_THROW]: AttributeEnum.AGI,
  [SkillEnum.DANCE]: AttributeEnum.AGI,
  [SkillEnum.JUMP]: AttributeEnum.AGI,
  [SkillEnum.MOVE_QUIETLY]: AttributeEnum.AGI,
  [SkillEnum.TUMBLE]: AttributeEnum.AGI,
  [SkillEnum.AIM]: AttributeEnum.ACC,
  [SkillEnum.BANDAGE_INJURY]: AttributeEnum.ACC,
  [SkillEnum.FORGERY]: AttributeEnum.ACC,
  [SkillEnum.PERFORM_MUSIC]: AttributeEnum.ACC,
  [SkillEnum.REPAIR_MEND]: AttributeEnum.ACC,
  [SkillEnum.TIE_KNOT]: AttributeEnum.ACC,
  [SkillEnum.ALTER_MECHANISM]: AttributeEnum.INT,
  [SkillEnum.DECIPHER_CODE]: AttributeEnum.INT,
  [SkillEnum.ENVISION]: AttributeEnum.INT,
  [SkillEnum.GAMBLE]: AttributeEnum.INT,
  [SkillEnum.RECOLLECT]: AttributeEnum.INT,
  [SkillEnum.SEND_SIGNAL]: AttributeEnum.INT,
  [SkillEnum.APPRAISE]: AttributeEnum.WIS,
  [SkillEnum.INSCRIBE]: AttributeEnum.WIS,
  [SkillEnum.EVOKE]: AttributeEnum.WIS,
  [SkillEnum.MEDITATE]: AttributeEnum.WIS,
  [SkillEnum.NEGOTIATE]: AttributeEnum.WIS,
  [SkillEnum.READ_MAP]: AttributeEnum.WIS,
  [SkillEnum.ATTUNE]: AttributeEnum.PER,
  [SkillEnum.DISCERN]: AttributeEnum.PER,
  [SkillEnum.FORAGE]: AttributeEnum.PER,
  [SkillEnum.GATHER]: AttributeEnum.PER,
  [SkillEnum.HIDE]: AttributeEnum.PER,
  [SkillEnum.TRACK]: AttributeEnum.PER,
  [SkillEnum.BRIBE]: AttributeEnum.CHA,
  [SkillEnum.COMFORT]: AttributeEnum.CHA,
  [SkillEnum.PERSUADE]: AttributeEnum.CHA,
  [SkillEnum.PROVOKE]: AttributeEnum.CHA,
  [SkillEnum.TELL_FORTUNE]: AttributeEnum.CHA,
  [SkillEnum.TELL_STORY]: AttributeEnum.CHA,
} as const;

export type { Skill, SkillAndPoints };

export { SkillEnum, skillAttributeMap };

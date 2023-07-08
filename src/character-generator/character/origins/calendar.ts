import { EnumValue } from "../../utils/utility-types";

enum MonthEnum {
  BAILIEAS_DAWN = "Bailiea's Dawn",
  STAR_OF_THE_MORNING = "Star of the Morning",
  SEEDS_RISE = "Seed's Rise",
  DANCE_OF_ETIA = "Dance of Etia",
  WATERS_RISE = "Water's Rise",
  VOSTIARS_RENEWAL = "Vostiar's Renewal",
  THE_WARMING_NIGHT = "The Warming Night",
  KALMORS_BRIGHT_MIST = "Kalmor's Bright Mist",
  SONG_OF_ITHERA = "Song of Ithera",
  WATERS_FALL = "Water's Fall",
  STAR_OF_THE_EVENING = "Star of the Evening",
  THRENNUMS_JOURNEY = "Thrennum's Journey",
}

type Month = EnumValue<typeof MonthEnum>;

enum WeekEnum {
  FIRST = "First",
  SECOND = "Second",
  THIRD = "Third",
  FOURTH = "Fourth",
  FIFTH = "Fifth",
  LAST = "Last",
}

type Week = EnumValue<typeof WeekEnum>;

enum WeekdayEnum {
  REHAN = "Rehan",
  THELEHAN = "Thelehan",
  MIDDHAN = "Middhan",
  LEDHAN = "Ledhan",
  ESTAHAN = "Estahan",
}

type Weekday = EnumValue<typeof WeekdayEnum>;

const DAWNS_EDGE = "Dawn's Edge";

const THRENNUMS_CHASE = "Thrennum's Chase";

export type { Month, Week, Weekday };

export { MonthEnum, WeekEnum, WeekdayEnum, DAWNS_EDGE, THRENNUMS_CHASE };

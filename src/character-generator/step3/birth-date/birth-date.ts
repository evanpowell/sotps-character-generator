import { getRandomArrayValue, rollDie } from "../../utils/dice-roller";
import {
  DAWNS_EDGE,
  Month,
  MonthEnum,
  THRENNUMS_CHASE,
  Week,
  WeekEnum,
  Weekday,
  WeekdayEnum,
} from "../../character/origins/calendar";
import { Holiday, holidays } from "./holidays";
import { Character } from "../../character/character";

const months: readonly Month[] = Object.values(MonthEnum);
const weeks: readonly Week[] = Object.values(WeekEnum);
const weekdays: readonly Weekday[] = Object.values(WeekdayEnum);

const rollIsMoonDay = (month?: Month | typeof DAWNS_EDGE): boolean => {
  // There is a 2/59 chance of any given day being a moon day
  const isMoonDay = rollDie(59) >= 58;

  // There is roughly a 1/6 chance of Dawn's Edge having a moonday in it
  if (isMoonDay && month === DAWNS_EDGE) {
    return rollDie(6) === 6;
  }

  return isMoonDay;
};

const rollMonth = (): Month | typeof DAWNS_EDGE => {
  // 1-in-52 chance of a given day being in Dawn's Edge
  if (rollDie(52) === 52) {
    return DAWNS_EDGE;
  }

  return getRandomArrayValue(months);
};

const determineHoliday = (
  month: Month,
  week: Week,
  weekday: Weekday,
  isMoonDay: boolean
): Holiday | undefined => {
  const monthNum = months.indexOf(month) + 1;
  const weekNum = weeks.indexOf(week) + 1;
  const weekdayNum = weekdays.indexOf(weekday) + 1;

  const dateNum = Number(`${monthNum}${weekNum}${weekdayNum}`);
  return holidays.find((holiday) => {
    if (holiday.isMoonDay && !isMoonDay) {
      return false;
    }

    return dateNum >= holiday.minDate && dateNum <= holiday.maxDate;
  });
};

const generateBirthDateString = (
  month: Month,
  week: Week,
  weekday: Weekday,
  isMoonDay: boolean,
  holiday: Holiday | undefined
): string => {
  let dateString = `${week} ${weekday} of ${month}`;
  if (holiday) {
    dateString += `, ${holiday.name}`;
  }

  if (isMoonDay && !holiday?.isMoonDay) {
    dateString += `, Moon Day`;
  }

  return dateString;
};

const rollBirthDate = (character: Character) => {
  const isMoonDay = rollIsMoonDay();
  const moonDayStr = ", a moon day";

  if (rollDie(1461) === 1461) {
    return `${THRENNUMS_CHASE}${isMoonDay ? moonDayStr : ""}`;
  }

  const month = rollMonth();
  const weekday = getRandomArrayValue(weekdays);
  if (month === DAWNS_EDGE) {
    return `${weekday} of ${DAWNS_EDGE}`;
  }

  const week = getRandomArrayValue(weeks);
  const holiday = determineHoliday(month, week, weekday, isMoonDay);

  character.origins.birthDate = generateBirthDateString(
    month,
    week,
    weekday,
    isMoonDay,
    holiday
  );
};

export { rollBirthDate };

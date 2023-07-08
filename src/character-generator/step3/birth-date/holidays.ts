type Holiday = {
  minDate: number;
  maxDate: number;
  name: string;
  isMoonDay?: boolean;
};

const holidays: readonly Holiday[] = [
  {
    minDate: 111,
    maxDate: 111,
    name: `New Year's Day`,
  },
  {
    minDate: 111,
    maxDate: 165,
    name: `Bailiea's Blessing`,
    isMoonDay: true,
  },
  {
    minDate: 141,
    maxDate: 141,
    name: "Fourth Night",
  },
  {
    minDate: 215,
    maxDate: 215,
    name: `Dordirian`,
  },
  {
    minDate: 325,
    maxDate: 325,
    name: `Planter's Day`,
  },
  {
    minDate: 415,
    maxDate: 425,
    name: `Etia's Bloom`,
  },
  {
    minDate: 515,
    maxDate: 515,
    name: "Chapan Day",
  },
  {
    minDate: 533,
    maxDate: 533,
    name: `Kalmor's Day`,
  },
  {
    minDate: 612,
    maxDate: 612,
    name: `Merchant's Day`,
  },
  {
    minDate: 615,
    maxDate: 615,
    name: `Laborer's Day`,
  },
  {
    minDate: 611,
    maxDate: 665,
    name: `Harvest Moon`,
    isMoonDay: true,
  },
  {
    minDate: 713,
    maxDate: 713,
    name: `Vallicast's Night`,
  },
  {
    minDate: 823,
    maxDate: 823,
    name: `Nalvaram's Fantasy`,
  },
  {
    minDate: 845,
    maxDate: 845,
    name: `Day of Mists`,
  },
  {
    minDate: 932,
    maxDate: 932,
    name: `Winds of Ithera`,
  },
  {
    minDate: 1023,
    maxDate: 1033,
    name: `Swuskwah's Path`,
  },
  {
    minDate: 1053,
    maxDate: 1054,
    name: `Rite of Ressek`,
  },
  {
    minDate: 1111,
    maxDate: 1111,
    name: `Day of Maros`,
  },
  {
    minDate: 1265,
    maxDate: 1265,
    name: `Year's End Celebration`,
  },
] as const;

export { holidays };

export type { Holiday };

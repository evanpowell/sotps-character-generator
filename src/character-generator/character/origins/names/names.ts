import { Language, LanguageEnum } from "../language";
import { alldedanNames } from "./alldedan-names";
import { ardonicNames } from "./ardonic-names";
import { broleanNames } from "./brolean-names";
import { bwantaalNames } from "./bwantaal-names";
import { chenachuaNames } from "./chenachua-names";
import { creonicNames } from "./creonic-names";
import { delonianNames } from "./delonian-names";
import { elmecianNames } from "./elmecian-names";
import { esahnNames } from "./esahn-names";
import { kimenianNames } from "./kimenian-names";
import { lorosianNames } from "./lorosian-names";
import { melghuurNames } from "./melghuur-names";
import { ommulticNames } from "./ommultic-names";
import { taluanNames } from "./taluan-names";
import { theleanNames } from "./thelean-names";
import { torlishNames } from "./torlish-names";
import { uskelianNames } from "./useklian-names";
import { volaaniNames } from "./volaani-names";

const _namesByLanguage = {
  [LanguageEnum.ALLDEDAN]: alldedanNames,
  [LanguageEnum.ARDONIC]: ardonicNames,
  [LanguageEnum.BROLEAN]: broleanNames,
  [LanguageEnum.BWANTAAL]: bwantaalNames,
  [LanguageEnum.CHENACHUA]: chenachuaNames,
  [LanguageEnum.CREONIC]: creonicNames,
  [LanguageEnum.DELONIAN]: delonianNames,
  [LanguageEnum.ELMECIAN]: elmecianNames,
  [LanguageEnum.ESAHN]: esahnNames,
  [LanguageEnum.KIMENIAN]: kimenianNames,
  [LanguageEnum.LOROSIAN]: lorosianNames,
  [LanguageEnum.MELGHUUR]: melghuurNames,
  [LanguageEnum.OMMULTIC]: ommulticNames,
  [LanguageEnum.TALUAN]: taluanNames,
  [LanguageEnum.THELEAN]: theleanNames,
  [LanguageEnum.TORLISH]: torlishNames,
  [LanguageEnum.USKELIAN]: uskelianNames,
  [LanguageEnum.VOLAANI]: volaaniNames,
};

type NamesObj = (typeof _namesByLanguage)[keyof typeof _namesByLanguage];

export type { NamesObj };

const namesByLanguage = _namesByLanguage as {
  readonly [key in LanguageEnum]: NamesObj;
};

export { namesByLanguage };

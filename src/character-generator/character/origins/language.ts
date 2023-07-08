import { EnumValue } from "../../utils/utility-types";

enum LanguageEnum {
  ALLDEDAN = "Alldedan",
  ARDONIC = "Ardonic",
  BROLEAN = "Brolean",
  BWANTAAL = "Bwantaal",
  CHENACHUA = "Chenachua",
  CREONIC = "Creonic",
  DELONIAN = "Delonian",
  ELMECIAN = "Elmecian",
  ESAHN = "Es'ahn",
  KIMENIAN = "Kimenian",
  LOROSIAN = "Lorosian",
  MELGHUUR = "Melg'huur",
  OMMULTIC = "Ommultic",
  TALUAN = "Taluan",
  THELEAN = "Thelean",
  TORLISH = "Torlish",
  USKELIAN = "Uskelian",
  VOLAANI = "Volaani",
}

type Language = EnumValue<typeof LanguageEnum>;

export { LanguageEnum };

export type { Language };

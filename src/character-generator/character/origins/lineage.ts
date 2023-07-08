import { EnumValue } from "../../utils/utility-types";

enum LineageEnum {
  ALMAZHAN = "Almazhan",
  BALENDIAN = "Balendian",
  BOSENITE = "Bosenite",
  CREONAN = "Creonan",
  DELONIAN = "Delonian",
  DJELLAK = "Djellak",
  DJENASH = "Djenash",
  FARRAK = "Farrak",
  FIERLAN = "Fierlan",
  FOUNDFOLK = "Foundfolk",
  GORAK = "Gorak",
  GRASSLANDER = "Grasslander",
  ICEWALKER = "Icewalker",
  ISLANDER = "Islander",
  ITHERIAN = "Itherian",
  KALMORIAN = "Kalmorian",
  KIMENIAN = "Kimenian",
  KRIDAT = "Kridat",
  LORISS = "Loriss",
  MELGHUUR = "Melg'huur",
  ORAN = "Oran",
  REINEIKA = "Reineika",
  SARPENDII = "Sarpendii",
  SULOSSI = "Sulossi",
  UJEREN = "Ujeren",
  VALIARCH_BLOODLINE = "Valiarch Bloodline",
  VARAWAK = "Varawak",
  VITXIPLALAX = "Vitxiplalax",
  WEYELLIAN = "Weyellian",
  WOLDARKIN = "Woldarkin",
  SEVERED = "Severed Lineage",
}

type Lineage = EnumValue<typeof LineageEnum>;

export type { Lineage };

export { LineageEnum };

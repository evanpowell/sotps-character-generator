// The first clause of background-story is about settlement and region, flavored by lineage

import { LineageEnum } from "../../character/origins/lineage";
import { SettlementEnum } from "../../character/origins/settlement";

/*
  Example background story parts 1 & 2:

    I hail from a proud village among the redwoods, brought up by artisans that valued self-reliance.


  NOTE:
    Valiarch Bloodline and severed lineage are NOT included below.
    Because they are not tied to a specific region, they cannot
    suggest regional descriptors. Likewise, characters that are
    diasporic should NOT use the below mapping, since a diasporic
    character's lineage is no longer tied to the region they are from.

    For Valiarch, Diasporic, and Severed Lineage, a different chart
    should be used, the structure of which is TBD.
*/

const backgroundStoryPart1 = {
  [LineageEnum.ALMAZHAN]: {
    [SettlementEnum.HAMLET]: [
      `I hail from a proud hamlet among the redwoods`,
      `I was born in a quiet hamlet cloistered by the hills`,
    ],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.BALENDIAN]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.BOSENITE]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.CREONAN]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.DELONIAN]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.DJELLAK]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.DJENASH]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.FARRAK]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.FIERLAN]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.FOUNDFOLK]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.GORAK]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.GRASSLANDER]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.ICEWALKER]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.ISLANDER]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.ITHERIAN]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.KALMORIAN]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.KIMENIAN]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.KRIDAT]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.LORISS]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.MELGHUUR]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.ORAN]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.REINEIKA]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.SARPENDII]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.SULOSSI]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.UJEREN]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.VARAWAK]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.VITXIPLALAX]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.WEYELLIAN]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
  [LineageEnum.WOLDARKIN]: {
    [SettlementEnum.HAMLET]: [``, ``],
    [SettlementEnum.REDOUBT]: [``, ``],
    [SettlementEnum.VILLAGE]: [``, ``],
    [SettlementEnum.SMALL_TOWN]: [``, ``],
    [SettlementEnum.LARGE_TOWNSHIP]: [``, ``],
    [SettlementEnum.SMALL_CITY]: [``, ``],
    [SettlementEnum.LARGE_CITY]: [``, ``],
    [SettlementEnum.NOMADIC]: [``, ``],
  },
};

// const backgroundStoryPart1 = {
//   "BALENDIAN": {
//     "VILLAGE": [
//       `I was born under the canopies of the dark forest in a village of the borderlands,`
//     ],
//     "SMALL_TOWNSHIP": [
//       `Raised under the rains on a small township in the Stormplains,`,
//       `Growing up in a township the Josa Groves beyond the edge of the borderlands,`
//     ],
//     "LARGE_TOWNSHIP": [
//       `Growing up in a township the Josa Groves beyond the edge of the borderlands,`
//     ],
//     "NOMADIC": [
//       `I wandered the Stormplains`
//     ]
//   },
// }

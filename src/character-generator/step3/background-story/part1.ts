// The first clause of background-story is about settlement and region, flavored by lineage

import { LineageEnum } from "../../character/origins/lineage";
import { SettlementEnum } from "../../character/origins/settlement";

/*
  Example background story parts 1 & 2:

    I hail from a proud village among the redwoods, [in the company of/alongside/surrounded by/together with/under the watch of/in the midst of] artisans that valued self-reliance.


  NOTE:
    Valiarch Bloodline and severed lineage are NOT included below.
    Because they are not tied to a specific region, they cannot
    suggest regional descriptors. Likewise, characters that are
    diasporic should NOT use the below mapping, since a diasporic
    character's lineage is no longer tied to the region they are from.

    For Valiarch, Diasporic, and Severed Lineage, a different chart
    should be used.
*/

type NonStandardLineage =
  | LineageEnum.VALIARCH_BLOODLINE
  | LineageEnum.WOLDARKIN
  | LineageEnum.SEVERED;

type BackgroundStoryPart1Lineage = Omit<
  {
    [key in LineageEnum]: {
      [key in SettlementEnum]: string[];
    };
  },
  NonStandardLineage
>;

const backgroundStoryPart1Lineage: BackgroundStoryPart1Lineage = {
  [LineageEnum.ALMAZHAN]: {
    [SettlementEnum.HAMLET]: [
      `I hail from a proud hamlet within the tall-grasses`,
      `I was born in a quiet hamlet cloistered by the hills`,
      `I come from a small hamlet at the edge of the tall-grasses`,
      `I was raised in an ancient hamlet near Voland's standing stones`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I came up in a makeshift redoubt bordering the hills`,
      `I was raised in a military camp at the edge of the tall-grasses`,
      `I was born in a redoubt of Almazhan watchers standing vigil near the sacred stones`,
      `I come from one of the many milita encampments within the northern tall-grasses`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I hail from a proud clanship in a village of the southern tall-grasses`,
      `I come from the village of power near the pools of Meiartu'uv`,
      `I was born in a village nestled within the tall-grasses`,
      `I was raised in an upstart little village near the Voland standing stones`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I come from an isolated community in a small town of northern New Voland`,
      `I hail from a small township within the tall-grasses of Voland`,
      `I was raised in a sleepy little town near the standing stones of New Voland`,
      `I grew up in a small township at the edge of the tall-grasses`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I hail from the ground dwellers corridor in a large township near the tall-grasses`,
      `I was born in a large township in New Voland north of the standing stones`,
      `I was raised in the tall-grass fields of a large township in Voland`,
      `I come from an expansive historic township in New Voland`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I was born near the green pools in the rainy districts of Meiartu'uv`,
      `I hail from a small city outside Meiartu'uv in the province of New Voland`,
      `I come from the barracks of the New Voland gunners, outside the redbarks of Torvv`,
      `I hail from a borough of the great city of Durdu'un`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I was raised in the Almazhan districts of the city of Durdu'un`,
      `I came up as a sapling within the redbarks of the great city of Torvv`,
      `I grew up in the tall-grass districts of Torvv, the most impressive city in New Voland`,
      `I was raised within the redbarks of the city of Torvv`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I have journeyed through the tall-grasses with the Voland nomads`,
      `I come from a nomadic people in the north of New Voland`,
      `I have followed the Tu'uv within the tall-grasses of New Voland`,
      `I was raised among the wanderers-through-the-tall-grasses`,
    ],
  },
  [LineageEnum.BALENDIAN]: {
    [SettlementEnum.HAMLET]: [
      `I was raised in a quiet hamlet near the Chosen Waters`,
      `I was born in the Joza hamlets under the canopies of Bright Reach`,
      `I hail from a little hamlet at the center of the Stormplains`,
      `I come from a small but ancient Renkian settlement on the coasts of the Chosen Waters`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I hail from a Thelean redoubt in the Marendian flatlands`,
      `I was raised within the coastal redoubt near the Borderlands town of Tradesbay`,
      `I was born in a stalwart Thelean redoubt west of the Balithian Dusklands`,
      `I come from a military redoubt situated in the Eastern Borderlands`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I was born in the village of Finn's Oak just north of Bright Reach`,
      `I hail from a village in the Stormplains north of Soral's Gulley`,
      `I was raised at the mouth of the Channel in a village outside Okal`,
      `I come from a quiet village west of the Vokian Forests in the Eastern Borderlands`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I am from the small town of Fennan in the north of the Balendian Channel`,
      `I grew up in Meerland, a small town overlooking the standing stones of Maren`,
      `I was born in a small town near Wavesrush on the coast of the Chosen Waters`,
      `I come from the small town of Tylan west of the Vokian Roots of Life`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I hail from a vast township in the Stormplains overlooking the Delonian Gulf`,
      `I was raised among the Vokian forests in a large township claimed by Reviak`,
      `I come from the large township of Is'ula just south of the Vokian Forests`,
      `I was born in the flatlands near the Joza forests of the Borderlands`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I was born in the historic district in Oskol, a small city north of the Krench`,
      `I hail from the smal city of Dhentin just north of the Marendian flatlands`,
      `I come from a small and forgotten city in the Stormplains`,
      `I was born in the Eastern Borderlands in the small city of Stroan`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I hail from a cloistered borough of Bright Reach, the gleaming city of the Chosen Waters`,
      `I was born in the great city of Fennan among the bright rocks of the Chosen Waters`,
      `I was raised within the Renkian city of Drynnia in the western Stormplains`,
      `I was brought up in the city of Scorchstone overlooking the Teeth of Sulas`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I traveled as a young one with the nomads of the Vokian forests`,
      `I was raised among the wanderers of the Vokian forests east of the Krench`,
      `I grew up with the nomads of the Marendian flatlands, traveling from Tradesbay to Bravok`,
      `I was born in the traveling camps along the coasts of the Chosen Waters`,
    ],
  },
  [LineageEnum.BOSENITE]: {
    [SettlementEnum.HAMLET]: [
      `I grew up in a sleepy hamlet on the loamy coasts of Bosen`,
      `I was raised in a hamlet at the foothills of central Bosen`,
      `I was born in a vibrant hamlet on an island off the eastern coast of Bosen`,
      `I come from an ancient hamlet at the waters edge of the Sen river`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I hail from a proud military redoubt in the foothills of Nalvarkaenos`,
      `I was born in the Bosenite redoubt guarding the mouth of the Sen river`,
      `I grew up within the fortified redoubt watching over the Horn of Bosen`,
      `I was raised in the proud Elmecian fort known as Ish-sasat on the Bosen coast`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I was raised in the hardy village of Jelekron overlooking the great reef`,
      `I hail from the historic village of Jelekron near the salt rocks of Coastal Bosen`,
      `I come from a village overlooking the Sea of Thrennum in the province of Bosen`,
      `I was born on the island coasts of Bosen in a small and forgotten village`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I hail from a proud Elmecian township beyond the coastal forests of Bosen`,
      `I was born in the foothills within a traditional Elmecian township`,
      `I come from a small town in the humid rocklands of coastal Bosen`,
      `I was raised in an ancient and little known Elmecian town in the foothills of Bosen`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I grew up in the vast township of Nuk'thasti on the southern coasts of Bosen`,
      `I hail from an Elmecian township stretching from the foothills to the Horn of Bosen`,
      `I was born in a forgotten corner of a large township in the southern forests of Bosen`,
      `I come from a proud Elmecian township in the islands off the coast of south Bosen`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I come from coastal Bosen, raised in a small city near Finder's Wharf`,
      `I was born on the barges of Finder's Wharf in the salty winds of the Great Sea`,
      `I was raised in a small city along the loamy coasts of the province of Bosen`,
      `I hail from the outer rafts of Finder's Wharf near the wavy shores of Coastal Bosen`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I hail from the defiant city of Mahrkonat north of the Pale Spires`,
      `I was born in the proud city of Mahrkonat in the Bosenite hold among the Pale Spires`,
      `I was raised in a large city in the Bosen waters of the Sea of Thrennum`,
      `I was pulled from the salty seas in the expansive city near the south of Bosen`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I sailed as a tadpole with the travelers of the high waters on the coasts of Bosen`,
      `I wandered my early years with the nomads of the waving waters of Bosen`,
      `I grew up among the longboat travelers of southern Bosen`,
      `I was raised among the proud longboat travelers on the loamy islands of Coastal Bosen`,
    ],
  },
  [LineageEnum.CREONAN]: {
    [SettlementEnum.HAMLET]: [
      `I came up in a cold hamlet on the rocky shores of Jodhra`,
      `I grew up in a tiny hamlet in the forest clearings`,
      `I was born in a proud hamlet nestled within the Jozawood groves of Creona`,
      `I was raised in a small hamlet along the foamy rocks in south Creona`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I hail from the Ohm'Veshi encampment that stands south of the Rise`,
      `I was born in a military redoubt in south Creona dedicated to the Order of Enthaad`,
      `I was raised among the fortified Thelean redoubt protecting the ancient groves of south Creona`,
      `I come from a proud Reineka military encampment situated beyond the plateau`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I was born in the shadow of the Ghatial in a sleepy village south of the Creonan forests`,
      `I hail from a small village at the foothills of the river valley of Ciodlaar`,
      `I was born in a quiet village within the flower meadows of central Creona`,
      `I was raised in a mighty village of Jozawood watchers in the forests of Creona`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I was raised in the plateau fields west of Veragem on the Rise overlooking the Creonan forests`,
      `I hail from a small town in the upper plateaus beyond Veragem in Creona`,
      `I come from the small town of Norvesh in the province of Creona`,
      `I grew up in the tradition-bearer town of Frenslalaat in southwestern Creona`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I was born in a vast township just north of the port city of Sar du Plagg`,
      `I am from a the township of Urdeenia situated within the ancient forests of Creona`,
      `I grew up listening to the waves along the rocks in a coastal township in the province of Creona`,
      `I hail from a large township cloistered by the Jozawoods of central Creona`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I was raised in a secluded district in a small city near to the dockyards of Sar du Plagg`,
      `I hail from the small city of Plagg Proper in the province of Creona`,
      `I was born in a run down district in a forgotten city beyond the coasts of Creona`,
      `I was raised in a small city north of Urdeenia beyond the River Ciodlaar`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I was raised on the expansive dockyards of the city of Sar du Plagg in Creona`,
      `I earned my sealegs in the Jodhra waters off the coasts of the Sar du Plagg dockyards`,
      `I came up from the depths of the Jodhra Ocean in the south marinas of Sar du Plagg`,
      `I was born in the unknown forests in an expansive city at the heart of Creona`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I sailed from an early age with the privateers who patrol the Jodhra Ocean`,
      `I grew up among the salt scrubbers who sail the coasts of Creona`,
      `I was raised among a small group of nomadic shipdwellers who patrol the Creonan seaways`,
      `I was born of the fjord travelers who ride the misty waves of the Ciodlaar`,
    ],
  },
  [LineageEnum.DELONIAN]: {
    [SettlementEnum.HAMLET]: [
      `I hail from a proud hamlet in the glimmering shale valley of the central Deloni`,
      `I was born in a quiet hamlet cloistered by the softwoods along the bank of the Deloni`,
      `I was raised in an upstart fishbone hamlet near the lower Deloni`,
      `I come from the central rapids within a tiny hamlet along the river Deloni`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I was raised in a Thelean fortress in the northernmost reaches of Hinn proper`,
      `I grew up in a military encampment on the south embankment the river's fork`,
      `I came up among the valley horde in a redoubt north of the Deloni forks`,
      `I was born in an ancient Thelean redoubt still standing at the mouth of the Deloni river`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I hail from a modest village in the gleaming valley of the northern Deloni`,
      `I was born within a quiet Delonian village north of Lanodin in the river forests of Hinn`,
      `I come from an ancient river village situated in the icy tributaries of the upper Deloni`,
      `I came up in a quiet village where the water molds the shale along the central Deloni`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I was raised in a small town near the Delonian forks in the province of Hinn`,
      `I sprouted up in a small town within the reeded riverlands of central Hinn`,
      `I hail from River's Rest, a small town stretched along the banks of the Deloni`,
      `I come from a small town in the reedlands beyond the fork of the Deloni river`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I hail from the grand Delonian township of Galtiere along the Deloni gorges`,
      `I was born in a large Proudsong township cloistered where the Deloni diverges`,
      `I was raised in the echoes of the Galtiere waterfall in the northern riverlands`,
      `I came up in the colonial trade center of Water's Edge near the Hinn Delta`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I was raised in the outskirts of Lanodin, the bustling ferry-center city at the Deloni forks`,
      `I grew up under the purview the bluerobes near the city of Lanodin in central Hinn`,
      `I was born in a small city north of the bustling center of Lanodin in central Hinn`,
      `I hail from Lanodin, a small but propserous ferry-boat city at the Deloni forks`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I hail from the historic district of a large city near Water's Edge in south Hinn`,
      `I was born in the echoes of the Howling Towers along the Hinn Delta`,
      `I was raised in the northern Deloni in a large but quiet cityscape that overlooks the riverlands`,
      `I come from the Thelean city called Water's Edge where the Deloni meets the Thrennum sea`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I came up among the flatboat nomads of the central Deloni`,
      `I was raised with the traveling riverlanders of central Hinn`,
      `I grew up with the Delonian forest walkers who wander the riverlands from the delta to the forks`,
      `I followed the river nomads from reed to vine in the misty shale valleys of the Deloni`,
    ],
  },
  [LineageEnum.DJELLAK]: {
    [SettlementEnum.HAMLET]: [
      `I hail from a proud Djenndan hamlet little known within the Kimenian wilds`,
      `I was born in a small hamlet in the frozen northern wilds`,
      `I earned my braids among the ice climbers of the Kimenian north`,
      `I come from a forgotten hamlet in the distant western mountains of the Kimenian north`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I endured the frozen wastes in a distant northern warrior encampment at the edge of the wilds`,
      `I was raised in an ancient Djenndan redoubt in the central Kimenian north`,
      `I hail from a small military redoubt located in the heart of the northern wilds`,
      `I was born outside the reach of the Protectorate within a traditional Kimenian encampment`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I earned my braids in a small village in the cold of the Kimenian north`,
      `I hail from a quiet village where no roads lead, far north in the Kimenian wilds`,
      `I was raised in the frigid north in a small village of Djenndan who practice the wild ways`,
      `I come from a small village that no one has ever heard of deep within the northern wilds`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I earned my sacred braids in a small town divided from the Empire by the northern mountains`,
      `I hail from a small town bordering the Empire's provinces`,
      `I was raised in a small town just east of the Protectorate in the Kimenian north`,
      `I come from the northern wilds and was raised in a small town of proud Djellak`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I was born in the Kimenian district of the vast township of Akal on the edge of the wilds`,
      `I was raised among the migrant Djellak who have made their home in the large township of Akal`,
      `I earned my sacrd braids among the laborers who have settled in the township of Akal`,
      `I hail from Akal, a large township at the edge of the northern wilds`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I earned my braids in Laganos, a small city district that borders Pelmora in northern Weyell`,
      `I was raised among the Djellak who settled in the southern wilds near the City of Embers`,
      `I came up among the Kimenian Djenndan who have integrated throughout the city of Pelmora`,
      `I was born to Djellak refugees who traveled far south to make their home in the city of Pelmora`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I hail from the district of Laganos in the northern city of Pelmora`,
      `I was born north of the City of Embers, beyond the northern pass`,
      `I was raised in the Djenndan quarter of the large northern city of Pelmora`,
      `I earned my braids in the northern expanse beyond the City of Embers`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I was raised in the old ways among the Djellak hunters of the northern wilds`,
      `I earned my braids with the northern hunting nomads who travel to the distant frozen pass`,
      `I grew up among the nomads who travel from north Weyell into the distant frozen wilds`,
      `I was born to nomads who traverse the frozen wastes to the northern pass across the wilds`,
    ],
  },
  [LineageEnum.DJENASH]: {
    [SettlementEnum.HAMLET]: [
      `I hail from a proud hamlet in the heart of the Central Corridor`,
      `I was raised in the south corridor just beyond the Forklands within a quiet hamlet`,
      `I was born in a forgotten hamlet located south of Cyopolda`,
      `I come from a guarded hamlet beyond the foothills of the northern Protectorate`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I hail from Morvalus, a sacred military enclave tasked with watching the township of Deridian`,
      `I was born within a Thelean redoubt along the trade routes to the Protectorate's outer villages`,
      `I drew my first blood in the fortified military enclave at the foothills of the western Protectorate`,
      `I was raised in a military redoubt overlooking the central glacier of the Djenndan Protectorate`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I hail from the village of Heksaag in the foothills of the northern Protectorate`,
      `I drew first blood in a small village at the heart of the Central Corridor`,
      `I was raised in a village in the foothills of the Djenndan Protectorate`,
      `I was born in a quiet village overlooking the vast tundra at the edge of the Central Corridor`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I was born in a small town little known to the Empire, located in the north of the Protectorate`,
      `I grew up in a small town just beyond Cyopolda in the Protectorate`,
      `I hail from the small town of Kilfirth Landing in the boglands of the south Protectorate`,
      `I come from a small town in the forgotten wastes of the frozen Protectorate`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I hail from the great township of Akal on the eastern border of the Protectorate`,
      `I was born in the historic district of Akal, the large township in the eastern Protectorate`,
      `I was raised in the north of the township of Deridian Standing, beyond the bogs`,
      `I grew up in the proud township of Deridian Standing in the central part of the Protectorate`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I drew first blood in the northern city of Rendalenn among the watchers of Rendal's wall`,
      `I was raised in a small district in the northern region of the city Cyopolda`,
      `I grew up in the ancient city of Cyopolda, in a neighborhood exclusively settled by Djenash peoples`,
      `I hail from Cho Kassal, the city of peat, in the west of Deridian Standing`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I hail from the ancient city of Rendalenn near the wall in the north`,
      `I grew up in a tired district of the large city of Rendalenn in the northern Protectorate`,
      `I was raised among the Djenash who made their home outside the city of Rendalenn`,
      `I was born in the large city of Rendalenn among the guardians of the wall`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I was raised among the Buffalo Nomads who travel the Central Corridor south to Deridian Standing`,
      `I drew my first blood among the nomads of the glacial valleys of the Central Corridor`,
      `I hail from the hunting parties of the northern Protectorate`,
      `I was born to the goat herders of Horsehead Lake who travel the hills and bogs of the region`,
    ],
  },
  [LineageEnum.FARRAK]: {
    [SettlementEnum.HAMLET]: [
      `I hail from a conservative hamlet in the central province north of Vordigar City`,
      `I was born in a proud hamlet that follows the old ways of the province`,
      `I was raised in a hamlet modeled after the farming communities of the Old Kingdom`,
      `I came up within a quiet hamlet in the central province of New Scorth`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I grew up in a Planemare enclave just south of Vordigar City`,
      `I come from a proud military encampment honoring the old ways in New Scorth`,
      `I was raised in a fortified redoubt south of Vordigar City in New Scorth`,
      `I was born among a traditional Planemare militia in the shadow of the Cloudchaser Mountains`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I hail from a traditional village holding fast to Farrak values in New Scorth`,
      `I was born in a small but proud village under the Farrak sigil in New Scorth`,
      `I come from a village in New Scorth holding fast to traditional Farrak values`,
      `I was raised in a conservative village in central New Scorth`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I hail from a quiet, small town in the central Commonwealth of New Scorth`,
      `I forged my early years in a forgotten little town at the heart of the Commonwealth`,
      `I was born near the barrows of the Commonwealth in a proud township`,
      `I grew up in the mists of a small town cloistered by the Cloudchaser Mountains in New Scorth`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I was born in a large township encompassing the muddy fields of the Commonwealth of New Scorth`,
      `I hail from a vast township in New Scorth situated in the eastern plains of the Commonwealth`,
      `I was raised in an expansive township in southern New Scorth near the Plenith Delta`,
      `I grew up in the foothills of central New Scorth in a large and diverse township`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I was born on Rockfall Alley in the east borough of Vordigar City in New Scorth`,
      `I was raised in Vordigar City in a small and quiet district near the western reservoir`,
      `I hail from the central quarter of the bastion of the Commonwealth, Vordigar City`,
      `I come from the bustling ais'lun city of Old Vordigar, the heart of New Scorth`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I grew up in the autarch distric of Vordigar City in New Scorth`,
      `I was born on Planemare Run in the south quarter of Vordigar City in New Scorth`,
      `I came up under the shadow of the Far'ahn Temple in central Vordigar City`,
      `I hail from the northern quarter of the grand Vordigar City in proud New Scorth`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I grew up with the Farrak Corps who patrolled the Commonwealth north to south`,
      `I was raised among the nomadic ais'lun who chart the central mountain pass in New Scorth`,
      `I come from the wanderers south of the Forklands, the nomadic peoples of New Scorth`,
      `I came up among the nomadic hill hunters of the Commonwealth of New Scorth`,
    ],
  },
  [LineageEnum.FIERLAN]: {
    [SettlementEnum.HAMLET]: [
      `I was born in a rustic little hamlet tending the fields of Siadagal`,
      `I hail from a quiet hamlet in the north riverfields of the province of Siadagal`,
      `I grew up in a proud hamlet in the central rolling hills of Siadagal`,
      `I come from a small hamlet hidden in the south riverfields of the province of Siadagal`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I was raised in a Thelean military encampment in eastern Siadagal`,
      `I was born where the rivers meet the sea in a small redoubt in the north of Siadagal`,
      `I drew my first breath in the central tower of a Thelean redoubt in the hills of Siadagal`,
      `I came up among a quiet community that has spent generations tending a redoubt in south Siadagal`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I was first rooted in a small village in the western rivierfields of Siadagal`,
      `I drew my first breath in a proud village hidden in the rolling hills of central Siadagal`,
      `I was raised in a diverse village in the south forests of Siadagal province`,
      `I come from a quiet village in the east riverfields of Siadagal province`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I was born in a small but proud town located in the rolling hills of central Siadagal`,
      `I was first rooted in a small, quiet town in beautiful north Siadagal`,
      `I sprouted up from a small township found in the rolling fieldlands of southwest Siadagal`,
      `I came up from the soil in a quaint town located far from the shore in central Siadagal province`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I came up from the soil in a large township of expansive fields in north-central Siadagal`,
      `I first felt the winds in my home town near the shores of east Siadagal province`,
      `I was first rooted in the soils of a vast township located in west Siadagal province`,
      `I sprouted up in the north fields, a vast township stretching across north-central Siadagal`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I came up from the soil in the fields outside the city of Lirkammer`,
      `I hail from the eclectic, mercantile Likrammer city in Central Siadagal`,
      `I was born in the city of Lirkammer in the central part of Siadagal province`,
      `I grew up on the unforgiving streets of downtown Lirkammer city in Siadagal`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I was first rooted in the fields nearby Lirkammer city in central Siadagal`,
      `I first sprouted up in the mercantile city of Lirkammer, the jewel of Siadagal province`,
      `I was raised in a cramped district in central Lirkammer city in the province of Siadagal`,
      `I hail from Lirkammer, the vast and wealthy city at the heart of Siadagal province`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I was born among the mushroom foragers who wander the treescapes of south Siadagal`,
      `I was raised among the nomadic foragers of south Siadagal province`,
      `I grew up with the northern desert nomads at the far edge of Siadagal province`,
      `I came up with the berry wanderers, the nomads who plant no roots in Siadagal province`,
    ],
  },
  [LineageEnum.FOUNDFOLK]: {
    [SettlementEnum.HAMLET]: [
      `I first saw the canopy in a cloister central to Narxil of the greatwoods, the Empire's Hinn`,
      `I was raised among the branches in a small hamlet in Narxil of the greatwoods`,
      `I was born to a small clan settlement in Narxil of the greatwoods, the Empire's North Hinn`,
      `I first held the branches in a quiet cloister high among Narxil of the greatwoods`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I grew up in a clanship encampment sponsored by provincial Northern Hinn`,
      `I come from a Thelean military redoubt situated at the edge of Narxil, also called North Hinn`,
      `I was raised among the military encampments of Northern Hinn`,
      `I was born in a small military redoubt, a settlement held over from the Tannith uprising`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I first gazed into the canopy of a skyward village in western Narxil of the greatwoods`,
      `I first held the branches in a small village at the heart of Narxil of the greatwoods`,
      `I grew up in a traditional skyward village deep within Narxil of the greatwoods`,
      `I was born in Northern Hinn, in a quiet treetop village in the forests we called Narxil`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I first glimpsed the canopy in a small Narxil town east of the greatwoods`,
      `I first climbed the branches of my small home town in west Narxil of the greatwoods`,
      `I was born in a small skyward town central to Narxil, known in Thelea as Northern Hinn`,
      `I first heard the leaves of the greatwoods in a small township in Northern Hinn`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I grew up in Xiapitis, a vast township in Northern Hinn spanning the western quarter of Narxil`,
      `I first held the branches amid the clanhomes in the township of Xiapitis in Northern Hinn`,
      `I first felt the winds among the canopy in a large township at the heart of Narxil of the greatwoods`,
      `I hail from Xiapitis, the vast township of clanhomes in Narxil of the greatwoods, Northern Hinn`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I was raised in a clanhome in Outer Xiapitis, central to Narxil of the greatwoods`,
      `I was born in a clanheld treetop settlement near to Xiapitis at the heart of Northern Hinn`,
      `I first held the branches of the skyward cities south of Xiapitis in Narxil of the greatwoods`,
      `I come from the canopied settlements west of Xiapitis at the heart of Northern Hinn`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I was born among the cloisters of clanhomes in Upper Xiapitis at the heart of Northern Hinn`,
      `I was raised in the sprawling treehomes of Northern Hinn, called Xiapitis of Narxil`,
      `I first held the branches in Xiapitis, the cloisters of clanhomes in Narxil of the greatwoods`,
      `I hail from the great clanhomes of Xiapitis in Narxil of the greatwoods, Northern Hinn`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I was raised among the vinewalkers, the nomads of the greatwoods of Northern Hinn`,
      `I was born in the nomadic hunting camps beyond Narxil of the greatwoods in Northern Hinn`,
      `I found my first leaves with the nomadic vinewalkers of Northern Hinn`,
      `I came up with the vinewalkers, the nomads from beyond the canopies of Northern Hinn`,
    ],
  },
  [LineageEnum.GORAK]: {
    [SettlementEnum.HAMLET]: [
      `I was born in a hamlet among the boulders of the Bosen highlands, where the ice meets the stone`,
      `I was raised a Bosen highlander, in a proud hamlet carved from the icy boulders`,
      `I hail from a quiet hamlet braving the cold winds of the Bosen highlands`,
      `I grew up where the ice meets the stone in a small hamlet in the central Bosen highlands`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I come from a border encampment at the foothills of the Bosen highlands`,
      `I grew up among a military enclave central to the Bosen highlands`,
      `I was born in a military redoubt that guards the northern reaches of the Bosen highlands`,
      `I was raised in a military encampment claimed by the Gorak long ago in the highlands`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I come from a small village on the harsh ice sheets of the misty Bosen highlands`,
      `I was born in a proud village in the windy Bosen highlands, where ice meets stone`,
      `I was raised in a village where ice meets stone hidden in the Bosen highlands`,
      `I grew up among the boulders of a proud village of central Bosen highlanders`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I first heard the echoes in the northern Bosen highlands in a small clan gathering`,
      `I was raised in a clan gathering at the heart of the Bosen highlands`,
      `I earned my claws among the bolders of a small clan gathering deep in the Bosen highlands`,
      `I was born in a proud clan gathering atop the granite cliffs of the Bosen highlands`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I hail from the largest clan gathering cloistered within the Bosen highlands`,
      `I came up among a large clan gathering nestled in the southern Bosen highlands`,
      `I earned my claws climbing the boulders of a large clan gathering in the Bosen highlands`,
      `I grew up where the ice meets the stone in a large clan gathering in the Bosen highlands`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I hail from the rocky barricades of Bosen highlanders in the northern highlands`,
      `I was raised within the rockline fortification at the heart of the Bosen highlands`,
      `I earned my claws climbing the boulders of the rockline fortification in the Bosen highlands`,
      `I came up among the Bosen highlanders who patrol the rockline barricades in the northern mountains`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I was born in the large clanhold high plateaus of the Bosen highlands`,
      `I earned my claws where the ice meets the stone in the large clanhold plateaus of the highlands`,
      `I was raised atop the large clanhold plateaus central to the Bosen highlands`,
      `I first heard the echoes among the bolders of the central plateaus in the Bosen highlands`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I was raised among the snowbeast hunters of the northern mountain pass in Bosen`,
      `I was born to the nomads who traverse the great sawtooth in the north of the Bosen highlands`,
      `I grew up among the boulder crawlers of the north Bosen highlands`,
      `I come from the boulder crawlers, a nomadic group who dwells across the north Bosen highlands`,
    ],
  },
  [LineageEnum.GRASSLANDER]: {
    [SettlementEnum.HAMLET]: [
      `I grew up in a tending hamlet among the tall-grasses of eastern Wendajii`,
      `I was born in a proud hamlet in the central tall-grasses of eastern Wendajii`,
      `I come from a quiet hamlet among the waving tall-grasses of eastern Wendajii`,
      `I was raised in a hamlet where the waters meet the tall-grasses in eastern Wendajii`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I came up in a military encampment at the edge of the Expanse in north-eastern Wendajii`,
      `I grew up in a Thelean redoubt at the border of the the Expanse in eastern Wendajii`,
      `I was born in a stalwart military enclave guarding the border of the Brolean Expanse`,
      `I hail from a Thelean redoubt that sheltered refugees from the tall-grasses of Wendajii`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I was planted firmly in the tall-grasses in a quiet village in the plains of east Wendajii`,
      `I grew up in a proud village situated in the plains-beyond-the-coasts in eastern Wendajii`,
      `I was born in an ancient Sarpendii village at the pale-reach-of-the-plains in east Wendajii`,
      `I come from a proud grasslander village in the rolling plains of eastern Wendajii`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I hail from the herd-watchers among the tall-grasses of east-central Wendajii`,
      `I was raised with the herd-watchers in a wide plain in east-central Wendajii`,
      `I was born where the cool-waters meet the tall-grasses among the herders of central Wendajii`,
      `I come from the herd-watchers who tend the central plains of east Wendajii`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I first peeked above the tall-grasses among the herd-watchers of east-central Wendajii`,
      `I was born in a large herd-watchers commune atop the central plains of east Wendajii`,
      `I grew up in a commune of the herd-watchers of the central plains of east Wendajii`,
      `I was raised in a large community where the waters meet the tall-grasses in east Wendajii`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I was born in the tall-grasses north of Dunaajii, a city at the eastern gateway of Wendajii`,
      `I was born just beyond the city of Dunaajii at the gateway east of Wendajii`,
      `I am from the waving city of Dunaajii at the eastern gateway of Wendajii and the Expanse`,
      `I hail from the city of travelers called Dunaajii in east Wendajii`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I hail from the city of travelers beyond the tall-grasses, called Dunaajii`,
      `I was born at the edge of the tall-grasses in the border city called Dunaajii in Wendajii`,
      `I was raised in a communal neighborhood overlooking the plains of Wendajii in the city of Dunaajii`,
      `I came up in a quiet neighborhood of the city of Dunaajii in the borderlands of east Wendajii`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I was raised among the plains-walkers of the tall-grasses, in north-east Wendajii`,
      `I grew up in a nomadic encampment near the Expanse borderlands in north-east Wendajii`,
      `I was born to the gliders-of-the-tall-grasses who walk the plains of east Wendajii`,
      `I come from the gliders-of-the-tall-grasses, the nomads of the low plains of Wendajii`,
    ],
  },
  [LineageEnum.ICEWALKER]: {
    [SettlementEnum.HAMLET]: [
      `I was born in a small and snowy hamlet in the northern glaciers of Wendajii`,
      `I hail from a proud hamlet cloistered by the icy boulders of northern Wendajii`,
      `I come from the north of Wendajii, born in a hamlet west of the frost-fields`,
      `I grew up in a small hamlet braving the icy winds in the mountains of north Wendajii`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I was raised among refugees in a Thelean military camp at the edge of the Ommultic Front`,
      `I was born to refugees in a Thelean enclave along the glacier pass in north Wendajii`,
      `I come from the north of Wendajii, raised in a military encampment in the frost-fields`,
      `I am from the Proudsong hold called Danmour Ridge, in the Delonian north`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I was born in a village in the north where the glaciers feed the waters of the Deloni`,
      `I am from a proud village of the north cloistered where the winds shape the glaciers`,
      `I grew up in a northern village overlooking the icy eastern mouth of the Deloni`,
      `I come from a village in the north at the farthest eastern reach of the Deloni in Wendajii`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I was raised in a quiet community in a small town in the cold fields of north Wendajii`,
      `I come from a small township in the north stretching across the eastern frost-fields of Wendajii`,
      `I was born in a traditional commune in a northern township where the glaciers meet the Deloni`,
      `I hail from a proud and cloistered commune in a small township in the north Wendajii glaciers`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I grew up in a hardworking commune in the large townships that span the glaciers of north Wendajii`,
      `I come from a proud commune in the frost-fields of the north where the glaciers form the Deloni`,
      `I was born in a quiet commune in the frost-fields of the north in Delonian Wendajii`,
      `I was brought up in a large territory stretched across the frost-fields of Wendajii north`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I come from a neighborhood of refugees cloistered in the dark quarter of the city Galtiere`,
      `I was born in the dark quarter of Galtiere in a collective of northern refugees`,
      `I grew up in the dark quarter of the city of Galtiere among a collective of displaced northerners`,
      `I was raised in Galtiere among other northern refugees pushed south by the Tannith uprising`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I came up with the proud glacier communes of the north along the eastern tributary of the Deloni`,
      `I grew up among the glacier communes of the north beyond the rock fall gorges of north Wendajii`,
      `I was born in a stalwart glacier commune in the rock fall Deloni gorges of north Wendajii`,
      `I come from the vast borderlands of the eastern tributary where the glaciers meet the waters in the north`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I was born among the walkers of the cold winds, the nomads who hunt the glaciers of the north`,
      `I come from the nomads of the north, the walkers of the cold winds, who live across north Wendajii`,
      `I was raised among nomads in northern Wendajii where the glaciers feed the waters of the Deloni`,
      `I am from the north, raised with the walkers of the cold winds where the glaciers meet the waters`,
    ],
  },
  [LineageEnum.ISLANDER]: {
    [SettlementEnum.HAMLET]: [
      `I was born in a rice hamlet in the green waves of the southern Schelk Islands`,
      `I was raised in a small and proud hamlet along the sardine shores of the central Schelk Islands`,
      `I come from a tiny hamlet in the central green waters of the Schelk archipelago`,
      `I grew up in the Schelk waters in a small fishing hamlet along the coasts of the southern islands`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I hail from a Lorosian redoubt in the northern shipping lanes of the Schelk Islands`,
      `I was born in a fortified Thelean military enclave on the mainland coasts of Schelk`,
      `I come from a military enclave guarding the trading boats of the north Schelk Islands`,
      `I was raised in the green waters in a military redoubt that guards the rice boats of the Schelk Islands`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I hail from a traditional village honoring the light of Ikishan in the green waters of Schelk`,
      `I was born in a small village in the islands of Schelk under the light of Ikishan`,
      `I come from a proud Lorosian village in the green waters of the central Schelk Islands`,
      `I was raised in a small village in the shimmering emerald pools of the central Schelk Islands`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I am from a small town overlooking the emerald pools of the central Schelk Islands`,
      `I was born in a proud township of rice fields inland among the Schelk Islands`,
      `I come from a legacy township along the sardine coasts of the southern Schelk Islands`,
      `I was raised under the light of Ikishan in the green waters of the southern Schelk Islands`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I was brought up on the sardine barges that fish the southern waters of the Schelk Islands`,
      `I come from the outstretched networks of sardine barges in the green waters of Schelk`,
      `I grew up among the sardine barges that stretch wide across the green waters of Schelk`,
      `I was born in the Islander communities who live on the floating barges of southern Schelk`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I hail from the island city of Yivihalo along the mercantile coasts of the Schelk Islands`,
      `I was born in a quiet neighborhood in the merchant city of Yivihalo in the Schelk Islands`,
      `I grew up under the light of Ikishan in the bustling city of Yivihalo in the Schelk Islands`,
      `I was raised in the vibrant city of Yivihalo in the quiet palms of the Schelk Islands`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I was brought up under the light of Ikishan in the island city Yivihalo in Schelk`,
      `I hail from the great merchant city of Yivihalo in green waters of Schelk`,
      `I come from the mercantile city of Yivihalo in the lush palm forests of the Schelk Islands`,
      `I am from a city called Yivihalo at the heart of the merchant trades of the Schelk Islands`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I was born among the sardine trawlers of the southern Schelk Islands`,
      `I was born on the fishing boats in the southern green waters of the Schelk Islands`,
      `I was raised under the light of Ikishan among the traveling trawlers of the Schelk Islands`,
      `I grew up in the light of Ikishan with the traveling fishers of the southern Schelk Islands`,
    ],
  },
  [LineageEnum.ITHERIAN]: {
    [SettlementEnum.HAMLET]: [
      `I was born in a proud hamlet in the tall forests atop the gleaming cliffs of Boralis`,
      `I come from a small hamlet of treehomes atop the gleaming cliffs of Boralis`,
      `I was raised in a coastal hamlet in the gleaming light of the cliffs of Boralis`,
      `I am from a hamlet of waving treehomes in the yellow-leaf forests overlooking the gleaming cliffs of Boralis`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I hail from a Thelean military encampment fortified on the coast of the Shimmering Gulf`,
      `I was raised in an Ommultic Front military enclave in the forests near the Shimmering Gulf`,
      `I was born to a family of refugees rooted in a military encampment overlooking the Boralis Channel`,
      `I am from an ancient Thelean redoubt carved into the rocks at the Straits of Volanius`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I come from a modest village in the yellow-leaf treehomes overlooking the waters of the Boralis Channel`,
      `I was born in a quiet village in the calm canopies of the Brolean forests not far from the Shimmering Gulf`,
      `I grew up in a small village atop the tall rocks in the forests above the cliffs of Boralis`,
      `I was raised among proud Itherians in a village of yellow-leaf treehomes atop the gleaming cliffs of Boralis`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I came up among the waving yellow-leaf treehomes stretched across the wide forests on the cliffs of Boralis`,
      `I was raised in the coastal townships overlooking the ruby seas of the Shimmering Gulf`,
      `I come from a small township in the sanguine forests beyond the tall rocks of the cliffs of Boralis`,
      `I hail from a proud township overlooking the tall rocks and sanguine forests along the cliffs of Boralis`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I grew up in the vast networks of yellow-leaf treehomes that line the forest's edge of the Shimmering Gulf`,
      `I was born in a great township of Itherian forest-dwellers at the edges of the Expanse near the Boralis Channel`,
      `I come from a proud and traditional settlement of treehomes in the waving forests overlooking the cliffs of Boralis`,
      `I first smelled the salted air of the Shimmering Gulf in a township of yellow-leaf treehomes near the Boralis Channel`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I was raised among the networks of yellow-leaf treehomes within the forest's nook near the coasts of the Shimmering Gulf`,
      `I grew up in a vast network of stilt-homes lining the coasts of the Boralis Channel in the far East`,
      `I was born in the high network of stilt-homes and seaweed stretching along the warm coasts of the Shimmering Gulf`,
      `I first felt the white sands in the shadows of the tall trees that line the gleaming cliffs of Boralis`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I was born where the trees meet the white sands along the coasts of the Shimmering Gulf in the Brolean Expanse`,
      `I come from the coasts of the white sands at the Straits of Volanius at the edge of the Brolean Expanse`,
      `I was born in the far east along the white sands that line the Brolean coasts of the Shimmering Gulf`,
      `I grew up in the round homes that stretch across the bleached sands of the Brolean coasts along the Shimmering Gulf`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I come from a nomadic clanship of seaweed scavengers who travel the calm waters of the Boralis Channel`,
      `I was born to the nomads of Boralis Channel who travel the tidal waters from the Great Maw to the Straits of Volanius`,
      `I came up among the nomadic clans of the Boralis Channel near the Great Maw`,
      `I was raised among the boathomes of Itherian nomads who live in the waters of the Boralis Channel`,
    ],
  },
  [LineageEnum.KALMORIAN]: {
    [SettlementEnum.HAMLET]: [
      `I branched from a quiet hamlet along the path of the hawthorn in the old Brolean forests of the east`,
      `I was born along the dark oak path in a small hamlet in the old Brolean forests of the east`,
      `I first wandered along the rowan path of a hamlet in the old Brolean forests of the east`,
      `I took root along the birch path in a quiet hamlet in the old Brolean forests of the east`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I learned my rituals among the Kalmorians of the dark oak in the military enclave of the northern Expanse`,
      `I grew up in among the Peacekeeper fortifications along the northern edge of the Brolean Expanse`,
      `I was raised in a Thelean military redoubt at the northern reach of the Brolean Expanse`,
      `I come from a haggard military outpost at the northern treeline of the Brolean Expanse`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I learned the song of the forest in a village on the hawthorn path of the Brolean east`,
      `I took root in a proud village among the dark oak canopies of the Brolean forests`,
      `I learned my rituals in a proud village along the rowan path of the Brolean forests of the east`,
      `I was born in a small village hidden in the birch groves of the Brolean forests`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I took root in the ancient kahlnissá township called Gladesh, found at the heart of the Brolean forests`,
      `I was born under the Peacekeeper held township of Gladesh deep within the Brolean Expanse`,
      `I come from a township called Gladesh under the jurisdiction of the Empire's Peacekeepers`,
      `I was raised in Gladesh, the ancient township at the edge of the Brolean Expanse`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I was brought up in the ancient township of Gladesh among a neighborhood of Kalmorians who carry on the old rituals`,
      `I was raised on the pathways of stone in the township of Gladesh at the edge of the Brolean Expanse`,
      `I grew up among the whispering trees of Gladesh, the ancient township in the Brolean east`,
      `I learned the songs of the forest from the ritualists who hold fast to the old ways in the township of Gladesh`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I was raised in the city of Lirrus on the edge of Borgas Hill in the Brolean Expanse`,
      `I was born in the grand city of Lirrus, the gem of the pinerush gates, in the Brolean Expanse`,
      `I come from the city at the edge of the pinerush gates in the Brolean Expanse`,
      `I was brought up on the stone streets of Borgas Hill in the Brolean city of Lirrus`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I learned my rituals in the city of Lirrus, the gem of the pinerush gates in the Brolean east`,
      `I first heard the songs of my people in a cloistered neighborhood in the Brolean city of Lirrus`,
      `I grew up on the streets of Lirrus, the farthest city in the east of the Brolean Expanse`,
      `I was raised among the ancient Brolean pines of Borgas Hill in the grandiose city of Lirrus`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I was raised with the whispers of the oak path, the nomads of the northern Brolean Expanse`,
      `I came up among the nomads of the eastern Brolean Expanse who follow the ritual of the rowan tree`,
      `I was born to the nomads of the birch tree who share rituals from the Expanse to the Eastern Kingdoms`,
      `I learned the songs of the forest among the nomads of the hawthorn path in the Brolean east`,
    ],
  },
  [LineageEnum.KIMENIAN]: {
    [SettlementEnum.HAMLET]: [
      `I was brought up among the pine groves in the small hamlet of Virrad in Southwest Weyell`,
      `I was raised north o'the pass in a proud hamlet of Kimenians in the icy north`,
      `I come from the conifers of north Weyell, born in a small hamlet near the mountains' rise`,
      `I was born in the tiny, roadside hamlet of Virrad in Southwest Weyell`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I was raised in a Kimenian refugee encampment in the central groves of Weyell province`,
      `I was born in a proud military enclave fortified in the north of Weyell province`,
      `I grew up in the outskirts of a Thelean redoubt not far from the central Weyell groves`,
      `I come from a Kimenian-held fort in the cold hills just beneath the Northern Weyell Pass`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I hail from a hardy village in the southern reach of Weyell province`,
      `I was born in the northern village of Hillcress along the western road to Pelmora in Weyell province`,
      `I come from a proud village in the central Weyell groves`,
      `I was raised in a humble village found in the central Weyell riverlands`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I hail from the small township Pike's Watch along the road to Pelmora in Weyell province`,
      `I was born in the riverland valleys in a small township in central Weyell province`,
      `I grew up in Pike's Watch, a small township of Thelean legacy along the northern gateway of Weyell province`,
      `I come from a small township cloistered in the western river valleys of Weyell province`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I come from a long line of Kimenians settled in the expansive southern groves of Weyell province`,
      `I was born in the Weyell port town of Ansrapol in a Kimenian enclave near the dockyards`,
      `I grew up in the riverlands of central Weyell in a large but sparsely populated township`,
      `I hail from central Weyell in a large Kimenian hold at the gateway to the north`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I grew up in an impoverished Kimenian borough in the central city of Minnevikaro in Weyell province`,
      `I am from a small city in the northeastern forests of the province of Weyell`,
      `I was born in a Kimenian hold in a small city in the central riverlands of Weyell province`,
      `I came up in the Kimenian district of a small city in south central Weyell province`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I was born in Pelmora, the City of Embers, located in the northern reaches of Weyell province`,
      `I was raised in the Kimenian districts of Pelmora, the city on the hill in northern Weyell province`,
      `I come from a Kimenian borough in the large port city of Asnarat at the mouth of the Weyell river`,
      `I was raised in an impoverished Kimenian borough in the Weyellian port city of Asnarat`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I hunted the Pel'hanok among the nomadic Ad'Tai who live freely in the northern mountains of Weyell`,
      `I was born in the Ad'Tai hunting encampments that follow the elk across the northern pass of Weyell`,
      `I grew up among the nomadic Kimenians who live in the reaches where Weyell enters the northern wilds`,
      `I was raised among the riverland nomads of the central Weyellian groves`,
    ],
  },
  [LineageEnum.KRIDAT]: {
    [SettlementEnum.HAMLET]: [
      `I hail from the north hamlets of Kridat encampments in the Forklands`,
      `I was born in the Forklands in a contested hamlet located in the borderlands of New Scorth`,
      `I was born in a Kridat hamlet in the Forklands in the east borderlands of Valadagal`,
      `I grew up in a fractured hamlet near the northern Protectorate border of the forklands`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I come from a Kridat refugee encampment in the Thelean fortress called Mournguard in the north Forklands`,
      `I was raised in the Thelean military redoubt along the Forklands border of Valadagal`,
      `I was born to Kridat refugees in a military enclave near the south border of the Forklands in New Scorth`,
      `I was born in an abandoned Thelean fortress in the bogs of the central Forklands`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I grew up in a small, upstart village in the desert hills of the east-central Forklands`,
      `I was born in a Kridat refugee camp in the foothills village of Heksaag in the Djenndan Protectorate`,
      `I come from the Forklands south, from a humble Kridat village near the border of New Scorth`,
      `I hail from a tiny Kridat village at the heart of the Forklands`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I was raised among the ancestral Kridat holdfast in the nothern Forklands`,
      `I was born in the ancestral Kridat holdfast where the waters meet the bogs in the Forklands`,
      `I followed my Kridat forebears along the sanded paths in the eastern Forklands`,
      `I come from an ancestral Kridat holdfast still following the old ways in the borderlands near New Scorth`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I was raised in a large Kridat township central to the Forklands`,
      `I grew up in the Kridat rat-clan holdfast in the Forklands outer borders near Valadagal`,
      `I was born in the mushroom-clan holdfast of the Kridat Forklands in the north`,
      `I was raised in the auspices of the Wise-Father within a clanhold at the borders of the Forklands near New Scorth`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I came up in the Forklands as the Wise-Father wills, just beyond the borders near the Protectorate`,
      `I hail from the old clan holdfasts of the central Forklands under the guidance of the Wise-Father`,
      `I come from the southern clan holdfasts in the Forklands at the borders of Valadagal and New Scorth`,
      `I grew up in the northern clan holdfasts in the Forklands at the borders of Valadagal and the Protectorate`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I was raised in a Kridat refugee camp located at the southern borders of the Forklands`,
      `I was born to a vast clan holdfast in the central rolling hills of the Forklands`,
      `I hail from a proud Kridat holdfast standing firm in the eastern deserts of the Forklands`,
      `I come from the ancestral Kridat holdfast situated above the northern bogs of the Forklands`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I grew up among the traveling foragers who follow the Wise-Father through the central Forklands`,
      `I was born to the nomads who traverse the rocky south Forklands in search of the Wise-Father's path`,
      `I was raised among devout spiritual Kridat nomads who follow the Wise-Father's path through the eastern Forklands`,
      `I was brought up with the nomads of the northern Forklands who follow the path of the Wise-Father`,
    ],
  },
  [LineageEnum.LORISS]: {
    [SettlementEnum.HAMLET]: [
      `I come from a traditional Ais'lun hamlet nestled deep within the ashwood forests of mainland Schelk`,
      `I was born within a noble hamlet in the glorious red forests of central Schelk`,
      `I come from a small and conservative hamlet nestled within the eastern forests of mainland Schelk`,
      `I was raised in a proud and noble hamlet under the banner of the Red Fox in mainland Schelk`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I come from a military redoubt still guarding the borders of the north kingdom in noble Schelk`,
      `I was raised in a Thelean military enclave built during the Supremacy in central Schelk`,
      `I hail from a stone fortified redoubt still standing over the mountain pass in southern Schelk`,
      `I was born in a Thelean military redoubt standing at the mouth of the Vulnith River in southeastern Schelk`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I came up in a small and historic village situated in the forests of western Schelk`,
      `I spent my youth under the banner of the Red Fox in a historic village in noble mainland Schelk`,
      `I was raised like my forebears in a grand village at the heart of the oak forests of mainland Schelk`,
      `I was brought up under the banner of the Red Fox in a proud village where the mountains rise in southern Schelk`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I come from a small township under the banner of the Red Fox in the heart of the great oaks of Schelk`,
      `I grew up among the ironwoods in a small and historic township in noble mainland Schelk`,
      `I came up in the traditions of the old kingdom in a small township central to mainland Schelk`,
      `I was born to a township near the mountains rise in southern Schelk`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I was raised in a large township in the gorges carved out by the Vulnith River in eastern Schelk`,
      `I was brought up in the noble forests in a vast township stretching across the riverlands of central Schelk`,
      `I spent my youth in the broadland township at the heart of the river gorges of mainland Schelk`,
      `I was raised under the banner of the Red Fox in the vast southern township where the mountains rise in Schelk`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I grew up in a forgotten neighborhood of the ironwood city, Veilin, at the heart of the province of Schelk`,
      `I come from Veilin, the ironwood city, where the forests meet the stone of the Old Kingdom of Schelk`,
      `I spent my youth on the streets of the city of the fox, Veilin, central to the province of Schelk`,
      `I was raised in a stalwart neighborhood in the city of the fox, called Veilin, in central Schelk`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I hail from Veilin, the city of the fox, the busied and historic center of the province of Schelk`,
      `I grew up on the vibrant streets of Veilin, the great ironwood city at the heart of the province of Schelk`,
      `I was raised within the walls of the city of Veilin, the historic ironwood city in central Schelk`,
      `I spent my youth in the streets of Veilin, the city of the fox, beyond the birch trees of central Schelk`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I grew up under the banner of the black bear among the nomads of the southern hill country of Schelk`,
      `I spent my early days under the banner of the grouse with the nomads of central mainland Schelk`,
      `I come from the people who carry the banner of the red deer, the travelers of northern Schelk province`,
      `I was raised among the keepers of the oak fire, the nomads who traverse the riverlands of eastern Schelk`,
    ],
  },
  [LineageEnum.MELGHUUR]: {
    [SettlementEnum.HAMLET]: [
      `I first met the sun and sands in a proud hamlet in the cactuslands of northern Valadagal`,
      `I was raised in the sands of Valadagal in a small hamlet bermed in the stony dunes of the north`,
      `I hail from the keepers of the sand settled in a proud hamlet in north central Valadagal`,
      `I was born in a reclusive hamlet in northwestern Valadagal in the sands overlooking the Forklands`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I was raised in the sands of the north of Valadagal in a Melg'huur fortress that guards the desert gate`,
      `I grew up among the hairless stewards of a Melg'huur encampment in the borderlands between Valadagal and Weyell`,
      `I first met the sun and sands in a military redoubt built in the central dunes of northern Valadagal`,
      `I hail from the great Melg'huur fortress called Ashrock standing at the heart of north Valadagal`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I was raised near the metalworks in a village not far from the vast township of Dragonsands in Valadagal`,
      `I first met the sun and sands in a proud village atop the central dunes of north Valadagal`,
      `I was born in a humble village near the metal mines of Nakshaka in north central Valadagal province`,
      `I was raised in a village loyal to the Melg'huur Sisterhood near the metalworks rockways of northeastern Valadagal`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I come from the noble township of Dragonsands, not far from Emerald City in the rocky north of Valadagal`,
      `I grew up near the sand-soaked mines of Dragonsands, a loud and defiant township in Valadagal province`,
      `I was raised in the township of Dragonsands among a collective loyal to the Sisterhood in the mines of north Valadagal`,
      `I first met the sun and sands at the heart of Valadagal in a historic township called Dragonsands`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I hail from the small Melg'huur town named Dragonsands located deep in the deserts of Valadagal`,
      `I first met the sun and sands in the outer dunes of Dragonsands, an ancient township in Valadagal north`,
      `I was brought up near the mines of the great township of Dragonsands in the central Valadagal north`,
      `I first bathed in the sun near a township of Dragonsands in the stony mines of north Valadagal`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I come from the free Melg'huur city of Vor'umi, the lush city of the deserts of Valadagal`,
      `I first met the sun and sands in the lush city of Vor'umi spread across the dunes of Valadagal`,
      `I was raised in the chaotic city of Vor'umi, beyond the purview of the Empire, in the deserts of Valadagal`,
      `I was born in the free city of Vor'umi in the deserts of Valadagal`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I first bathed in the sun in the great jewel of the sands, a city called Wirost in west Valadagal`,
      `I hail from the great city of Wirost, the jewel of the sands of west Valadagal`,
      `I grew up among the clanging steel in the city of Wirost in west Valadagal province`,
      `I come from the most ancient city of Wirost, the jewel of the sands, in Melg'huur Valadagal`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I grew up among the bounding ones who gather and wander the dunes of northern Valadagal`,
      `I first met the sun and sands among the nomads who trek the ancient dunes of northern Valadagal`,
      `I first traveled the dunes with the hairless nomads of central Valadagal`,
      `I was born among the hairless nomads of north central Valadagal`,
    ],
  },
  [LineageEnum.ORAN]: {
    [SettlementEnum.HAMLET]: [
      `I grew up in a rather green hamlet at the heart of the Hinn Delta`,
      `I am from a proud hamlet in the mossy north of the Hinn Delta`,
      `I was raised in the swampy south of the Hinn Delta in a quiet hamlet`,
      `I come from a long line of swamp folk in a small hamlet in the green waters of the Hinn Delta`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I was raised in a Thelean redoubt dating back to the four Kingdoms, located north of the Delta swamplands`,
      `I hail from a military encampment still watching the waterways to the capital in the Hinn Delta`,
      `I was born in a military enclave under the auspices of the Regent in the southern Hinn Delta`,
      `I am from a bridgelock military fortress at the mouth of the green waters of the Hinn Delta`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I was born among the cypress trees in a historic Thelean village in the central Hinn Delta`,
      `I was born on the muddy waters of the Hinn Delta in a proud historic village`,
      `I come from the red clay waterways, raised in a village of proud swamp folk from the southern Hinn Delta`,
      `I was raised on the longboats in the muddy waters of the southern Hinn Delta`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I was raised in the red clay waterways in a township central to the rainy Hinn Delta`,
      `I come from a bridgelock Thelean aqueduct in a township in the eastern Hinn Delta`,
      `I grew up in the northern reservoirs in a colonial Thelean township in the Hinn Delta`,
      `I come from a long line of swamp folk who have tended the muddy waters in a township in the south Hinn Delta`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I was raised alongside the cypress trees in a vast territory of `,
      `I was born among the broadleaf forests of the eastern Hinn Delta`,
      `I grew up in the muddy waters in a township stretching across the midland Hinn Delta`,
      `I come from the rainy red clay waterways in the winding township that makes up the south Hinn Delta`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I hail from the red steel works of the north Hinn Delta`,
      `I was raised among the mineworkers in the haggard settlements in the hard cliffs of the north Hinn Delta`,
      `I grew up in the historic broadleaf forests in the east of the Hinn Delta`,
      `I come from the populated north metalworks region of the Hinn Delta`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I come from a long line of swampfolk who live in the rocky clay of the northern Hinn Delta`,
      `I grew up in one of the larger settlements in the eastern broadleaf forests of the Hinn Delta`,
      `I was born in a populated settlement in the gilded kettle of tradition in the Hinn Delta`,
      `I hail from the Hinn Delta in the populous metalworks of the rocky north`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I was raised with the swampboat fishers who dwell on the greenwater houseboats of the Hinn Delta`,
      `I grew up in the warm green delta waters among the alligator hunters of the west`,
      `I came up with the nomadic longboat fishers who trawl the warm green waters of the Hinn Delta`,
      `I come from a long line of swamp folk who live on the greenwater houseboats of the Hinn Delta`,
    ],
  },
  [LineageEnum.REINEIKA]: {
    [SettlementEnum.HAMLET]: [
      `I come from a quiet Taluan hamlet in Plenith south hidden within the ficus trees`,
      `I was born among the ficus trees in a proud Reineika hamlet in southern Plenith`,
      `I was raised in the ancient corridor in a riverlands hamlet in southern Plenith`,
      `I learned my people's legacy in a proud hamlet north of the riverlands in central Plenith`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I was born among refugees in a Thelean fortress south along the river of Vostiar's corridor`,
      `I grew up in a Thelean military redoubt guarding the ziggurats of central Plenith south`,
      `I come from a military enclave posted in Vostiar's Corridor and guarding the gateway to Plenith east`,
      `I was born to refugees who settled generations ago in a Thelean outpost in southern Plenith`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I come from a small village at the heart of Plenith south among the sacred riverlands`,
      `I was born in a proud Taluan village in the shadow of the ruins of Plenith south`,
      `I came up among the proud Reineika who have lived for generations in a quiet village in Plenith south`,
      `I was raised in a traditional Taluan village in the balmy riverlands of Plenith south`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I come from a small town near the southern tip of Plenith known as Pale Point`,
      `I hail from the sun-bleached quartz rocks of Pale Point, a township in southern Plenith`,
      `I was raised on the glimmering coasts of Pale Point, a township in southern Plenith`,
      `I was born in the ancient port town of Pale Point where the quartz rocks meet the wetlands of southern Plenith`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I grew up in the township of Pale Point among the tropical forests that stretch across Plenith south`,
      `I first found my legacy in the township of Pale Point found at the southernmost tip of the Plenith peninsula`,
      `I spent my youth in the township of Pale Point down at the southernmost tip of Plenith`,
      `I was raised in the shadows of the Shrine to Helafra in the township of Pale Point in Plenith south`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I hail from the old world city of Kriidar, along the Greenlook River of Plenith south`,
      `I was born in the Rivershore district of the Warm City of Kriidar in Plenith south`,
      `I grew up on the streets of the Bright District in the Warm City of Kriidar in Plenith south`,
      `I was raised in Orchard District of the Warm City, called Kriidar, on the Greenlook river in Plenith`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I was born on the district border of Forestnook in the Warm City of Kriidar in Plenith south`,
      `I spent my youth on the streets of Vostiar's District in the Warm City of Kriidar in Plenith south`,
      `I grew up near Greenlook River in the Canopy District of the Warm City of Kriidar in Plenith south`,
      `I come from the Rivershore district in the Warm City of Kriidar in Plenith south`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I was raised among the nomads of the Southlands beyond the Warm City in Plenith south`,
      `I was brought up with the pilgrims of Helafra who wander the ruined southlands of Plenith`,
      `I was born to nomads who hunt and traverse the rainforests of Plenith south`,
      `I grew up with the Taluan finders, the nomads of the riverlands of Plenith south`,
    ],
  },
  [LineageEnum.SARPENDII]: {
    [SettlementEnum.HAMLET]: [
      `I grew up in a tending hamlet among the tall-grasses of eastern Wendajii`,
      `I was born in a proud hamlet in the central tall-grasses of eastern Wendajii`,
      `I come from a quiet hamlet among the waving tall-grasses of eastern Wendajii`,
      `I was raised in a hamlet where the waters meet the tall-grasses in eastern Wendajii`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I came up in a military encampment at the edge of the Expanse in north-eastern Wendajii`,
      `I grew up in a Thelean redoubt at the border of the the Expanse in eastern Wendajii`,
      `I was born in a stalwart military enclave guarding the border of the Brolean Expanse`,
      `I hail from a Thelean redoubt that sheltered refugees from the tall-grasses of Wendajii`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I was planted firmly in the tall-grasses in a quiet village in the plains of east Wendajii`,
      `I grew up in a proud village situated in the plains-beyond-the-coasts in eastern Wendajii`,
      `I was born in an ancient Sarpendii village at the pale-reach-of-the-plains in east Wendajii`,
      `I come from a proud grasslander village in the rolling plains of eastern Wendajii`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I hail from the herd-watchers among the tall-grasses of east-central Wendajii`,
      `I was raised with the herd-watchers in a wide plain in east-central Wendajii`,
      `I was born where the cool-waters meet the tall-grasses among the herders of central Wendajii`,
      `I come from the herd-watchers who tend the central plains of east Wendajii`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I first saw the light above the tall-grasses among the herd-watchers of east-central Wendajii`,
      `I was born in a large herd-watchers commune atop the central plains of east Wendajii`,
      `I grew up in a commune of the herd-watchers of the central plains of east Wendajii`,
      `I was raised in a large community where the waters meet the tall-grasses in east Wendajii`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I was born in the tall-grasses north of Dunaajii, a city at the eastern gateway of Wendajii`,
      `I was born just beyond the city of Dunaajii at the gateway east of Wendajii`,
      `I am from the waving city of Dunaajii at the eastern gateway of Wendajii and the Expanse`,
      `I hail from the city of travelers called Dunaajii in east Wendajii`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I hail from the city of travelers beyond the tall-grasses, called Dunaajii`,
      `I was born at the edge of the tall-grasses in the border city called Dunaajii in Wendajii`,
      `I was raised in a communal neighborhood overlooking the plains of Wendajii in the city of Dunaajii`,
      `I came up in a quiet neighborhood of the city of Dunaajii in the borderlands of east Wendajii`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I was raised among the light under the stars of the tall-grasses, in north-east Wendajii`,
      `I grew up in a nomadic encampment near the Expanse borderlands in north-east Wendajii`,
      `I was born to the gliders-of-the-tall-grasses who walk the plains of east Wendajii`,
      `I come from the gliders-of-the-tall-grasses, the nomads of the low plains of Wendajii`,
    ],
  },
  [LineageEnum.SULOSSI]: {
    [SettlementEnum.HAMLET]: [
      `I sprouted up in a hamlet where the trees meet the white sands along the coast of the Shimmering Gulf`,
      `I first felt the sun peeking through the coconut trees in a quiet hamlet on waters of the Shimmering Gulf`,
      `I was born in a proud hamlet where the trees have no branches near the Shimmering Gulf`,
      `I grew up in a forgotten hamlet where the sun never fully sets over the waters of the Shimmering Gulf`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I was born in a refugee encampment on the northern Expanse border near the Shimmering Gulf`,
      `I come from a Thelean military outpost holding territory on the northern edge of the Shimmering Gulf`,
      `I greeted my first dawn in a military enclave not far from the ruby shores of the Shimmering Gulf`,
      `I was raised in a historic military fortress that guards the southern Straits in the Shimmering Gulf`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I learned the songs of my village along the ruby shores of the Shimmering Gulf`,
      `I came up among the sandy earth of a quiet village located along the coast of the Shimmering Gulf`,
      `I greeted my first dawn in a proud Sulossi village overlooking the sanguine coasts of the Shimmering Gulf`,
      `I held my dawn ritual under the bladed coconut trees in a small village on the Shimmering Gulf`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I held my dawn ritual among the stilt homes on the ruby shores of the Shimmering Gulf`,
      `I joined the songs of my ancestors under the coconut roundhomes on the sanguine coast of the Shimmering Gulf`,
      `I greeted my first dawn in a sprawling collective of stilt houses along the ruby coasts of the Shimmering Gulf`,
      `I was raised in a small commune of coconut farmers near the sanguine coasts of the Shimmering Gulf`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I was born on the white sands not far from the quiet coasts of the Shimmering Gulf`,
      `I greeted my first dawn among the many roundhomes of the inland forests beyond the Shimmering Gulf`,
      `I come from a traditional Sulossi roundhome collective at the edge of the Brolean Expanse`,
      `I joined the songs of my ancestors under the coconut blades along the ruby coast of the Shimmering Gulf`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I joined the songs of my ancestors in the quiet roundhomes on the ruby shores of the Shimmering Gulf`,
      `I was born on the white sands along the sanguine coasts of the Shimmering Gulf`,
      `I greeted my first dawn among the coconut trees and roundhomes off the coast of the Shimmering Gulf`,
      `I grew up in the many roundhomes off the gleaming coasts of the Shimmering Gulf`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I joined the songs of my ancestors in the quiet roundhomes on the ruby shores of the Shimmering Gulf`,
      `I was born on the white sands along the sanguine coasts of the Shimmering Gulf`,
      `I greeted my first dawn among the coconut trees and roundhomes off the coast of the Shimmering Gulf`,
      `I grew up in the many roundhomes off the gleaming coasts of the Shimmering Gulf`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I greeted my first dawn with the nomads who travel the rocky coasts of the Shimmering Gulf`,
      `I was raised among the Sulossi coconut gatherers who travel the ruby coasts of the Shimmering Gulf`,
      `I was born to the great raft collectives who float along the waters of the Shimmering Gulf`,
      `I come from the proud Sulossi nomads who live atop a collective of rafts in the Shimmering Gulf`,
    ],
  },
  [LineageEnum.UJEREN]: {
    [SettlementEnum.HAMLET]: [
      `I hail from a proud Ujeren hamlet in the heart of Reviak Proper`,
      `I was born under the thunderous horn in a historic hamlet in Reviak Proper`,
      `I come from a quiet hamlet in the rocky plateaus of Reviak proper`,
      `I was forged in a proud and ancient hamlet from the central hills and farmlands of Reviak proper`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I was born in a loyal monarchy redoubt guarding the reach near the borderlands of Reviak`,
      `I was raised in a military encampment in the south of Reviak proper`,
      `I was forged in the bronze yards of a military enclave in the heart of Reviak proper`,
      `I hail from a proud fortress of the Reviak Guard located in the towering plateaus of Reviak proper`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I come from a village under the banner of the Reastian sword in glorious Reviak proper`,
      `I grew up in an upstart village near the purple hills of the province of Reviak`,
      `I was forged in a mighty village under the lightning hammer of Reviak Proper`,
      `I was raised in a historic village still dedicated to the old world Reviak Monarchy`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I was forged in the bronze fields in a small town atop the plateaus of Reviak proper`,
      `I was born in Polek, the quivering tower atop the the brownwood plateaus of Western Reviak`,
      `I come from a proud Reviak Monarchy township called Polek atop the rocky plateaus of Western Reviak`,
      `I came up in a small township under the thunderous horn at the great monoliths of Reviak Proper`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I grew up in a vast township stretching across the southern forests of Reviak proper`,
      `I was forged where they crafted the Reastian sword in the vast bronze fields of Reviak proper`,
      `I come from the large township encompassing the forests of central Reviak province`,
      `I was raised among the sandy rocks under the thunderous horn atop the plateaus of Reviak proper`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I hail from the tradeway city of Dhentin in the north Reviak borderlands`,
      `I was born in the borderlands city of Dhentin in the north of Reviak province`,
      `I was brought up in an impoverished neighborhood in the Reviak borderlands city of Dhentin`,
      `I come from Dhentin, the tradeway city in the distant northern borderlands of Reviak`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I hail from Reviak City, the bastion of the Reviak Monarchy and the fortress of the Reastian sword`,
      `I grew up in a quiet district of the bustling Reviak City set high atop the plateaus of Reviak proper`,
      `I am from the grand Reviak City, the gleaming bronze beacon atop the plateaus of Reviak proper`,
      `I was forged in the bronze yards of Reviak City atop the grand plateaus of Reviak proper`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I was raised among the nomads of the expansive Purple Hills of upper Reviak`,
      `I grew up wandering the vast Purple Hills with the hill tribe nomads of upper Reviak province`,
      `I was born among the nomadic hill tribes who live throughout the Purple Hills of Reviak`,
      `I was guided among the nomads who steward the Purple Hills in the Empire's province of Reviak`,
    ],
  },
  [LineageEnum.VARAWAK]: {
    [SettlementEnum.HAMLET]: [
      `I come from a proud hamlet in the eastern forests of the Ommultic Sea`,
      `I was raised in a quiet hamlet on the frozen granite shores of Lost Lake`,
      `I grew up in a hamlet located in the snowy wastes of the Ommultic Front`,
      `I hail from a small hamlet in the snowy northern kingdom of Tannith`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I was raised in an Ommultic military fortress holding fast to the Empire's incursion into the Front`,
      `I grew up among refugees in a Thelean military redoubt on the edge of the Ommultic Front`,
      `I hail from a Proudsong enclave defiantly standing in the south of the Ommultic Front`,
      `I was born in a military encampment in the northern reaches of the Ommultic Front`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I was formed among the proud Ommultic village of Chethen in the mountains beneath Lost Lake`,
      `I was born in a quiet village in the blue spruce forests west of the Ommultic Sea`,
      `I grew up in a proud Varawak village in the lowlands of Tannith's Kingdom of the East`,
      `I was raised in a stalwart village on the coasts of the Ommultic Sea deep within the north`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I came up in a small township located at the heart of the Ommultic Front`,
      `I come from an Ommultic township in the north beyond the mountain pass in the shadow of Lost Lake`,
      `I grew up in an Ommultic township that stretches across the northern forests of the Ommultic Sea`,
      `I was raised in an Ommultic township nestled in the quiet center of the southern forests of the Ommultic Sea`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I came up in a large township located at the outer reaches of the Ommultic Front`,
      `I come from an Ommultic township in the north beyond the mountain pass in the shadow of Lost Lake`,
      `I grew up in an Ommultic township that stretches across the northern forests of the Ommultic Sea`,
      `I was raised in an Ommultic township nestled in the quiet center of the southern forests of the Ommultic Sea`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I hail from the great city Raelian, loyal to Tannith and to the Kingdom of the East`,
      `I grew up on the streets of Raelian, a corrupt little city in the north not far from the Ommultic Sea`,
      `I was raised in an impoverished neighborhood in Tannith's little kingdom, the city of Raelian`,
      `I was born in the city of Raelian under the constant biting cold winds of the Ommultic Sea`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I was formed in the heart of Raelian, a struggling city in the north of the Ommultic expanse`,
      `I come from the city of Raelian in the northwest reach of the Ommultic Sea`,
      `I came up on the streets of Raelian, a city beyond the reach of the Empire in the Ommultic Front`,
      `I spent my youth in the city of Raelian, a challenging and cold settlement far in the Empire's north`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I grew up among the Ommultic nomads who have adopted the woldarkin tradeways of the north`,
      `I was raised with the nomadic forest peoples of the east of the Ommultic Sea`,
      `I grew up among the nomads of the north who hunt with the caribou along the icy expanse`,
      `I was born to nomadic peoples in the Ommultic Front who have adopted the hunting ways of old`,
    ],
  },
  [LineageEnum.VITXIPLALAX]: {
    [SettlementEnum.HAMLET]: [
      `I was raised in a quiet hamlet near the cavelands of south Wendajii`,
      `I was brought up in a proud hamlet settled in the whispering caves of southern Wendajii`,
      `I grew up among the howling caves of southern Wendajii in a proud and unassuming hamlet`,
      `I come from a hamlet cloistered by the rocky cavelands of southern Wendajii`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I grew up in a military redoubt in the borderlands between Wendajii and New Voland`,
      `I was raised among refugees in a military enclave in the forests of northern New Voland`,
      `I come from a small military encampment at the border to the cavelands of southern Wendajii`,
      `I was born in a historic military redoubt central to the southern cavelands in Wendajii`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I grew up in a superstitious village in the rocky and warm cavelands of southern Wendajii`,
      `I come from a proud village at the heart of the southern cavelands of Wendajii`,
      `I was raised in a hidden village cloistered within the warm, howling caves of southern Wendajii`,
      `I was brought into the Tu'uv in a historic village central to the howling cavelands of south Wendajii`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I grew up in a small town in Volaani country where the south Wendajii cavelands enter north New Voland`,
      `I was born in a small town at the heart of the southern cavelands of Wendajii`,
      `I come from a proud small town in the arcane reach of the howling caves of south Wendajii`,
      `I was raised among the caveland townships in the south of Wendajii`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I was brought into the Tu'uv in a vast township that stretches across the cavelands of south Wendajii`,
      `I was formed within the arcane shadows of the cavelands of south Wendajii`,
      `I grew up in the howling cavelands at the heart of southern Wendajii`,
      `I was raised among the caveland townships in the south of Wendajii`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I come from the rockland cave clans of Vitxiplalax who dwell in the south of Wendajii`,
      `I grew up in the vast township of caveland dwellers who brave the hollowlands of south Wendajii`,
      `I was raised among the hollowland dwellers near the howling caves of south Wendajii`,
      `I was born amid the vast hollowland dwellers north of the whispering caves in southern Wendajii`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I was formed within the rockland cave clans of Vitxiplalax who dwell in the south of Wendajii`,
      `I spent my youth in the vast township of caveland dwellers who brave the hollowlands of south Wendajii`,
      `I was brought up among the hollowland dwellers near the howling caves of south Wendajii`,
      `I am from the vast hollowland dwellings north of the whispering caves in southern Wendajii`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I walked the echo paths with the nomads of the halfhollows in the cavelands of south Wendajii`,
      `I was raised among the hollow walkers, the nomadic peoples of the cavelands of south Wendajii`,
      `I grew up among the nomadic hallow walkers who travel the whispering caves of south Wendajii`,
      `I was born among the nomadic hallow walkers who travel the whispering caves of south Wendajii`,
    ],
  },
  [LineageEnum.WEYELLIAN]: {
    [SettlementEnum.HAMLET]: [
      `I was brought up among the pine groves in the small hamlet of Virrad in Southwest Weyell`,
      `I was raised north of the pass in a proud hamlet of Weyellians in the north of the province`,
      `I come from the conifers of north Weyell, born in a small hamlet near the mountains' rise`,
      `I was born in the tiny, roadside hamlet of Virrad in Southwest Weyell`,
    ],
    [SettlementEnum.REDOUBT]: [
      `I was raised in a Weyellian military fortification in the central groves of Weyell province`,
      `I was born in a proud military enclave fortified in the north of Weyell province`,
      `I grew up in the outskirts of a Thelean redoubt not far from the central Weyell groves`,
      `I come from an Old Kingdom Weyellian fort in the cold hills just beneath the Northern Weyell Pass`,
    ],
    [SettlementEnum.VILLAGE]: [
      `I hail from a hardy village in the southern reach of Weyell province`,
      `I was born in the northern village of Hillcress along the western road to Pelmora in Weyell province`,
      `I come from a proud Weyellian village in the central provincial groves`,
      `I was raised in a humble village found in the central Weyell riverlands`,
    ],
    [SettlementEnum.SMALL_TOWN]: [
      `I hail from the small township Pike's Watch along the road to Pelmora in Weyell province`,
      `I was born in the riverland valleys in a small township in central Weyell province`,
      `I grew up in Pike's Watch, a small township of Thelean legacy along the northern gateway of Weyell province`,
      `I come from a small township cloistered in the western river valleys of Weyell province`,
    ],
    [SettlementEnum.LARGE_TOWNSHIP]: [
      `I come from a long line of Weyellians settled in the expansive southern groves of Weyell province`,
      `I was born in the Weyell port town of Ansrapol in a Kimenian enclave near the dockyards`,
      `I grew up in the riverlands of central Weyell in a large but sparsely populated township`,
      `I hail from central Weyell in a large provincial township at the gateway to the north`,
    ],
    [SettlementEnum.SMALL_CITY]: [
      `I grew up in a wealthy Weyellian borough in the central city of Minnevikaro in Weyell province`,
      `I am from a small city in the northeastern forests of the province of Weyell`,
      `I was born in a modest Weyellian estate in a small city in the central riverlands of Weyell province`,
      `I came up in the royal district of a small city in south central Weyell province`,
    ],
    [SettlementEnum.LARGE_CITY]: [
      `I was born in Pelmora, the City of Embers, located in the northern reaches of Weyell province`,
      `I was raised in the Peret district of Pelmora, the city on the hill in northern Weyell province`,
      `I come from an outer borough in the large port city of Asnarat at the mouth of the Weyell river`,
      `I was raised in a wealthy borough in the Weyellian port city of Asnarat`,
    ],
    [SettlementEnum.NOMADIC]: [
      `I hunted the Pel'hanok with my honorary guardians among the nomadic Ad'Tai in the northern mountains of Weyell`,
      `I was born among the hunting parties near Hillcress that follow the elk across the northern pass of Weyell`,
      `I grew up among the traveling caravans that wander the roads of the riverlands in Weyell province`,
      `I was raised among the riverland nomads of the central Weyellian groves`,
    ],
  },
};

const backgroundStoryPart1Valiarch = [
  `I preserved the ways of my bloodline in [REGION] among a clandestine network dedicated to the Valiarch`,
  `I carried on the rituals of my sacred bloodright in [REGION] among a recalcitrant community of practitioners still holding the Valiarch corps`,
  `I was born in [REGION] among an enclave of others of my bloodline who hold fast to the Valiarch ritual`,
  `I was raised in [REGION] among others of my sacred bloodline who remember the legacy of the Valiarch`,
];

const backgroundStoryPart1Woldarkin = [
  `I grew'up en a free-camp under the bright stars o' the wilds, choh-ay`,
  `I came'uppa en peace, yev, under the bright skies o' the wilds`,
  `I kee' living koll en a bright skies free-camp o' the wilds`,
  `I learn the lang o' the wold, yev, under the bright stars o' the wilds`,
];

// TODO: Write options for diasporic and severed lineages

const backgroundStoryPart1Diasporic = [`Placeholder`];

const backgroundStoryPart1Severed = [`Placeholder`];

export {
  backgroundStoryPart1Lineage,
  backgroundStoryPart1Valiarch,
  backgroundStoryPart1Woldarkin,
  backgroundStoryPart1Diasporic,
  backgroundStoryPart1Severed,
};

/*
enum ArmorNameEnum {
  STONE_MAIL: "Stone mail",
}

const armorItems = [
  {
    name: ArmorName.STONE_MAIL,
    pv: 4,
    weight: 50,
    type: "heavy",
    priceByQuality: {
      crude: 2,
      common: 4,
      fine: 8
    },
  },
  {
    name: "Padded Leather",
    pv: 2,
    weight: 50,
    priceByQuality: {
      crude: 1,
      common: 4,
      fine: 8
    },
  },
];

const weaponItems = [
  {
    name: "short-sword",
    type: "melee",
    subType: "one-handed",
    weight: 2,
    damage: {
      numDice: 1,
      sides: 6
    },
    priceByQuality:
  },
]


character.weapons

[
  {
    name: "shortsword",
    type: "melee",
    subType: "one-handed",
    damage: {
      numDice: 1,
      sides: 6
    },
    quality: crude
  }
]





const equipmentMap = {
  strongarm: {
    alchemy: {
      armor: {
        percentageOfTotalWealth: 30,
        idealTypes: ["light", "medium"]
      },

    }
  },
  survivalist: {
    alchemy: {}
  }
}
*/

// Order of priority by type of equipment

// percentage of total budget to allocate based on order

// 1st priority = 50% of wealth
// 2nd priority = 30% of wealth
// 3rd priority = 20% of wealth

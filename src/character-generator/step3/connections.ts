import { getRandomArrayValue, rollDice, rollDie } from "../utils/dice-roller";
import { forNumTimes, maybePluralize } from "../utils/general-utils";
import { Relation } from "../character/origins/origins";
import { SkillEnum } from "../character/skills";
import { Character } from "../character/character";
import { addNote, addSkillPoints } from "../utils/character-utils";

const connectionStatuses = [
  "deceased",
  "missing",
  "estranged",
  "living",
] as const;

type ConnectionStatus = (typeof connectionStatuses)[number];

const rollConnectionStatus = () => {
  return getRandomArrayValue(connectionStatuses);
};

const rollConnectionStatuses = (numConnections: number): string => {
  if (numConnections === 1) {
    return rollConnectionStatus();
  }

  const statuses: Partial<Record<ConnectionStatus, number>> = {};

  forNumTimes(numConnections, () => {
    const status = rollConnectionStatus();
    statuses[status] = (statuses[status] || 0) + 1;
  });

  return Object.entries(statuses)
    .map(([status, num]) => {
      if (num === numConnections) {
        return `${num === 2 ? "both" : "all"} ${status}`;
      }

      return `${num} ${status}`;
    })
    .join(", ");
};

const parentage: readonly {
  readonly descriptor: string;
  readonly maxRelations: number;
}[] = [
  {
    descriptor: "parent",
    maxRelations: 6,
  },
  {
    descriptor: "guardian",
    maxRelations: 4,
  },
  {
    descriptor: "parent",
    maxRelations: 1,
  },
  {
    descriptor: "spiritual guide",
    maxRelations: 4,
  },
  {
    descriptor: "adoptive parent",
    maxRelations: 6,
  },
  {
    descriptor: "matriarch",
    maxRelations: 4,
  },
  {
    descriptor: "patriarch",
    maxRelations: 4,
  },
] as const;

const rollParentage = (): Relation => {
  if (rollDie(8) === 8) {
    return {
      description: getRandomArrayValue(["Orphaned", "Abandoned as an infant"]),
    };
  }

  const { descriptor, maxRelations } = getRandomArrayValue(parentage);
  const numParents = rollDie(maxRelations);

  return {
    description: `${numParents} ${maybePluralize(descriptor, numParents)}`,
    status: rollConnectionStatuses(numParents),
  };
};

const relations: readonly {
  readonly descriptors: string[];
  readonly dieSides: number;
  readonly modifier: number;
  readonly isPet?: boolean;
}[] = [
  {
    descriptors: ["enemy", "peer rival"],
    dieSides: 6,
    modifier: -1,
  },
  {
    descriptors: ["kin", "extended family member"],
    dieSides: 6,
    modifier: -1,
  },
  {
    descriptors: ["mentor", "influential teacher"],
    dieSides: 6,
    modifier: -1,
  },
  {
    descriptors: ["companion", "trusted friend"],
    dieSides: 6,
    modifier: -1,
  },
  {
    descriptors: ["lover", "intimate friend"],
    dieSides: 6,
    modifier: -1,
  },
  {
    descriptors: ["child", "ward"],
    dieSides: 6,
    modifier: -1,
  },
  {
    descriptors: ["sibling", "chosen family member"],
    dieSides: 6,
    modifier: -1,
  },
  {
    descriptors: ["childhood pet", "animal"],
    dieSides: 6,
    modifier: -1,
    isPet: true,
  },
];

const petTypes = ["goat", "dog", "pig", "cat", "rodent", "lizard"] as const;

type PetType = (typeof petTypes)[number];

const petStatuses = ["living", "deceased"];

type PetStatus = (typeof petStatuses)[number];

const rollPetStatuses = (numPets: number): string => {
  const petStatusMap: { [key in PetType]?: { [key in PetStatus]?: number } } =
    {};

  forNumTimes(numPets, () => {
    const petType = getRandomArrayValue(petTypes);
    if (petStatusMap[petType] === undefined) {
      petStatusMap[petType] = {};
    }

    const status = getRandomArrayValue(petStatuses);

    if (petStatusMap[petType]![status] === undefined) {
      petStatusMap[petType]![status] = 0;
    }

    petStatusMap[petType]![status]! += 1;
  });

  return Object.entries(petStatusMap)
    .map(([petType, statusObj]) => {
      return Object.entries(statusObj)
        .map(([status, num]) => {
          return `${num} ${status} ${maybePluralize(petType, num as number)}`;
        })
        .join(", ");
    })
    .join(", ");
};

const rollRelations = (): Relation[] => {
  const relationsResult: Relation[] = [];
  let relationOptions = [...relations];
  forNumTimes(rollDie(2), () => {
    const relationResult = getRandomArrayValue(relationOptions);
    relationOptions = relationOptions.filter(
      (option) => option !== relationResult
    );
    const { descriptors, dieSides, modifier, isPet } = relationResult;

    const numRelations = rollDie(dieSides) + modifier;

    if (numRelations === 0) {
      return;
    }

    const descriptor = getRandomArrayValue(descriptors);
    const description = `${numRelations} ${maybePluralize(
      descriptor,
      numRelations
    )}`;
    const status = isPet
      ? rollPetStatuses(numRelations)
      : rollConnectionStatuses(numRelations);

    relationsResult.push({
      description,
      status,
    });
  });

  return relationsResult;
};

const connections: readonly {
  readonly description: string;
  readonly applyBenefit: (character: Character) => void;
}[] = [
  {
    description: "A local merchant who took me under their wing",
    applyBenefit: (c) => {
      addNote(c, "15% discount on all trades (connection)");
    },
  },
  {
    description: "A local mount trainer who taught me to ride",
    applyBenefit: (c) => {
      addNote(c, "15% discount on all mounts (connection)");
    },
  },
  {
    description: "A ship captain's cousin who tattooed me",
    applyBenefit: (c) => {
      addNote(c, "Free ship passage from any harbor (connection)");
    },
  },
  {
    description: "A trusted friend who never leaves my side",
    applyBenefit: (c) => {
      addNote(c, "Roll a second, companion character (connection)");
    },
  },
  {
    description: "A thoughtful guide who taught me signs",
    applyBenefit: (c) => {
      addNote(c, "Two additional Navigation rolls per day (connection)");
    },
  },
  {
    description: "A medicine instructor who showed you healing",
    applyBenefit: (c) => {
      addSkillPoints(c, SkillEnum.BANDAGE_INJURY, 2);
    },
  },
  {
    description: "A powerful political patron honors my name",
    applyBenefit: (c) => {
      addNote(c, "Gain audience with any noble (connection)");
    },
  },
  {
    description: "A mystery benefactor who grants me a seal",
    applyBenefit: (c) => {
      c.wealth += rollDice(2, 6, 20);
    },
  },
  {
    description: "A wealthy noble wishes to offer me favor",
    applyBenefit: (c) => {
      c.wealth += rollDice(4, 6, 40);
    },
  },
  {
    description: "A local guild favors me and my travels",
    applyBenefit: (c) => {
      addNote(c, "Free lodging in any city, in guild's name (connection)");
    },
  },
];

const rollConnection = () => {
  const { description, applyBenefit } = getRandomArrayValue(connections);
  const status = rollConnectionStatus();
  return {
    connection: {
      description,
      status,
    },
    applyBenefit,
  };
};

const rollParentageRelationsConnections = (character: Character) => {
  character.origins.parentage = rollParentage();
  character.origins.relations = rollRelations();

  const { connection, applyBenefit } = rollConnection();
  character.origins.connection = connection;

  applyBenefit(character);
};

export { rollParentageRelationsConnections };

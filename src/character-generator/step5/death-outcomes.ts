import { AttributeEnum } from "../character/attributes";
import { ResistanceEnum } from "../character/resistances";
import { addAttributePoints, addNote } from "../utils/character-utils";
import { Outcome } from "./outcome-types";

const deathOutcomes: Outcome[] = [
  {
    description:
      "You succumb to death's grasp, yet Maros rejects you, and you awaken days later on a cold, stone table.",
    applyEffects: (c) => {
      addNote(c, "You are Halekar");
      c.mastery.push("+3 Healing Rate");
    },
  },
  {
    description:
      "You are left for dead, but the caretakers notice something odd, and nurse you through a long and haunting coma.",
    applyEffects: (c) => {
      c.characteristics.age += 10;
    },
  },
  {
    description:
      "Time, space, and energy converge into an eternity of emptiness and void as your consciousness becomes trapped inside the stone.",
    applyEffects: (c) => {
      c.isDead = true;
      addNote(c, "DEAD");
      addNote(
        c,
        "Roll a new character--if connected to pale stone, they can share the dead character's memories, and training."
      );
    },
  },
  {
    description:
      "A healer makes their way to you just before your death and in a taboo display cuts away at the site of your exposure. They manage to save your life, but at the expense of one of your limbs.",
    applyEffects: (c) => {
      // TODO: remove random limb and append distinguishing features
    },
  },
  {
    description:
      "You perish, another unknown victim of Vallicast's tears. Locals never learn what brought you to this fate.",
    applyEffects: (c) => {
      c.isDead = true;
      addNote(c, "DEAD");
    },
  },
  {
    description:
      "You succumb painfully, but Maros in their twisted mercy throws your spirit into the skies. Lightning strikes the earth, the edges of settlements quake, and you awaken in the form of an animal.",
    applyEffects: (c) => {
      c.isDead = true;
      addNote(c, "DEAD");
      addNote(
        c,
        "Roll a new character who takes on this animal as a familiar or a mount, convinced that the animal is intelligent"
      );
    },
  },
  {
    description:
      "You face what seems an honorable or worthy death; a traveling bard even composes a song of paired versicles featuring your name about the context surrounding the events of your demise, which becomes a favorite local song.",
    applyEffects: (c) => {
      c.isDead = true;
      addNote(c, "DEAD");
      addNote(
        c,
        "Roll a new character whose primary distinguishing feature is they know this song, and sing the character's name frequently."
      );
      addAttributePoints(c, AttributeEnum.INT, -1);
      c.resistances[ResistanceEnum.HANGOVER] -= 2;
    },
  },
  {
    description:
      "Time, space, and energy converge into an eternity of emptiness and void as your consciousness becomes trapped inside the stone.",
    applyEffects: (c) => {
      c.isDead = true;
      addNote(c, "DEAD");
      addNote(
        c,
        "Roll a new character--if connected to pale stone, they can share the the dead character's memories, and training"
      );
    },
  },
  {
    description:
      "You are left for dead, but are stolen by a thaumaturge who studies your condition extensively.",
    applyEffects: (c) => {
      c.characteristics.age += 15;
    },
  },
  {
    description:
      "You succumb to death’s grasp, yet Maros rejects you, and you awaken days later upon a caretaker’s funeral pyre.",
    applyEffects: (c) => {
      addNote(c, "You are Halekar");
      c.mastery.push("+3 Healing Rate");
    },
  },
];

export { deathOutcomes };

import { AttributeEnum } from "../character/attributes";
import { ConditioningEnum } from "../character/conditioning";
import { InsightEnum } from "../character/insights";
import { ResistanceEnum } from "../character/resistances";
import { addAttributePoints, addNote } from "../utils/character-utils";
import { Outcome } from "./outcome-types";

const perilousOutcomes: Outcome[] = [
  {
    description: "You awake, but struggle for a time to know what is real",
    applyEffects: (c) => {
      c.conditioning[ConditioningEnum.POISE] -= 1;
    },
  },
  {
    description: "You survive, but find that little comforts you",
    applyEffects: (c) => {
      c.resistances[ResistanceEnum.AVERSION] -= 1;
    },
  },
  {
    description:
      "You make it through the ordeal, but it consumes your thoughts",
    applyEffects: (c) => {
      c.insights[InsightEnum.DETECTION] -= 1;
    },
  },
  {
    description: "You survive, yet have sparked local ire and disdain",
    applyEffects: (c) => {
      c.insights[InsightEnum.INFORMATION] -= 1;
    },
  },
  {
    description: "You awake, but you are forever changed",
    applyEffects: (c) => {
      addNote(c, "Averse to Sunlight");
    },
  },
  {
    description: "You recover through the encounter, but it has scarred you",
    applyEffects: (c) => {
      // TODO: add "Visible scars / baldness" to distinguishing features
    },
  },
  {
    description: "You awake, only to find your focus impaired",
    applyEffects: (c) => {
      addAttributePoints(c, AttributeEnum.INT, -1);
      c.resistances[ResistanceEnum.HANGOVER] -= 2;
    },
  },
  {
    description: "You escape death, yet feel as though you should not have",
    applyEffects: (c) => {
      addAttributePoints(c, AttributeEnum.CHA, -1);
      c.resistances[ResistanceEnum.TOXIN] -= 2;
    },
  },
  {
    description: "You survive the ordeal, only it has left a physical mark",
    applyEffects: (c) => {
      // TODO: add "Black sclera to distinguishing features"
    },
  },
  {
    description: "You narrowly escape death, but suffer permanent debility",
    applyEffects: (c) => {
      addAttributePoints(c, AttributeEnum.END, -1);
      c.resistances[ResistanceEnum.DEBILITY] -= 2;
    },
  },
];

export { perilousOutcomes };

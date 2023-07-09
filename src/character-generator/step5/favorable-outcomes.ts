import { AttributeEnum } from "../character/attributes";
import { addAttributePoints } from "../utils/character-utils";
import { Outcome } from "./outcome-types";

const favorableOutcomes: Outcome[] = [
  {
    description: "You awake and discover a deep connection to pale stone",
    applyEffects: (c) => {
      c.mastery.push("+1 Healing Rate");
    },
  },
  {
    description: "You bond with pale stone, using it to see great distances",
    applyEffects: (c) => {
      c.mastery.push("Far sight once per day");
    },
  },
  {
    description: "You discover an affinity for pale stone",
    applyEffects: (c) => {
      c.mastery.push("+2 Healing Rate");
    },
  },
  {
    description: "You awake and discover a deep connection to pale stone",
    applyEffects: (c) => {
      c.mastery.push("+1 Healing Rate");
      addAttributePoints(c, AttributeEnum.PER);
    },
  },
  {
    description: "You bond with pale stone, sensing it whenever you are near",
    applyEffects: (c) => {
      c.mastery.push("+2 Healing Rate");
    },
  },
  {
    description: "You awaken with an intricate connection to pale stone",
    applyEffects: (c) => {
      c.mastery.push("+1 Healing Rate");
      addAttributePoints(c, AttributeEnum.ACC);
    },
  },
  {
    description: "You bond with pale stone, sensing it whenever you are near",
    applyEffects: (c) => {
      c.mastery.push("+2 Healing Rate", "Pale Stone Sense");
    },
  },
  {
    description: "You awake bonded with pale stone and rejuvenated",
    applyEffects: (c) => {
      c.mastery.push("+1 Healing Rate");
      addAttributePoints(c, AttributeEnum.STR);
    },
  },
  {
    description: "You bond with pale stone, using it to see great distances",
    applyEffects: (c) => {
      c.mastery.push("Far sight once per day");
    },
  },
  {
    description:
      "You awake to discover you have an intrinsic bond with pale stone",
    applyEffects: (c) => {
      c.mastery.push("+2 Healing Rate");
      addAttributePoints(c, AttributeEnum.END);
    },
  },
];

export { favorableOutcomes };

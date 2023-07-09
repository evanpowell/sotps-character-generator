import { Character } from "../character/character";

type Outcome = {
  description: string;
  applyEffects: (c: Character) => void;
};

export type { Outcome };

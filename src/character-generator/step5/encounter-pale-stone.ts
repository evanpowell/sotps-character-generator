import { Character } from "../character/character";
import { addNote } from "../utils/character-utils";
import {
  FourD6DiceResult,
  getRandomArrayValue,
  roll4D6DiceResults,
} from "../utils/dice-roller";
import { deathOutcomes } from "./death-outcomes";
import { encounterStories } from "./encounter-stories";
import { favorableOutcomes } from "./favorable-outcomes";
import { Outcome } from "./outcome-types";
import { perilousOutcomes } from "./perilous-outcomes";

const rollPaleStoneEncounterOutcome = (
  character: Character,
  result: FourD6DiceResult
) => {
  let outcome: Outcome;

  switch (result) {
    case FourD6DiceResult.ALL_NUMBERS_DISTINCT:
    case FourD6DiceResult.SEQUENTIAL_NUMBERS: {
      outcome = getRandomArrayValue(perilousOutcomes);
      break;
    }
    case FourD6DiceResult.ONE_EQUAL_PAIR:
    case FourD6DiceResult.TWO_EQUAL_PAIRS: {
      outcome = getRandomArrayValue(favorableOutcomes);
      break;
    }
    case FourD6DiceResult.THREE_EQUAL_NUMBERS: {
      outcome = getRandomArrayValue(deathOutcomes);
      break;
    }
    case FourD6DiceResult.ALL_EQUAL_NUMBERS: {
      outcome = {
        description: "You are Halekar",
        applyEffects: (c) => {
          addNote(c, "You are Halekar");
          c.mastery.push("+3 Healing Rate");
        },
      };
    }
  }

  character.paleStoneEncounter.outcome = outcome.description;
  outcome.applyEffects(character);
};

const encounterPaleStone = (character: Character) => {
  const { total, result } = roll4D6DiceResults();
  character.paleStoneEncounter.story = encounterStories[total - 3];
  rollPaleStoneEncounterOutcome(character, result);
};

export { encounterPaleStone };

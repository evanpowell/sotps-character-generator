import { Attribute, Attributes } from "../character/attributes";
import { objectEntries } from "./general-utils";

const sortAttributesDescending = (
  attributes: Attributes
): { attribute: Attribute; value: number }[] => {
  return objectEntries(attributes.adjustedScores)
    .sort(([, valA], [, valB]) => (valA > valB ? -1 : 1))
    .map(([attribute, num]) => ({ attribute, value: num }));
};

export { sortAttributesDescending };

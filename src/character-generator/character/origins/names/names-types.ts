type GenderedNamesObj = Record<string, readonly string[]> & {
  readonly feminine: readonly string[];
  readonly masculine: readonly string[];
};

const isGenderedNamesObj = (obj: unknown): obj is GenderedNamesObj => {
  return typeof obj === "object" && obj !== null && "feminine" in obj;
};

export { isGenderedNamesObj };

export type { GenderedNamesObj };

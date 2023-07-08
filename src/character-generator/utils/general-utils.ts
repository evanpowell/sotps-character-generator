const objectKeys = <Obj extends {}>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[];
};

const objectEntries = <Obj extends {}>(obj: Obj) => {
  return objectKeys(obj).map((key) => {
    return [key, obj[key]] as [keyof Obj, Obj[keyof Obj]];
  });
};

const forNumTimes = (numTimes: number, callback: () => void) => {
  [...Array(numTimes)].forEach(callback);
};

const pluralizeExceptions = {
  enemy: "enemies",
  kin: "kin",
  child: "children",
} as const;

const maybePluralize = (str: string, num: number): string => {
  if (num === 1) {
    return str;
  }

  if (str in pluralizeExceptions) {
    return pluralizeExceptions[str as keyof typeof pluralizeExceptions];
  }

  return `${str}s`;
};

const deepClone = <T>(source: T): T => {
  return Array.isArray(source)
    ? source.map((item) => deepClone(item))
    : source instanceof Date
    ? new Date(source.getTime())
    : source && typeof source === "object"
    ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
        Object.defineProperty(
          o,
          prop,
          Object.getOwnPropertyDescriptor(source, prop)!
        );
        o[prop] = deepClone((source as { [key: string]: any })[prop]);
        return o;
      }, Object.create(Object.getPrototypeOf(source)))
    : (source as T);
};

export { objectKeys, objectEntries, forNumTimes, maybePluralize, deepClone };

type StringValues<T> = {
  [K in keyof T]: T[K] extends string ? T[K] : never;
}[keyof T];

type EnumValue<T> = `${StringValues<T>}`;

type ObjectValue<T extends {}> = {
  [K in keyof T]: T[K];
}[keyof T];

export type { EnumValue, ObjectValue };

type NullOrUndefined = null | undefined;

const isNotNullOrUndefined = <T>(
  arg: T
): arg is Exclude<T, NullOrUndefined> => {
  return arg !== null && arg !== undefined;
};

export { isNotNullOrUndefined };

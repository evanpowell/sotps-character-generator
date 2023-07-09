const printArrayAsEnum = (name, array) => {
  console.log(
    [
      `enum ${name}Enum {`,
      ...array.map(
        (element) =>
          `  ${element.toUpperCase().replaceAll(" ", "_")} = "${element}",`
      ),
      "}",
      "",
      `type ${name} = EnumValue<typeof ${name}Enum>`,
      `export type { ${name} };`,
      `export { ${name}Enum };`,
    ].join("\n")
  );
};

const convertToEnum = (enumName, str) => {
  return `${enumName}Enum.${str.toUpperCase().replaceAll(" ", "_")}`;
};

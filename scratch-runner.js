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

console.log("const proficiencyAttributeMap = {");
const profsWithAtts = [
  "Compounds (INT)",
  "Elixirs (INT)",
  "Herbalism (PER)",
  "Salves (WIS)",
  "Tonics (PER)",
  "Field Tactics (WIS)",
  "Finesse Maneuvers (AGI)",
  "Immobilization (END)",
  "Power Strikes (STR)",
  "Accuracy Strikes (ACC)",
  "Construction (PER)",
  "Fine Crafts (ACC)",
  "Mechanisms (INT)",
  "Smithing (ACC)",
  "Transports (END)",
  "Connections (INT)",
  "Diplomacy (INT)",
  "Leadership (WIS)",
  "Oration (CHA)",
  "Wit (CHA)",
  "Focused Study (WIS)",
  "Incantation (CHA)",
  "Knowledge (WIS)",
  "Rhetoric (INT)",
  "Ritual (PER)",
  "Disguises (PER)",
  "Intelligence (INT)",
  "Misdirection (CHA)",
  "Skullduggery (ACC)",
  "Stealth (AGI)",
  "Artifice (INT)",
  "Charms (INT)",
  "Emergence (PER)",
  "Spellcasting (ACC)",
  "Transference (AGI)",
  "Animal Handling (STR)",
  "Food Handling (PER)",
  "Operations (INT)",
  "Provisioning (PER)",
  "Survivalism (END)",
].forEach((el) => {
  const [prof, att] = el.replaceAll(")", "").split(" (");
  const key = convertToEnum("Proficiency", prof);
  const val = convertToEnum("Attribute", att);
  console.log(`  [${key}]: ${val},`);
});

console.log("}");

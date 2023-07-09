import { Character } from "./character/character";
import characterSheet from "../assets/character-sheet.pdf";
import { PDFDocument } from "pdf-lib";
import { AttributeEnum } from "./character/attributes";
import { skillAttributeMap } from "./character/skills";

const getFieldValueMap = (character: Character) => {
  return [
    { fieldName: "Character Name", value: character.name },
    { fieldName: "Ancestry", value: character.characteristics.ancestry },
    { fieldName: "Sex", value: character.characteristics.sex },
    { fieldName: "Height", value: character.characteristics.height },
    { fieldName: "Weight", value: character.characteristics.weight },
    { fieldName: "Age", value: character.characteristics.age },
    { fieldName: "Distinguishing Features", value: "" }, // TODO: Map once distinguishing features is complete
    { fieldName: "Style", value: character.characteristics.style },
    { fieldName: "Birthdate", value: character.origins.birthDate },
    {
      fieldName: "Lineage and Region",
      value: `${character.origins.lineage}, ${character.origins.region}`,
    },
    { fieldName: "Background Story", value: "" }, // TODO: Map once background story is complete
    { fieldName: "Primary Language", value: character.origins.language },
    { fieldName: "Motivations", value: character.origins.suggestedMotivation },
    {
      fieldName: "Attribute AdjustmentsRow1",
      value: character.attributes.adjustments[AttributeEnum.STR],
    },
    {
      fieldName: "Adjusted ScoreRow1",
      value: character.attributes.adjustedScores[AttributeEnum.STR],
    },
    {
      fieldName: "STR",
      value: character.attributes.initialScores[AttributeEnum.STR],
    },
    {
      fieldName: "Bonus PenaltyRow1",
      value: character.attributes.bonusPenalties[AttributeEnum.STR],
    },
    {
      fieldName: "END",
      value: character.attributes.initialScores[AttributeEnum.END],
    },
    {
      fieldName: "Attribute AdjustmentsEND",
      value: character.attributes.adjustments[AttributeEnum.END],
    },
    {
      fieldName: "Adjusted ScoreEND",
      value: character.attributes.adjustedScores[AttributeEnum.END],
    },
    {
      fieldName: "Bonus PenaltyEND",
      value: character.attributes.bonusPenalties[AttributeEnum.END],
    },
    {
      fieldName: "AGI",
      value: character.attributes.initialScores[AttributeEnum.AGI],
    },
    {
      fieldName: "Attribute AdjustmentsAGI",
      value: character.attributes.adjustments[AttributeEnum.AGI],
    },
    {
      fieldName: "Adjusted ScoreAGI",
      value: character.attributes.adjustedScores[AttributeEnum.AGI],
    },
    {
      fieldName: "Bonus PenaltyAGI",
      value: character.attributes.bonusPenalties[AttributeEnum.AGI],
    },
    {
      fieldName: "ACC",
      value: character.attributes.initialScores[AttributeEnum.ACC],
    },
    {
      fieldName: "Attribute AdjustmentsPRE",
      value: character.attributes.adjustments[AttributeEnum.ACC],
    },
    {
      fieldName: "Adjusted ScorePRE",
      value: character.attributes.adjustedScores[AttributeEnum.ACC],
    },
    {
      fieldName: "Bonus PenaltyPRE",
      value: character.attributes.bonusPenalties[AttributeEnum.ACC],
    },
    {
      fieldName: "INT",
      value: character.attributes.initialScores[AttributeEnum.INT],
    },
    {
      fieldName: "Attribute AdjustmentsINT",
      value: character.attributes.adjustments[AttributeEnum.INT],
    },
    {
      fieldName: "Adjusted ScoreINT",
      value: character.attributes.adjustedScores[AttributeEnum.INT],
    },
    {
      fieldName: "Bonus PenaltyINT",
      value: character.attributes.bonusPenalties[AttributeEnum.INT],
    },
    {
      fieldName: "WIS",
      value: character.attributes.initialScores[AttributeEnum.WIS],
    },
    {
      fieldName: "Attribute AdjustmentsWIS",
      value: character.attributes.adjustments[AttributeEnum.WIS],
    },
    {
      fieldName: "Adjusted ScoreWIS",
      value: character.attributes.adjustedScores[AttributeEnum.WIS],
    },
    {
      fieldName: "Bonus PenaltyWIS",
      value: character.attributes.bonusPenalties[AttributeEnum.WIS],
    },
    {
      fieldName: "PER",
      value: character.attributes.initialScores[AttributeEnum.PER],
    },
    {
      fieldName: "Attribute AdjustmentsPER",
      value: character.attributes.adjustments[AttributeEnum.PER],
    },
    {
      fieldName: "Adjusted ScorePER",
      value: character.attributes.adjustedScores[AttributeEnum.PER],
    },
    {
      fieldName: "Bonus PenaltyPER",
      value: character.attributes.bonusPenalties[AttributeEnum.PER],
    },
    {
      fieldName: "CHA",
      value: character.attributes.initialScores[AttributeEnum.CHA],
    },
    {
      fieldName: "Attribute AdjustmentsCHA",
      value: character.attributes.adjustments[AttributeEnum.CHA],
    },
    {
      fieldName: "Adjusted ScoreCHA",
      value: character.attributes.adjustedScores[AttributeEnum.CHA],
    },
    {
      fieldName: "Bonus PenaltyCHA",
      value: character.attributes.bonusPenalties[AttributeEnum.CHA],
    },
    { fieldName: "Aptitude", value: character.profile.aptitude },
    { fieldName: "Expertise", value: character.profile.expertise },
    { fieldName: "Term", value: character.profile.term },
    {
      fieldName: "Vocation and Description",
      value: [
        character.profile.vocation.name,
        character.profile.vocation.description,
      ].join("\n"),
    },
    { fieldName: "Encounter Story", value: character.paleStoneEncounter.story },
    { fieldName: "Obstacles", value: character.profile.obstacles.join("\n") },
    { fieldName: "Accolades", value: character.profile.accolades.join("\n") },
    { fieldName: "Outcome", value: character.paleStoneEncounter.outcome },
    ...mapSkillFields(character),
    // { fieldName: "", value: character. },
  ];
};

const mapSkillFields = (character: Character) => {
  const skillFieldsMap: { fieldName: string; value: number | string }[] = [];
  [
    { value: "SV1", name: "SN1" },
    { value: "SV2", name: "SN2" },
    { value: "Sv3", name: "sn3" },
    { value: "Sv4", name: "SN4" },
    { value: "Sv5", name: "SN5" },
    { value: "Sv6", name: "SN6" },
    { value: "SV7", name: "SN7" },
    { value: "SV8", name: "SN8" },
  ].forEach(({ value, name }, i) => {
    const matchingSkill = character.skills[i];
    if (matchingSkill) {
      skillFieldsMap.push({
        fieldName: value,
        value: matchingSkill.points,
      });
      skillFieldsMap.push({
        fieldName: name,
        value: `${matchingSkill.name} (${
          skillAttributeMap[matchingSkill.name]
        })`,
      });
    }
  });
  return skillFieldsMap;
};

const fillCharacterSheet = async (character: Character) => {
  const data = await fetch(characterSheet).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(data);
  const form = pdfDoc.getForm();

  const fields = form.getFields().map((field) => field.getName());
  console.log(fields);
  // return "";

  const fieldsWithValues = getFieldValueMap(character);

  fieldsWithValues.forEach(({ fieldName, value }) => {
    const valueAsString = value.toString();
    form.getTextField(fieldName).setText(valueAsString);
  });
  form.flatten();

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes]);
  const pdfUrl = window.webkitURL.createObjectURL(blob);
  return pdfUrl;
};

export { fillCharacterSheet };

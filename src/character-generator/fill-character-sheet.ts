import { Character } from "./character/character";
import characterSheet from "../assets/character-sheet.pdf";
import { PDFDocument } from "pdf-lib";
import { AttributeEnum } from "./character/attributes";
import { skillAttributeMap } from "./character/skills";
import { proficiencyAttributeMap } from "./character/proficiencies";
import { ConditioningEnum } from "./character/conditioning";
import { ResistanceEnum } from "./character/resistances";
import { InsightEnum } from "./character/insights";

type FieldMapItem = {
  fieldName: string;
  value: number | string;
};

const mapProficiencyFields = (character: Character): FieldMapItem[] => {
  const proficiencyFieldsMap: FieldMapItem[] = [];
  [
    { value: "PV1", name: "Pn1" },
    { value: "PV2", name: "pn2" },
    { value: "Pv3", name: "pn3" },
    { value: "Pv4", name: "pn4" },
    { value: "Pv5", name: "pn5" },
    { value: "Pv6", name: "pn6" },
    { value: "PV7", name: "pn7" },
    { value: "PV8", name: "pn8" },
  ].forEach(({ value, name }, i) => {
    const matchingProficiency = character.proficiencies[i];
    if (matchingProficiency) {
      proficiencyFieldsMap.push({
        fieldName: value,
        value: matchingProficiency.points,
      });
      proficiencyFieldsMap.push({
        fieldName: name,
        value: `${matchingProficiency.name} (${
          proficiencyAttributeMap[matchingProficiency.name]
        })`,
      });
    }
  });
  return proficiencyFieldsMap;
};

const mapInsightFields = (character: Character): FieldMapItem[] => {
  return [
    {
      fieldName: "Detection",
      value: character.insights[InsightEnum.DETECTION],
    },
    { fieldName: "Haggling", value: character.insights[InsightEnum.HAGGLING] },
    {
      fieldName: "Information",
      value: character.insights[InsightEnum.INFORMATION],
    },
    {
      fieldName: "Investigation",
      value: character.insights[InsightEnum.INVESTIGATION],
    },
    {
      fieldName: "Navigation",
      value: character.insights[InsightEnum.NAVIGATION],
    },
    { fieldName: "Threat", value: character.insights[InsightEnum.THREAT] },
  ];
};

const mapResistanceFields = (character: Character): FieldMapItem[] => {
  return [
    {
      fieldName: "Aversion",
      value: character.resistances[ResistanceEnum.AVERSION],
    },
    {
      fieldName: "Debility",
      value: character.resistances[ResistanceEnum.DEBILITY],
    },
    {
      fieldName: "Explosion",
      value: character.resistances[ResistanceEnum.EXPLOSION],
    },
    {
      fieldName: "Hangover",
      value: character.resistances[ResistanceEnum.HANGOVER],
    },
    {
      fieldName: "Infection",
      value: character.resistances[ResistanceEnum.INFECTION],
    },
    { fieldName: "Toxin", value: character.resistances[ResistanceEnum.TOXIN] },
  ];
};

const mapSkillFields = (character: Character): FieldMapItem[] => {
  const skillFieldsMap: FieldMapItem[] = [];
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

const mapAttributeFields = (character: Character): FieldMapItem[] => {
  return [
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
  ];
};

const mapProfileFields = (character: Character): FieldMapItem[] => {
  return [
    { fieldName: "Aptitude", value: character.profile.aptitude },
    { fieldName: "Expertise", value: character.profile.expertise },
    { fieldName: "Term", value: character.profile.term },
    {
      fieldName: "Vocation and Description",
      value: [
        character.profile.vocation.name,
        character.profile.vocation.description,
      ].join("\n\n"),
    },
    { fieldName: "Obstacles", value: character.profile.obstacles.join("\n") },
    { fieldName: "Accolades", value: character.profile.accolades.join("\n") },
  ];
};

const mapCharacteristicsFields = (character: Character): FieldMapItem[] => {
  return [
    { fieldName: "Ancestry", value: character.characteristics.ancestry },
    { fieldName: "Sex", value: character.characteristics.sex },
    { fieldName: "Height", value: character.characteristics.height },
    { fieldName: "Weight", value: character.characteristics.weight },
    { fieldName: "Age", value: character.characteristics.age },
    { fieldName: "Distinguishing Features", value: "" }, // TODO: Map once distinguishing features is complete
    { fieldName: "Style", value: character.characteristics.style },
  ];
};

const mapOriginsFields = (character: Character): FieldMapItem[] => {
  return [
    { fieldName: "Birthdate", value: character.origins.birthDate },
    {
      fieldName: "Lineage and Region",
      value: `${character.origins.lineage}, ${character.origins.region}`,
    },
    { fieldName: "Background Story", value: "" }, // TODO: Map once background story is complete
    { fieldName: "Primary Language", value: character.origins.language },
    { fieldName: "Motivations", value: character.origins.suggestedMotivation },
  ];
};

const mapPaleStoneEncounterFields = (character: Character): FieldMapItem[] => {
  return [
    { fieldName: "Encounter Story", value: character.paleStoneEncounter.story },
    { fieldName: "Outcome", value: character.paleStoneEncounter.outcome },
  ];
};

const mapConditioningFields = (character: Character): FieldMapItem[] => {
  return [
    {
      fieldName: "Poise_C",
      value: character.conditioning[ConditioningEnum.POISE],
    },
    {
      fieldName: "Avoidance_C",
      value: character.conditioning[ConditioningEnum.AVOIDANCE],
    },
    {
      fieldName: "Capacity_C",
      value: character.conditioning[ConditioningEnum.CAPACITY],
    },
  ];
};

const mapReadinessFields = (character: Character): FieldMapItem[] => {
  return [
    {
      fieldName: "Poise_R",
      value: character.readiness.poise,
    },
    {
      fieldName: "Avoidance_R",
      value: character.readiness.avoidance,
    },
    {
      fieldName: "Capacity_R",
      value: character.readiness.capacity,
    },
  ];
};

const mapConnections = (character: Character): FieldMapItem => {
  const { parentage, relations, connection } = character.origins;
  const textLines: string[] = [parentage.description];

  if (parentage.status) {
    textLines.push(parentage.status);
    textLines.push("");
  } else {
    textLines.push("");
  }

  relations.forEach(({ description, status }) => {
    textLines.push(description, status!, "");
  });

  textLines.push(connection.description);
  textLines.push(connection.status!);

  return {
    fieldName: "NPCs relations and connections",
    value: textLines.join("\n"),
  };
};

const getFieldValueMap = (character: Character): FieldMapItem[] => {
  return [
    { fieldName: "Character Name", value: character.name },
    ...mapAttributeFields(character),
    ...mapCharacteristicsFields(character),
    ...mapOriginsFields(character),
    ...mapPaleStoneEncounterFields(character),
    ...mapProfileFields(character),
    ...mapSkillFields(character),
    ...mapProficiencyFields(character),
    ...mapInsightFields(character),
    ...mapResistanceFields(character),
    { fieldName: "Advantage", value: character.advantage },
    ...mapConditioningFields(character),
    ...mapReadinessFields(character),
    mapConnections(character),
    {
      fieldName: "Status",
      value: character.recognition
        ? `+${character.recognition} Recognition`
        : "",
    },
    {
      fieldName: "Coins treasures and wealth",
      value: [`${character.wealth} GC`, ...character.treasures].join("\n"),
    },
    { fieldName: "Mastery", value: character.mastery.join("\n") },
    { fieldName: "Notes", value: character.notes.join("\n") },
  ];
};

const fillCharacterSheet = async (character: Character) => {
  const data = await fetch(characterSheet).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(data);
  const form = pdfDoc.getForm();

  // const fields = form.getFields().map((field) => field.getName());
  // console.log(fields);
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

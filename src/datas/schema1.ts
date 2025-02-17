export const schema1 = {
  type: "object",
  properties: {
    name: { type: "string", title: "Nom" },
    age: { type: "number", title: "Âge" },
    address: { type: "string", title: "Adresse" }
  }
};

export const uiSchema1 = {
  type: "Categorization",
  elements: [
    {
      type: "Category",
      label: "Informations Personnelles",
      elements: [
        { type: "Control", scope: "#/properties/name" },
        { type: "Control", scope: "#/properties/age" }
      ]
    },
    {
      type: "Category",
      label: "Adresse",
      elements: [{ type: "Control", scope: "#/properties/address" }]
    }
  ]
};

export const data1 = { name: "", age: 0, address: "" };

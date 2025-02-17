export const schema2 = {
  type: "object",
  properties: {
    email: { type: "string", title: "Email" },
    phone: { type: "string", title: "Téléphone" }
  }
};

export const uiSchema2 = {
  type: "Categorization",
  elements: [
    {
      type: "Category",
      label: "Contact",
      elements: [
        { type: "Control", scope: "#/properties/email" },
        { type: "Control", scope: "#/properties/phone" }
      ]
    }
  ]
};

export const data2 = { email: "", phone: "" };

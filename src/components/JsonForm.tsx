import React from "react";
import { JsonForms } from "@jsonforms/react";
import { materialRenderers } from "@jsonforms/material-renderers";
import { Card } from "antd";
import { categoriesMap } from "../datas/categories";


const JsonForm: React.FC<{ selectedCategory: string }> = ({ selectedCategory }) => {
  const selectedConfig = categoriesMap[selectedCategory];

  if (!selectedConfig) {
    return <div>Erreur: catégorie non trouvée</div>;
  }

  const filteredUiSchema = {
    type: "Categorization",
    elements: selectedConfig.uiSchema.elements.filter(
      (category: any) => category.label === selectedCategory
    ),
  };

  return (
    <Card title={`Formulaire - ${selectedCategory}`} style={{ margin: "20px" }}>
      <JsonForms
        schema={selectedConfig.schema}
        uischema={filteredUiSchema}
        data={selectedConfig.data}
        renderers={materialRenderers}
      />
    </Card>
  );
};

export default JsonForm;
import { schema1, uiSchema1, data1 } from "./schema1"; // Importer les schémas et données
import { schema2, uiSchema2, data2 } from "./schema2";

export const categoriesMap : Record<string, { schema: any; uiSchema: any; data: any }> = {
  "Informations Personnelles": { schema: schema1, uiSchema: uiSchema1, data: data1 },
  "Adresse": { schema: schema1, uiSchema: uiSchema1, data: data1 },
  "Contact": { schema: schema2, uiSchema: uiSchema2, data: data2 },
};
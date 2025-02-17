import React, { useState } from "react";
import DrawerMenu from "./components/DrawerMenu";
import JsonForm from "./components/JsonForm";

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const toggleDrawer = () => setDrawerOpen(prev => !prev); // Permet d'ouvrir/fermer le drawer

  return (
    <div>
      <button onClick={toggleDrawer}>Ouvrir le Menu</button>
      <DrawerMenu open={drawerOpen} onClose={toggleDrawer} onSelectCategory={setSelectedCategory} />
      <div>
        <h2>Catégorie sélectionnée : {selectedCategory}</h2>
        {selectedCategory && <JsonForm selectedCategory={selectedCategory} />}
      </div>
    </div>
  );
};

export default App;

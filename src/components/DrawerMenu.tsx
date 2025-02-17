import React from "react";
import { Drawer, Menu } from "antd";
import { categoriesMap } from "../datas/categories";

//recup les categories depuis categoriesMap
const categories = Object.keys(categoriesMap).map((key) => ({
  key,
  label: key,
}));

const DrawerMenu: React.FC<{
  open: boolean;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
}> = ({ open, onClose, onSelectCategory }) => {

  const handleMenuClick = (category: string) => {
    //select categorie puis fermer le menu
    onSelectCategory(category);
    onClose(); 
  };
  return (
    <Drawer title="Menu" placement="left" onClose={onClose} open={open}>
      <Menu 
        mode="vertical" 
        onClick={(e) => handleMenuClick(e.key)} 
        items={categories} 
      />
    </Drawer>
  );
};

export default DrawerMenu;

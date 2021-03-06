import React from "react";

import { DrawerMenu, DrawerToggle } from "../side-drawer-styles";

interface DrawerToggleProps {
  toggled: (val: boolean | ((val: boolean) => boolean)) => void;
}

const drawerToggle: React.FC<DrawerToggleProps> = (props) => {
  const handleToggle = () => {
    props.toggled((prevState) => !prevState);
  };

  return (
    <DrawerToggle onClick={handleToggle}>
      <DrawerMenu></DrawerMenu>
      <DrawerMenu></DrawerMenu>
      <DrawerMenu></DrawerMenu>
    </DrawerToggle>
  );
};

export default drawerToggle;

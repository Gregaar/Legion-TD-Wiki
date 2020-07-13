import React from "react";
import { DrawerToggle, DrawerMenu } from "../side-drawer-styles";

interface DrawerToggleProps {
  toggled: (val: boolean | ((val: boolean) => boolean)) => void;
}

const drawerToggle: React.FC<DrawerToggleProps> = (props) => {
  const handleToggle = () => {
    console.log("clicked");
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

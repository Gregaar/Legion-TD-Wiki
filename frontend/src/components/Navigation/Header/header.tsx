import * as React from "react";

import NavigationItems from "../NavigationItems/navigation-items";
import DrawerToggle from "../SideDrawer/DrawerToggle/drawer-toggle";
import { Header, LegionHeading, Nav } from "./header-styles";

interface HeaderProps {
  loading: boolean;
  toggleDrawer: (val: boolean | ((val: boolean) => boolean)) => void;
}

const header: React.FC<HeaderProps> = (props) => {
  return (
    <Header loading={props.loading ? 1 : 0}>
      <DrawerToggle toggled={props.toggleDrawer} />
      <LegionHeading>Legion TD Wiki</LegionHeading>
      <Nav>
        <NavigationItems />
      </Nav>
    </Header>
  );
};

export default header;

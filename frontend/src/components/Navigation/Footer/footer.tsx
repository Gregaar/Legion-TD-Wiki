import * as React from "react";
import { Footer, List } from "./footer-styles";
import NavItem from "../NavigationItems/NavigationItem/navigation-item";

const footer = () => {
  return (
    <Footer>
      <List>
        <NavItem exact link="/About">
          About
        </NavItem>
      </List>
    </Footer>
  );
};

export default footer;

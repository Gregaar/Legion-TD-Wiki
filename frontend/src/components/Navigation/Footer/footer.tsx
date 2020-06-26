import * as React from "react";

import NavItem from "../NavigationItems/NavigationItem/navigation-item";
import { Footer, List } from "./footer-styles";

interface FooterProps {
  loading: boolean;
}

const footer: React.FC<FooterProps> = (props) => {
  return (
    <Footer loading={props.loading ? 1 : 0}>
      <List>
        <NavItem exact link="/About">
          About
        </NavItem>
      </List>
    </Footer>
  );
};

export default footer;

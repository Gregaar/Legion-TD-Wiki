import * as React from "react";
import { Footer, List } from "./footer-styles";
import NavItem from "../NavigationItems/NavigationItem/navigation-item";

interface FooterProps {
  loading: boolean | undefined;
}

const footer: React.FC<FooterProps> = (props) => {
  return (
    <Footer loading={props.loading}>
      <List>
        <NavItem exact link="/About">
          About
        </NavItem>
      </List>
    </Footer>
  );
};

export default footer;

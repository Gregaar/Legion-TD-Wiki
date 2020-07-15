import * as React from "react";

import { Footer, FooterItem, List } from "./footer-styles";

interface FooterProps {
  loading: boolean;
}

const footer: React.FC<FooterProps> = (props) => {
  return (
    <Footer loading={props.loading ? 1 : 0}>
      <List>
        <FooterItem exact to="/about">
          About
        </FooterItem>
      </List>
    </Footer>
  );
};

export default footer;

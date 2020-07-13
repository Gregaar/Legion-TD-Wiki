import React from "react";

import LegionLogo from "../../assets/logo.png";
import { LogoDiv, LogoImg } from "./logo-styles";

interface LogoProps {
  menu?: boolean;
}

const logo: React.FC<LogoProps> = (props) => {
  return (
    <LogoDiv menu={props.menu}>
      <LogoImg src={LegionLogo} alt="Legion TD Logo" />
    </LogoDiv>
  );
};

export default logo;

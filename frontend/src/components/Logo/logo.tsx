import React from "react";

import { LogoDiv, LogoImg } from "./logo-styles";

interface LogoProps {
  menu?: boolean;
}

const logo: React.FC<LogoProps> = (props) => {
  return (
    <LogoDiv menu={props.menu}>
      <LogoImg src={"https://i.imgur.com/pux9PSW.png"} alt="Legion TD Logo" />
    </LogoDiv>
  );
};

export default logo;

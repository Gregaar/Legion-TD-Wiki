import styled from "styled-components";

import Background from "../../assets/bg.png";
import device from "./devices";

interface HeightProps {
  height: string;
  login?: boolean;
}

export const BackgroundDiv = styled.div<HeightProps>`
  height: ${(props) =>
    props.login ? "100vh" : props.height ? props.height : "100vh"};
  display: block;
  position: relative;
  padding: 1%;

  &:after {
    content: "";
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background-image: url(${Background});
    background-size: auto;
    z-index: -1;
  }

  @media ${device.mobileS} {
    height: 100%;
  }

  @media ${device.mobileM} {
    height: 100%;
  }

  @media ${device.mobileL} {
    height: 100%;
  }
`;

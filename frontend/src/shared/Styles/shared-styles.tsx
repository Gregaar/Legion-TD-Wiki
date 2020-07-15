import styled from "styled-components";

import Background from "../../assets/bg.png";
import device from "./devices";

interface HeightProps {
  height?: string;
  login?: boolean;
  noMatch?: boolean;
  textBased?: boolean;
}

export const BackgroundDiv = styled.div<HeightProps>`
  height: ${(props) =>
    props.login ? "100vh" : props.height ? props.height : "100vh"};
  display: block;
  position: relative;
  padding: 1%;

  &:after {
    content: "";
    opacity: ${(props) => (props.textBased ? "0.1" : "0.5")};
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
    height: ${(props) => (props.noMatch ? "100vh" : null)};
  }

  @media ${device.mobileM} {
    height: ${(props) => (props.noMatch ? "100vh" : null)};
  }

  @media ${device.mobileL} {
    height: ${(props) => (props.noMatch ? "100vh" : null)};
  }
`;

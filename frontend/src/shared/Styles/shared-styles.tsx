import styled from "styled-components";

import Background from "../../assets/bg.png";

interface HeightProps {
  height: string;
}

export const BackgroundDiv = styled.div<HeightProps>`
  height: ${(props) => props.height};
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
    z-index: -1;
  }
`;

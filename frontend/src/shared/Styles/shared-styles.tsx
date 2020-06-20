import styled from "styled-components";

import Background from "../../assets/bg.png";

interface HeightProps {
  height: string;
}

export const BackgroundDiv = styled.div<HeightProps>`
  height: ${(props) => props.height};
  opacity: 0.75;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1%;
`;

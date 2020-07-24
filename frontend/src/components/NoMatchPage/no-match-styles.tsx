import styled from "styled-components";
import { NavLink } from "react-router-dom";
import device from "../../shared/Styles/devices";

export const Heading = styled.h1`
  color: gold;
  font-size: 4rem;
  margin: 60px auto 50px auto;
  text-align: center;
  text-shadow: 2px 2px black;
  white-space: pre;

  @media ${device.mobileS} {
    font-size: 2rem;
  }

  @media ${device.mobileM} {
    font-size: 3rem;
  }

  @media ${device.mobileL} {
    font-size: 3.2rem;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 2rem;
  color: gold;
  text-shadow: 2px 2px black;

  @media ${device.mobileS} {
    font-size: 1.5rem;
  }

  @media ${device.mobileM} {
    font-size: 1.5rem;
  }

  @media ${device.mobileL} {
    font-size: 1.8rem;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin: 50px auto;
`;

export const BackButton = styled(NavLink)`
  display: inline-block;
   padding: 0.7em 1.7em;
   margin: 0 0.3em 0.3em 0;
   border-radius: 0.2em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 400;
   color: black;
   background-color: gold;
   box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
   text-align: center;
   position: relative;

  &:active {
    box-shadow: inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  }
`;

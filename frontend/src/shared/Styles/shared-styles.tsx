import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Background from "../../assets/background/bg.png";
import device from "./devices";

export const BackgroundDiv = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  width: 100%;
  height: auto;

  &:after {
    content: "";
    opacity: 0.1;
    background-image: url(${Background});
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: -1;
  }
`;

export const MainHeading = styled.h1`
  text-align: center;
  color: gold;
  font-size: 5rem;
  text-shadow: 3px 3px black;
  margin: 25px auto 0 auto;

  @media ${device.mobileS} {
    font-size: 3rem;
  }

  /* mobileM & mobileL */
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 4rem;
  }
`;

export const TextContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 65vw;
  line-height: 50px;

  @media ${device.mobileS} {
    width: 100vw;
  }

  @media ${device.mobileM} {
    width: 100vw;
  }

  @media ${device.mobileL} {
    width: 70vw;
  }

  @media ${device.tablet} {
    width: 75vw;
  }

  @media ${device.laptop} {
    width: 85vw;
  }

  @media ${device.laptopL} {
    width: 85vw;
  }
`;

export const P = styled.p`
  color: white;
  text-shadow: 1px 1px black;
  font-size: 1.5rem;

  @media ${device.mobileS} {
    margin: 10px;
  }

  /* mobileM & mobileL */
  @media (min-width: 375px) and (max-width: 767px) {
    margin: 20px;
  }

  /* tablet and laptop */
  @media (min-width: 768px) and (max-width: 1439px) {
    margin: 30px auto;
  }

  /* laptopL and desktops */
  @media (min-width: 1440px) {
    margin: 10px auto;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: white;

  &:visited {
    color: white;
  }

  &:hover,
  &:active {
    text-shadow: 1px 1px gold;
  }
`;

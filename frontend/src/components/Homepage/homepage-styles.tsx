import styled from "styled-components";
import device from "../../shared/Styles/devices";
import { NavLink } from "react-router-dom";

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

export const HeadingTwo = styled.h2`
  text-align: center;
  color: gold;
  font-size: 2rem;
  text-shadow: 2px 2px black;
  margin-bottom: 50px;

  @media ${device.mobileS} {
    margin-top: 10px;
    font-size: 1.5rem;
  }

  /* mobileM & mobileL */
  @media (min-width: 375px) and (max-width: 767px) {
    margin-top: 10px;
    font-size: 1.5rem;
  }
`;

export const Img = styled.img`
  display: block;
  border: 2px solid white;
  margin: 0 auto;
`

export const TextContainer = styled.div`
  margin: 0 auto;

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
    width: 80vw;
  }

  @media ${device.laptop} {
    width: 55vw;
  }

  /* laptopL and desktops */
  @media (min-width: 1440px) {
    width: 35vw;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  color: gold;
  text-shadow: 1px 1px black;
  font-size: 1.3rem;
  line-height: 50px;

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
    margin: 50px auto;
  }
`;

export const A = styled.a`
  color: white;

  &:visited {
    color: white;
  }

  &:hover,
  &:active {
    color: white;
    text-shadow: 1px 1px gold;
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

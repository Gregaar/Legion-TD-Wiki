import { NavLink } from "react-router-dom";
import styled from "styled-components";

import device from "../../../shared/Styles/devices";

interface FooterStyleProps {
  loading?: number;
}

export const Footer = styled.footer<FooterStyleProps>`
  border: 2px solid yellow;
  background-color: rgb(68, 89, 106);
  width: 100%;
  padding: 0 2px;
  z-index: 99;
  border-radius: 5px;
  height: 35px;
  visibility: visible;
  margin-top: 2rem;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0.5rem auto;
  padding: 0;
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;

  @media ${device.mobileS} {
    margin: 2%;
  }

  @media ${device.mobileM} {
    margin: 2%;
  }

  @media ${device.mobileL} {
    margin: 5px;
  }
`;

export const FooterItem = styled(NavLink)`
  display: block;
  margin: 0 6rem;
  color: rgb(254, 243, 115);
  text-decoration: none;

  &:hover,
  &:active {
    color: white;
  }

  @media ${device.mobileS} {
    margin: 0 0.2rem;
  }

  @media ${device.mobileM} {
    margin: 0 0.2rem;
  }

  @media ${device.mobileL} {
    margin: 0 0.2rem;
  }

  @media ${device.tablet} {
    margin: 0 1.5rem;
  }

  @media ${device.laptop} {
    margin: 0 3rem;
  }

  @media ${device.laptopL} {
    margin: 0 5rem;
  }
`;

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import device from "../../../../shared/Styles/devices";

export const NavigationItem = styled(NavLink)`
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

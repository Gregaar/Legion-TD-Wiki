import styled from "styled-components";
import device from "../../../shared/Styles/devices";

interface HeaderProps {
  loading: number;
}

export const Header = styled.header<HeaderProps>`
  height: 75px;
  opacity: 0.75;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background-color: rgba(68, 89, 106, 0.8);
  border-radius: 5px;
  position: unset;
  border: 2px solid yellow;
  visibility: ${(props) => (props.loading ? "hidden" : "visible")};

  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const LegionHeading = styled.h1`
  color: gold;
  margin-left: 10px;

  @media ${device.mobileS} {
    margin-left: 2rem;
  }

  @media ${device.mobileM} {
    margin-left: 3rem;
  }

  @media ${device.mobileL} {
    margin-left: 5rem;
  }

  @media (min-width: 501px) {
    display: none;
  }
`;

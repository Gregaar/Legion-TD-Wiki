import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationItem = styled(NavLink)`
  display: block;
  margin: 0 6rem;
  color: rgb(254, 243, 115);
  text-decoration: none;

  &:hover,
  &:active {
    color: white;
  }
`;

import * as React from "react";
import styled from "styled-components";
import NavItem from "../NavigationItems/NavigationItem/navigation-item";

const Footer = styled.footer`
  border: 2px solid yellow;
  background-color: rgba(68, 89, 106, 0.8);
  width: 100%;
  padding: 0 2px;
  z-index: 99;
  border-radius: 5px;
  height: 35px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0.5rem auto;
  padding: 0;
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const footer = () => {
  return (
    <Footer>
      <List>
        <NavItem exact link="/About">
          About
        </NavItem>
      </List>
    </Footer>
  );
};

export default footer;

import React from "react";
import styled from "styled-components";
import { useAuthContext } from "../../../hoc/AuthContext/auth-context";
import NavItem from "./NavigationItem/navigation-item";

const List = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
`;

const NavigationItems: React.FC = () => {
  const authContext = useAuthContext();

  const authStatus = authContext?.user.isAuth;

  return (
    <List>
      {authStatus ? (
        <React.Fragment>
          <NavItem exact link="/units">
            Units
          </NavItem>
          <NavItem exact link="/builders">
            Builders
          </NavItem>
        </React.Fragment>
      ) : null}
      {authStatus ? (
        <React.Fragment>
          <NavItem exact link="/">
            Search
          </NavItem>
          <NavItem exact link="/Mercenaries">
            Summons
          </NavItem>
          <NavItem exact link="/profile">
            Profile
          </NavItem>
        </React.Fragment>
      ) : null}
      <NavItem
        exact
        link={authStatus ? "/logout" : "login"}
        clicked={authStatus ? authContext?.logoutHandler : undefined}
      >
        {authStatus ? "Logout" : "Login"}
      </NavItem>
    </List>
  );
};

export default NavigationItems;

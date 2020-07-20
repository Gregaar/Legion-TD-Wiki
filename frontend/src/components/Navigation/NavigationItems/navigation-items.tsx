import React from "react";

import { useAuthContext } from "../../../hoc/AuthContext/auth-context";
import { List } from "./navigation-items-styles";
import NavItem from "./NavigationItem/navigation-item";

const NavigationItems: React.FC = () => {
  const authContext = useAuthContext();

  const authStatus = authContext?.user.isAuth;

  return (
    <List>
      <NavItem exact link="/">
        Home
      </NavItem>
      <NavItem exact link="/summons">
        Summons
      </NavItem>
      <NavItem exact link="/waves">
        Waves
      </NavItem>
      <NavItem exact link="/units">
        Unit Search
      </NavItem>
      <NavItem exact link="/builders">
        Builders
      </NavItem>
      <NavItem exact link="/king">
        King
      </NavItem>
      <NavItem
        exact
        link={authStatus ? "/logout" : "/login"}
        clicked={authStatus ? authContext?.logoutHandler : undefined}
      >
        {authStatus ? "Logout" : "Login"}
      </NavItem>
    </List>
  );
};

export default NavigationItems;

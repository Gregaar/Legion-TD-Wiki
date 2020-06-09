import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const List = styled.li``;

const NavigationItem = styled(NavLink)`
  display: block;
  margin: 0 6rem;
  color: rgb(254, 243, 115);
  text-decoration: none;

  &:hover, &:active {
      color: white;
  }
`;

const navItem = ({
  link,
  exact,
  children,
  clicked,
}: {
  link: string;
  exact: boolean;
  children: React.ReactNode;
  clicked?: (event: React.MouseEvent<HTMLAnchorElement>) => Promise<void>;
}) => {
  return (
    <List>
      <NavigationItem to={link} exact onClick={clicked ? async (e) => await clicked(e) : undefined}>
        {children}
      </NavigationItem>
    </List>
  );
};

export default navItem;

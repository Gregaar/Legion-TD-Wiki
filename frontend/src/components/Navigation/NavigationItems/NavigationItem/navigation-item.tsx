import * as React from "react";

import { NavigationItem } from "./navigation-item-styles";

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
    <li style={{margin: "10px 5px"}}>
      <NavigationItem
        to={link}
        exact
        onClick={
          clicked
            ? async (event: React.MouseEvent<HTMLAnchorElement>) =>
                await clicked(event)
            : undefined
        }
      >
        {children}
      </NavigationItem>
    </li>
  );
};

export default navItem;

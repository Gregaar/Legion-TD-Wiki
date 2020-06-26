import * as React from "react";

import NavigationItems from "../NavigationItems/navigation-items";
import { Header } from "./header-styles";

interface HeaderProps {
  loading: boolean;
}

const header: React.FC<HeaderProps> = (props) => {
  return (
    <Header loading={props.loading ? 1 : 0}>
      <nav>
        <NavigationItems />
      </nav>
    </Header>
  );
};

export default header;

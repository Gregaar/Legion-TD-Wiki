import * as React from "react";
import { Header } from "./header-styles";
import NavigationItems from "../NavigationItems/navigation-items";

const header = () => {
  return (
    <Header>
      <nav>
        <NavigationItems />
      </nav>
    </Header>
  );
};

export default header;

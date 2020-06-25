import * as React from "react";
import { Header } from "./header-styles";
import NavigationItems from "../NavigationItems/navigation-items";

interface HeaderProps {
  loading: boolean | undefined;
}

const header: React.FC<HeaderProps> = (props) => {
  return (
    <Header loading={props.loading}>
      <nav>
        <NavigationItems />
      </nav>
    </Header>
  );
};

export default header;

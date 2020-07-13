import React from "react";

import Logo from "../../Logo/logo";
import NavigationItems from "../NavigationItems/navigation-items";
import { Backdrop, SideDrawerDiv } from "./side-drawer-styles";

interface SideDrawerProps {
  isOpen: boolean;
  closed: (val: boolean | ((val: boolean) => boolean)) => void;
}

const sideDrawer: React.FC<SideDrawerProps> = (props) => {
  const handleClose = () => {
    props.closed((prevVal) => false);
  };

  return (
    <React.Fragment>
      {props.isOpen ? <Backdrop onClick={handleClose} /> : null}
      <SideDrawerDiv show={props.isOpen} onClick={handleClose}>
        <Logo menu={true} />
        <nav>
          <NavigationItems />
        </nav>
      </SideDrawerDiv>
    </React.Fragment>
  );
};

export default sideDrawer;

import React, { useState } from "react";

import Footer from "../../components/Navigation/Footer/footer";
import Header from "../../components/Navigation/Header/header";
import SideDrawer from "../../components/Navigation/SideDrawer/side-drawer";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";
import { useAuthContext } from "../AuthContext/auth-context";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const authContext = useAuthContext();
  const [showSideDrawer, setShowSideDrawer] = useState<boolean>(false);
  return (
    <React.Fragment>
      <Header loading={authContext.loading} toggleDrawer={setShowSideDrawer} />
      <SideDrawer isOpen={showSideDrawer} closed={setShowSideDrawer} />
      <BackgroundDiv>{children}</BackgroundDiv>
      <Footer loading={authContext.loading} />
    </React.Fragment>
  );
};

export default Layout;

import * as React from "react";

import Footer from "../../components/Navigation/Footer/footer";
import Header from "../../components/Navigation/Header/header";
import { useAuthContext } from "../AuthContext/auth-context";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const authContext = useAuthContext();
  return (
    <React.Fragment>
      <Header loading={authContext.loading} />
      {children}
      <Footer loading={authContext.loading} />
    </React.Fragment>
  );
};

export default Layout;

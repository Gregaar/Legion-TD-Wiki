import * as React from "react";
import { useAuthContext } from "../AuthContext/auth-context";
import Footer from "../../components/Navigation/Footer/footer";
import Header from "../../components/Navigation/Header/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const authContext = useAuthContext();
  return (
    <React.Fragment>
      <Header loading={authContext?.loading}/>
      {children}
      <Footer loading={authContext?.loading}/>
    </React.Fragment>
  );
};

export default Layout;

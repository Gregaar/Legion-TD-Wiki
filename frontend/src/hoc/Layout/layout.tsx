import * as React from "react";

import Footer from "../../components/Navigation/Footer/footer";
import Header from "../../components/Navigation/Header/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default layout;

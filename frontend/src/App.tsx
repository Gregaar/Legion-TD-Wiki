import React from "react";
import DefaultHelmet from "./components/DefaultHelmet/defaultHelmet";
import { AuthProvider } from "./hoc/AuthContext/auth-context";
import Layout from "./hoc/Layout/layout";
import ScrollToTop from "./hoc/ScrollToTop/scroll-to-top";
import Router from "./router";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Layout>
        <ScrollToTop>
          <DefaultHelmet />
          <Router />
        </ScrollToTop>
      </Layout>
    </AuthProvider>
  );
};

export default App;

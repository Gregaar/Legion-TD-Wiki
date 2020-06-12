import React from "react";
import { Route, Switch } from "react-router";

import { AuthProvider } from "./hoc/AuthContext/auth-context";
import ProtectedRoute from "./hoc/ProtectedRoute/protected-route";
import Layout from "./hoc/Layout/layout";

import Homepage from "./components/Homepage/homepage";
import Login from "./containers/Login/login";
import Units from "./containers/Units/units";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Layout>
        <Switch>
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/" exact component={Homepage} />
          <ProtectedRoute path="/units" exact component={Units} />
        </Switch>
      </Layout>
    </AuthProvider>
  );
};

export default App;

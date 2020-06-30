import React from "react";
import { Route, Switch } from "react-router";

import Homepage from "./components/Homepage/homepage";
import IndividualUnit from "./containers/IndividualUnit/individual-unit";
import Login from "./containers/Login/login";
import Units from "./containers/Units/units";
import { AuthProvider } from "./hoc/AuthContext/auth-context";
import Layout from "./hoc/Layout/layout";
import ProtectedRoute from "./hoc/ProtectedRoute/protected-route";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Layout>
        <Switch>
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/" exact component={Homepage} />
          <ProtectedRoute
            path="/units/:unitName"
            exact
            component={IndividualUnit}
          />
          <ProtectedRoute path="/units" exact component={Units} />
        </Switch>
      </Layout>
    </AuthProvider>
  );
};

export default App;

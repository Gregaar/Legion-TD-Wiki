import React from "react";
import { Route, Switch } from "react-router";

import Homepage from "./components/Homepage/homepage";
import Builders from "./containers/Builders/builders";
import BuilderUnits from "./containers/BuilderUnits/builder-units";
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
          <ProtectedRoute
            path="/units/:unitName"
            exact
            component={IndividualUnit}
          />
          <ProtectedRoute path="/units" exact component={Units} />
          <ProtectedRoute
            path="/builders/:builderName"
            exact
            component={BuilderUnits}
          />
          <ProtectedRoute path="/builders" exact component={Builders} />
          <ProtectedRoute path="/" exact component={Homepage} />
        </Switch>
      </Layout>
    </AuthProvider>
  );
};

export default App;

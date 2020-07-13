import React from "react";
import { Route, Switch } from "react-router";

import Homepage from "./components/Homepage/homepage";
import Builders from "./containers/Builders/builders";
import BuilderUnits from "./containers/BuilderUnits/builder-units";
import IndividualUnit from "./containers/IndividualUnit/individual-unit";
import Login from "./containers/Login/login";
import Summons from "./containers/Summons/summons";
import Units from "./containers/Units/units";
import Waves from "./containers/Waves/waves";
import King from "./containers/King/king";
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
          <ProtectedRoute
            path="/summons/:order"
            exact
            component={IndividualUnit}
          />
          <ProtectedRoute path="/summons" exact component={Summons} />
          <ProtectedRoute
            path="/waves/:level"
            exact
            component={IndividualUnit}
          />
          <ProtectedRoute path="/waves" exact component={Waves} />
          <ProtectedRoute path="/king" exact component={King} />
          <ProtectedRoute path="/" exact component={Homepage} />
        </Switch>
      </Layout>
    </AuthProvider>
  );
};

export default App;

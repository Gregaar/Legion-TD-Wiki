import React from "react";
import { Route, Switch } from "react-router";

import About from "./components/About/about";
import Homepage from "./components/Homepage/homepage";
import Secret from "./components/Secret/secret";
import Builders from "./containers/Builders/builders";
import BuilderUnits from "./containers/BuilderUnits/builder-units";
import IndividualUnit from "./containers/IndividualUnit/individual-unit";
import King from "./containers/King/king";
import Login from "./containers/Login/login";
import ResetPassword from "./containers/Login/ResetPassword/reset-password";
import NoMatchPage from "./components/NoMatchPage/no-match-page";
import Summons from "./containers/Summons/summons";
import Units from "./containers/UnitSearch/units";
import Waves from "./containers/Waves/waves";
import ProtectedRoute from "./hoc/ProtectedRoute/protected-route";

const Router: React.FC = () => {
  return (
    <Switch>
      <ProtectedRoute path="/secret" exact component={Secret} />
      <Route path="/login" exact component={Login} />
      <Route path="/resetpassword/:id/:token" exact component={ResetPassword} />
      <Route path="/units/:unitName" exact component={IndividualUnit} />
      <Route path="/units" exact component={Units} />
      <Route path="/builders/:builderName" exact component={BuilderUnits} />
      <Route path="/builders" exact component={Builders} />
      <Route path="/summons/:order" exact component={IndividualUnit} />
      <Route path="/summons" exact component={Summons} />
      <Route path="/waves/:level" exact component={IndividualUnit} />
      <Route path="/waves" exact component={Waves} />
      <Route path="/king" exact component={King} />
      <Route path="/about" exact component={About} />
      <Route path="/" exact component={Homepage} />
      <Route path="*" component={NoMatchPage} />
    </Switch>
  );
};

export default Router;

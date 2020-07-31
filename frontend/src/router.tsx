import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router";

import Spinner from "./components/Spinner/spinner";

const About = lazy(() => import("./components/About/about"));
const Homepage = lazy(() => import("./components/Homepage/homepage"));
const Secret = lazy(() => import("./components/Secret/secret"));
const Builders = lazy(() => import("./containers/Builders/builders"));
const BuilderUnits = lazy(() =>
  import("./containers/BuilderUnits/builder-units")
);
const IndividualUnit = lazy(() =>
  import("./containers/IndividualUnit/individual-unit")
);
const King = lazy(() => import("./containers/King/king"));
const Login = lazy(() => import("./containers/Login/login"));
const ResetPassword = lazy(() =>
  import("./containers/Login/ResetPassword/reset-password")
);
const NoMatchPage = lazy(() =>
  import("./components/NoMatchPage/no-match-page")
);
const Summons = lazy(() => import("./containers/Summons/summons"));
const Units = lazy(() => import("./containers/UnitSearch/units"));
const Waves = lazy(() => import("./containers/Waves/waves"));
const ProtectedRoute = lazy(() =>
  import("./hoc/ProtectedRoute/protected-route")
);

const Router: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <ProtectedRoute path="/secret" exact component={Secret} />
          <Route path="/login" exact component={Login} />
          <Route
            path="/resetpassword/:id/:token"
            exact
            component={ResetPassword}
          />
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
      </Suspense>
    </>
  );
};

export default Router;

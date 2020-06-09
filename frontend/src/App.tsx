import React from "react";
import { Route, Switch } from "react-router";

import { AuthProvider } from "./hoc/AuthContext/auth-context";
import ProtectedRoute from "./hoc/ProtectedRoute/protected-route";
import Layout from "./hoc/Layout/layout";

import Homepage from "./components/Homepage/homepage";
import Login from "./containers/Login/login";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Layout>
        <Switch>
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/" exact component={Homepage} />
        </Switch>
      </Layout>
    </AuthProvider>
  );
};

export default App;

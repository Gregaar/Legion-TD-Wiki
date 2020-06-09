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

// The AuthProvider is a function which checks the auth state by reaching out to the server, and returns and updates the current AuthContext.Provider value
// depending on if the user has the correct cookies (refresh and/or access), the auth status is set to true or false
// I must now create a protected route which uses the context of the Provider and renders conditionally depending on if they are authenticated or not.
// Then, when users sign in, out, or register, the provider value must be updated to reflect the new authentication state.
// I think i should create login, logout and register functions and pass them into the provider so they can alter the state when a user does one of these actions.
// Additionally, on every render I should check if a user is authenticated or not (via cookies) and redirect where appropriate.

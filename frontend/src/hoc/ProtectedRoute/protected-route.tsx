import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../AuthContext/auth-context";

const ProtectedRoute = ({
  component: Component,
  path,
  exact,
  ...rest
}: {
  component: React.ReactType;
  path: string;
  exact: boolean;
}) => {
  const authContext = useAuthContext();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authContext?.user.isAuth) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;

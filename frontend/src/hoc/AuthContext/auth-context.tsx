import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export interface AuthContextInterface {
  user: {
    isAuth: boolean;
  };
  registerHandler: (
    name: string,
    email: string,
    password: string
  ) => Promise<void | string>;
  loginHandler: (email: string, password: string) => Promise<void | string>;
  logoutHandler: (event: React.MouseEvent<HTMLAnchorElement>) => Promise<void>;
}

const AuthContext = React.createContext<AuthContextInterface | null>(null);

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authStatus, setAuthStatus] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const isAuth = async () => {
      await axios
        .get("/user/loginStatus", { withCredentials: true })
        .then((res) => {
          if (res.data.success && !authStatus) {
            setAuthStatus(true);
          } else if (!res.data.success && authStatus) {
            setAuthStatus(false);

            history.push("/login");
          }
        })
        .catch((error) => {
          setAuthStatus(false);
          history.push("/login");
        });
    };
    isAuth();
  }, [history.location.pathname]);

  const registerHandler = async (
    name: string,
    email: string,
    password: string
  ): Promise<void | string> => {
    const response = await axios("/user/register", {
      method: "POST",
      data: {
        name,
        email,
        password,
      },
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 201) {
          setAuthStatus(true);
        } else {
          setAuthStatus(false);
        }
      })
      .catch((error) => {
        setAuthStatus(false);
        return error.response.data.error;
      });
    return response;
  };

  const loginHandler = async (
    email: string,
    password: string
  ): Promise<void | string> => {
    const response = await axios("/user/login", {
      method: "POST",
      data: {
        email,
        password,
      },
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          setAuthStatus(true);
          history.push("/");
        } else {
          setAuthStatus(false);
        }
      })
      .catch((error) => {
        setAuthStatus(false);
        return error.response.data.error;
      });
    return response;
  };

  const logoutHandler = async (
    event: React.MouseEvent<HTMLAnchorElement>
  ): Promise<void> => {
    event.preventDefault();

    await axios("/user/logout", {
      method: "POST",
    })
      .then((res) => {
        if (res.status === 200) {
          setAuthStatus(false);
          history.push("/login");
        } else {
          setAuthStatus(true);
          history.push("/");
        }
      })
      .catch((error) => {
        setAuthStatus(false);
        history.push("/login");
        return error.response.data.error;
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user: {
          isAuth: authStatus,
        },
        registerHandler,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuthContext };

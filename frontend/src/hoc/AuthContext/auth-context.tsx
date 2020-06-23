import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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

const apiURL = process.env.REACT_APP_API_URL;

const AuthContext = React.createContext<AuthContextInterface | null>(null);

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authStatus, setAuthStatus] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const isAuth = async () => {
      await axios
        .get(`${apiURL}/api/user/loginStatus`, { withCredentials: true })
        .then((res) => {
          if (res.data.success && !authStatus) {
            return setAuthStatus(true);
          } else if (!res.data.success && authStatus) {
            setAuthStatus(false);
            history.push("/login");
            return;
          }
        })
        .catch((error) => {
          setAuthStatus(false);
          history.push("/login");
        });
    };
    isAuth();
  }, [history, authStatus]);

  const registerHandler = async (
    name: string,
    email: string,
    password: string
  ): Promise<void | string> => {
    const response = await axios(`${apiURL}/api/user/register`, {
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
    const response = await axios(`${apiURL}/api/user/login`, {
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

    await axios(`${apiURL}/api/user/logout`, {
      method: "POST",
      withCredentials: true,
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

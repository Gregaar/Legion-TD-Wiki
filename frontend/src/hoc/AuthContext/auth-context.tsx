import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export interface AuthContextInterface {
  user: {
    isAuth: boolean;
  };
  loading: boolean;
  registerHandler: (
    name: string,
    email: string,
    password: string
  ) => Promise<void | string>;
  loginHandler: (email: string, password: string) => Promise<void | string>;
  logoutHandler: (event: React.MouseEvent<HTMLAnchorElement>) => Promise<void>;
}

const AuthContext = React.createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authStatus, setAuthStatus] = useState(true);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const history = useHistory();

  useEffect(() => {
    const isAuth = async () => {
      await axios(`/api/user/loginStatus`, {
        method: "POST",
        withCredentials: true,
      })
        .then((res) => {
          setPageLoading(false);
          if (res.data.success && !authStatus) {
            setAuthStatus(true);
            return;
          } else if (!res.data.success && authStatus) {
            setAuthStatus(false);
            setPageLoading(false);
            return;
          }
        })
        .catch((error) => {
          setAuthStatus(false);
          setPageLoading(false);
          return;
        });
    };
    isAuth();
  }, [authStatus, history]);

  const registerHandler = async (
    name: string,
    email: string,
    password: string
  ): Promise<void | string> => {
    const response = await axios(`/api/user/register`, {
      method: "POST",
      data: {
        name,
        email,
        password,
      },
      withCredentials: true,
    })
      .then((res) => {
        setPageLoading(false);
        if (res.status === 201) {
          setAuthStatus(true);
          setPageLoading(false);
        } else {
          setAuthStatus(false);
          setPageLoading(false);
        }
      })
      .catch((error) => {
        setPageLoading(false);
        setAuthStatus(false);
        setPageLoading(false);
        return error.response.data.error;
      });
    return response;
  };

  const loginHandler = async (
    email: string,
    password: string
  ): Promise<void | string> => {
    const response = await axios(`/api/user/login`, {
      method: "POST",
      data: {
        email,
        password,
      },
      withCredentials: true,
    })
      .then((res) => {
        setPageLoading(false);
        if (res.status === 200) {
          setAuthStatus(true);
          setPageLoading(false);
          history.push("/units");
        } else {
          setAuthStatus(false);
          setPageLoading(false);
        }
      })
      .catch((error) => {
        setPageLoading(false);
        setAuthStatus(false);
        setPageLoading(false);
        return error.response.data.error;
      });
    return response;
  };

  const logoutHandler = async (
    event: React.MouseEvent<HTMLAnchorElement>
  ): Promise<void> => {
    event.preventDefault();

    await axios(`/api/user/logout`, {
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        setPageLoading(false);
        if (res.status === 200) {
          setAuthStatus(false);
          setPageLoading(false);
          history.push("/login");
        } else {
          setAuthStatus(false);
          setPageLoading(false);
          history.push("/login");
        }
      })
      .catch((error) => {
        setPageLoading(false);
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
        loading: pageLoading,
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

import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export interface AuthContextInterface {
  user: {
    isAuth: boolean;
    name: string;
  }
  loginHandler: (event: React.FormEvent, email: string, password: string) => Promise<void>;
  logoutHandler: (event: React.MouseEvent<HTMLAnchorElement>) => Promise<void>;
}

const AuthContext = React.createContext<AuthContextInterface | null>(null);

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authStatus, setAuthStatus] = useState(false);
  const [username, setUsername] = useState("Guest");
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
            setUsername("Guest");
            history.push("/login");
          }
        })
        .catch((error) => {
          setAuthStatus(false);
          setUsername("Guest");
          history.push("/login");
        });
    };
    isAuth();
  }, [history.location.pathname]);

  const loginHandler = async (
    event: React.FormEvent,
    email: string,
    password: string
  ): Promise<void> => {
    event.preventDefault();

    await axios("/user/login", {
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
          history.push("/login");
        }
      })
      .catch((error) => {
        setAuthStatus(false);
        history.push("/login");
        return error.response.data.message;
      });
  };

  const logoutHandler = async (
    event: React.MouseEvent<HTMLAnchorElement>,
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
        return error.response.data.message;
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user: {
          isAuth: authStatus,
          name: username,
        },
        loginHandler,
        logoutHandler
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuthContext };

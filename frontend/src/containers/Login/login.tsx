import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../hoc/AuthContext/auth-context";
import { useHistory } from "react-router-dom";
import { BackgroundDiv, ContainerDiv, Form, Label, Input, LoginButton} from "./login-styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const authContext = useAuthContext();
  const history = useHistory();

  useEffect(() => {
    if (authContext?.user.isAuth) {
      history.push("/");
    }
  });

  return (
    <BackgroundDiv>
      <ContainerDiv>
        <Form
          onSubmit={(event: React.FormEvent) =>
            authContext?.loginHandler(event, email, password)
          }
        >
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>
            <LoginButton type="submit" value="Login" />
          </div>
        </Form>
      </ContainerDiv>
    </BackgroundDiv>
  );
};

export default Login;

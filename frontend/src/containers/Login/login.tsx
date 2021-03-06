import Tooltip from "@material-ui/core/Tooltip";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import isEmail from "validator/lib/isEmail";

import ErrorDisplay from "../../components/ErrorDisplay/error-display";
import { useAuthContext } from "../../hoc/AuthContext/auth-context";
import ForgotPassword from "./ForgotPassword/forgot-password";
import {
  Button,
  ButtonContainer,
  ContainerDiv,
  ForgotHeading,
  Form,
  Input,
  InputButton,
  InputDiv,
  Label,
} from "./login-styles";
import Register from "./Register/register";

interface FormErrors {
  message: string;
}

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [signUp, setSignUp] = useState<boolean>(false);
  const [forgottenPassword, setForgottenPassword] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<FormErrors[]>([]);
  const authContext = useAuthContext();

  const handleSignup = (): void => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFormErrors((prevState) => []);
    setSignUp(true);
    setForgottenPassword(false);
  };

  const handleForgotten = (): void => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFormErrors((prevState) => []);
    setSignUp(false);
    setForgottenPassword(true);
  };

  const handleLogin = async (
    event: React.FormEvent,
    email: string,
    password: string
  ): Promise<void> => {
    event.preventDefault();
    setFormErrors((prevState) => []);

    if (!isEmail(email)) {
      setFormErrors((prevErrors) => [
        ...prevErrors,
        { message: `Error: Invalid Email Address.` },
      ]);
      return;
    }

    const response = await authContext?.loginHandler(email, password);
    if (response) {
      setFormErrors((prevErrors) => [
        ...prevErrors,
        { message: `Error: ${response}` },
      ]);
    }
  };

  const errorDisplay = (
    <ErrorDisplay
      displayErrors={formErrors}
      clicked={() => setFormErrors((prevState) => [])}
      show={formErrors ? true : false}
    />
  );

  const login = (
    <main>
      <ContainerDiv>
        {formErrors.length > 0 ? errorDisplay : null}
        <Form
          onSubmit={(event: React.FormEvent) =>
            handleLogin(event, email, password)
          }
        >
          <h2 style={{ padding: "0.5rem" }}>Login</h2>
          <InputDiv>
            <Label htmlFor="email">Email</Label>
            <Tooltip
              placement="right"
              title="The email address you registered with"
            >
              <Input
                id="email"
                name="email"
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Tooltip>
          </InputDiv>
          <InputDiv>
            <Label htmlFor="password">Password</Label>
            <Tooltip placement="right" title="Your password">
              <Input
                id="password"
                name="password"
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Tooltip>
          </InputDiv>
          <ButtonContainer>
            <InputButton type="submit" value="Login" />
            <Button type="button" value="switch" onClick={handleSignup}>
              Switch to Register
            </Button>
          </ButtonContainer>
          <ForgotHeading onClick={handleForgotten}>
            Forgot your Password?
          </ForgotHeading>
        </Form>
      </ContainerDiv>
    </main>
  );

  if (signUp) {
    return (
      <Register
        username={username}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
        setSignUp={setSignUp}
        setUsername={setUsername}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
      />
    );
  }

  if (forgottenPassword) {
    return (
      <ForgotPassword
        formErrors={formErrors}
        setFormErrors={setFormErrors}
        email={email}
        setEmail={setEmail}
        setForgottenPassword={setForgottenPassword}
      />
    );
  }

  return (
    <React.Fragment>
      <div>
        <Helmet>
          <title>{`Legion TD Mega Wiki | Login`}</title>
          <meta
            name="description"
            content={`Login to the Wiki. Register. Sign Up. Forgot Password.`}
          />
        </Helmet>
      </div>
      {login}
    </React.Fragment>
  );
};

export default Login;

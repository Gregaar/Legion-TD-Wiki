import Tooltip from "@material-ui/core/Tooltip";
import React from "react";

import ErrorDisplay from "../../../components/ErrorDisplay/error-display";
import { useAuthContext } from "../../../hoc/AuthContext/auth-context";
import { BackgroundDiv } from "../../../shared/Styles/shared-styles";
import {
  Button,
  ButtonContainer,
  ContainerDiv,
  Form,
  Input,
  InputButton,
  InputDiv,
  Label,
} from "../login-styles";
import registerValidation from "./validation";

interface FormErrors {
  message: string;
}

interface RegisterProps {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  formErrors: FormErrors[];
  setFormErrors: (
    val: FormErrors[] | ((val: FormErrors[]) => FormErrors[])
  ) => void;
  setSignUp: (value: boolean) => void;
  setUsername: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
}

const Register: React.FC<RegisterProps> = ({
  username,
  email,
  password,
  confirmPassword,
  formErrors,
  setFormErrors,
  setSignUp,
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
}) => {
  const authContext = useAuthContext();

  const handleLogin = (): void => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFormErrors((prevState) => []);
    setSignUp(false);
  };

  const handleRegister = async (
    event: React.FormEvent<HTMLFormElement>,
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ): Promise<void> => {
    event.preventDefault();

    const registerErrors = registerValidation(
      name,
      email,
      password,
      confirmPassword,
      setFormErrors
    );

    if (registerErrors < 1) {
      const response = await authContext?.registerHandler(
        name,
        email,
        password
      );
      if (response) {
        setFormErrors((prevErrors) => [
          ...prevErrors,
          {
            message: `Error: ${response}`,
          },
        ]);
      }
    }
  };

  const errorDisplay = (
    <ErrorDisplay
      displayErrors={formErrors}
      clicked={() => setFormErrors((prevState) => [])}
      show={formErrors ? true : false}
    />
  );

  return (
    <BackgroundDiv height="100%" login={true}>
      <ContainerDiv>
        {formErrors.length > 0 ? errorDisplay : null}
        <Form
          noValidate
          onSubmit={(e) =>
            handleRegister(e, username, email, password, confirmPassword)
          }
        >
          <h2 style={{ padding: "1rem" }}>Register</h2>
          <p style={{ padding: "1rem" }}>All fields are mandatory</p>
          <InputDiv>
            <Label htmlFor="username">Username</Label>
            <Tooltip
              id="username"
              placement="right"
              title="The name you'd like to be known by."
            >
              <Input
                id="username"
                name="username"
                required
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </Tooltip>
          </InputDiv>
          <InputDiv>
            <Label htmlFor="email">Email</Label>
            <Tooltip
              id="email"
              placement="right"
              title="The email address you'd like to login with."
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
            <Tooltip
              id="password"
              placement="right"
              title="Must have at least 6 characters and include the following: uppercase, lowercase, number, and a special character."
            >
              <Input
                id="password"
                name="password"
                required
                pattern=".{6,}"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Tooltip>
          </InputDiv>
          <InputDiv>
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Tooltip
              id="confirm-password"
              placement="right"
              title="Must match the password field above."
            >
              <Input
                id="confirm-password"
                name="confirm-password"
                required
                type="password"
                pattern=".{6,}"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </Tooltip>
          </InputDiv>

          <ButtonContainer>
            <InputButton type="submit" value="Register" />
            <Button type="button" value="switch" onClick={handleLogin}>
              Switch to Login
            </Button>
          </ButtonContainer>
        </Form>
      </ContainerDiv>
    </BackgroundDiv>
  );
};

export default Register;

import React from "react";
import isEmail from "validator/lib/isEmail";
import Tooltip from "@material-ui/core/Tooltip";
import { useAuthContext } from "../../../hoc/AuthContext/auth-context";
import { BackgroundDiv } from "../../../shared/Styles/shared-styles";
import {
  ContainerDiv,
  Form,
  InputDiv,
  Label,
  Input,
  InputButton,
  Button,
  ButtonContainer,
} from "../login-styles";

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

    await setFormErrors((prevState) => []);

    let errorCount = 0;

    if (name.length < 2) {
      errorCount++;
      setFormErrors((prevErrors) => [
        ...prevErrors,
        { message: "Error: Username must have at least 2 characters." },
      ]);
    }

    if (!isEmail(email)) {
      errorCount++;
      setFormErrors((prevErrors) => [
        ...prevErrors,
        { message: "Error: Please enter a valid email address." },
      ]);
    }

    if (password.trim().length < 6 || confirmPassword.trim().length < 6) {
      errorCount++;
      setFormErrors((prevErrors) => [
        ...prevErrors,
        { message: "Error: Passwords must be at least 6 characters long." },
      ]);
    }

    if (password !== confirmPassword) {
      errorCount++;
      setFormErrors((prevErrors) => [
        ...prevErrors,
        { message: "Error: Passwords must match." },
      ]);
    }

    if (
      !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/gm) ||
      !confirmPassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/gm)
    ) {
      errorCount++;
      setFormErrors((prevErrors) => [
        ...prevErrors,
        {
          message:
            "Error: Passwords must be have 6 characters or more and include at least a lowercase and uppercase character as well as a number.",
        },
      ]);
    }

    if (errorCount < 1) {
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

  return (
    <BackgroundDiv height="100%">
      <ContainerDiv>
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
              title="Must have at least 6 characters and include the following: uppercase, lowercase, number."
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
          <div aria-label="formErrorsContainer">
            {formErrors.length > 0
              ? formErrors.map((error) => (
                  <p
                    key={Math.random().toFixed(2).toString()}
                    style={{
                      color: "yellow",
                      fontWeight: "bold",
                      padding: "2%",
                    }}
                  >
                    {error.message}
                  </p>
                ))
              : ""}
          </div>
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

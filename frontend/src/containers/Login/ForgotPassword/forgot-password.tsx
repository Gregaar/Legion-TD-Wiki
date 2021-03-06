import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";
import isEmail from "validator/lib/isEmail";

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

interface FormErrors {
  message: string;
}

interface ForgotPasswordProps {
  formErrors: FormErrors[];
  setFormErrors: (
    val: FormErrors[] | ((val: FormErrors[]) => FormErrors[])
  ) => void;
  email: string;
  setEmail: (value: string) => void;
  setForgottenPassword: (value: boolean) => void;
}

const forgotPassword: React.FC<ForgotPasswordProps> = (props) => {
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    email: string
  ) => {
    event.preventDefault();
    if (!isEmail(email)) {
      props.setFormErrors((prevErrors) => [
        {
          message: "Please enter a valid email address",
        },
      ]);
    } else {
      await axios("/api/user/forgottenpassword", {
        method: "POST",
        data: {
          email,
        },
      })
        .then((res) => {
          props.setFormErrors((prevErrors) => [
            {
              message:
                "If the email address exists,\nyou'll receive a password reset link shortly.",
            },
          ]);
          props.setEmail("");
          props.setForgottenPassword(false);
        })
        .catch((error) => {
          props.setFormErrors((prevErrors) => [
            {
              message:
                "If the email address exists,\nyou'll receive a password reset link shortly.",
            },
          ]);
        });
      props.setEmail("");
      props.setForgottenPassword(false);
    }
  };

  return (
    <main>
      <div>
        <Helmet>
          <title>{`Legion TD Mega Wiki | Forgot Password`}</title>
          <meta
            name="description"
            content={`Login to the Wiki. Register. Sign Up. Forgot Password.`}
          />
        </Helmet>
      </div>
      <ContainerDiv>
        <Form onSubmit={(e) => handleSubmit(e, props.email)}>
          <h2 style={{ marginBottom: "1.5rem" }}>Forgotten Password</h2>
          <InputDiv>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
            />
          </InputDiv>
          <ButtonContainer>
            <InputButton type="submit" value="Submit" />
            <Button
              type="button"
              value="Back"
              onClick={() => props.setForgottenPassword(false)}
            >
              Back to Login{" "}
            </Button>
          </ButtonContainer>
        </Form>
      </ContainerDiv>
    </main>
  );
};

export default forgotPassword;

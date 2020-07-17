import React from "react";
import axios from "axios";
import isEmail from "validator/lib/isEmail";
import {
  ContainerDiv,
  Form,
  Input,
  ButtonContainer,
  InputButton,
  Button,
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
                "If the email is exists, a password reset link has been sent.",
            },
          ]);
          props.setEmail("");
          props.setForgottenPassword(false);
        })
        .catch((error) => {
          props.setFormErrors((prevErrors) => [
            {
              message:
                "If the email is exists, a password reset link has been sent.",
            },
          ]);
        });
      props.setEmail("");
      props.setForgottenPassword(false);
    }
  };

  return (
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
  );
};

export default forgotPassword;

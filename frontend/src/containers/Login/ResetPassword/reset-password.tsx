import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import ErrorDisplay from "../../../components/ErrorDisplay/error-display";
import {
  ContainerDiv,
  Form,
  Input,
  InputButton,
  InputDiv,
  Label,
} from "../login-styles";
import resetValidation from "./reset-validation";

const getUserId = (path: string): string => {
  const lastSlash = path.lastIndexOf("/");
  const newPath = path.slice(0, lastSlash);
  const penultimateSlash = newPath.lastIndexOf("/");
  return newPath.slice(penultimateSlash + 1);
};

const getToken = (path: string): string => {
  const lastSlash = path.lastIndexOf("/");
  return path.slice(lastSlash + 1);
};

interface FormErrors {
  message: string;
}

const ResetPassword: React.FC = () => {
  const history = useHistory();
  const token = getToken(history.location.pathname);
  const userId = getUserId(history.location.pathname);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [formErrors, setFormErrors] = useState<FormErrors[]>([]);

  useEffect(() => {
    const checkToken = async () => {
      await axios(`/api/user/resetpassword/${userId}/${token}`)
        .then((res) => {
          return;
        })
        .catch((error) => {
          setFormErrors((prevErrors) => [
            {
              message: "Problem with Password Reset Link.\nPlease try again.",
            },
          ]);
          setTimeout(() => {
            history.push("/login");
          }, 2000);
        });
    };
    checkToken();
  }, [userId, token, history]);

  const handleReset = async (
    event: React.FormEvent<HTMLFormElement>,
    pass: string,
    confirmPass: string
  ) => {
    event.preventDefault();

    const resetErrors = resetValidation(pass, confirmPass, setFormErrors);

    if (resetErrors < 1) {
      await axios("/api/user/handlepasswordreset", {
        method: "POST",
        data: {
          id: userId,
          token,
          password: pass,
        },
        withCredentials: true,
      })
        .then((res) => {
          setFormErrors((prevErrors) => [
            {
              message: "Password has been successfully reset",
            },
          ]);
          setTimeout(() => {
            history.push("/login");
          }, 2000);
        })
        .catch((error) => {
          setFormErrors((prevErrors) => [
            {
              message: error.response.data.message,
            },
          ]);
        });
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
    <main>
      <div>
        <Helmet>
          <title>{`Legion TD Mega Wiki | Reset Password`}</title>
          <meta
            name="description"
            content={`Login to the Wiki. Register. Sign Up. Forgot Password.`}
          />
        </Helmet>
      </div>
      <ContainerDiv>
        {formErrors.length > 0 ? errorDisplay : null}
        <Form onSubmit={(e) => handleReset(e, password, confirmPassword)}>
          <h2 style={{ marginBottom: "1.5rem" }}>Reset Password</h2>
          <Input type="hidden" name="id" value={userId} />
          <Input type="hidden" name="token" value={token} />
          <InputDiv>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputDiv>
          <InputButton type="submit" value="Submit" />
        </Form>
      </ContainerDiv>
    </main>
  );
};

export default ResetPassword;

import React from "react";
import shortid from "shortid";

import {
  BackdropDiv,
  ErrorAdvice,
  ErrorContainer,
  ErrorHeading,
  Modal,
  ModalButton,
} from "./error-display-styles";

interface FormErrors {
  message: string;
}

interface ErrorDisplayProps {
  displayErrors: string | FormErrors[];
  show: boolean;
  clicked: () => void;
  advice?: string;
}

const errorDisplay: React.FC<ErrorDisplayProps> = (props) => (
  <ErrorContainer>
    <BackdropDiv onClick={props.clicked} />
    <Modal show={props.show}>
      {Array.isArray(props.displayErrors) ? (
        props.displayErrors.map((error) => (
          <ErrorHeading key={shortid.generate()}>{error.message}</ErrorHeading>
        ))
      ) : (
        <ErrorHeading>{props.displayErrors}</ErrorHeading>
      )}

      <ErrorAdvice>{props.advice}</ErrorAdvice>
      <ModalButton type="button" name="modalButton" onClick={props.clicked}>
        Ok
      </ModalButton>
    </Modal>
  </ErrorContainer>
);

export default errorDisplay;

import React from "react";
import {
  ErrorContainer,
  BackdropDiv,
  Modal,
  ErrorHeading,
  ErrorAdvice,
  ModalButton,
} from "../filter-styles";

interface ErrorDisplayProps {
  displayErrors: string;
  show: boolean;
  clicked: () => void;
}

const errorDisplay: React.FC<ErrorDisplayProps> = (props) => (
  <ErrorContainer>
    <BackdropDiv onClick={props.clicked} />
    <Modal show={props.show}>
      <ErrorHeading>{props.displayErrors}</ErrorHeading>
      <ErrorAdvice>Lessen your search criteria</ErrorAdvice>
      <ModalButton type="button" name="modalButton" onClick={props.clicked}>
        Ok
      </ModalButton>
    </Modal>
  </ErrorContainer>
);

export default errorDisplay;

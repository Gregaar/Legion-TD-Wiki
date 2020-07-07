import React from "react";
import { ButtonContainer, Button } from "../button-styles";

interface ButtonState {
  all: boolean;
  toTen: boolean;
  toTwenty: boolean;
  toThirty: boolean;
}

interface WaveButtonProps {
  handleWaveClick: (buttonName: string) => void;
  activeButton: ButtonState;
}

const waveButtons: React.FC<WaveButtonProps> = (props) => {
  return (
    <ButtonContainer>
      <Button
        type="button"
        active={props.activeButton.all}
        onClick={() => props.handleWaveClick("all")}
      >
        All
      </Button>
      <Button
        type="button"
        active={props.activeButton.toTen}
        onClick={() => props.handleWaveClick("toTen")}
      >
        1-10
      </Button>
      <Button
        type="button"
        active={props.activeButton.toTwenty}
        onClick={() => props.handleWaveClick("toTwenty")}
      >
        11-20
      </Button>
      <Button
        type="button"
        active={props.activeButton.toThirty}
        onClick={() => props.handleWaveClick("toThirty")}
      >
        21-30
      </Button>
    </ButtonContainer>
  );
};

export default waveButtons;

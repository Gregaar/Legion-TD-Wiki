import React from "react";
import { ButtonContainer, Button } from "../button-styles";

interface SummonButtonsProps {
  activeButton: {
    all: boolean;
    barracks: boolean;
    advanced: boolean;
  };
  buttonClicked: (buttonName: string) => void;
}

const summonButtons: React.FC<SummonButtonsProps> = (props) => {
  return (
    <ButtonContainer>
      <Button
        active={props.activeButton.all}
        type="button"
        onClick={() => props.buttonClicked("all")}
      >
        All
      </Button>
      <Button
        active={props.activeButton.barracks}
        type="button"
        onClick={() => props.buttonClicked("barracks")}
      >
        Barracks
      </Button>
      <Button
        active={props.activeButton.advanced}
        type="button"
        onClick={() => props.buttonClicked("advanced")}
      >
        Advanced Barracks
      </Button>
    </ButtonContainer>
  );
};

export default summonButtons;

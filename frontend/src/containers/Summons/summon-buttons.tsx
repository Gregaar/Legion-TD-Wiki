import React from "react";
import { ButtonContainer, Button } from "./summons-styles";

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
        activeButton={props.activeButton.all}
        type="button"
        onClick={() => props.buttonClicked("all")}
      >
        All
      </Button>
      <Button
        activeButton={props.activeButton.barracks}
        type="button"
        onClick={() => props.buttonClicked("barracks")}
      >
        Barracks
      </Button>
      <Button
        activeButton={props.activeButton.advanced}
        type="button"
        onClick={() => props.buttonClicked("advanced")}
      >
        Advanced Barracks
      </Button>
    </ButtonContainer>
  );
};

export default summonButtons;

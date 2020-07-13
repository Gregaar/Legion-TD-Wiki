import React from "react";

import { Button, ButtonContainer } from "../button-styles";

interface KingButtonsProps {
  activeButton: {
    stats: boolean;
    abilities: boolean;
  };
  buttonClicked: (buttonName: string) => void;
}

const kingButtons: React.FC<KingButtonsProps> = (props) => {
  return (
    <ButtonContainer>
      <Button
        active={props.activeButton.abilities}
        type="button"
        onClick={() => props.buttonClicked("abilities")}
      >
        Abilities
      </Button>
      <Button
        active={props.activeButton.stats}
        type="button"
        onClick={() => props.buttonClicked("stats")}
      >
        Stats
      </Button>
    </ButtonContainer>
  );
};

export default kingButtons;

import React from "react";

import { ArrowButton, ArrowContainer } from "../button-styles";

interface NavButtonProps {
  goToChosen: (path: string) => void;
  path: string;
  currentNumber: number | string;
  maxNumber: number;
  currentBuilder?: string;
}

const builderOrder = [
  { builder: "artic" },
  { builder: "beast" },
  { builder: "demi-human" },
  { builder: "element" },
  { builder: "elf" },
  { builder: "ghost" },
  { builder: "goblin" },
  { builder: "hybrid" },
  { builder: "marine" },
  { builder: "mech" },
  { builder: "nature" },
  { builder: "orc" },
  { builder: "paladin" },
  { builder: "prophet" },
  { builder: "shadow" },
  { builder: "undead" },
];

const navButtons: React.FC<NavButtonProps> = ({
  goToChosen,
  path,
  currentNumber,
  maxNumber,
  currentBuilder,
}) => {
  const builderIndex: number | null =
    path === "builders" && currentBuilder
      ? builderOrder.findIndex((element) => element.builder === currentBuilder)
      : null;

  const handleBuilderArrowClick = (btnName: string): void => {
    if (builderIndex !== null) {
      if (btnName === "back" && builderIndex > 0) {
        console.log("back");
        goToChosen(`/builders/${builderOrder[builderIndex - 1].builder}`);
      } else if (btnName === "next" && maxNumber >= builderIndex) {
        console.log("next");
        goToChosen(`/builders/${builderOrder[builderIndex + 1].builder}`);
      }
    } else {
      return;
    }
  };

  const handleUnitArrowClick = (btnName: string): void => {
    if (btnName === "back") {
      goToChosen(`/units`);
    } else if (btnName === "next") {
      goToChosen(`/builders/${currentBuilder}`);
    } else {
      return;
    }
  };

  const handleArrowClick = (btnName: string): void => {
    if (path === "builders") {
      return handleBuilderArrowClick(btnName);
    } else if (path === "units") {
      return handleUnitArrowClick(btnName);
    } else if (btnName === "back" && +currentNumber > 1) {
      goToChosen(`/${path}/${+currentNumber - 1}`);
    } else if (btnName === "next" && maxNumber >= +currentNumber) {
      goToChosen(`/${path}/${+currentNumber + 1}`);
    } else {
      return;
    }
  };

  return (
    <ArrowContainer>
      <ArrowButton
        type="button"
        onClick={() => handleArrowClick("back")}
        path={path}
        disablePrev={+currentNumber <= 1}
      >
        {path !== "units" ? "❮ Prev" : "❮ Unit Search"}
      </ArrowButton>
      <ArrowButton
        type="button"
        onClick={() => handleArrowClick("next")}
        path={path}
        disableNext={+currentNumber >= maxNumber}
      >
        {path !== "units" ? "Next ❯" : "Unit Builder ❯"}
      </ArrowButton>
    </ArrowContainer>
  );
};

export default navButtons;

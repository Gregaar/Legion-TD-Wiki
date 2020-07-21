import React from "react";
import { Link } from "react-router-dom";

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

  const getBuilderButtonURL = (btnName: string): string => {
    if (builderIndex !== null) {
      if (btnName === "back" && builderIndex > 0) {
        return `/builders/${builderOrder[builderIndex - 1].builder}`;
      } else if (btnName === "next" && maxNumber >= builderIndex) {
        return `/builders/${builderOrder[builderIndex + 1].builder}`;
      } else {
        return "";
      }
    } else {
      return "";
    }
  };

  const getUnitButtonURL = (btnName: string): string => {
    if (btnName === "back") {
      return `/units`;
    } else if (btnName === "next") {
      return `/builders/${currentBuilder}`;
    } else {
      return "";
    }
  };

  const getButtonURL = (btnName: string): string => {
    if (path === "builders") {
      return getBuilderButtonURL(btnName);
    } else if (path === "units") {
      return getUnitButtonURL(btnName);
    } else if (btnName === "back" && +currentNumber > 1) {
      return `/${path}/${+currentNumber - 1}`;
    } else if (btnName === "next" && maxNumber >= +currentNumber) {
      return `/${path}/${+currentNumber + 1}`;
    } else {
      return "";
    }
  };

  const handleArrowClick = (btnName: string): void => {
    const urlPath = getButtonURL(btnName);
    goToChosen(urlPath);
  };

  return (
    <ArrowContainer path={path}>
      <Link to={() => getButtonURL("back")}>
        <ArrowButton
          type="button"
          onClick={() => handleArrowClick("back")}
          path={path}
          disablePrev={+currentNumber <= 1}
        >
          {path !== "units" ? "❮ Prev" : "❮ Unit Search"}
        </ArrowButton>
      </Link>
      <Link to={() => getButtonURL("next")}>
        <ArrowButton
          type="button"
          onClick={() => handleArrowClick("next")}
          path={path}
          disableNext={+currentNumber >= maxNumber}
        >
          {path !== "units" ? "Next ❯" : "Unit Builder ❯"}
        </ArrowButton>
      </Link>
    </ArrowContainer>
  );
};

export default navButtons;

import React from "react";

import { ArrowButton, ArrowContainer } from "../button-styles";

interface NavButtonProps {
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
        return "#";
      }
    } else {
      return "#";
    }
  };

  const getUnitButtonURL = (btnName: string): string => {
    if (btnName === "back") {
      return `/units`;
    } else return `/builders/${currentBuilder}`;
  };

  const getURL = (btnName: string): string => {
    if (path === "builders") {
      return getBuilderButtonURL(btnName);
    } else if (path === "units") {
      return getUnitButtonURL(btnName);
    } else if (btnName === "back" && +currentNumber > 1) {
      return `/${path}/${+currentNumber - 1}`;
    } else if (btnName === "next" && maxNumber > +currentNumber) {
      return `/${path}/${+currentNumber + 1}`;
    } else {
      return "#";
    }
  };

  return (
    <ArrowContainer path={path}>
      <ArrowButton
        to={() => getURL("back")}
        path={path}
        disableprev={+currentNumber <= 1 ? 1 : 0}
      >
        {path !== "units" ? "❮ Prev" : "❮ Unit Search"}
      </ArrowButton>
      <ArrowButton
        to={() => getURL("next")}
        path={path}
        disablenext={+currentNumber >= maxNumber ? 1 : 0}
      >
        {path !== "units" ? "Next ❯" : "Unit Builder ❯"}
      </ArrowButton>
    </ArrowContainer>
  );
};

export default navButtons;

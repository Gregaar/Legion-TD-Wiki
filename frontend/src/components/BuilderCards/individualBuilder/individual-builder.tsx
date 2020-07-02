import React from "react";
import shortid from "shortid";

import { unitNameColor } from "../../../shared/Styles/get-heading-color";
import {
  AbilityGrid,
  AbilityHeading,
  BuilderImage,
  BuilderInfoHeading,
  BuilderName,
  BuilderPanel,
  Paragraph,
} from "./individual-builder-styles";

interface IndividualBuilderProps {
  clicked?: (path: string) => void;
  disableHover?: boolean;
  ID: string;
  name: string;
  description: string;
  heroes: boolean;
  aura: number;
  buff: number;
  debuff: number;
  splash: number;
  heal: number;
  stun: number;
  summon: number;
}

const addArrayIds = (array: [string, number][]): [string, number, string][] => {
  const withID: [string, number, string][] = array.map((ability) => {
    return [...ability, shortid.generate()];
  });
  return withID;
};

const filterOutZeroes = (array: [string, number, string][]) => {
  return array.filter((ability) => {
    return ability[1] > 0;
  });
};

const individualBuilder: React.FC<IndividualBuilderProps> = (props) => {
  const imgurURL = "https://i.imgur.com";
  const abilityArray: [string, number][] = [
    ["auras", props.aura],
    ["buffs", props.buff],
    ["debuffs", props.debuff],
    ["splash", props.splash],
    ["heals", props.heal],
    ["stuns", props.stun],
    ["summons", props.summon],
  ];

  const abilitiesArrayIds = addArrayIds(abilityArray);

  const filteredAbilities = filterOutZeroes(abilitiesArrayIds);

  const builderColor = unitNameColor(props.name);

  const handleBuilderClick = (): void => {
    if (props.clicked) {
      props.clicked(`/builders/${props.name}`);
    } else {
      return;
    }
  };

  return (
    <BuilderPanel>
      <BuilderName
        bgColor={builderColor}
        onClick={handleBuilderClick}
        disableHover={props.disableHover ? 1 : 0}
      >
        {props.name}
      </BuilderName>
      <BuilderImage
        src={`${imgurURL}/${props.ID}.png`}
        alt={`Avatar for the ${props.name} builder.`}
        onClick={handleBuilderClick}
        disableHover={props.disableHover ? 1 : 0}
        bgColor={builderColor}
      />
      <Paragraph>{props.description}</Paragraph>
      <BuilderInfoHeading bgColor={builderColor}>
        Unit Abilities
      </BuilderInfoHeading>
      <AbilityGrid>
        {props.name !== "hybrid" && props.name !== "prophet"
          ? filteredAbilities &&
            filteredAbilities.map((ability) => (
              <React.Fragment key={ability[2]}>
                <AbilityHeading>{ability[0]}</AbilityHeading>
                <Paragraph>{ability[1]}</Paragraph>
              </React.Fragment>
            ))
          : abilitiesArrayIds.map((ability) => (
              <React.Fragment key={ability[2]}>
                <AbilityHeading>{ability[0]}</AbilityHeading>
                <Paragraph>?</Paragraph>
              </React.Fragment>
            ))}
      </AbilityGrid>
    </BuilderPanel>
  );
};

export default individualBuilder;

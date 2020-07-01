import React from "react";
import {
  BuilderPanel,
  BuilderName,
  BuilderImage,
  BuilderInfoHeading,
  AbilityGrid,
  AbilityHeading,
  Paragraph,
} from "./individual-builder-styles";
import { unitNameColor } from "../../../shared/Styles/get-heading-color";

interface IndividualBuilderProps {
  clicked: (path: string) => void;
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

const filterOutZeroes = (array: [string, number][]) => {
  return array.filter((ability) => {
    return ability[1] > 0;
  });
};

const individualBuilder: React.FC<IndividualBuilderProps> = (props) => {
  const imgurURL = "https://i.imgur.com"
  const abilityArray: [string, number][] = [
    ["auras", props.aura],
    ["buffs", props.buff],
    ["debuffs", props.debuff],
    ["splash", props.splash],
    ["heals", props.heal],
    ["stuns", props.stun],
    ["summons", props.summon],
  ];

  const filteredAbilities = filterOutZeroes(abilityArray);

  const builderColor = unitNameColor(props.name);
  const handleBuilderClick = () => {
    props.clicked(`/builders/${props.name}`);
  };

  return (
    <BuilderPanel>
      <BuilderName bgColor={builderColor} onClick={handleBuilderClick}>
        {props.name}
      </BuilderName>
      <BuilderImage
        src={`${imgurURL}/${props.ID}.png`}
        alt={`Avatar for the ${props.name} builder.`}
        onClick={handleBuilderClick}
      />
      <Paragraph>{props.description}</Paragraph>
      <BuilderInfoHeading bgColor={builderColor}>
        Units Abilities
      </BuilderInfoHeading>
      <AbilityGrid>
        {props.name !== "hybrid" && props.name !== "prophet"
          ? filteredAbilities &&
            filteredAbilities.map((ability) => (
              <>
                <AbilityHeading>
                  {ability[0]}
                </AbilityHeading>
                <Paragraph>{ability[1]}</Paragraph>
              </>
            ))
          : abilityArray.map((ability) => (
              <>
                <AbilityHeading>
                  {ability[0]}
                </AbilityHeading>
                <Paragraph>?</Paragraph>
              </>
            ))}
      </AbilityGrid>
    </BuilderPanel>
  );
};

export default individualBuilder;

// filter out the abilities that have zeroes cos we don't care about them

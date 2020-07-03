import React from "react";
import shortid from "shortid";

import { unitNameColor } from "../../../../shared/Styles/get-heading-color";
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

interface BuilderAbilities {
  title: string;
  value: number;
  key: string;
}

const filterOutZeroes = (array: BuilderAbilities[]) => {
  return array.filter((ability) => {
    return ability.value > 0;
  });
};

const individualBuilder: React.FC<IndividualBuilderProps> = (props) => {
  const imgurURL = "https://i.imgur.com";

  const abilityArray: BuilderAbilities[] = [
    { title: "auras", value: props.aura, key: shortid.generate() },
    { title: "buffs", value: props.buff, key: shortid.generate() },
    { title: "debuffs", value: props.debuff, key: shortid.generate() },
    { title: "splash", value: props.splash, key: shortid.generate() },
    { title: "heals", value: props.heal, key: shortid.generate() },
    { title: "stuns", value: props.stun, key: shortid.generate() },
    { title: "summons", value: props.summon, key: shortid.generate() },
  ];

  const filteredAbilities = filterOutZeroes(abilityArray);

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
              <React.Fragment key={ability.key}>
                <AbilityHeading>{ability.title}</AbilityHeading>
                <Paragraph>{ability.value}</Paragraph>
              </React.Fragment>
            ))
          : abilityArray &&
            abilityArray.map((ability) => (
              <React.Fragment key={ability.key}>
                <AbilityHeading>{ability.title}</AbilityHeading>
                <Paragraph>?</Paragraph>
              </React.Fragment>
            ))}
      </AbilityGrid>
    </BuilderPanel>
  );
};

export default individualBuilder;

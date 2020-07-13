import React from "react";
import shortid from "shortid";
import SummonInterface from "../../../shared/Interfaces/summon-interface";
import UnitInterface from "../../../shared/Interfaces/unit-interface";
import KingAbilityInterface from "../../../shared/Interfaces/king-ability-interface";
import { getAbilityIcon } from "../../../shared/Services/get-icons";
import { abilityColor } from "../../../shared/Styles/get-heading-color";
import {
  AbilityGrid,
  AbilityImage,
  AbilityInfoHeading,
  AbilityName,
  AbilityPanel,
  AbilityText,
  DescContainer,
} from "./ability-card-styles";

type Unit = UnitInterface | KingAbilityInterface | SummonInterface;

interface AbilityCardProps {
  unit: Unit;
  king?: boolean;
}

const abilityCard: React.FC<AbilityCardProps> = ({ unit, king }) => {
  const imgurURL = "https://i.imgur.com";
  const abilityInfo = [];
  if (unit.Abilities && unit["Ability Type"] && unit["Ability Description"]) {
    for (let i = 0; i < unit.Abilities.length; i++) {
      abilityInfo.push({
        name: unit.Abilities[i],
        type: unit["Ability Type"][i],
        description: unit["Ability Description"][i],
        key: shortid.generate(),
      });
    }
  }

  return (
    <AbilityGrid abilityCount={abilityInfo.length} king={king}>
      {abilityInfo
        ? abilityInfo.map((ability) => (
            <AbilityPanel
              key={ability.key}
              abilityCount={abilityInfo.length}
              king={king}
            >
              <AbilityName bgColor={abilityColor(ability.type)}>
                Ability: {ability.name}
              </AbilityName>
              <AbilityImage
                src={
                  unit.Builder === "king"
                    ? `${imgurURL}/${unit.ID}.png`
                    : getAbilityIcon(unit.Builder, ability.name)
                }
                alt={`The avatar for the ${ability.name} ability`}
              />
              <AbilityInfoHeading>Ability Type</AbilityInfoHeading>
              <AbilityText capitalize={1}>{ability.type}</AbilityText>
              <AbilityInfoHeading>Description</AbilityInfoHeading>
              <DescContainer>
                <AbilityText>{ability.description}</AbilityText>
                <br />
              </DescContainer>
            </AbilityPanel>
          ))
        : null}
    </AbilityGrid>
  );
};

export default abilityCard;

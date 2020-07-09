import React from "react";

import SummonInterface from "../../../shared/Interfaces/summon-interface";
import UnitInterface from "../../../shared/Interfaces/unit-interface";
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

interface AbilityCardProps {
  unit: UnitInterface | SummonInterface;
}

const abilityCard: React.FC<AbilityCardProps> = ({ unit }) => {
  const abilityInfo = [];
  if (unit.Abilities && unit["Ability Type"] && unit["Ability Description"]) {
    for (let i = 0; i < unit.Abilities.length; i++) {
      abilityInfo.push({
        name: unit.Abilities[i],
        type: unit["Ability Type"][i],
        description: unit["Ability Description"][i],
      });
    }
  }

  return (
    <AbilityGrid abilityCount={abilityInfo.length}>
      {abilityInfo
        ? abilityInfo.map((ability) => (
            <AbilityPanel key={ability.name} abilityCount={abilityInfo.length}>
              <AbilityName bgColor={abilityColor(ability.type)}>
                Ability: {ability.name}
              </AbilityName>
              <AbilityImage
                src={getAbilityIcon(unit.Builder, ability.name)}
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

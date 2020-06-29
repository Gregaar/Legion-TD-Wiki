import React from "react";

import abilityAvatar from "../../assets/ability-avatar.png";
import UnitInterface from "../../shared/Interfaces/unit-interface";
import {
  AbilityGrid,
  AbilityImage,
  AbilityInfoHeading,
  AbilityName,
  AbilityPanel,
  AbilityText,
  DescContainer,
} from "./unit-abilities-styles";

interface UnitAbilitiesProps {
  unit: UnitInterface;
}

const unitAbilities: React.FC<UnitAbilitiesProps> = ({ unit }) => {
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
            <AbilityPanel key={ability.name}>
              <AbilityName>Ability: {ability.name}</AbilityName>
              <AbilityImage
                src={abilityAvatar}
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

export default unitAbilities;

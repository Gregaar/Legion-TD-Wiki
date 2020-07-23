import React from "react";
import shortid from "shortid";

import { InfoGrid, InfoHeading } from "../../card-styles";

interface AbilityInfoProps {
  abilities: string[] | null;
  abilityTypes: string[] | null;
  isOpen: boolean;
  disableAnimation?: boolean;
}

interface AbilityData {
  name: string;
  type: string;
  key: string;
}

const abilityInfo: React.FC<AbilityInfoProps> = (props) => {
  let abilityData: AbilityData[] = [];

  if (props.abilities && props.abilityTypes) {
    for (let i = 0; i < props.abilities.length; i++) {
      abilityData.push({
        name: props.abilities[i],
        type: props.abilityTypes[i],
        key: shortid.generate(),
      });
    }
  }

  return (
    <InfoGrid
      isOpen={props.isOpen}
      disableAnimation={props.disableAnimation ? 1 : 0}
    >
      {abilityData.length >= 1 ? (
        abilityData.map((ability) => (
          <React.Fragment key={ability.key}>
            <InfoHeading>{ability.name}</InfoHeading>
            <p>{ability.type}</p>
          </React.Fragment>
        ))
      ) : (
        <>
          <InfoHeading>No Ability</InfoHeading>
          <p>-</p>
        </>
      )}
    </InfoGrid>
  );
};

export default abilityInfo;

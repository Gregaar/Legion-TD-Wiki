import React from "react";

import { InfoGrid, InfoHeading, NavParagraph } from "../../card-styles";

interface BuildingInfoProps {
  tier: number;
  foodCost: number;
  goldCost: number;
  builder: string;
  disableInfoNav?: boolean;
  isOpen?: boolean;
  clicked: (path: string) => void;
}

const buildingInfo: React.FC<BuildingInfoProps> = (props) => {
  const handleBuilderClick = (builder: string): void => {
    if (props.disableInfoNav) {
      return;
    } else {
      props.clicked(`/builders/${builder}`);
    }
  };

  return (
    <InfoGrid
      isOpen={props.isOpen}
      disableAnimation={props.disableInfoNav ? 1 : 0}
    >
      <InfoHeading>Builder</InfoHeading>
      <NavParagraph
        onClick={() => handleBuilderClick(props.builder)}
        disableInfoNav={props.disableInfoNav ? 1 : 0}
      >
        {props.builder}
      </NavParagraph>
      <InfoHeading>Unit Tier</InfoHeading>
      <p>{props.tier}</p>
      <InfoHeading>Gold Cost</InfoHeading>
      <p>{props.goldCost}</p>
      <InfoHeading>Food Cost</InfoHeading>
      <p>{props.foodCost}</p>
    </InfoGrid>
  );
};

export default buildingInfo;
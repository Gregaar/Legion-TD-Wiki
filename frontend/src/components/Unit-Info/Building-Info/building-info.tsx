import React from "react";

import { InfoHeading, NavParagraph } from "../unit-info-styles";

interface BuildingInfoProps {
  tier: number;
  foodCost: number;
  goldCost: number;
  builder: string;
  clicked: (path: string) => void;
}

const buildingInfo: React.FC<BuildingInfoProps> = (props) => {
  const handleBuilderClick = (builder: string): void => {
    props.clicked(`/builders/${builder}`);
  };

  return (
    <React.Fragment>
      <InfoHeading>Tier</InfoHeading>
      <p>{props.tier}</p>
      <InfoHeading>Food Cost</InfoHeading>
      <p>{props.foodCost}</p>
      <InfoHeading>Gold Cost</InfoHeading>
      <p>{props.goldCost}</p>
      <InfoHeading>Builder</InfoHeading>
      <NavParagraph onClick={() => handleBuilderClick(props.builder)}>
        {props.builder}
      </NavParagraph>
    </React.Fragment>
  );
};

export default buildingInfo;

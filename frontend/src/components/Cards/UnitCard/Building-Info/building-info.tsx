import React from "react";

import {
  InfoGrid,
  InfoHeading,
  NavParagraph,
  StyledLink,
} from "../../card-styles";

interface BuildingInfoProps {
  tier: number;
  foodCost: number;
  goldCost: number;
  builder: string;
  disableInfoNav?: boolean;
  isOpen?: boolean;
}

const buildingInfo: React.FC<BuildingInfoProps> = (props) => {
  const cardWithNav = (
    <StyledLink to={`/builders/${props.builder}`}>
      <NavParagraph disableInfoNav={props.disableInfoNav ? 1 : 0}>
        {props.builder}
      </NavParagraph>
    </StyledLink>
  );

  return (
    <InfoGrid
      isOpen={props.isOpen}
      disableAnimation={props.disableInfoNav ? 1 : 0}
    >
      <InfoHeading>Builder</InfoHeading>
      {!props.disableInfoNav ? (
        cardWithNav
      ) : (
        <NavParagraph disableInfoNav={props.disableInfoNav ? 1 : 0}>
          {props.builder}
        </NavParagraph>
      )}
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

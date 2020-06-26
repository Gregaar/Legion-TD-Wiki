import React from "react";

import { InfoHeading } from "../unit-info-styles";

interface CombatInfoProps {
  minDamage: number;
  maxDamage: number;
  health: number;
  range: string | null;
  attackType: string | null;
  attackSpeed: string | null;
  defenseType: string | null;
}

const combatInfo: React.FC<CombatInfoProps> = (props) => {
  return (
    <React.Fragment>
      <InfoHeading>Range</InfoHeading>
      <p>{props.range}</p>
      <InfoHeading>Damage</InfoHeading>
      <p>
        {props.minDamage} - {props.maxDamage}
      </p>
      <InfoHeading>Hit Points</InfoHeading>
      <p>{props.health}</p>
      <InfoHeading>Attack Speed</InfoHeading>
      <p>{props.attackSpeed}</p>
      <InfoHeading>Attack Type</InfoHeading>
      <p>{props.attackType}</p>
      <InfoHeading>Defense Type</InfoHeading>
      <p>{props.defenseType}</p>
    </React.Fragment>
  );
};

export default combatInfo;

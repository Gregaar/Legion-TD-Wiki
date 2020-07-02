import React from "react";

import { InfoHeading } from "../../card-styles";

interface CombatInfoProps {
  minDamage: number;
  maxDamage: number;
  health: number;
  range: number;
  rangeClass: string | null;
  mana: number;
  attackClass: string | null;
  attackSpeed: number;
}

const combatInfo: React.FC<CombatInfoProps> = (props) => {
  return (
    <React.Fragment>
      <InfoHeading>Hit Points</InfoHeading>
      <p>{props.health}</p>
      <InfoHeading>Mana</InfoHeading>
      <p>{props.mana}</p>
      <InfoHeading>Damage</InfoHeading>
      <p>
        {props.minDamage} - {props.maxDamage}
      </p>
      <InfoHeading>Range</InfoHeading>
      <p>
        {props.rangeClass} ({props.range})
      </p>
      <InfoHeading>Attack Speed</InfoHeading>
      <p>
        {props.attackClass} ({props.attackSpeed})
      </p>
    </React.Fragment>
  );
};

export default combatInfo;

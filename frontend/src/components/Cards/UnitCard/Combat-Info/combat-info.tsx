import React from "react";
import shortid from "shortid";

import { InfoGrid, InfoHeading } from "../../card-styles";

interface CombatInfoProps {
  minDamage: number;
  maxDamage: number;
  health: number;
  range: number;
  rangeClass: string | null;
  mana: number;
  attackClass: string | null;
  attackSpeed: number;
  isOpen: boolean;
  disableAnimation?: boolean;
  showAtkDef?: boolean;
}

const combatInfo: React.FC<CombatInfoProps> = (props) => {
  const combatData = [
    { title: "Hit Points", value: props.health, key: shortid.generate() },
    { title: "Mana", value: props.mana, key: shortid.generate() },
    {
      title: "Damage",
      value: `${props.minDamage} - ${props.maxDamage}`,
      key: shortid.generate(),
    },
    {
      title: "Range",
      value: `${props.rangeClass} (${props.range})`,
      key: shortid.generate(),
    },
    {
      title: "Attack Speed",
      value: `${props.attackClass} (${props.attackSpeed})`,
      key: shortid.generate(),
    },
  ];

  return (
    <InfoGrid
      isOpen={props.isOpen}
      disableAnimation={props.disableAnimation ? 1 : 0}
    >
      {combatData &&
        combatData.map((data) => (
          <React.Fragment key={data.key}>
            <InfoHeading>{data.title}</InfoHeading>
            <p>{data.value}</p>
          </React.Fragment>
        ))}
    </InfoGrid>
  );
};

export default combatInfo;

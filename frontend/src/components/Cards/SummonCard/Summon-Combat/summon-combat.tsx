import React from "react";
import shortid from "shortid";

import { InfoGrid, InfoHeading } from "../../card-styles";

interface SummonCombatProps {
  minHit: number;
  maxHit: number;
  attackSpeed: number;
  attackSpeedClass: string;
  hitPoints: number;
  range: number;
  rangeClass: string;
  mana: number;
  disableAnimation?: number;
  isOpen: boolean;
}

const summonCombat: React.FC<SummonCombatProps> = (props) => {
  const summonCombatArray = [
    { title: "Hit Points", value: props.hitPoints, key: shortid.generate() },
    { title: "Mana", value: props.mana, key: shortid.generate() },
    {
      title: "Damage",
      value: `${props.minHit} - ${props.maxHit}`,
      key: shortid.generate(),
    },
    {
      title: "Range",
      value: `${props.rangeClass} (${props.range})`,
      key: shortid.generate(),
    },
    {
      title: "Attack Speed",
      value: `${props.attackSpeedClass} (${props.attackSpeed})`,
      key: shortid.generate(),
    },
  ];

  return (
    <InfoGrid disableAnimation={props.disableAnimation} isOpen={props.isOpen}>
      {summonCombatArray &&
        summonCombatArray.map((combatInfo) => (
          <React.Fragment key={combatInfo.key}>
            <InfoHeading>{combatInfo.title}</InfoHeading>
            <p>{combatInfo.value}</p>
          </React.Fragment>
        ))}
    </InfoGrid>
  );
};

export default summonCombat;

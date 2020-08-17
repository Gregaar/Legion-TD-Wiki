import React from "react";
import shortid from "shortid";

import { InfoGrid, InfoHeading } from "../../card-styles";

interface WaveCombatProps {
  hitPoints: number;
  minHit: number;
  maxHit: number;
  range: string;
  isOpen?: boolean;
}

const waveCombat: React.FC<WaveCombatProps> = (props) => {
  const waveCombatData = [
    { title: "Hit Points", value: props.hitPoints, key: shortid.generate() },
    {
      title: "Damage",
      value: `${props.minHit} - ${props.maxHit}`,
      key: shortid.generate(),
    },
    { title: "Range", value: props.range, key: shortid.generate() },
  ];

  return (
    <InfoGrid isOpen={props.isOpen}>
      {waveCombatData &&
        waveCombatData.map((wave) => (
          <React.Fragment key={wave.key}>
            <InfoHeading>{wave.title}</InfoHeading>
            <p>{wave.value}</p>
          </React.Fragment>
        ))}
    </InfoGrid>
  );
};

export default waveCombat;

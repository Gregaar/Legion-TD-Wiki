import React from "react";
import shortid from "shortid";

import { InfoGrid, InfoHeading } from "../../card-styles";

interface WaveGoldProps {
  creepBounty: number;
  totalCreepGold: number;
  bonusGold: number;
  creepValue: number;
  isOpen?: boolean;
}

const waveGold: React.FC<WaveGoldProps> = (props) => {
  const waveResourceData = [
    {
      title: "Gold Per Creep",
      value: props.creepBounty,
      key: shortid.generate(),
    },
    {
      title: "Total Creep Gold",
      value: props.totalCreepGold,
      key: shortid.generate(),
    },
    { title: "Bonus Gold", value: props.bonusGold, key: shortid.generate() },
    {
      title: "Wave Value",
      value: props.creepValue,
      key: shortid.generate(),
    },
  ];

  return (
    <InfoGrid isOpen={props.isOpen}>
      {waveResourceData &&
        waveResourceData.map((wave) => (
          <React.Fragment key={wave.key}>
            <InfoHeading>{wave.title}</InfoHeading>
            <p>{wave.value}</p>
          </React.Fragment>
        ))}
    </InfoGrid>
  );
};

export default waveGold;

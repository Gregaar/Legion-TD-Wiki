import React from "react";
import shortid from "shortid";

import { InfoGrid, InfoHeading } from "../../card-styles";

interface WaveOtherProps {
  landOrFlying: string;
  bossWave: boolean;
  isOpen?: boolean;
}

const waveOther: React.FC<WaveOtherProps> = (props) => {
  const waveOtherData = [
    {
      title: "Land Or Flying",
      value: props.landOrFlying,
      key: shortid.generate(),
    },
    {
      title: "Boss Wave",
      value: props.bossWave ? "Yes" : "No",
      key: shortid.generate(),
    },
  ];

  return (
    <InfoGrid isOpen={props.isOpen}>
      {waveOtherData &&
        waveOtherData.map((wave) => (
          <React.Fragment key={wave.key}>
            <InfoHeading>{wave.title}</InfoHeading>
            <p>{wave.value}</p>
          </React.Fragment>
        ))}
    </InfoGrid>
  );
};

export default waveOther;

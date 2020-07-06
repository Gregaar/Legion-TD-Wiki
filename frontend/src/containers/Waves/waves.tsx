import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import WaveInterface from "../../shared/Interfaces/wave-interface";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";
import WaveCard from "./wave-card";
import { WavesContainer } from "./waves-styles";

const Waves: React.FC = () => {
  const [enemyWaves, setEnemyWaves] = useState<WaveInterface[]>([]);
  const history = useHistory();

  useEffect(() => {
    const getWaves = async () => {
      await axios(`/api/wave/name/any`)
        .then((res) => {
          setEnemyWaves((prevWaves) => [...res.data.waves]);
          return;
        })
        .catch((error) => {
          return error.response;
        });
    };
    getWaves();
  }, []);

  let wavesCardDisplay;

  if (enemyWaves.length > 1) {
    const wavesCopy = [...enemyWaves];
    wavesCardDisplay = wavesCopy.map((wave) => (
      <WaveCard wave={wave} goToClicked={history.push} enableHover={true} />
    ));
  }

  return (
    <BackgroundDiv height="100%">
      <WavesContainer>
        {enemyWaves.length > 1 ? wavesCardDisplay : null}
      </WavesContainer>
    </BackgroundDiv>
  );
};

export default Waves;

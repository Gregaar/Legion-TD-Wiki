import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import shortid from "shortid";
import WaveInterface from "../../shared/Interfaces/wave-interface";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";
import WaveCard from "./wave-card";
import WaveButtons from "./wave-buttons";
import handleWavePagination from "./handle-wave-pagination";
import { WavesContainer } from "./waves-styles";

interface ButtonState {
  all: boolean;
  toTen: boolean;
  toTwenty: boolean;
  toThirty: boolean;
}

const defaultButtonState = {
  all: false,
  toTen: true,
  toTwenty: false,
  toThirty: false,
};

const Waves: React.FC = () => {
  const [wavePage, setWavePage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [activeButton, setActiveButton] = useState<ButtonState>(
    defaultButtonState
  );
  const [enemyWaves, setEnemyWaves] = useState<WaveInterface[]>([]);
  const history = useHistory();

  useEffect(() => {
    const getWaves = async () => {
      await axios(`/api/wave/all?page=${wavePage}&limit=${limit}`)
        .then((res) => {
          setEnemyWaves((prevWaves) => [...res.data.waves.results]);
          return;
        })
        .catch((error) => {
          return error.response;
        });
    };
    getWaves();
  }, [wavePage, limit]);

  const handleWaveClick = (buttonName: string): void => {
    handleWavePagination(buttonName, setWavePage, setLimit, setActiveButton);
    return;
  };

  let wavesCardDisplay;

  if (enemyWaves.length > 1) {
    const wavesCopy = [...enemyWaves];
    wavesCardDisplay = wavesCopy.map((wave) => (
      <WaveCard
        key={shortid.generate()}
        wave={wave}
        goToClicked={history.push}
        enableHover={true}
      />
    ));
  }

  return (
    <BackgroundDiv height="100%">
      <WaveButtons
        activeButton={activeButton}
        handleWaveClick={handleWaveClick}
      />
      <WavesContainer>
        {enemyWaves.length > 1 ? wavesCardDisplay : null}
      </WavesContainer>
    </BackgroundDiv>
  );
};

export default Waves;

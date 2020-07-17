import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import shortid from "shortid";

import WaveButtons from "../../components/Navigation/UI/Buttons/WaveButtons/wave-buttons";
import WaveInterface from "../../shared/Interfaces/wave-interface";
import {
  MainHeading,
  P,
  TextContainer,
} from "../../shared/Styles/shared-styles";
import handleWavePagination from "./handle-wave-pagination";
import WaveCard from "./wave-card";
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
    <React.Fragment>
      <MainHeading>Waves</MainHeading>
      <TextContainer>
        <P>
          The main objective of the game is to defend your king by defeating
          each wave of enemies.
        </P>
        <P>
          In total, there are 31 waves, with a Boss wave every 10 levels and an
          endless wave after level 30.
        </P>
        <P>Each wave gets increasingly harder as the game continues.</P>
      </TextContainer>
      <WaveButtons
        activeButton={activeButton}
        handleWaveClick={handleWaveClick}
      />
      <WavesContainer>
        {enemyWaves.length > 1 ? wavesCardDisplay : null}
      </WavesContainer>
    </React.Fragment>
  );
};

export default Waves;

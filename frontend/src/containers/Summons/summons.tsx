import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SummonInterface from "../../shared/Interfaces/summon-interface";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";
import { SummonsContainer } from "./summons-styles";
import SummonCard from "../../components/UnitCard/SummonCard/summon-card";

const Summons: React.FC = () => {
  const [storedSummons, setStoredSummons] = useState<SummonInterface[]>([]);
  const history = useHistory();

  useEffect(() => {
    const getSummons = async () => {
      await axios(`/api/summon/name/any`)
        .then((res) => {
          setStoredSummons((prevSummons) => [...res.data.summon]);
        })
        .catch((error) => {
          return error;
        });
    };
    getSummons();
  }, []);

  let summonDisplay;

  if (storedSummons.length > 0) {
    const summonCopy = [...storedSummons];
    summonDisplay = summonCopy.map((sum) => (
      <SummonCard summon={sum} enableHover={1} goToClicked={history.push} />
    ));
  }

  return (
    <BackgroundDiv height="100%">
      <SummonsContainer>
        {summonDisplay ? summonDisplay : null}
      </SummonsContainer>
    </BackgroundDiv>
  );
};

export default Summons;

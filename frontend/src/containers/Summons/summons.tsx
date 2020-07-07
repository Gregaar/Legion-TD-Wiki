import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import handleSummonPagination from "./handle-summon-pagination";
import SummonInterface from "../../shared/Interfaces/summon-interface";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";
import SummonCard from "./summon-card";
import SummonButtons from "./summon-buttons";
import { SummonsContainer } from "./summons-styles";

interface ActiveButton {
  all: boolean;
  barracks: boolean;
  advanced: boolean;
}

const defaultButtonState = {
  all: false,
  barracks: true,
  advanced: false,
};

const advancedButtonState = {
  all: false,
  barracks: false,
  advanced: true,
};

const Summons: React.FC = () => {
  const history = useHistory();

  const buttonState = history.location.state
    ? advancedButtonState
    : defaultButtonState;

  const [storedSummons, setStoredSummons] = useState<SummonInterface[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(
    !history.location.state ? 1 : 2
  );
  const [limit, setLimit] = useState<number>(12);
  const [activeButton, setActiveButton] = useState<ActiveButton>(buttonState);

  useEffect(() => {
    const getSummons = async () => {
      await axios(`/api/summon/all?page=${pageNumber}&limit=${limit}`)
        .then((res) => {
          setStoredSummons((prevSummons) => [...res.data.summon.results]);
        })
        .catch((error) => {
          return error;
        });
    };
    getSummons();
  }, [pageNumber, limit]);

  const handleButtonClick = (buttonName: string): void => {
    handleSummonPagination(
      buttonName,
      setPageNumber,
      setLimit,
      setActiveButton
    );
    return;
  };

  let summonDisplay;

  if (storedSummons.length > 0) {
    const summonCopy = [...storedSummons];
    summonDisplay = summonCopy.map((sum) => (
      <SummonCard
        key={sum.ID}
        summon={sum}
        enableHover={1}
        goToClicked={history.push}
      />
    ));
  }

  return (
    <BackgroundDiv height="100%">
      <SummonButtons
        activeButton={activeButton}
        buttonClicked={handleButtonClick}
      />
      <SummonsContainer>
        {summonDisplay ? summonDisplay : null}
      </SummonsContainer>
    </BackgroundDiv>
  );
};

export default Summons;

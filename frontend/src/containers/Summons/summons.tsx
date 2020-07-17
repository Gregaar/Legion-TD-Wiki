import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import SummonButtons from "../../components/Navigation/UI/Buttons/SummonButtons/summon-buttons";
import SummonInterface from "../../shared/Interfaces/summon-interface";
import {
  MainHeading,
  TextContainer,
  P,
} from "../../shared/Styles/shared-styles";
import handleSummonPagination from "./handle-summon-pagination";
import SummonCard from "./summon-card";
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
      activeButton,
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
    <React.Fragment>
      <MainHeading>Summons</MainHeading>
      <TextContainer>
        <P>
          To hinder the enemy team or boost your own income, each player can
          send Summons.
        </P>
        <P>
          Summons are units that are sent along with the next wave to attack
          your opponents at random.
        </P>
        <P>
          Each Summon has their own unique stats and some even have abilities.
        </P>
        <P>
          Summons can be sent from two locations: Barracks or Advanced Barracks.
        </P>
      </TextContainer>
      <SummonButtons
        activeButton={activeButton}
        buttonClicked={handleButtonClick}
      />
      <SummonsContainer>
        {summonDisplay ? summonDisplay : null}
      </SummonsContainer>
    </React.Fragment>
  );
};

export default Summons;

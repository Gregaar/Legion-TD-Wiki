import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import AbilityCard from "../../components/Cards/AbilityCard/ability-card";
import CombatCard from "../../components/Cards/CombatCard/combat-card";
import NavButtons from "../../components/UI/Buttons/NavButtons/nav-buttons";
import SummonInterface from "../../shared/Interfaces/summon-interface";
import UnitInterface from "../../shared/Interfaces/unit-interface";
import WaveInterface from "../../shared/Interfaces/wave-interface";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";
import SummonCard from "../Summons/summon-card";
import UnitCard from "../Units/UnitCard/unit-card";
import WaveCard from "../Waves/wave-card";
import { ContainerDiv } from "./individual-unit-styles";

const sanitizeUnitName = (path: string): string => {
  const lastSlashIndex = path.lastIndexOf("/");
  const unitWithDashes = path.slice(lastSlashIndex + 1);
  return unitWithDashes.replace(/-/gm, " ");
};

type Unit = UnitInterface & SummonInterface & WaveInterface;

const IndividualUnit: React.FC = () => {
  const [currentUnit, setCurrentUnit] = useState<Unit>({} as Unit);
  const history = useHistory();
  const currentLocation = useLocation();
  const isSummonUnit = currentLocation.pathname.includes("summons");
  const isWaveUnit = currentLocation.pathname.includes("waves");
  const unitName = sanitizeUnitName(currentLocation.pathname);

  useEffect(() => {
    const getUnit = async () => {
      await axios(`/api/unit/name/${unitName}`)
        .then((res) => {
          setCurrentUnit((prevUnit) => res.data.units);
          return;
        })
        .catch((error) => {
          //maybe push to somekind of 404 or modal to say unit not found?
          history.push("/units");
          return;
        });
    };
    const getSummon = async () => {
      await axios(`/api/summon/order/${unitName}`)
        .then((res) => {
          setCurrentUnit((prevSummon) => res.data.summon);
          return;
        })
        .catch((error) => {
          history.push("/summons");
          return;
        });
    };
    const getWave = async () => {
      // figure out way to get order number to use it here!
      await axios(`/api/wave/level/${unitName}`)
        .then((res) => {
          setCurrentUnit((prevWave) => res.data.waves);
          return;
        })
        .catch((error) => {
          history.push("/waves");
          return;
        });
    };
    if (isSummonUnit) {
      getSummon();
    } else if (isWaveUnit) {
      getWave();
    } else {
      getUnit();
    }
  }, [unitName, isSummonUnit, isWaveUnit, history]);

  let unitToDisplay;

  if (currentUnit) {
    const copiedUnit = { ...currentUnit };
    unitToDisplay = (
      <React.Fragment key={copiedUnit.ID}>
        {isSummonUnit ? (
          <SummonCard
            summon={currentUnit}
            goToClicked={history.push}
            enableHover={0}
          />
        ) : isWaveUnit ? (
          <WaveCard
            wave={currentUnit}
            goToClicked={history.push}
            enableHover={false}
          />
        ) : (
          <UnitCard unit={copiedUnit} goToClicked={history.push} />
        )}

        {copiedUnit["Attack Type"] !== null ? (
          <CombatCard unit={copiedUnit} />
        ) : null}

        {copiedUnit.Abilities !== null && copiedUnit.Abilities !== undefined ? (
          <AbilityCard unit={copiedUnit} />
        ) : null}
      </React.Fragment>
    );
  }

  return (
    <BackgroundDiv height="115vh">
      {isWaveUnit ? (
        <NavButtons
          goToChosen={history.push}
          path={"waves"}
          currentNumber={unitName}
          maxNumber={31}
        />
      ) : isSummonUnit ? (
        <NavButtons
          goToChosen={history.push}
          path={"summons"}
          currentNumber={unitName}
          maxNumber={24}
        />
      ) : null}
      <ContainerDiv>{currentUnit ? unitToDisplay : null}</ContainerDiv>
    </BackgroundDiv>
  );
};

export default IndividualUnit;

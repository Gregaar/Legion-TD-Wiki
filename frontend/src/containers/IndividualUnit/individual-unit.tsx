import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";

import AbilityCard from "../../components/Cards/AbilityCard/ability-card";
import CombatCard from "../../components/Cards/CombatCard/combat-card";
import NavButtons from "../../components/Navigation/UI/Buttons/NavButtons/nav-buttons";
import SummonInterface from "../../shared/Interfaces/summon-interface";
import UnitInterface from "../../shared/Interfaces/unit-interface";
import WaveInterface from "../../shared/Interfaces/wave-interface";
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
  const history = useHistory();
  const currentLocation = useLocation();
  const isSummonUnit = currentLocation.pathname.includes("summons");
  const isWaveUnit = currentLocation.pathname.includes("waves");
  const unitName = sanitizeUnitName(currentLocation.pathname);
  const [currentUnit, setCurrentUnit] = useState<Unit>({} as Unit);

  useEffect(() => {
    const getUnit = async () => {
      await axios(`/api/unit/name/${unitName}`)
        .then((res) => {
          setCurrentUnit((prevUnit) => res.data.units);
          return;
        })
        .catch((error) => {
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

  const navButtons = isWaveUnit ? (
    <NavButtons path={"waves"} currentNumber={unitName} maxNumber={31} />
  ) : isSummonUnit ? (
    <NavButtons path={"summons"} currentNumber={unitName} maxNumber={24} />
  ) : (
    <NavButtons
      path={"units"}
      currentNumber={2}
      maxNumber={100}
      currentBuilder={currentUnit.Builder}
    />
  );

  return (
    <React.Fragment>
      <div>
        <Helmet>
          <title>{`Legion TD Mega Wiki | ${
            Object.keys(currentUnit).length > 0
              ? isWaveUnit
                ? currentUnit["Creep Name"].charAt(0).toUpperCase() +
                  currentUnit["Creep Name"].slice(1)
                : currentUnit.Name.charAt(0).toUpperCase() +
                  currentUnit.Name.slice(1)
              : "Unit"
          }`}</title>
          <meta
            name="description"
            content={`${
              Object.keys(currentUnit).length > 0
                ? isWaveUnit
                  ? currentUnit["Creep Name"].charAt(0).toUpperCase() +
                    currentUnit["Creep Name"].slice(1)
                  : currentUnit.Name.charAt(0).toUpperCase() +
                    currentUnit.Name.slice(1)
                : "Unit"
            }. Abilities. Gold Cost. Food Cost. Upgraded Unit. Base Unit. Combat Stats. Range. Attack Type. Defence Type.`}
          />
        </Helmet>
      </div>
      {navButtons}
      <main>
        <ContainerDiv>{currentUnit ? unitToDisplay : null}</ContainerDiv>
      </main>
    </React.Fragment>
  );
};

export default IndividualUnit;

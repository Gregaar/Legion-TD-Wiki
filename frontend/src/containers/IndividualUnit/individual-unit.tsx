import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import AbilityCard from "../../components/Cards/AbilityCard/ability-card";
import CombatCard from "../../components/Cards/CombatCard/combat-card";
import SummonInterface from "../../shared/Interfaces/summon-interface";
import UnitInterface from "../../shared/Interfaces/unit-interface";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";
import SummonCard from "../Summons/summon-card";
import UnitCard from "../UnitCard/unit-card";
import { ContainerDiv } from "./individual-unit-styles";

const sanitizeUnitName = (path: string): string => {
  const lastSlashIndex = path.lastIndexOf("/");
  const unitWithDashes = path.slice(lastSlashIndex + 1);
  return unitWithDashes.replace(/-/gm, " ");
};

type Unit = UnitInterface & SummonInterface;

const IndividualUnit: React.FC = () => {
  const [currentUnit, setCurrentUnit] = useState<Unit>({} as Unit);
  const history = useHistory();
  const currentLocation = useLocation();
  const isSummonUnit = currentLocation.pathname.includes("summons")
    ? true
    : false;
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
      await axios(`/api/summon/name/${unitName}`)
        .then((res) => {
          setCurrentUnit((prevSummon) => res.data.summon);
          return;
        })
        .catch((error) => {
          history.push("/summons");
          return;
        });
    };
    if (isSummonUnit) {
      getSummon();
    } else {
      getUnit();
    }
  }, [unitName, isSummonUnit, history]);

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
        ) : (
          <UnitCard unit={copiedUnit} goToClicked={history.push} />
        )}

        {copiedUnit["Attack Type"] !== null ? (
          <CombatCard unit={copiedUnit} />
        ) : null}

        {copiedUnit.Abilities !== null ? (
          <AbilityCard unit={copiedUnit} />
        ) : null}
      </React.Fragment>
    );
  }

  return (
    <BackgroundDiv height="100vh">
      <ContainerDiv>{currentUnit ? unitToDisplay : null}</ContainerDiv>
    </BackgroundDiv>
  );
};

export default IndividualUnit;

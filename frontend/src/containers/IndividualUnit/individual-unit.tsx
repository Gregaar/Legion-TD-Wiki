import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import AbilityCard from "../../components/UnitCard/AbilityCard/ability-card";
import CombatCard from "../../components/UnitCard/CombatCard/combat-card";
import UnitInfo from "../../components/UnitCard/InfoCard/info-card";
import UnitInterface from "../../shared/Interfaces/unit-interface";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";
import { ContainerDiv } from "./individual-unit-styles";

const sanitizeUnitName = (path: string): string => {
  const lastSlashIndex = path.lastIndexOf("/");
  const unitWithDashes = path.slice(lastSlashIndex + 1);
  return unitWithDashes.replace(/-/gm, " ");
};

const IndividualUnit: React.FC = () => {
  const [currentUnit, setCurrentUnit] = useState<UnitInterface>(
    {} as UnitInterface
  );
  const history = useHistory();
  const currentLocation = useLocation();
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
    getUnit();
  }, [unitName, history]);

  let unitToDisplay;

  if (currentUnit) {
    const copiedUnit = { ...currentUnit };
    unitToDisplay = (
      <React.Fragment key={copiedUnit.ID}>
        <UnitInfo unit={copiedUnit} goToClicked={history.push} />

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

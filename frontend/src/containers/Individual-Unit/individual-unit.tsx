import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import UnitInfo from "../../components/Unit-Info/unit-info";
import UnitInterface from "../../shared/Interfaces/unit-interface";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";

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
      <UnitInfo
        key={copiedUnit.ID}
        unit={copiedUnit}
        goToClicked={history.push}
      />
    );
  }

  return (
    <BackgroundDiv height="100vh">
      <div>{currentUnit ? unitToDisplay : null}</div>
    </BackgroundDiv>
  );
};

export default IndividualUnit;

// create a Unit component, that display all the unit information
// break down the Unit component as much as possible, delegating displays to other custom components!
// figure out how to deal with nulls etc

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import AbilityCard from "../../components/UnitCard/AbilityCard/ability-card";
import CombatCard from "../../components/UnitCard/CombatCard/combat-card";
import SummonCard from "../../components/UnitCard/SummonCard/summon-card";
import SummonInterface from "../../shared/Interfaces/summon-interface";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";

const sanitizeUnitName = (path: string): string => {
  const lastSlashIndex = path.lastIndexOf("/");
  const unitWithDashes = path.slice(lastSlashIndex + 1);
  return unitWithDashes.replace(/-/gm, " ");
};

const IndividualSummon: React.FC = () => {
  const [currentSummon, setCurrentSummon] = useState<SummonInterface>(
    {} as SummonInterface
  );
  const history = useHistory();
  const currentLocation = useLocation();
  const summonName = sanitizeUnitName(currentLocation.pathname);

  useEffect(() => {
    const getUnit = async () => {
      await axios(`/api/summon/name/${summonName}`)
        .then((res) => {
          setCurrentSummon((prevSummon) => res.data.summon);
          return;
        })
        .catch((error) => {
          //maybe push to somekind of 404 or modal to say unit not found?
          history.push("/summons");
          return;
        });
    };
    getUnit();
  }, [summonName, history]);

  let summonToDisplay;

  if (currentSummon) {
    const copiedSummon = { ...currentSummon };
    summonToDisplay = (
      <React.Fragment key={copiedSummon.ID}>
        <SummonCard
          summon={copiedSummon}
          goToClicked={history.push}
          enableHover={0}
        />

        <CombatCard unit={copiedSummon} />

        {currentSummon.Abilities !== null ? (
          <AbilityCard unit={copiedSummon} />
        ) : null}
      </React.Fragment>
    );
  }

  return (
    <BackgroundDiv height="110vh">
      <div style={{ display: "flex" }}>
        {currentSummon ? summonToDisplay : null}
      </div>
    </BackgroundDiv>
  );
};

export default IndividualSummon;

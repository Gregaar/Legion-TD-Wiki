import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import IndividualBuilder from "../../components/BuilderCards/individualBuilder/individual-builder";
import InfoCard from "../../components/UnitCard/InfoCard/info-card";
import BuilderInterface from "../../shared/Interfaces/builder-interface";
import UnitInterface from "../../shared/Interfaces/unit-interface";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";
import { UnitGrid } from "./builder-units-styles";

const sanitizeBuilderName = (path: string): string => {
  const lastSlashIndex = path.lastIndexOf("/");
  return path.slice(lastSlashIndex + 1);
};

const BuilderUnits: React.FC = () => {
  const [units, setUnits] = useState<UnitInterface[]>([]);
  const [builderInfo, setBuilderInfo] = useState<BuilderInterface>(
    {} as BuilderInterface
  );
  const history = useHistory();
  const currentLocation = useLocation();
  const builderName = sanitizeBuilderName(currentLocation.pathname);

  useEffect(() => {
    const getBuilderInfo = async () => {
      await axios(`/api/builder/name/${builderName}`)
        .then((res) => {
          setBuilderInfo((prevInfo) => {
            return { ...res.data.builders };
          });
          return;
        })
        .catch((error) => {
          return error;
        });
    };
    const getBuilderUnitsInfo = async () => {
      await axios(`/api/unit/builder/${builderName}`)
        .then((res) => {
          setUnits((prevUnits) => [...res.data.units]);
          return;
        })
        .catch((error) => {
          return error;
        });
    };
    getBuilderInfo();
    getBuilderUnitsInfo();
  }, [builderName]);

  return (
    <BackgroundDiv height="100%">
      <IndividualBuilder
        disableHover={true}
        ID={builderInfo["Avatar ID"]}
        name={builderInfo.Name}
        description={builderInfo.Description}
        heroes={builderInfo["Altar Of Heroes"]}
        aura={builderInfo.Aura}
        buff={builderInfo.Buff}
        debuff={builderInfo.Debuff}
        splash={builderInfo.Splash}
        heal={builderInfo.Heal}
        stun={builderInfo.Stun}
        summon={builderInfo.Summon}
      />
      <UnitGrid>
        {units &&
          units.map((unit) => (
            <InfoCard
              key={unit.ID}
              unit={unit}
              goToClicked={history.push}
              nameNav={true}
              disableInfoNav={true}
            />
          ))}
      </UnitGrid>
    </BackgroundDiv>
  );
};

export default BuilderUnits;

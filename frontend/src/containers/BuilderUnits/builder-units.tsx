import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import IndividualBuilder from "../../components/Cards/BuilderCards/IndividualBuilder/individual-builder";
import NavButtons from "../../components/Navigation/UI/Buttons/NavButtons/nav-buttons";
import BuilderInterface from "../../shared/Interfaces/builder-interface";
import ProphetAbilities from "../../shared/Interfaces/prophet-abilities-interface";
import UnitInterface from "../../shared/Interfaces/unit-interface";
import InfoCard from "../Units/UnitCard/unit-card";
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
  const [prophetAbilities, setProphetAbilities] = useState<ProphetAbilities>(
    {} as ProphetAbilities
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
      const path =
        builderName !== "prophet"
          ? `/api/unit/builder/${builderName}`
          : `/api/unit/prophet`;
      await axios(path)
        .then((res) => {
          if (builderName !== "prophet") {
            setUnits((prevUnits) => [...res.data.units]);
            return;
          } else {
            setUnits((prevUnits) => [...res.data.units]);
            setProphetAbilities((prevAbilities) => {
              return {
                ...res.data.abilities,
              };
            });
            return;
          }
        })
        .catch((error) => {
          return error;
        });
    };
    getBuilderInfo();
    getBuilderUnitsInfo();
  }, [builderName]);

  return (
    <React.Fragment>
      <NavButtons
        goToChosen={history.push}
        path={"builders"}
        currentNumber={builderInfo.Order}
        maxNumber={16}
        currentBuilder={builderInfo.Name}
      />
      {builderName === "prophet" ? (
        <IndividualBuilder
          prophet={true}
          disableHover={true}
          ID={builderInfo["Avatar ID"]}
          name={builderInfo.Name}
          description={builderInfo.Description}
          heroes={builderInfo["Altar Of Heroes"]}
          aura={prophetAbilities.Aura}
          buff={prophetAbilities.Buff}
          debuff={prophetAbilities.Debuff}
          splash={prophetAbilities.Splash}
          heal={prophetAbilities.Heal}
          stun={prophetAbilities.Stun}
          summon={prophetAbilities.Summon}
        />
      ) : (
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
      )}
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
    </React.Fragment>
  );
};

export default BuilderUnits;

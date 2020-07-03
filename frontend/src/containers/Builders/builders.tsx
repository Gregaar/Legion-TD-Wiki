import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import BuilderCards from "../../components/Cards/BuilderCards/builder-cards";
import BuilderInterface from "../../shared/Interfaces/builder-interface";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";
import { BuildersContainer } from "./builders-styles";
const Builders: React.FC = () => {
  const [legionBuilders, setLegionBuilders] = useState<BuilderInterface[]>([]);
  const history = useHistory();

  useEffect(() => {
    const getBuilders = async () => {
      await axios(`/api/builder/name/any`)
        .then((res) => {
          setLegionBuilders((prevBuilders) => [...res.data.builders]);
        })
        .catch((error) => {
          return;
        });
    };
    getBuilders();
  }, []);

  let buildersDisplay;

  if (legionBuilders.length > 0) {
    const buildersCopy: BuilderInterface[] = [...legionBuilders];
    buildersDisplay = (
      <BuilderCards builders={buildersCopy} goToClicked={history.push} />
    );
  }

  return (
    <BackgroundDiv height="100%">
      <BuildersContainer>{buildersDisplay}</BuildersContainer>
    </BackgroundDiv>
  );
};

export default Builders;

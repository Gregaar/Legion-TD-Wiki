import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import BuilderCards from "../../components/BuilderCards/builder-cards";
import { BuildersContainer } from "./builders-styles";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";
import BuilderInterface from "../../shared/Interfaces/builder-interface";
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
  }, [searchBuilder]);

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

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import BuilderCards from "../../components/Cards/BuilderCards/builder-cards";
import BuilderInterface from "../../shared/Interfaces/builder-interface";
import {
  MainHeading,
  TextContainer,
  P,
  NavLinkStyled,
} from "../../shared/Styles/shared-styles";
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
    <React.Fragment>
      <MainHeading>Builders</MainHeading>
      <TextContainer>
        <P>
          Each builder has their own set of units, which all have different
          strengths and weaknesses.
        </P>
        <P>
          There are two unique builders, the{" "}
          <NavLinkStyled to="/builders/hybrid">Hybrid</NavLinkStyled> builder
          and the <NavLinkStyled to="/builders/prophet">Prophet</NavLinkStyled>{" "}
          builder.
        </P>
        <P>The Hybrid builder randoms units every time they are placed.</P>
        <P>The Prophet builder randoms units once whenever he is selected.</P>
      </TextContainer>
      <BuildersContainer>{buildersDisplay}</BuildersContainer>
    </React.Fragment>
  );
};

export default Builders;

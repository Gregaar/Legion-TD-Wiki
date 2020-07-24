import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import BuilderCards from "../../components/Cards/BuilderCards/builder-cards";
import BuilderInterface from "../../shared/Interfaces/builder-interface";
import {
  MainHeading,
  NavLinkStyled,
  P,
  TextContainer,
} from "../../shared/Styles/shared-styles";
import { BuildersContainer } from "./builders-styles";
const Builders: React.FC = () => {
  const [legionBuilders, setLegionBuilders] = useState<BuilderInterface[]>([]);

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

  return (
    <main>
      <div>
        <Helmet>
          <title>Legion TD Mega Wiki | Builders</title>
          <meta
            name="description"
            content="All Builders. Artic. Beast. Demi-Human. Element. Elf. Ghost. Goblin. Hybrid. Marine. Mech. Nature. Orc. Paladin. Prophet. Shadow. Undead."
          />
        </Helmet>
      </div>
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
      <BuildersContainer>
        {legionBuilders.length >= 1 ? (
          <BuilderCards builders={[...legionBuilders]} />
        ) : null}
      </BuildersContainer>
    </main>
  );
};

export default Builders;

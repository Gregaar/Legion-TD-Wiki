import axios from "axios";
import React, { useEffect, useState } from "react";

import AbilityCard from "../../components/Cards/AbilityCard/ability-card";
import KingButtons from "../../components/Navigation/UI/Buttons/KingButtons/king-buttons";
import KingStatTable from "../../components/Tables/King/king-stats-table";
import KingAbilityInterface from "../../shared/Interfaces/king-ability-interface";
import KingStatsInterface from "../../shared/Interfaces/king-stats-interface";
import {
  MainHeading,
  TextContainer,
  P,
} from "../../shared/Styles/shared-styles";
import {} from "../../shared/Styles/shared-styles";
import { KingContainer } from "./king-styles";

interface KingButtons {
  stats: boolean;
  abilities: boolean;
}

const King: React.FC = () => {
  const [activeButton, setActiveButton] = useState<KingButtons>({
    stats: false,
    abilities: true,
  });
  const [kingStats, setKingStats] = useState<KingStatsInterface[]>([]);
  const [kingAbilities, setKingAbilities] = useState<KingAbilityInterface[]>(
    []
  );

  useEffect(() => {
    const getKingStats = async (): Promise<void> => {
      await axios(`/api/king/stats/all`)
        .then((res) => {
          setKingStats((prevStats) => [...res.data.stats]);
        })
        .catch((error) => {
          return error.response.data.error;
        });
    };
    const getKingAbilities = async (): Promise<void> => {
      await axios(`/api/king/ability/all`)
        .then((res) => {
          setKingAbilities((prevAbilities) => [...res.data.abilities]);
        })
        .catch((error) => {
          return error.response.data.error;
        });
    };
    getKingStats();
    getKingAbilities();
  }, []);

  const handleKingClick = (btnName: string): void => {
    if (btnName === "stats" && !activeButton.stats) {
      setActiveButton((prevBtn) => {
        return {
          stats: true,
          abilities: false,
        };
      });
    } else if (btnName === "abilities" && !activeButton.abilities) {
      setActiveButton((prevBtn) => {
        return {
          stats: false,
          abilities: true,
        };
      });
    } else {
      return;
    }
  };

  let abilityDisplay;

  if (kingAbilities.length > 1) {
    const abilityCopy = [...kingAbilities];
    abilityDisplay = abilityCopy.map((ability) => (
      <AbilityCard key={ability.ID} unit={ability} king={true} />
    ));
  }

  return (
    <React.Fragment>
      <MainHeading>The King</MainHeading>
      <TextContainer>
        <P>
          The main objective of the game is to protect your teams King. If the
          King dies, the game is over.
        </P>

        <P>
          To make the King more powerful, players can upgraded his Attack, Hit
          Points and Regeneration.
        </P>
        <P>
          Additionally, throughout the game the King learns up to four random
          abilities.
        </P>
      </TextContainer>
      <KingButtons
        activeButton={activeButton}
        buttonClicked={handleKingClick}
      />
      {activeButton.stats ? (
        <KingContainer stats={true}>
          <KingStatTable stats={kingStats} />
        </KingContainer>
      ) : null}
      {activeButton.abilities ? (
        <KingContainer>{abilityDisplay}</KingContainer>
      ) : null}
    </React.Fragment>
  );
};

export default King;

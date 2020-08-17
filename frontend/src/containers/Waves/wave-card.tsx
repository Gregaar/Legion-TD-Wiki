import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";

import {
  InfoPanel,
  Paragraph,
  StyledLink,
  UnitImage as WaveImage,
  CombatImg,
  UnitInfoHeading as WaveInfoHeading,
  UnitName as WaveName,
} from "../../components/Cards/card-styles";
import WaveCombat from "../../components/Cards/WaveCard/Wave-Combat/wave-combat";
import WaveGold from "../../components/Cards/WaveCard/Wave-Gold/wave-gold";
import WaveOther from "../../components/Cards/WaveCard/Wave-Other/wave-other";
import WaveInterface from "../../shared/Interfaces/wave-interface";
import {
  getWaveIcon,
  getAttackIcon,
  getDefenseIcon,
} from "../../shared/Services/get-icons";
import { getWaveColor } from "../../shared/Styles/get-heading-color";

interface WaveCardProps {
  wave: WaveInterface;
  goToClicked: (path: string) => void;
  enableHover?: boolean;
  showExtras?: boolean;
}

interface ToggleInterface {
  gold: boolean;
  combat: boolean;
  other: boolean;
}

const waveCardList: ToggleInterface = {
  gold: true,
  combat: false,
  other: false,
};

const individualWave: ToggleInterface = {
  gold: true,
  combat: true,
  other: true,
};

const WaveCard: React.FC<WaveCardProps> = ({
  wave,
  goToClicked,
  enableHover,
  showExtras,
}) => {
  const defaultToggle = enableHover ? waveCardList : individualWave;
  const [toggle, setToggle] = useState<ToggleInterface>(defaultToggle);
  const attackIcon = getAttackIcon(wave["Attack Type"]);
  const defIcon = getDefenseIcon(wave["Defense Type"]);
  const waveIcon = getWaveIcon(wave["Creep Name"]);
  const bgColor = getWaveColor(wave.Level);

  const handleToggle = (key: string, curVal: boolean) => {
    if (!enableHover) {
      return;
    } else {
      setToggle((prevState) => {
        return {
          ...prevState,
          [key]: !curVal,
        };
      });
    }
  };

  const handleWaveClick = () => {
    if (!enableHover) {
      return;
    } else {
      goToClicked(`/waves/${wave.Level}`);
      return;
    }
  };

  const cardWithNav = (
    <>
      <StyledLink to={`/waves/${wave.Level}`}>
        <WaveName
          bgColor={bgColor}
          enableHover={enableHover ? 1 : 0}
          onClick={handleWaveClick}
        >
          {wave["Creep Name"]}
        </WaveName>
      </StyledLink>
      <StyledLink to={`/waves/${wave.Level}`}>
        <WaveImage
          src={waveIcon}
          alt={`Icon for the ${wave["Creep Name"]} wave`}
          bgColor={bgColor}
          enableHover={enableHover ? 1 : 0}
          onClick={handleWaveClick}
        />
      </StyledLink>
    </>
  );

  return (
    <InfoPanel>
      {enableHover ? (
        cardWithNav
      ) : (
        <>
          <WaveName
            bgColor={bgColor}
            enableHover={enableHover ? 1 : 0}
            onClick={handleWaveClick}
          >
            {wave["Creep Name"]}
          </WaveName>
          <WaveImage
            src={waveIcon}
            alt={`Icon for the ${wave["Creep Name"]} wave`}
            bgColor={bgColor}
            enableHover={enableHover ? 1 : 0}
            onClick={handleWaveClick}
          />
        </>
      )}
      {showExtras ? (
        <>
          <Tooltip
            title={
              wave["Attack Type"]
                .charAt(0)
                .toUpperCase()
                .concat(wave["Attack Type"].slice(1)) + " Attack"
            }
            placement="left"
          >
            <CombatImg
              src={attackIcon}
              alt={`Attack icon for ${wave["Attack Type"]} attacks`}
            />
          </Tooltip>
          <Tooltip
            title={
              wave["Defense Type"]
                .charAt(0)
                .toUpperCase()
                .concat(wave["Defense Type"].slice(1)) + " Defence"
            }
            placement="right"
          >
            <CombatImg
              src={defIcon}
              alt={`Defence icon for ${wave["Defense Type"]} defence`}
            />
          </Tooltip>
        </>
      ) : null}
      <Paragraph>{`Wave: ${wave.Level}`}</Paragraph>
      <Paragraph>
        {`Number of ${wave["Creep Name"]}: ${wave["Number of Creeps"]}`}
      </Paragraph>
      <WaveInfoHeading
        onClick={() => handleToggle("gold", toggle.gold)}
        canToggle={enableHover ? 1 : 0}
      >
        Gold
      </WaveInfoHeading>
      <WaveGold
        creepBounty={wave["Creep Bounty"]}
        totalCreepGold={wave["Gold from Creeps"]}
        bonusGold={wave["Bonus Gold"]}
        creepValue={wave["Creep Value"]}
        isOpen={toggle.gold}
      />
      <WaveInfoHeading
        onClick={() => handleToggle("combat", toggle.combat)}
        canToggle={enableHover ? 1 : 0}
      >
        Combat
      </WaveInfoHeading>
      <WaveCombat
        hitPoints={wave["Hit Points"]}
        minHit={wave["Min Hit"]}
        maxHit={wave["Max Hit"]}
        range={wave.Range}
        isOpen={toggle.combat}
      />
      <WaveInfoHeading
        onClick={() => handleToggle("other", toggle.other)}
        canToggle={enableHover ? 1 : 0}
      >
        Other
      </WaveInfoHeading>
      <WaveOther
        landOrFlying={wave.Type}
        bossWave={wave.Boss}
        isOpen={toggle.other}
      />
    </InfoPanel>
  );
};

export default WaveCard;

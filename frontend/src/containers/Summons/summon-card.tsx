import React, { useState } from "react";

import {
  InfoPanel,
  UnitImage as SummonImage,
  UnitInfoHeading as SummonInfoHeading,
  UnitName as SummonName,
} from "../../components/Cards/card-styles";
import SummonCombat from "../../components/Cards/SummonCard/Summon-Combat/summon-combat";
import SummonInfo from "../../components/Cards/SummonCard/Summon-Info/summon-info";
import SummonOther from "../../components/Cards/SummonCard/Summon-Other/summon-other";
import SummonInterface from "../../shared/Interfaces/summon-interface";
import { unitNameColor } from "../../shared/Styles/get-heading-color";

interface HistoryWithState {
  advanced?: boolean;
}

interface SummonCardProps {
  summon: SummonInterface;
  goToClicked: (pathname: string, state?: HistoryWithState) => void;
  enableHover?: number;
}

interface ToggleInterface {
  resources: boolean;
  combat: boolean;
  other: boolean;
}

const summonCardList: ToggleInterface = {
  resources: true,
  combat: false,
  other: false,
};

const individualSummon: ToggleInterface = {
  resources: true,
  combat: true,
  other: true,
};

const SummonCard: React.FC<SummonCardProps> = ({
  summon,
  goToClicked,
  enableHover,
}) => {
  const defaultToggle = enableHover ? summonCardList : individualSummon;
  const [toggle, setToggle] = useState<ToggleInterface>(defaultToggle);
  const bgColor = unitNameColor(summon.Builder);
  const imgurURL = "https://i.imgur.com";

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

  const handleSummonClick = () => {
    if (!enableHover) {
      return;
    } else {
      goToClicked(`/summons/${summon.Order}`);
      return;
    }
  };

  return (
    <InfoPanel>
      <SummonName
        bgColor={bgColor}
        enableHover={enableHover}
        onClick={handleSummonClick}
      >
        {summon.Name}
      </SummonName>
      <SummonImage
        src={`${imgurURL}/${summon.ID}.png`}
        alt={`Icon for the ${summon.Name} summon`}
        bgColor={bgColor}
        enableHover={enableHover}
        onClick={handleSummonClick}
      />
      <p>{summon["Unit Description"]}</p>
      <SummonInfoHeading
        onClick={() => handleToggle("resources", toggle.resources)}
        canToggle={enableHover ? 1 : 0}
      >
        Resources
      </SummonInfoHeading>
      <SummonInfo
        lumberCost={summon["Lumber Cost"]}
        incomeBonus={summon["Income Bonus"]}
        stock={summon["Max Stock"]}
        replenishInterval={summon["Replenish Interval"]}
        disableAnimation={enableHover}
        isOpen={toggle.resources}
      />
      <SummonInfoHeading
        canToggle={enableHover ? 1 : 0}
        onClick={() => handleToggle("combat", toggle.combat)}
      >
        Combat
      </SummonInfoHeading>
      <SummonCombat
        minHit={summon["Min Hit"]}
        maxHit={summon["Max Hit"]}
        attackSpeed={summon["Attack Speed"]}
        attackSpeedClass={summon["Attack Speed Class"]}
        hitPoints={summon["Hit Points"]}
        range={summon.Range}
        rangeClass={summon["Melee / Ranged"]}
        mana={summon.Mana}
        abilityCount={summon.Abilities ? summon.Abilities.length : 0}
        disableAnimation={enableHover}
        isOpen={toggle.combat}
      />
      <SummonInfoHeading
        canToggle={enableHover ? 1 : 0}
        onClick={() => handleToggle("other", toggle.other)}
      >
        Other
      </SummonInfoHeading>
      <SummonOther
        location={summon.Location}
        landOrFly={summon["Land/Flying"]}
        disableAnimation={enableHover}
        isOpen={toggle.other}
        goToClicked={goToClicked}
      />
    </InfoPanel>
  );
};

export default SummonCard;

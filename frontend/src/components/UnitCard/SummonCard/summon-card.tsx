import React from "react";
import SummonInterface from "../../../shared/Interfaces/summon-interface";
import {
  InfoPanel,
  UnitName as SummonName,
  UnitImage as SummonImage,
  UnitInfoHeading as SummonInfoHeading,
} from "../card-styles";
import SummonInfo from "./Summon-Info/summon-info";
import SummonCombat from "./Summon-Combat/summon-combat";
import SummonOther from "./Summon-Other/summon-other";

interface SummonCardProps {
  summon: SummonInterface;
  goToClicked: (path: string) => void;
  enableHover?: number;
}

const summonCard: React.FC<SummonCardProps> = ({ summon, goToClicked, enableHover }) => {
  const imgurURL = "https://i.imgur.com";

  const handleSummonClick = () => {
      if(!enableHover) {
          return
      } else {
        const nameWithDashes = summon.Name.replace(/\s/gm, "-");  
        goToClicked(`/summons/${nameWithDashes}`);
        return
      }
  }

  return (
    <InfoPanel>
      <SummonName enableHover={enableHover} onClick={handleSummonClick}>
        {summon.Name}
      </SummonName>
      <SummonImage
        src={`${imgurURL}/${summon.ID}.png`}
        alt={`Icon for the ${summon.Name} summon`}
        enableHover={enableHover}
        onClick={handleSummonClick}
      />
      <p>{summon["Unit Description"]}</p>
      <SummonInfoHeading>Summon Info</SummonInfoHeading>
      <SummonInfo
        lumberCost={summon["Lumber Cost"]}
        incomeBonus={summon["Income Bonus"]}
        stock={summon["Max Stock"]}
        replenishInterval={summon["Replenish Interval"]}
        disableAnimation={enableHover}
      />
      <SummonInfoHeading>Combat Stats</SummonInfoHeading>
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
      />
      <SummonInfoHeading>Other</SummonInfoHeading>
      <SummonOther
        location={summon.Location}
        landOrFly={summon["Land/Flying"]}
        disableAnimation={enableHover}
      />
    </InfoPanel>
  );
};

export default summonCard;

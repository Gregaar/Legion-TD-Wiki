import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";

import {
  InfoPanel,
  StyledLink,
  SummonDescription,
  UnitImage as SummonImage,
  CombatImg,
  UnitInfoHeading as SummonInfoHeading,
  UnitName as SummonName,
} from "../../components/Cards/card-styles";
import { getAttackIcon, getDefenseIcon } from "../../shared/Services/get-icons";
import SummonAbilities from "../../components/Cards/UnitCard/AbilityInfo/ability-info";
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
  showExtras?: boolean;
}

interface ToggleInterface {
  resources: boolean;
  ability: boolean;
  combat: boolean;
  other: boolean;
}

const summonCardList: ToggleInterface = {
  resources: true,
  ability: true,
  combat: false,
  other: false,
};

const individualSummon: ToggleInterface = {
  resources: true,
  ability: true,
  combat: true,
  other: true,
};

const SummonCard: React.FC<SummonCardProps> = ({
  summon,
  goToClicked,
  enableHover,
  showExtras,
}) => {
  const defaultToggle = enableHover ? summonCardList : individualSummon;
  const [toggle, setToggle] = useState<ToggleInterface>(defaultToggle);
  const attackIcon = getAttackIcon(summon["Attack Type"]);
  const defIcon = getDefenseIcon(summon["Defense Type"]);
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

  const cardWithNav = (
    <>
      <StyledLink to={`/summons/${summon.Order}`}>
        <SummonName
          bgColor={bgColor}
          enableHover={enableHover}
          onClick={handleSummonClick}
        >
          {summon.Name}
        </SummonName>
        <SummonDescription>{summon["Unit Description"]}</SummonDescription>
      </StyledLink>
      <StyledLink to={`/summons/${summon.Order}`}>
        <SummonImage
          src={`${imgurURL}/${summon.ID}.png`}
          alt={`Icon for the ${summon.Name} summon`}
          bgColor={bgColor}
          enableHover={enableHover}
          onClick={handleSummonClick}
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
          <SummonName
            bgColor={bgColor}
            enableHover={enableHover}
            onClick={handleSummonClick}
          >
            {summon.Name}
          </SummonName>
          <SummonDescription>{summon["Unit Description"]}</SummonDescription>
          <SummonImage
            src={`${imgurURL}/${summon.ID}.png`}
            alt={`Icon for the ${summon.Name} summon`}
            bgColor={bgColor}
            enableHover={enableHover}
            onClick={handleSummonClick}
          />
        </>
      )}
      {showExtras ? (
        <>
          <Tooltip
            title={
              summon["Attack Type"]
                .charAt(0)
                .toUpperCase()
                .concat(summon["Attack Type"].slice(1)) + " Attack"
            }
            placement="left"
          >
            <CombatImg
              src={attackIcon}
              alt={`Attack icon for ${summon["Attack Type"]} attacks`}
            />
          </Tooltip>
          <Tooltip
            title={
              summon["Defense Type"]
                .charAt(0)
                .toUpperCase()
                .concat(summon["Defense Type"].slice(1)) + " Defence"
            }
            placement="right"
          >
            <CombatImg
              src={defIcon}
              alt={`Defence icon for ${summon["Defense Type"]} defence`}
            />
          </Tooltip>
        </>
      ) : null}
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
      {showExtras ? (
        <>
          <SummonInfoHeading
            onClick={() => handleToggle("resources", toggle.ability)}
            canToggle={enableHover ? 1 : 0}
          >
            Abilities
          </SummonInfoHeading>
          <SummonAbilities
            abilities={summon.Abilities}
            abilityTypes={summon["Ability Type"]}
            disableAnimation={enableHover ? true : false}
            isOpen={toggle.ability}
          />
        </>
      ) : null}
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

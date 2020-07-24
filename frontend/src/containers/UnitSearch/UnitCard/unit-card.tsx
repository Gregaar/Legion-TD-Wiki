import React, { useState } from "react";
import shortid from "shortid";

import {
  InfoPanel,
  StyledLink,
  UnitImage,
  UnitInfoHeading,
  UnitName,
} from "../../../components/Cards/card-styles";
import BuildingInfo from "../../../components/Cards/UnitCard/Building-Info/building-info";
import CombatInfo from "../../../components/Cards/UnitCard/Combat-Info/combat-info";
import UpgradeInfo from "../../../components/Cards/UnitCard/Upgrade-Info/upgrade-info";
import AbilityInfo from "../../../components/Cards/UnitCard/AbilityInfo/ability-info";
import UnitInterface from "../../../shared/Interfaces/unit-interface";
import { getUnitIcon } from "../../../shared/Services/get-icons";
import { unitNameColor } from "../../../shared/Styles/get-heading-color";

interface UnitCardProps {
  unit: UnitInterface;
  nameNav?: boolean;
  disableInfoNav?: boolean;
  showExtras?: boolean;
}

interface ToggleInterface {
  building: boolean;
  upgrade: boolean;
  combat: boolean;
  abilities: boolean;
}

const builderUnitList: ToggleInterface = {
  building: true,
  upgrade: false,
  combat: false,
  abilities: true,
};

const singleUnitList: ToggleInterface = {
  building: true,
  upgrade: true,
  combat: true,
  abilities: true,
};

const UnitCard: React.FC<UnitCardProps> = ({
  unit,
  nameNav,
  disableInfoNav,
  showExtras,
}) => {
  const defaultToggle = disableInfoNav ? builderUnitList : singleUnitList;
  const [toggle, setToggle] = useState<ToggleInterface>(defaultToggle);
  const unitBgColor = unitNameColor(unit.Builder);
  const unitIcon = getUnitIcon(unit.Builder, unit.Name);

  const handleToggle = (key: string, curVal: boolean): void => {
    if (!disableInfoNav) {
      return;
    } else {
      setToggle((prevObj) => {
        return {
          ...prevObj,
          [key]: !curVal,
        };
      });
    }
  };

  const getUnitURL = (): string => {
    const unitNameWithDashes = unit.Name.replace(" ", "-");
    return `/units/${unitNameWithDashes}`;
  };

  const cardWithNav = (
    <>
      <StyledLink to={() => getUnitURL()}>
        <UnitName bgColor={unitBgColor} enableHover={nameNav ? 1 : 0}>
          {unit.Name}
        </UnitName>
      </StyledLink>
      <StyledLink to={() => getUnitURL()}>
        <UnitImage
          src={unitIcon}
          alt={`Avatar for the ${unit.Name} unit.`}
          bgColor={unitBgColor}
          enableHover={nameNav ? 1 : 0}
        />
      </StyledLink>
    </>
  );

  return (
    <InfoPanel key={shortid.generate()}>
      {nameNav ? (
        cardWithNav
      ) : (
        <>
          <UnitName bgColor={unitBgColor} enableHover={nameNav ? 1 : 0}>
            {unit.Name}
          </UnitName>
          <UnitImage
            src={unitIcon}
            alt={`Avatar for the ${unit.Name} unit.`}
            bgColor={unitBgColor}
            enableHover={nameNav ? 1 : 0}
          />
        </>
      )}
      <UnitInfoHeading
        canToggle={disableInfoNav ? 1 : 0}
        onClick={() => handleToggle("building", toggle.building)}
      >
        Building
      </UnitInfoHeading>
      <BuildingInfo
        tier={unit["Unit Tier"]}
        foodCost={unit["Food Cost"]}
        goldCost={unit["Gold Cost"]}
        builder={unit.Builder}
        disableInfoNav={disableInfoNav}
        isOpen={toggle.building}
      />
      {unit.Builder === "hybrid" ? null : (
        <>
          <UnitInfoHeading
            canToggle={disableInfoNav ? 1 : 0}
            onClick={() => handleToggle("upgrade", toggle.upgrade)}
          >
            Upgrade Chain
          </UnitInfoHeading>

          <UpgradeInfo
            upgradedName={unit["Upgraded Name"]}
            baseName={unit["Base Unit Name"]}
            disableInfoNav={disableInfoNav}
            isOpen={toggle.upgrade}
          />
          <UnitInfoHeading
            canToggle={disableInfoNav ? 1 : 0}
            onClick={() => handleToggle("combat", toggle.combat)}
          >
            Combat
          </UnitInfoHeading>
          <CombatInfo
            minDamage={unit["Base Min Hit"]}
            maxDamage={unit["Base Max Hit"]}
            health={unit["Hit Points"]}
            range={unit.Range}
            rangeClass={unit["Melee / Ranged"]}
            attackSpeed={unit["Attack Speed"]}
            attackClass={unit["Attack Speed Class"]}
            attackType={unit["Attack Type"]}
            defenseType={unit["Defense Type"]}
            mana={unit.Mana}
            isOpen={toggle.combat}
            disableAnimation={disableInfoNav}
            showAtkDef={showExtras}
          />
        </>
      )}
      {showExtras ? (
        <>
          <UnitInfoHeading
            canToggle={disableInfoNav ? 1 : 0}
            onClick={() => handleToggle("abilities", toggle.abilities)}
          >
            Abilities
          </UnitInfoHeading>
          <AbilityInfo
            abilities={unit["Abilities"]}
            abilityTypes={unit["Ability Type"]}
            isOpen={toggle.abilities}
            disableAnimation={disableInfoNav}
          />
        </>
      ) : null}
    </InfoPanel>
  );
};

export default UnitCard;

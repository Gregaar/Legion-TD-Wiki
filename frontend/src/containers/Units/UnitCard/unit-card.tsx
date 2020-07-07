import React, { useState } from "react";
import shortid from "shortid";

import {
  InfoPanel,
  UnitImage,
  UnitInfoHeading,
  UnitName,
} from "../../../components/Cards/card-styles";
import BuildingInfo from "../../../components/Cards/UnitCard/Building-Info/building-info";
import CombatInfo from "../../../components/Cards/UnitCard/Combat-Info/combat-info";
import UpgradeInfo from "../../../components/Cards/UnitCard/Upgrade-Info/upgrade-info";
import UnitInterface from "../../../shared/Interfaces/unit-interface";
import { getUnitIcon } from "../../../shared/Services/get-icons";
import { unitNameColor } from "../../../shared/Styles/get-heading-color";

interface InfoCardProps {
  unit: UnitInterface;
  goToClicked: (path: string) => void;
  nameNav?: boolean;
  disableInfoNav?: boolean;
}

interface ToggleInterface {
  building: boolean;
  upgrade: boolean;
  combat: boolean;
}

const builderUnitList: ToggleInterface = {
  building: true,
  upgrade: false,
  combat: false,
};

const singleUnitList: ToggleInterface = {
  building: true,
  upgrade: true,
  combat: true,
};

const InfoCard: React.FC<InfoCardProps> = ({
  unit,
  goToClicked,
  nameNav,
  disableInfoNav,
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

  const handleNameClick = (): void => {
    if (nameNav) {
      const unitNameWithDashes = unit.Name.replace(" ", "-");
      goToClicked(`/units/${unitNameWithDashes}`);
    } else {
      return;
    }
  };

  return (
    <InfoPanel
      key={shortid.generate()}
    >
      <UnitName
        bgColor={unitBgColor}
        onClick={handleNameClick}
        enableHover={nameNav ? 1 : 0}
      >
        {unit.Name}
      </UnitName>
      <UnitImage
        src={unitIcon}
        alt={`Avatar for the ${unit.Name} unit.`}
        onClick={handleNameClick}
        bgColor={unitBgColor}
        enableHover={nameNav ? 1 : 0}
      />
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
        clicked={goToClicked}
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
            clickedName={goToClicked}
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
            mana={unit.Mana}
            isOpen={toggle.combat}
            disableAnimation={disableInfoNav}
          />
        </>
      )}
    </InfoPanel>
  );
};

export default InfoCard;

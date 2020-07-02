import React from "react";

import UnitInterface from "../../../shared/Interfaces/unit-interface";
import { getUnitIcon } from "../../../shared/Services/get-icons";
import { unitNameColor } from "../../../shared/Styles/get-heading-color";
import BuildingInfo from "./Building-Info/building-info";
import CombatInfo from "./Combat-Info/combat-info";
import {
  InfoGrid,
  InfoPanel,
  UnitImage,
  UnitInfoHeading,
  UnitName,
} from "../card-styles";
import UpgradeInfo from "./Upgrade-Info/upgrade-info";

interface InfoCardProps {
  unit: UnitInterface;
  goToClicked: (path: string) => void;
  nameNav?: boolean;
  disableInfoNav?: boolean;
}

const infoCard: React.FC<InfoCardProps> = ({
  unit,
  goToClicked,
  nameNav,
  disableInfoNav,
}) => {
  const unitBgColor = unitNameColor(unit.Builder);
  const unitIcon = getUnitIcon(unit.Builder, unit.Name);

  const handleNameClick = (): void => {
    if (nameNav) {
      const unitNameWithDashes = unit.Name.replace(" ", "-");
      goToClicked(`/units/${unitNameWithDashes}`);
    } else {
      return;
    }
  };

  const hybridUnits = (
    <InfoPanel height="350px">
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
      <UnitInfoHeading>Building Info</UnitInfoHeading>
      <InfoGrid>
        <BuildingInfo
          tier={unit["Unit Tier"]}
          foodCost={unit["Food Cost"]}
          goldCost={unit["Gold Cost"]}
          builder={unit.Builder}
          clicked={goToClicked}
        />
      </InfoGrid>
    </InfoPanel>
  );

  return unit.Builder === "hybrid" ? (
    hybridUnits
  ) : (
    <InfoPanel ability={unit.Abilities !== null ? 1 : 0}>
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
      <UnitInfoHeading>Building Info</UnitInfoHeading>
      <InfoGrid disableAnimation={disableInfoNav ? 1 : 0}>
        <BuildingInfo
          tier={unit["Unit Tier"]}
          foodCost={unit["Food Cost"]}
          goldCost={unit["Gold Cost"]}
          builder={unit.Builder}
          disableInfoNav={disableInfoNav}
          clicked={goToClicked}
        />
      </InfoGrid>
      <UnitInfoHeading>Upgrade Chain</UnitInfoHeading>
      <InfoGrid disableAnimation={disableInfoNav ? 1 : 0}>
        <UpgradeInfo
          upgradedName={unit["Upgraded Name"]}
          baseName={unit["Base Unit Name"]}
          disableInfoNav={disableInfoNav}
          clickedName={goToClicked}
        />
      </InfoGrid>
      <UnitInfoHeading>Combat Stats</UnitInfoHeading>
      <InfoGrid disableAnimation={disableInfoNav ? 1 : 0}>
        <CombatInfo
          minDamage={unit["Base Min Hit"]}
          maxDamage={unit["Base Max Hit"]}
          health={unit["Hit Points"]}
          range={unit.Range}
          rangeClass={unit["Melee / Ranged"]}
          attackSpeed={unit["Attack Speed"]}
          attackClass={unit["Attack Speed Class"]}
          mana={unit.Mana}
        />
      </InfoGrid>
    </InfoPanel>
  );
};

export default infoCard;

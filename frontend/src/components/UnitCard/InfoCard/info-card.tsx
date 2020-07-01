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
} from "./info-card-styles";
import UpgradeInfo from "./Upgrade-Info/upgrade-info";

interface InfoCardProps {
  unit: UnitInterface;
  goToClicked: (path: string) => void;
}

const infoCard: React.FC<InfoCardProps> = ({ unit, goToClicked }) => {
  const nameBgColor = unitNameColor(unit.Builder);
  const unitIcon = getUnitIcon(unit.Builder, unit.Name);

  const hybridUnits = (
    <InfoPanel height="350px">
      <UnitName bgColor={nameBgColor}>{unit.Name}</UnitName>
      <UnitImage src={unitIcon} alt={`Avatar for the ${unit.Name} unit.`} />
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
      <UnitName bgColor={nameBgColor}>{unit.Name}</UnitName>
      <UnitImage src={unitIcon} alt={`Avatar for the ${unit.Name} unit.`} />
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
      <UnitInfoHeading>Upgrade Chain</UnitInfoHeading>
      <InfoGrid>
        <UpgradeInfo
          upgradedName={unit["Upgraded Name"]}
          baseName={unit["Base Unit Name"]}
          clickedName={goToClicked}
        />
      </InfoGrid>
      <UnitInfoHeading>Combat Stats</UnitInfoHeading>
      <InfoGrid>
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

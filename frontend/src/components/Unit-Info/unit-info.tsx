import React from "react";

import unitAvatar from "../../assets/unit-avatar.png";
import UnitInterface from "../../shared/Interfaces/unit-interface";
import BuildingInfo from "./Building-Info/building-info";
import CombatInfo from "./Combat-Info/combat-info";
import {
  InfoGrid,
  InfoPanel,
  UnitImage,
  UnitInfoHeading,
  UnitName,
} from "./unit-info-styles";
import UpgradeInfo from "./Upgrade-Info/upgrade-info";

interface UnitInfoProps {
  unit: UnitInterface;
  goToClicked: (path: string) => void;
}

const unitInfo: React.FC<UnitInfoProps> = ({ unit, goToClicked }) => {
  const hybridUnits = (
    <InfoPanel height="350px">
      <UnitName>{unit.Name}</UnitName>
      <UnitImage src={unitAvatar} alt={`Avatar for the ${unit.Name} unit.`} />
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
      <UnitName>{unit.Name}</UnitName>
      <UnitImage src={unitAvatar} alt={`Avatar for the ${unit.Name} unit.`} />
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
          range={unit["Melee / Ranged"]}
          attackType={unit["Attack Type"]}
          attackSpeed={unit["Attack Speed Class"]}
          defenseType={unit["Defense Type"]}
        />
      </InfoGrid>
    </InfoPanel>
  );
};

export default unitInfo;
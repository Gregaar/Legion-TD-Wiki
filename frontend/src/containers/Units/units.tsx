import React, { useState, useEffect } from "react";
import Filter from "./Filter/filter";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";
import {
  UnitContainer,
  UnitHeadingsContainer,
  UnitHeadings,
} from "./unit-styles";
import IndividualUnit from "./Individual-Unit/individual-unit";
import axios from "axios";

export interface UnitInterface {
  Name: string;
  Builder: string;
  "Unit Tier": number;
  "Gold Cost": number;
  "Food Cost": number;
  Upgradeable: boolean;
  "Max Upgrade Gold Cost": number;
  "Total Food Cost with Upgrade": number;
  "Base Unit Name": string[] | null;
  "Upgraded Name": string | null;
  "Base Min Hit": number;
  "Base Max Hit": number;
  "Attack Speed": number;
  "Attack Speed Class": string;
  Range: number;
  "Melee / Ranged": string;
  "Hit Points": number;
  Mana: number;
  "Attack Type": string;
  "Defense Type": string;
  "Attack Effectiveness Order": string[];
  "Attack Strength": string;
  "Attack Weakness": string[];
  "Defense Effectiveness Order": string[];
  "Defense Strength": string[];
  "Defense Weakness": string[];
  Abilities: string[] | null;
  "Ability Type": string[] | null;
  "Ability Description": string[] | null;
  "Has Aura": boolean;
  "Can Buff": boolean;
  "Can Debuff": boolean;
  "Can Splash": boolean;
  "Can Heal": boolean;
  "Can Stun": boolean;
  "Can Summon": boolean;
  ID: string;
}

const units = () => {
  const [displayUnits, setDisplayUnits] = useState<UnitInterface[]>([]);

  const titles = [
    "Name",
    "Avatar",
    "Builder",
    "Abilities",
    "Attack Type",
    "Defense Type",
    "Attack Range",
  ];

  useEffect(() => {
    const unitByBuilder = async (builder: string) => {
      await axios(`/unit/builder/${builder}`)
        .then((res) => {
          setDisplayUnits((prevUnits) => [...prevUnits, ...res.data.units]);
          return;
        })
        .catch((error) => {
          console.log(error);
          return;
        });
    };
    unitByBuilder("artic");
  }, []);

  let unitDisplay;

  if (displayUnits.length > 0) {
    const unitCopy: UnitInterface[] = [...displayUnits];
    unitDisplay = unitCopy.map((unit) => (
      <IndividualUnit
        key={unit.ID}
        unitName={unit.Name}
        builder={unit.Builder}
        abilities={unit.Abilities}
        abilityDescriptions={unit["Ability Description"]}
        attack={unit["Attack Type"]}
        defense={unit["Defense Type"]}
        rangeType={unit["Melee / Ranged"]}
        rangeNumber={unit["Range"]}
      />
    ));
  }

  return (
    <main>
      <BackgroundDiv height="100%">
        <Filter displayUnits={displayUnits} setDisplayUnits={setDisplayUnits} />
        <UnitContainer>
          <UnitHeadingsContainer>
            {titles.map((title) => (
              <UnitHeadings key={title}>{title}</UnitHeadings>
            ))}
          </UnitHeadingsContainer>
          {unitDisplay}
        </UnitContainer>
      </BackgroundDiv>
    </main>
  );
};

export default units;

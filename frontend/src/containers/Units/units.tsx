import axios from "axios";
import React, { useEffect, useState } from "react";

import UnitInterface from "../../shared/Interfaces/unit-interface";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";
import Filter from "./Filter/filter";
import searchWithFilters from "./Filter/Requests/search-with-filters";
import UnitList from "./Unit-List/unit-list";
import {
  UnitContainer,
  UnitHeadings,
  UnitHeadingsContainer,
} from "./unit-styles";

const Units: React.FC = () => {
  const [displayUnits, setDisplayUnits] = useState<UnitInterface[]>([]);

  const titles = [
    "Name",
    "Avatar",
    "Builder",
    "Tier",
    "Abilities",
    "Attack",
    "Defence",
  ];

  useEffect(() => {
    const getUnitsToDisplay = async (builder: string) => {
      await axios(`/api/unit/builder/${builder}`)
        .then((res) => {
          setDisplayUnits((prevUnits) => [...res.data.units]);
          return;
        })
        .catch((error) => {
          return;
        });
    };
    const storedFilter = sessionStorage.getItem("filterSettings");
    if (storedFilter) {
      const storedObj = JSON.parse(storedFilter);

      searchWithFilters(storedObj, setDisplayUnits);
    } else {
      getUnitsToDisplay("artic");
    }
  }, []);

  let unitListDisplay;

  if (displayUnits.length > 0) {
    const unitCopy: UnitInterface[] = [...displayUnits];
    unitListDisplay = unitCopy.map((unit) => (
      <UnitList
        key={unit.ID}
        id={unit.ID}
        builderId={unit["Builder ID"]}
        unitName={unit.Name}
        tier={unit["Unit Tier"]}
        builder={unit.Builder}
        abilities={unit.Abilities}
        abilityDescriptions={unit["Ability Description"]}
        attack={unit["Attack Type"]}
        defense={unit["Defense Type"]}
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
          {unitListDisplay}
        </UnitContainer>
      </BackgroundDiv>
    </main>
  );
};

export default Units;

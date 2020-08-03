import React, { useState } from "react";

import ErrorDisplay from "../../../components/ErrorDisplay/error-display";
import CheckboxFilters from "../../../components/UnitSearch/Filters/checkboxes";
import DropdownFilters from "../../../components/UnitSearch/Filters/dropdowns";
import SearchFilter from "../../../components/UnitSearch/Filters/search";
import TierFilter from "../../../components/UnitSearch/Filters/tier-range";
import searchByName from "../../../components/UnitSearch/Requests/search-by-name";
import searchWithFilters from "../../../components/UnitSearch/Requests/search-with-filters";
import UnitInterface from "../../../shared/Interfaces/unit-interface";
import {
  ButtonContainer,
  FilterContainer,
  ResetButton,
  SubmitButton,
} from "./filter-styles";

interface FilterProps {
  displayUnits: UnitInterface[];
  setDisplayUnits: (
    value: UnitInterface[] | ((value: UnitInterface[]) => UnitInterface[])
  ) => void;
}

export interface AbilityTypes {
  [key: string]: boolean;
}

interface TierTypes {
  from: number;
  to: number;
}

export interface FilterObjectInterface {
  builder: string;
  range: string;
  attack: string;
  defense: string;
  tier: TierTypes;
  abilities: AbilityTypes;
}

const defaultFilters: FilterObjectInterface = {
  builder: "any",
  range: "either",
  attack: "any",
  defense: "any",
  tier: {
    from: 1,
    to: 6,
  },
  abilities: {
    aura: false,
    buff: false,
    debuff: false,
    splash: false,
    heal: false,
    stun: false,
    summon: false,
  },
};

const defaultFilterState = (): FilterObjectInterface => {
  const storedFilters = sessionStorage.getItem("filterSettings");
  return storedFilters !== null ? JSON.parse(storedFilters) : defaultFilters;
};

const Filter: React.FC<FilterProps> = (props) => {
  const filterDefault = defaultFilterState();
  const [displayErrors, setDisplayErrors] = useState<string>("");
  const [unitName, setUnitName] = useState<string>("");
  const [unitFilters, setUnitFilters] = useState<FilterObjectInterface>(
    filterDefault
  );

  const handleFormReset = () => {
    setUnitFilters((prevFilters) => defaultFilters);
  };

  const handleFilterSubmit = async (event: React.FormEvent, name?: string) => {
    event.preventDefault();
    setDisplayErrors("");
    if (unitName.length > 0) {
      await searchByName(unitName, props.setDisplayUnits, setDisplayErrors);
    } else {
      await searchWithFilters(
        unitFilters,
        props.setDisplayUnits,
        setDisplayErrors
      );
      sessionStorage.setItem("filterSettings", JSON.stringify(unitFilters));
    }
  };

  const errorDisplay = (
    <ErrorDisplay
      displayErrors={displayErrors}
      clicked={() => setDisplayErrors("")}
      show={displayErrors ? true : false}
      advice="Lessen your search criteria"
    />
  );

  return (
    <FilterContainer>
      <form onSubmit={(event) => handleFilterSubmit(event, unitName)}>
        <SearchFilter unitName={unitName} setUnitName={setUnitName} />
        {displayErrors ? errorDisplay : null}
        <DropdownFilters
          unitFilters={unitFilters}
          setUnitFilters={setUnitFilters}
        />
        <TierFilter unitFilters={unitFilters} setUnitFilters={setUnitFilters} />
        <CheckboxFilters
          unitFilters={unitFilters}
          setUnitFilters={setUnitFilters}
        />
        <ButtonContainer>
          <SubmitButton type="submit" value="Search" />
          <ResetButton type="button" value="Reset" onClick={handleFormReset} />
        </ButtonContainer>
      </form>
    </FilterContainer>
  );
};

export default Filter;

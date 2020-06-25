import React, { useState } from "react";

import ErrorDisplay from "../../../components/ErrorDisplay/error-display";
import UnitInterface from "../../../shared/Interfaces/unit-interface";
import { FilterContainer, SubmitButton } from "./filter-styles";
import CheckboxFilters from "./Filters/checkboxes";
import DropdownFilters from "./Filters/dropdowns";
import SearchFilter from "./Filters/search";
import TierFilter from "./Filters/tier-range";
import searchByName from "./Requests/search-by-name";
import searchWithFilters from "./Requests/search-with-filters";

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

const Filter: React.FC<FilterProps> = (props) => {
  const [displayErrors, setDisplayErrors] = useState<string>("");
  const [unitName, setUnitName] = useState<string>("");
  const [unitFilters, setUnitFilters] = useState<FilterObjectInterface>({
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
  });

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
        <SubmitButton type="submit" value="Search" />
      </form>
    </FilterContainer>
  );
};

export default Filter;

// create a filter/form to go above the unit table, where users can:
// create their own view for the table of units.
// e.g. at the moment their is 7 columns, but it should allow the user to
// change these columns as they see fit.

// this filter/form component should also doubly work as a filtering option too
// e.g. dropdown for builders, unit tiers, attack types, def types etc.
// default settings can be all builders or maybe just artic? with the columns I have above
// depending on the filter, the view below is automatically updated

///create either dropdown or checkbox for melee / ranged.

// create an array with objects holding options info and MAP these options
// e.g. <select onChange={myfunc} value={myvalue}>
//        {options.map(item => (
//          <option key={item.key} value={item.value}>{item.name}</option>
//))}

// figure out the default selected option thing.

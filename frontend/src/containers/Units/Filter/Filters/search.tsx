import React from "react";

import { SearchInput, SearchLabel } from "../filter-styles";

interface SearchProps {
  unitName?: string;
  setUnitName: (value: string | ((value: string) => string)) => void;
}

const searchFilter: React.FC<SearchProps> = (props) => {
  return (
    <React.Fragment>
      <SearchLabel htmlFor="search">Unit Filters</SearchLabel>
      <SearchInput
        id="search"
        type="search"
        name="search"
        pattern="[a-zA-Z\s]+"
        title="Include only letters and spaces or, leave empty"
        placeholder="Search by Unit Name"
        value={props.unitName}
        onChange={(event) => props.setUnitName(event.target.value)}
      />
    </React.Fragment>
  );
};

export default searchFilter;

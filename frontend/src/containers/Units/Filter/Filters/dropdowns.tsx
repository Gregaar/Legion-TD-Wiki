import React from "react";

import { FilterObjectInterface } from "../filter";
import {
  DropdownContainer,
  DropdownLabel,
  DropdownSelect,
} from "../filter-styles";

interface DropdownProps {
  unitFilters: FilterObjectInterface;
  setUnitFilters: (
    value:
      | FilterObjectInterface
      | ((value: FilterObjectInterface) => FilterObjectInterface)
  ) => void;
}

const dropdownFilters: React.FC<DropdownProps> = (props) => {
  const builderOptions: string[] = [
    "any",
    "artic",
    "beast",
    "demi-human",
    "element",
    "elf",
    "ghost",
    "goblin",
    "marine",
    "mech",
    "nature",
    "orc",
    "paladin",
    "shadow",
    "undead",
  ];

  const rangedOptions = ["either", "melee", "ranged"];

  const attackOptions = ["any", "chaos", "pierce", "normal", "magic", "siege"];

  const defenseOptions = [
    "any",
    "unarmored",
    "light",
    "medium",
    "heavy",
    "fortified",
  ];

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    key: string
  ) => {
    const { value }: { value: string } = event.target;
    const objKey = key;
    props.setUnitFilters((prevFilters) => {
      return {
        ...prevFilters,
        [objKey]: value,
      };
    });
  };

  return (
    <DropdownContainer>
      <DropdownLabel htmlFor="builderFilter">Builder:</DropdownLabel>
      <DropdownSelect
        id="builderFilter"
        name="builderFilter"
        value={props.unitFilters.builder}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleFilterChange(event, "builder")
        }
      >
        {builderOptions.map((builder) => (
          <option key={builder} value={builder}>
            {builder.charAt(0).toUpperCase() + builder.substring(1)}
          </option>
        ))}
      </DropdownSelect>

      <DropdownLabel htmlFor="rangedFilter">Attack Range:</DropdownLabel>
      <DropdownSelect
        id="rangedFilter"
        name="rangedFilter"
        value={props.unitFilters.range}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleFilterChange(event, "range")
        }
      >
        {rangedOptions.map((range) => (
          <option key={range} value={range}>
            {range.charAt(0).toUpperCase() + range.substring(1)}
          </option>
        ))}
      </DropdownSelect>

      <DropdownLabel htmlFor="attackFilter">Attack Type:</DropdownLabel>
      <DropdownSelect
        id="attackFilter"
        name="attackFilter"
        value={props.unitFilters.attack}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleFilterChange(event, "attack")
        }
      >
        {attackOptions.map((attack) => (
          <option key={attack} value={attack}>
            {attack.charAt(0).toUpperCase() + attack.substring(1)}
          </option>
        ))}
      </DropdownSelect>

      <DropdownLabel htmlFor="defenseFilter">Defence Type:</DropdownLabel>
      <DropdownSelect
        id="defenseFilter"
        name="defenseFilter"
        value={props.unitFilters.defense}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleFilterChange(event, "defense")
        }
      >
        {defenseOptions.map((defense) => (
          <option key={defense} value={defense}>
            {defense.charAt(0).toUpperCase() + defense.substring(1)}
          </option>
        ))}
      </DropdownSelect>
    </DropdownContainer>
  );
};

export default dropdownFilters;

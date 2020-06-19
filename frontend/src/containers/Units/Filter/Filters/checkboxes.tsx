import React from "react";
import { FilterObjectInterface } from "../filter";
import {
  AbilitiesHeading,
  CheckboxContainer,
  CheckboxLabel,
  CheckboxInput,
} from "../filter-styles";

interface CheckboxProps {
  unitFilters: FilterObjectInterface;
  setUnitFilters: (
    value:
      | FilterObjectInterface
      | ((value: FilterObjectInterface) => FilterObjectInterface)
  ) => void;
}

const checkboxFilters: React.FC<CheckboxProps> = (props) => {
  const abilityOptions = [
    "aura",
    "buff",
    "debuff",
    "splash",
    "heal",
    "stun",
    "summon",
  ];

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    ability: string
  ) => {
    const { checked }: { checked: boolean } = event.target;
    props.setUnitFilters((prevFilters) => {
      return {
        ...prevFilters,
        abilities: {
          ...prevFilters.abilities,
          [ability]: checked,
        },
      };
    });
  };

  return (
    <React.Fragment>
      <AbilitiesHeading>Unit Ability Types</AbilitiesHeading>
      <CheckboxContainer>
        {abilityOptions.map((ability, index) => (
          <React.Fragment key={ability}>
            <CheckboxInput
              type="checkbox"
              id={ability}
              name={ability}
              order={index}
              value={ability}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleCheckboxChange(event, ability)
              }
            />
            <CheckboxLabel htmlFor={ability} order={index}>
              {ability.charAt(0).toUpperCase() + ability.substring(1)}
            </CheckboxLabel>
          </React.Fragment>
        ))}
      </CheckboxContainer>
    </React.Fragment>
  );
};

export default checkboxFilters;

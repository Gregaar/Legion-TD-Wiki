import React from "react";

import { FilterObjectInterface } from "../../../containers/UnitSearch/Filter/filter";
import {
  TierHeading,
  TierInput,
  TierLabel,
  TierRangeContainer,
} from "../../../containers/UnitSearch/Filter/filter-styles";

interface TierRangeProps {
  unitFilters: FilterObjectInterface;
  setUnitFilters: (
    value:
      | FilterObjectInterface
      | ((value: FilterObjectInterface) => FilterObjectInterface)
  ) => void;
}

const tierFilter: React.FC<TierRangeProps> = (props) => {
  const handleTierChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const { value }: { value: string } = event.target;
    let inputValue = +value;

    if (key === "from" && props.unitFilters.tier.to < inputValue) {
      inputValue = inputValue - 1;
    } else if (key === "to" && props.unitFilters.tier.from > inputValue) {
      inputValue = inputValue + 1;
    }

    props.setUnitFilters((prevFilters) => {
      return {
        ...prevFilters,
        tier: {
          ...prevFilters.tier,
          [key]: inputValue,
        },
      };
    });
  };

  return (
    <TierRangeContainer>
      <TierHeading>Unit Tiers</TierHeading>
      <TierLabel htmlFor="tierFrom">From:</TierLabel>
      <TierInput
        type="number"
        name="tierFrom"
        id="tierFrom"
        min="1"
        max="6"
        value={props.unitFilters.tier.from}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleTierChange(event, "from")
        }
      />
      <TierLabel htmlFor="tierTo">To:</TierLabel>
      <TierInput
        type="number"
        name="tierTo"
        id="tierTo"
        min="1"
        max="6"
        value={props.unitFilters.tier.to}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleTierChange(event, "to")
        }
      />
    </TierRangeContainer>
  );
};

export default tierFilter;

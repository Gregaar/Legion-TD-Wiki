import React from "react";

import {
  HeadingContainer,
  UnitContainer,
  UnitHeadings,
} from "../../../containers/UnitSearch/unit-styles";
import UnitInterface from "../../../shared/Interfaces/unit-interface";
import IconListRow from "./icon-list-row";

interface ListOrder {
  [key: string]: string;
}

interface UnitIconListProps {
  units: UnitInterface[];
  listOrder: ListOrder;
  handleReorder: (val: string) => void;
}

const unitIconList: React.FC<UnitIconListProps> = ({
  units,
  listOrder,
  handleReorder,
}) => {
  const listTitles = [
    "Unit Name",
    "Builder",
    "Tier",
    "Ability 1",
    "Ability 2",
    "Attack Type",
    "Defence Type",
  ];

  const iconList = units.map((unit) => (
    <IconListRow
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

  return (
    <UnitContainer>
      <HeadingContainer>
        {listTitles.map((title) => (
          <UnitHeadings key={title} onClick={() => handleReorder(title)}>
            {title}{" "}
            {listOrder[title] === "asc"
              ? "↑"
              : listOrder[title] === "desc"
              ? "↓"
              : null}
          </UnitHeadings>
        ))}
      </HeadingContainer>
      {iconList}
    </UnitContainer>
  );
};

export default unitIconList;

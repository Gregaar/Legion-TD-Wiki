import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import UnitInterface from "../../shared/Interfaces/unit-interface";
import Filter from "./Filter/filter";
import searchWithFilters from "./Filter/Requests/search-with-filters";
import sortListOrder from "./Services/reorder-units";
import UnitList from "./Unit-List/unit-list";
import { HeadingContainer, UnitContainer, UnitHeadings } from "./unit-styles";

export interface ListOrderInterface {
  [key: string]: string;
}

export const defaultOrderState = {
  Unit: "",
  Builder: "",
  Tier: "",
  "Ability 1": "",
  "Ability 2": "",
  "Attack Type": "",
  "Defence Type": "",
};

const Units: React.FC = () => {
  const [displayUnits, setDisplayUnits] = useState<UnitInterface[]>([]);
  const [listOrder, setListOrder] = useState<ListOrderInterface>(
    defaultOrderState
  );

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

  const listTitles = [
    "Unit",
    "Builder",
    "Tier",
    "Ability 1",
    "Ability 2",
    "Attack Type",
    "Defence Type",
  ];

  let unitListDisplay: JSX.Element[] | undefined;

  const mapDisplayUnits = (listCopy: UnitInterface[]) => {
    unitListDisplay = listCopy.map((unit) => (
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
  };

  if (displayUnits.length > 0) {
    const unitCopy: UnitInterface[] = [...displayUnits];
    mapDisplayUnits(unitCopy);
  }

  const handleReorder = (title: string): void => {
    sortListOrder(
      title,
      displayUnits,
      setDisplayUnits,
      listOrder,
      setListOrder
    );
  };

  return (
    <main>
      <div>
        <Helmet>
          <title>{`Legion TD Mega Wiki | Unit / Tower Search`}</title>
          <meta
            name="description"
            content={`Search for Units / Towers. Filter by Name, Builder, Tier, Ability, Range, Attack Type, Defence Type.`}
          />
        </Helmet>
      </div>
      <React.Fragment>
        <Filter
          displayUnits={displayUnits}
          setDisplayUnits={setDisplayUnits}
          setListOrder={setListOrder}
        />
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
          {unitListDisplay}
        </UnitContainer>
      </React.Fragment>
    </main>
  );
};

export default Units;

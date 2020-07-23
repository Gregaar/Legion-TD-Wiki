import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import UnitInterface from "../../shared/Interfaces/unit-interface";
import Filter from "./Filter/filter";
import searchWithFilters from "./Filter/Requests/search-with-filters";
import sortListOrder from "./Services/reorder-units";
import IconList from "./Icon-List/icon-list";
import CardList from "./Card-List/card-list";
import { TypeHeading, ButtonContainer, ListButton } from "./unit-styles";

export interface ListOrderInterface {
  [key: string]: string;
}

export const defaultOrderState = {
  "Unit Name": "",
  Builder: "",
  Tier: "",
  "Ability 1": "",
  "Ability 2": "",
  "Attack Type": "",
  "Defence Type": "",
};

const getDefaultListType = (): string => {
  const storedListType = sessionStorage.getItem("listType");
  return storedListType !== null ? JSON.parse(storedListType) : "icons";
};

const getDefaultListOrder = (): ListOrderInterface => {
  const storedListOrder = sessionStorage.getItem("listOrder");
  return storedListOrder !== null
    ? JSON.parse(storedListOrder)
    : defaultOrderState;
};

const Units: React.FC = () => {
  const userListType = getDefaultListType();
  const userListOrder = getDefaultListOrder();
  const [displayUnits, setDisplayUnits] = useState<UnitInterface[]>([]);
  const [listType, setListType] = useState<string>(userListType);
  const [listOrder, setListOrder] = useState<ListOrderInterface>(userListOrder);

  useEffect(() => {
    sessionStorage.setItem("listOrder", JSON.stringify(listOrder));
  }, [listOrder]);

  useEffect(() => {
    const storedList = sessionStorage.getItem("listOrder");
    const parsedList = storedList !== null ? JSON.parse(storedList) : null;
    if (
      storedList &&
      storedList !== JSON.stringify(defaultOrderState) &&
      displayUnits.length >= 1
    ) {
      const listArray: [string, string][] = Object.entries(parsedList);
      const index = listArray.findIndex((ele) => ele[1] !== "");
      handleReorder(listArray[index][0], listArray[index][1]);
    }
    //eslint-disable-next-line
  }, [displayUnits.length]);

  useEffect(() => {
    const getUnitsToDisplay = async (builder: string) => {
      await axios(`/api/unit/builder/${builder}`)
        .then((res) => {
          setDisplayUnits((prevUnits) => [...res.data.units]);
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

  const handleListType = (type: string): void => {
    if (type === "icons" && listType !== "icons") {
      setListType((prevType) => "icons");
      sessionStorage.setItem("listType", JSON.stringify("icons"));
    } else if (type === "cards" && listType !== "cards") {
      setListType((prevType) => "cards");
      sessionStorage.setItem("listType", JSON.stringify("cards"));
    }
  };

  const handleReorder = (title: string, sortOrder?: string): void => {
    if (!sortOrder) {
      sortListOrder(
        title,
        [...displayUnits],
        setDisplayUnits,
        listOrder,
        setListOrder
      );
    } else {
      sortListOrder(
        title,
        [...displayUnits],
        setDisplayUnits,
        listOrder,
        setListOrder,
        sortOrder
      );
    }
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
          displayUnits={[...displayUnits]}
          setDisplayUnits={setDisplayUnits}
        />

        <ButtonContainer>
          <TypeHeading>List Type</TypeHeading>
          <ListButton
            color="deepskyblue"
            onClick={() => handleListType("icons")}
          >
            Icons
          </ListButton>
          <ListButton
            color="darkorange"
            onClick={() => handleListType("cards")}
          >
            Cards
          </ListButton>
        </ButtonContainer>
        {listType === "icons" ? (
          <IconList
            units={[...displayUnits]}
            listOrder={listOrder}
            handleReorder={handleReorder}
          />
        ) : (
          <CardList
            units={[...displayUnits]}
            listOrder={listOrder}
            handleReorder={handleReorder}
          />
        )}
      </React.Fragment>
    </main>
  );
};

export default Units;

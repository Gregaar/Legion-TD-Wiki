import React from "react";
import shortid from "shortid";

import UnitCard from "../../../containers/UnitSearch/UnitCard/unit-card";
import { ListOrderInterface } from "../../../containers/UnitSearch/units";
import UnitInterface from "../../../shared/Interfaces/unit-interface";
import { CardContainer } from "./card-list-styles";
import OrderForm from "./order-form";

interface UnitCardListProps {
  units: UnitInterface[];
  listOrder: ListOrderInterface;
  handleReorder: (val: string, order?: string) => void;
}

const cardList: React.FC<UnitCardListProps> = ({
  units,
  listOrder,
  handleReorder,
}) => {
  const cardsToDisplay = units.map((unit) => (
    <UnitCard
      key={shortid.generate()}
      unit={unit}
      disableInfoNav
      nameNav
      showExtras
    />
  ));

  return (
    <>
      <OrderForm handleReorder={handleReorder} listOrder={listOrder} />
      <CardContainer>{cardsToDisplay}</CardContainer>
    </>
  );
};

export default cardList;

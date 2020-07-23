import React, { useState } from "react";
import shortid from "shortid";
import { FormContainer, Label, Input } from "./card-list-styles";
import { ListButton } from "../unit-styles";
import { ListOrderInterface } from "../units";

interface OrderFormProps {
  listOrder: ListOrderInterface;
  handleReorder: (val: string, order?: string) => void;
}

interface SortProperties {
  title: string;
  order: string;
}

const listTitles = [
  "Unit Name",
  "Builder",
  "Tier",
  "Ability 1",
  "Ability 2",
  "Attack Type",
  "Defence Type",
];

const OrderForm: React.FC<OrderFormProps> = ({ listOrder, handleReorder }) => {
  const listOrderArray = Object.entries(listOrder);
  const currentOrderIndex = listOrderArray.findIndex((arr) => arr[1] !== "");
  const defaultSortProperties: SortProperties =
    currentOrderIndex !== -1
      ? {
          title: listOrderArray[currentOrderIndex][0],
          order: listOrderArray[currentOrderIndex][1],
        }
      : { title: "", order: "" };

  const [sortProperties, setSortProperties] = useState<SortProperties>(
    defaultSortProperties
  );

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleReorder(sortProperties.title, sortProperties.order);
  };

  const handleStateChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    sortBy: string
  ) => {
    const { value } = event.target;
    if (sortBy === "title" && sortProperties.title !== value) {
      setSortProperties((prevProps) => {
        return {
          ...prevProps,
          title: value,
        };
      });
    } else if (sortProperties.order !== value) {
      setSortProperties((prevProps) => {
        return {
          ...prevProps,
          order: value,
        };
      });
    }
  };

  return (
    <FormContainer>
      <h2 style={{ margin: "1rem auto" }}>List Order</h2>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <Label htmlFor="order">Sort By</Label>
        <select
          id="order"
          name="order"
          value={sortProperties.title}
          onChange={(e) => handleStateChange(e, "title")}
        >
          {listTitles.map((title) => (
            <React.Fragment key={shortid.generate()}>
              <option value={title}>{title}</option>
            </React.Fragment>
          ))}
        </select>
        <br />
        <Label htmlFor="asc">Ascending</Label>
        <Input
          type="radio"
          id="asc"
          name="sort"
          value="asc"
          checked={sortProperties.order === "asc"}
          onChange={(e) => handleStateChange(e, "order")}
        />
        <Label htmlFor="desc">Descending</Label>
        <Input
          type="radio"
          id="desc"
          name="sort"
          value="desc"
          checked={sortProperties.order === "desc"}
          onChange={(e) => handleStateChange(e, "order")}
        />
        <ListButton color="limegreen" type="submit" value="submit">
          Submit
        </ListButton>
      </form>
    </FormContainer>
  );
};

export default OrderForm;

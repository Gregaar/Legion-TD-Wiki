import UnitInterface from "../../../shared/Interfaces/unit-interface";
import { ListOrderInterface, defaultOrderState } from "../units";

type SetUnits = (
  value: UnitInterface[] | ((value: UnitInterface[]) => UnitInterface[])
) => void;


type SetListOrderType = (
  value:
    | ListOrderInterface
    | ((value: ListOrderInterface) => ListOrderInterface)
) => void;

const reorderList = (
  title: string,
  order: string,
  currentUnits: UnitInterface[],
  setUnits: SetUnits
): void => {
  switch (title) {
    case "Unit":
      currentUnits.sort((a, b) => {
        let comparison;
        comparison = a.Name.localeCompare(b.Name);
        return order === "desc" ? comparison * -1 : comparison;
      });
      setUnits((prevUnits) => [...currentUnits]);
      break;
    case "Builder":
      currentUnits.sort((a, b) => {
        let comparison;
        comparison = a.Builder.localeCompare(b.Builder);
        return order === "desc" ? comparison * -1 : comparison;
      });
      setUnits((prevUnits) => [...currentUnits]);
      break;
    case "Tier":
      currentUnits.sort((a, b) => {
        let comparison;
        comparison = a["Unit Tier"] - b["Unit Tier"];
        return order === "desc" ? comparison * -1 : comparison;
      });
      setUnits((prevUnits) => [...currentUnits]);
      break;
    case "Ability 1":
      currentUnits.sort((a, b) => {
        let comparison;
        if (!a.Abilities) {
          comparison = 1;
        } else if (!b.Abilities) {
          comparison = -1;
        } else if (!a.Abilities && !b.Abilities) {
          comparison = 0;
        } else {
          comparison = 0;
        }
        return order === "desc" ? comparison * -1 : comparison;
      });
      setUnits((prevUnits) => [...currentUnits]);
      break;
    case "Ability 2":
      currentUnits.sort((a, b) => {
        let comparison;
        if (!a.Abilities) {
          comparison = 1;
        } else if (!b.Abilities) {
          comparison = -1;
        } else if (!a.Abilities && !b.Abilities) {
          comparison = 0;
        } else if (
          a.Abilities &&
          a.Abilities.length < 2 &&
          b.Abilities &&
          b.Abilities.length < 2
        ) {
          comparison = 0;
        } else if (
          a.Abilities &&
          a.Abilities.length > 1 &&
          b.Abilities &&
          b.Abilities.length < 2
        ) {
          comparison = -1;
        } else if (
          a.Abilities &&
          a.Abilities.length < 2 &&
          b.Abilities &&
          b.Abilities.length > 1
        ) {
          comparison = 1;
        } else {
          comparison = 0;
        }
        return order === "desc" ? comparison * -1 : comparison;
      });
      setUnits((prevUnits) => [...currentUnits]);
      break;
    case "Attack Type":
      currentUnits.sort((a, b) => {
        let comparison;
        comparison = (" " + a["Attack Type"]).localeCompare(
          " " + b["Attack Type"]
        );
        return order === "desc" ? comparison * -1 : comparison;
      });
      setUnits((prevUnits) => [...currentUnits]);
      break;
    case "Defence Type":
      currentUnits.sort((a, b) => {
        let comparison;
        comparison = (" " + a["Defense Type"]).localeCompare(
          " " + b["Defense Type"]
        );
        return order === "desc" ? comparison * -1 : comparison;
      });
      setUnits((prevUnits) => [...currentUnits]);
      break;
  }
};

export default (
  title: string,
  currentList: UnitInterface[],
  setCurrentList: SetUnits,
  listOrder: ListOrderInterface,
  setListOrder: SetListOrderType
) => {
  if (listOrder[title] === "") {
    setListOrder(defaultOrderState);
    setListOrder((prevOrder) => {
      return {
        ...prevOrder,
        [title]: "asc",
      };
    });
    reorderList(title, "asc", [...currentList], setCurrentList);
  } else if (listOrder[title] === "asc") {
    setListOrder(defaultOrderState);
    setListOrder((prevOrder) => {
      return {
        ...prevOrder,
        [title]: "desc",
      };
    });
    reorderList(title, "desc", [...currentList], setCurrentList);
  } else if (listOrder[title] === "desc") {
    setListOrder(defaultOrderState);
    setListOrder((prevOrder) => {
      return {
        ...prevOrder,
        [title]: "asc",
      };
    });
    reorderList(title, "asc", [...currentList], setCurrentList);
  }
};

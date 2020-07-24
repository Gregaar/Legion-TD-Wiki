import axios from "axios";

import UnitInterface from "../../../shared/Interfaces/unit-interface";

interface SearchByNameArgs {
  (
    name: string,
    setUnits: (
      value: UnitInterface[] | ((value: UnitInterface[]) => UnitInterface[])
    ) => void,
    setErrors: (value: string | ((value: string) => string)) => void
  ): void;
}

const searchByName: SearchByNameArgs = async (
  name,
  setUnits,
  setErrors
): Promise<void> => {
  await axios(`/api/unit/name/${name}`)
    .then((res) => {
      setUnits((prevUnits: UnitInterface[]) => [res.data.units]);
      return;
    })
    .catch((error) => {
      setErrors((prevErrors: string) => error.response.data.error);
      return;
    });
};

export default searchByName;

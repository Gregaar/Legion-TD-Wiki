import axios from "axios";

import { UnitInterface } from "../../units";

const apiURL = process.env.REACT_APP_API_URL;

const searchByName = async (
  name: string,
  setUnits: (
    value: UnitInterface[] | ((value: UnitInterface[]) => UnitInterface[])
  ) => void,
  setErrors: (value: string | ((value: string) => string)) => void
): Promise<void> => {
  await axios(`${apiURL}/api/unit/name/${name}`)
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

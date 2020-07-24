import axios from "axios";

import UnitInterface from "../../../shared/Interfaces/unit-interface";
import { FilterObjectInterface } from "../../../containers/UnitSearch/Filter/filter";

interface SearchWithFiltersArgs {
  (
    unitFilters: FilterObjectInterface,
    setUnits: (
      value: UnitInterface[] | ((value: UnitInterface[]) => UnitInterface[])
    ) => void,
    setErrors?: (value: string | ((value: string) => string)) => void
  ): void;
}

const searchWithFilters: SearchWithFiltersArgs = async (
  unitFilters,
  setUnits,
  setErrors
): Promise<void> => {
  const { builder, range, attack, defense, tier, abilities } = unitFilters;

  await axios(
    `/api/unit/filters?builder=${builder}&range=${range}&attack=${attack}&defense=${defense}&tierFrom=${tier.from}&tierTo=${tier.to}&aura=${abilities.aura}&buff=${abilities.buff}&debuff=${abilities.debuff}&splash=${abilities.splash}&heal=${abilities.heal}&stun=${abilities.stun}&summon=${abilities.summon}`
  )
    .then((res) => {
      if (res.status === 200) {
        setUnits((prevUnits: UnitInterface[]) => [...res.data.units]);
        return;
      }
    })
    .catch((error) => {
      if (setErrors) {
        setErrors((prevErrors: string) => error.response.data.error);
        return error.response.data.error;
      } else {
        return error.response.data.error;
      }
    });
};

export default searchWithFilters;

import axios from "axios";
import { UnitInterface } from "../../units";
import { FilterObjectInterface } from "../filter";

const searchWithFilters = async (
  unitFilters: FilterObjectInterface,
  setUnits: (
    value: UnitInterface[] | ((value: UnitInterface[]) => UnitInterface[])
  ) => void,
  setErrors: (value: string | ((value: string) => string)) => void
): Promise<void> => {
  const { builder, range, attack, defense, tier, abilities } = unitFilters;

  await axios(
    `/unit/filters?builder=${builder}&range=${range}&attack=${attack}&defense=${defense}&tierFrom=${tier.from}&tierTo=${tier.to}&aura=${abilities.aura}&buff=${abilities.buff}&debuff=${abilities.debuff}&splash=${abilities.splash}&heal=${abilities.heal}&stun=${abilities.stun}&summon=${abilities.summon}`
  )
    .then((res) => {
      if (res.status === 200) {
        setUnits((prevUnits: UnitInterface[]) => [...res.data.units]);
        return;
      }
    })
    .catch((error) => {
      setErrors((prevErrors: string) => error.response.data.error);
    });
};

export default searchWithFilters;

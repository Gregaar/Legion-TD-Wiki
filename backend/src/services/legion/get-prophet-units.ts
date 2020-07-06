import { UnitInterface } from "../../interfaces/legion/unit-interface";
import Unit from "../../models/legion/Unit";

export default async (tier: number): Promise<UnitInterface[]> => {
  try {
    const baseUnit: UnitInterface = await Unit.aggregate([
      {
        $match: {
          "Unit Tier": tier,
          "Base Unit Name": null,
          Builder: { $not: /hybrid/gm },
        },
      },
      { $sample: { size: 1 } },
    ]).then((units) => {
      return units[0];
    });

    const baseUnitName = `^${baseUnit.Name}$`;
    const baseNameRegExp = new RegExp(baseUnitName, "gm");

    const upgradedUnits = await Unit.aggregate([
      {
        $match: {
          "Unit Tier": tier,
          Name: { $not: baseNameRegExp },
          Builder: baseUnit.Builder,
        },
      },
    ]).then((units) => {
      return [...units];
    });

    return [baseUnit, ...upgradedUnits];
  } catch (error) {
    return error;
  }
};

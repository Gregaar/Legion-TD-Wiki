import { RequestHandler } from "express";

import Unit from "../../models/legion/Unit";

// e.g. unit: Tuskarr
export const searchByUnitName: RequestHandler<{ name: string }> = async (
  req,
  res,
) => {
  try {
    const unitFound = await Unit.findOne({
      Name: req.params.name.toLowerCase(),
    });

    if (!unitFound) {
      throw new Error();
    }

    return res.status(200).json({ units: unitFound });
  } catch (error) {
    return res
      .status(404)
      .json({ error: `Unable to find unit named ${req.params.name}` });
  }
};

// e.g. builder: Orc
export const searchByUnitBuilder: RequestHandler<{ builder: string }> = async (
  req,
  res,
) => {
  try {
    if (req.params.builder.toLowerCase() === "any") {
      const builderUnits = await Unit.find({});
      return res.status(200).json({ units: [...builderUnits] });
    }

    const builderUnits = await Unit.find({
      Builder: req.params.builder.toLowerCase(),
    });

    if (!builderUnits.length) {
      throw new Error();
    }

    return res.status(200).json({ units: [...builderUnits] });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find units from the ${req.params.builder} builder`,
    });
  }
};

export const queriedUnits: RequestHandler = async (req, res) => {
  try {
    const {
      builder,
      range,
      attack,
      defense,
      tierFrom,
      tierTo,
      aura,
      buff,
      debuff,
      splash,
      heal,
      stun,
      summon,
    } = req.query;

    const queries = [
      ["Builder", builder],
      ["Unit Tier", { $gte: +tierFrom!, $lte: +tierTo! }],
      ["Melee / Ranged", range],
      ["Attack Type", attack],
      ["Defense Type", defense],
      ["Has Aura", aura],
      ["Can Buff", buff],
      ["Can Debuff", debuff],
      ["Can Splash", splash],
      ["Can Heal", heal],
      ["Can Stun", stun],
      ["Can Summon", summon],
    ];

    const queryArray = queries.filter((query) => {
      if (typeof query[1] === "string" || typeof query[1] === "object") {
        return (
          query[1] !== "any" && query[1] !== "either" && query[1] !== "false"
        );
      }
    });

    const filterObject = Object.fromEntries(queryArray);

    const unitsFound = await Unit.find(filterObject);

    if (!unitsFound.length) {
      return res.status(404).json({ error: "No units found " });
    }

    return res.status(200).json({ units: [...unitsFound] });
  } catch (error) {
    return res.status(500).json({ error: "Unable to query units" });
  }
};

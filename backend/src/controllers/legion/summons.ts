import { RequestHandler } from "express";

import Summon from "../../models/legion/Summon";

export const getSummonsByName: RequestHandler<{ name: string }> = async (
  req,
  res,
) => {
  try {
    if (req.params.name.toLowerCase() === "any") {
      const summons = await Summon.find();

      return res.json({ summon: [...summons] });
    } else {
      const summonFound = await Summon.findOne({
        Name: req.params.name.toLowerCase(),
      });

      if (!summonFound) {
        throw new Error();
      }

      return res.json({ summon: summonFound });
    }
  } catch (error) {
    return res.status(404).json({ error: `Unable to find summon` });
  }
};

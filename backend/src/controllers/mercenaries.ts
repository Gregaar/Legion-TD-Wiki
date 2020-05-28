import { RequestHandler } from "express";

import Mercenary from "../models/Mercenary";

export const getMercenariesByName: RequestHandler<{ name: string }> = async (
  req,
  res,
) => {
  try {
    if (req.params.name.toLowerCase() === "any") {
      const mercenaries = await Mercenary.find();

      return res.json({ mercenary: [...mercenaries] });
    } else {
      const mercenaryFound = await Mercenary.findOne({
        Name: req.params.name.toLowerCase(),
      });

      if (!mercenaryFound) {
        throw new Error();
      }

      return res.json({ mercenary: mercenaryFound });
    }
  } catch (error) {
    return res.status(404).json({ error: `Unable to find mercenary` });
  }
};

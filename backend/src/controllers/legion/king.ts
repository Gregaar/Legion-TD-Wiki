import { RequestHandler } from "express";

import King from "../../models/legion/King";
import KingAbility from "../../models/legion/King-Ability";

export const getKingStats: RequestHandler<{ level: string }> = async (
  req,
  res,
) => {
  try {
    if (req.params.level.toLowerCase() === "all") {
      const kingStats = await King.find();

      return res.status(200).json({ stats: kingStats });
    } else if (+req.params.level < 0 || +req.params.level > 30) {
      throw new Error();
    } else {
      const kingStats = await King.find({ Level: +req.params.level });

      return res.status(200).json({ stats: kingStats });
    }
  } catch (error) {
    return res.status(500).json({
      error: `Unable to get King stats for level ${req.params.level}`,
    });
  }
};

export const getKingAbility: RequestHandler<{ abilityName: string }> = async (
  req,
  res,
) => {
  try {
    if (req.params.abilityName.toLowerCase() === "all") {
      const kingAbilities = await KingAbility.find();

      return res.status(200).json({ abilities: kingAbilities });
    } else {
      const kingAbilities = await KingAbility.find({
        Name: req.params.abilityName.toLowerCase(),
      });

      if (!kingAbilities) {
        throw new Error();
      } else {
        return res.status(200).json({ abilities: kingAbilities });
      }
    }
  } catch (error) {
    return res.status(500).json({
      error: `Unable to find King ability called ${req.params.abilityName}`,
    });
  }
};

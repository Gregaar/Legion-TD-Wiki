import { RequestHandler } from "express";

import Wave from "../../models/legion/Wave";

export const findByLevel: RequestHandler<{ level: string }> = async (
  req,
  res,
) => {
  try {
    if (+req.params.level < 1 || +req.params.level > 31) {
      throw new Error();
    }

    const enemyWave = await Wave.findOne({ Level: +req.params.level });

    return res.json({ waves: enemyWave });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find enemy wave ${req.params.level}. Wave levels range from 1 - 31.`,
    });
  }
};

export const findByEnemyName: RequestHandler<{ name: string }> = async (
  req,
  res,
) => {
  try {
    if (req.params.name.toLowerCase() === "any") {
      const enemyWave = await Wave.find({});
      return res.json({ waves: enemyWave });
    }
    const enemyWave = await Wave.findOne({
      "Creep Name": req.params.name.toLowerCase(),
    });

    if (!enemyWave) {
      throw new Error();
    }

    return res.json({ waves: enemyWave });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find enemy wave with creeps called ${req.params.name}`,
    });
  }
};

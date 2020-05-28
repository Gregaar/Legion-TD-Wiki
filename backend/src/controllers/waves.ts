import { RequestHandler } from "express";

import Wave from "../models/Wave";

export const findByLevel: RequestHandler<{ level: string }> = async (
  req,
  res,
) => {
  try {
    if (+req.params.level < 1 || +req.params.level > 32) {
      throw new Error();
    }

    const enemyWave = await Wave.findOne({ Level: +req.params.level });

    return res.json({ wave: enemyWave });
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
    const enemyWave = await Wave.findOne({
      "Creep Name": req.params.name.toLowerCase(),
    });

    if (!enemyWave) {
      throw new Error();
    }

    return res.json({ wave: enemyWave });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find enemy wave with creeps called ${req.params.name}`,
    });
  }
};

export const findByAttackMethod: RequestHandler<{
  attackMethod: string;
}> = async (req, res) => {
  try {
    if (
      req.params.attackMethod.toLowerCase() !== "ranged" &&
      req.params.attackMethod.toLowerCase() !== "melee"
    ) {
      throw new Error();
    }

    const enemyWaves = await Wave.find({
      Type: req.params.attackMethod.toLowerCase(),
    });

    return res.json({ waves: [...enemyWaves] });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find wave with attack method ${req.params.attackMethod}`,
    });
  }
};

export const findByLandOrFlying: RequestHandler<{
  attackStance: string;
}> = async (req, res) => {
  try {
    if (
      !req.params.attackStance ||
      (req.params.attackStance.toLowerCase() !== "land" &&
        req.params.attackStance.toLowerCase() !== "flying")
    ) {
      throw new Error();
    }

    const enemyWaves = await Wave.find({
      Type: req.params.attackStance.toLowerCase(),
    });

    return res.json({ waves: [...enemyWaves] });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find any enemy waves that are ${req.params.attackStance}. Waves are either Land or Flying.`,
    });
  }
};

export const findByAttackType: RequestHandler<{ attackType: string }> = async (
  req,
  res,
) => {
  try {
    if (!req.params.attackType) {
      throw new Error();
    }

    const enemyWaves = await Wave.find({
      "Attack Type": req.params.attackType.toLowerCase(),
    });

    if (!enemyWaves.length) {
      throw new Error();
    }

    return res.json({ waves: [...enemyWaves] });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find enemy waves with attack type ${req.params.attackType}`,
    });
  }
};

export const findByDefenseType: RequestHandler<{
  defenseType: string;
}> = async (req, res) => {
  try {
    if (!req.params.defenseType) {
      throw new Error();
    }

    const enemyWaves = await Wave.find({
      "Defense Type": req.params.defenseType.toLowerCase(),
    });

    if (!enemyWaves.length) {
      throw new Error();
    }

    return res.json({ waves: [...enemyWaves] });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find enemy waves with defense type ${req.params.defenseType}`,
    });
  }
};

export const findByAttackAndDefenseType: RequestHandler<{
  attackType: string;
  defenseType: string;
}> = async (req, res) => {
  try {
    if (!req.query.attackType || !req.query.defenseType) {
      throw new Error();
    }

    const enemyWaves = await Wave.find({
      "Attack Type": req.query.attackType.toString().toLowerCase(),
      "Defense Type": req.query.defenseType.toString().toLowerCase(),
    });

    if (!enemyWaves.length) {
      throw new Error();
    }

    return res.json({ waves: [...enemyWaves] });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find waves with an Attack Type of ${req.query.attackType} and a Defense Type of ${req.query.defenseType}`,
    });
  }
};

export const findBossWaves: RequestHandler<{ boss: string }> = async (
  req,
  res,
) => {
  try {
    if (
      req.params.boss.toString().toLowerCase() !== "true" &&
      req.params.boss.toString().toLowerCase() !== "false"
    ) {
      throw new Error();
    }

    if (req.params.boss.toString().toLowerCase() === "true") {
      const bossWaves = await Wave.find({ Boss: true });

      return res.json({ waves: [...bossWaves] });
    }

    const enemyWaves = await Wave.find({ Boss: false });

    return res.json({ waves: [...enemyWaves] });
  } catch (error) {
    return res
      .status(404)
      .json({ error: "Unable to find enemy waves. Please try again." });
  }
};

export const findDefenseWeakness: RequestHandler<{
  attackType: string;
}> = async (req, res) => {
  try {
    const enemyWaves = await Wave.find({
      "Defense Weakness": req.params.attackType.toLowerCase(),
    });

    if (!enemyWaves.length) {
      throw new Error();
    }

    return res.json({ waves: [...enemyWaves] });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find any waves who's attacks are weak against ${req.params.attackType} attacks.`,
    });
  }
};

import { RequestHandler } from "express";
import Unit from "../models/Unit";

// e.g. unit: Tuskarr
export const searchByUnitName: RequestHandler<{ name: string }> = async (
  req,
  res,
  next
) => {
  try {
    if (!req.params.name) {
      throw new Error();
    }
    const realUnit = await Unit.findOne({
      Name: req.params.name.toLowerCase(),
    });

    if (!realUnit) {
      throw new Error();
    }

    return res.json({ unit: realUnit });
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
  next
) => {
  try {
    if (!req.params.builder) {
      throw new Error();
    }

    const builderUnits = await Unit.find({
      Builder: req.params.builder.toLowerCase(),
    });

    if (!builderUnits.length) {
      throw new Error();
    }

    return res.json({ units: [...builderUnits] });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find units with builder ${req.params.builder}`,
    });
  }
};

//e.g. tier: 6
export const searchByUnitTier: RequestHandler<{ tier: string }> = async (
  req,
  res,
  next
) => {
  try {
    if (!req.params.tier) {
      throw new Error();
    }

    const tierUnits = await Unit.find({ "Unit Tier": +req.params.tier });

    if (!tierUnits.length) {
      throw new Error();
    }

    return res.json({ units: [...tierUnits] });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find any units with tier ${req.params.tier}. Tiers are numbered 1 through 6.`,
    });
  }
};

//e.g. gold: 300
export const searchByUnitGoldCost: RequestHandler<{ gold: string }> = async (
  req,
  res,
  next
) => {
  try {
    if (!req.params.gold) {
      throw new Error();
    }
    const unitsByCost = await Unit.find({ "Gold Cost": +req.params.gold });

    if (!unitsByCost.length) {
      throw new Error();
    }

    return res.json({ units: [...unitsByCost] });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find any units that cost ${req.params.gold} gold.`,
    });
  }
};

// e.g. minGold: 50, maxGold: 300
export const searchByUnitGoldCostRange: RequestHandler<{
  minGold: string;
  maxGold: string;
  builder: string;
}> = async (req, res, next) => {
  try {
    if (!req.query.minGold || !req.query.maxGold || !req.query.builder) {
      throw new Error();
    }
    if (req.query.builder.toString().toLowerCase() === "any") {
      const unitsWithinCost = await Unit.find({
        "Gold Cost": { $gte: +req.query.minGold, $lte: +req.query.maxGold },
      });

      if (!unitsWithinCost.length) {
        throw new Error();
      }
      return res.json({ units: [...unitsWithinCost] });
    }

    const unitsWithinCost = await Unit.find({
      Builder: req.query.builder.toString().toLowerCase(),
      "Gold Cost": { $gte: +req.query.minGold, $lte: +req.query.maxGold },
    });

    if (!unitsWithinCost.length) {
      throw new Error();
    }

    return res.json({ units: [...unitsWithinCost] });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find any units with gold cost between ${req.query.minGold} - ${req.query.maxGold} gold for builder ${req.query.builder}.`,
    });
  }
};

// e.g. unit: Tuskarr
export const findUnitUpgrade: RequestHandler<{ unit: string }> = async (
  req,
  res,
  next
) => {
  try {
    if (!req.query.unit) {
      throw new Error();
    }

    const baseUnit = await Unit.findOne({
      Name: req.params.unit.toLowerCase(),
    });

    if (!baseUnit) {
      throw new Error();
    }

    if ("Upgraded Name" in baseUnit) {
      const upgradedUnit =
        baseUnit["Upgraded Name"] !== null
          ? await Unit.findOne({ Name: baseUnit["Upgraded Name"][0] })
          : new Error();
      return res.json({ unit: upgradedUnit });
    }
  } catch (error) {
    return res
      .status(404)
      .json({ error: `Could not find ${req.params.unit}'s upgraded unit.` });
  }
};

// e.g. Builder: Shadow, attackType: Magic
export const findUnitByAttackType: RequestHandler<{
  builder: string;
  attackType: string;
}> = async (req, res, next) => {
  try {
    if (!req.query.builder || !req.query.attackType) {
      throw new Error();
    }

    if (
      req.query.builder.toString().toLowerCase() === "any" &&
      typeof req.query.attackType === "string"
    ) {
      const unitsFound = await Unit.find({
        "Attack Type": req.query.attackType.toLowerCase(),
      });

      if (!unitsFound.length) {
        throw new Error();
      }

      return res.json({ units: [...unitsFound] });
    }

    const unitsFound = await Unit.find({
      Builder: req.query.builder.toString().toLowerCase(),
      "Attack Type": req.query.attackType.toString().toLowerCase(),
    });

    if (!unitsFound.length) {
      throw new Error();
    }

    return res.json({ units: [...unitsFound] });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find any units with attack type ${req.query.attackType}`,
    });
  }
};

// e.g. builder: Undead, defenseType: Hevay
export const findUnitByDefenseType: RequestHandler<{
  builder: string;
  defenseType: string;
}> = async (req, res, next) => {
  try {
    if (!req.query.builder || !req.query.defenseType) {
      throw new Error();
    }
    if (
      req.query.builder.toString().toLowerCase() === "any" &&
      typeof req.query.defenseType === "string"
    ) {
      const unitsFound = await Unit.find({
        "Defense Type": req.query.defenseType.toLowerCase(),
      });

      if (!unitsFound.length) {
        throw new Error();
      }

      return res.json({ units: [...unitsFound] });
    }

    const unitsFound = await Unit.find({
      Builder: req.query.builder.toString().toLowerCase(),
      "Defense Type": req.query.defenseType.toString().toLowerCase(),
    });

    if (!unitsFound.length) {
      throw new Error();
    }

    return res.json({ units: [...unitsFound] });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find any units with defense type ${req.query.defenseType}`,
    });
  }
};

// e.g. Builder: Artic
export const findUnitWithAura: RequestHandler<{ builder: string }> = async (
  req,
  res,
  next
) => {
  try {
    if (!req.params.builder) {
      throw new Error();
    }

    if (req.params.builder.toString().toLowerCase() === "any") {
      const unitsFound = await Unit.find({ "Has Aura": true });

      return res.json({ units: [...unitsFound] });
    }

    const unitsFound = await Unit.find({
      Builder: req.params.builder.toString().toLowerCase(),
      "Has Aura": true,
    });

    if (!unitsFound.length) {
      throw new Error();
    }

    return res.json({ units: [...unitsFound] });
  } catch (error) {
    return res
      .status(404)
      .json({ error: `Unable to find any units with an aura.` });
  }
};

// e.g. builder: Nature, abilityType: Stun
export const findUnitByUsefulAbility: RequestHandler<{
  builder: string;
  abilityType: string;
}> = async (req, res, next) => {
  try {
    if (!req.query.builder || !req.query.abilityType) {
      throw new Error();
    }

    // Sets ability search dynamically
    const ability: string = `Can ${req.query.abilityType}`;

    if (req.query.builder.toString().toLowerCase() === "any") {
      const unitsFound = await Unit.find({ [ability]: true });
      console.log(unitsFound);
      return res.json({ units: [...unitsFound] });
    }

    const unitsFound = await Unit.find({
      Builder: req.query.builder.toString().toLowerCase(),
      [ability]: true,
    });

    if (!unitsFound.length) {
      throw new Error();
    }

    return res.json({ units: [...unitsFound] });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find any units that can ${req.query.abilityType} from ${
        req.query.builder === "any" ? "all builders" : req.query.builder
      }.`,
    });
  }
};

export const findUnitByMeleeOrRanged: RequestHandler<{
  builder: string;
  attackMethod: string;
}> = async (req, res, next) => {
  try {
    if (!req.query.builder || !req.query.attackMethod) {
      throw new Error();
    }

    if (req.query.builder.toString().toLowerCase() === "any") {
      const unitsFound = await Unit.find({
        "Melee / Ranged": req.query.attackMethod.toString().toLowerCase(),
      });

      if (!unitsFound.length) {
        throw new Error();
      }
      return res.json({ units: [...unitsFound] });
    }

    const unitsFound = await Unit.find({
      Builder: req.query.builder.toString().toLowerCase(),
      "Melee / Ranged": req.query.attackMethod.toString().toLowerCase(),
    });

    if (!unitsFound.length) {
      throw new Error();
    }

    return res.json({ units: [...unitsFound] });
  } catch (error) {
    return res
      .status(404)
      .json({
        error: `Unable to find any units that are ${
          req.query.abilityType
        } from ${
          req.query.builder === "any" ? "all builders" : req.query.builder
        }.`,
      });
  }
};

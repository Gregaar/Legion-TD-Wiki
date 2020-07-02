import { RequestHandler } from "express";

import { UnitInterface } from "../../interfaces/legion/unit-interface";
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

//e.g. tier: 6
export const searchByUnitTier: RequestHandler<{ tier: string }> = async (
  req,
  res,
) => {
  try {
    if (+req.params.tier < 0 || +req.params.tier > 6) {
      throw new Error();
    }

    const tierUnits = await Unit.find({ "Unit Tier": +req.params.tier });

    return res.status(200).json({ units: [...tierUnits] });
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
) => {
  try {
    if (+req.params.gold < 10 || +req.params.gold > 450) {
      throw new Error();
    }
    const unitsByCost = await Unit.find({ "Gold Cost": +req.params.gold });

    if (!unitsByCost.length) {
      throw new Error();
    }

    return res.status(200).json({ units: [...unitsByCost] });
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
}> = async (req, res) => {
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
      return res.status(200).json({ units: [...unitsWithinCost] });
    }

    const unitsWithinCost = await Unit.find({
      Builder: req.query.builder.toString().toLowerCase(),
      "Gold Cost": { $gte: +req.query.minGold, $lte: +req.query.maxGold },
    });

    if (!unitsWithinCost.length) {
      throw new Error();
    }

    return res.status(200).json({ units: [...unitsWithinCost] });
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find any units with gold cost between ${
        req.query.minGold
      } - ${req.query.maxGold} gold${
        req.query.builder === "any" || req.query.builder === undefined
          ? ""
          : ` for the ${req.query.builder} builder`
      }.`,
    });
  }
};

// e.g. unit: Tuskarr
export const findUnitUpgrade: RequestHandler<{ unit: string }> = async (
  req,
  res,
) => {
  try {
    const baseUnit = await Unit.findOne({
      Name: req.params.unit.toLowerCase(),
    });

    if (!baseUnit || !baseUnit.Upgradeable) {
      throw new Error();
    }

    if ("Upgraded Name" in baseUnit && baseUnit["Upgraded Name"] !== null) {
      const upgradedUnit = await Unit.findOne({
        Name: baseUnit["Upgraded Name"][0],
      });
      return res.status(200).json({ units: upgradedUnit });
    }
  } catch (error) {
    return res
      .status(404)
      .json({ error: `Could not find ${req.params.unit}'s upgraded unit.` });
  }
};

// e.g. Builder: Shadow, attackType: Magic
export const findUnitByAttackType: RequestHandler<{
  attackType: string;
  builder: string;
}> = async (req, res) => {
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

      return res.status(200).json({ units: [...unitsFound] });
    }

    const unitsFound = await Unit.find({
      Builder: req.query.builder.toString().toLowerCase(),
      "Attack Type": req.query.attackType.toString().toLowerCase(),
    });

    if (!unitsFound.length) {
      throw new Error();
    }

    return res.status(200).json({ units: [...unitsFound] });
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
}> = async (req, res) => {
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
) => {
  try {
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
}> = async (req, res) => {
  try {
    if (!req.query.builder || !req.query.abilityType) {
      throw new Error();
    }

    // Sets ability search dynamically
    const ability = `Can ${req.query.abilityType}`;

    if (req.query.builder.toString().toLowerCase() === "any") {
      const unitsFound = await Unit.find({ [ability]: true });
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
}> = async (req, res) => {
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
    return res.status(404).json({
      error: `Unable to find any units that are ${req.query.abilityType} from ${
        req.query.builder === "any" ? "all builders" : req.query.builder
      }.`,
    });
  }
};

export const countUsefulAbilities: RequestHandler<{ builder: string }> = async (
  req,
  res,
) => {
  let aura = 0;
  let buff = 0;
  let debuff = 0;
  let splash = 0;
  let heal = 0;
  let stun = 0;
  let summon = 0;
  try {
    const units = await Unit.find({
      Builder: req.params.builder.toLowerCase(),
    });
    units.forEach((unit: UnitInterface) => {
      unit["Has Aura"] === true ? aura++ : null;
      unit["Can Buff"] === true ? buff++ : null;
      unit["Can Debuff"] === true ? debuff++ : null;
      unit["Can Splash"] === true ? splash++ : null;
      unit["Can Heal"] === true ? heal++ : null;
      unit["Can Stun"] === true ? stun++ : null;
      unit["Can Summon"] === true ? summon++ : null;
    });
    return res.json({ aura, buff, debuff, splash, heal, stun, summon });
  } catch (error) {
    return res.status(500).json();
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

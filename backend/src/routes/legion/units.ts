import { Router } from "express";

import {
  countUsefulAbilities,
  findUnitByAttackType,
  findUnitByDefenseType,
  findUnitByMeleeOrRanged,
  findUnitByUsefulAbility,
  findUnitUpgrade,
  findUnitWithAura,
  queriedUnits,
  searchByUnitBuilder,
  searchByUnitGoldCost,
  searchByUnitGoldCostRange,
  searchByUnitName,
  searchByUnitTier,
} from "../../controllers/legion/units";
import { logger } from "../../logger";

const router = Router();

router.get("/api/unit/name/:name", searchByUnitName);

router.get("/api/unit/builder/:builder", searchByUnitBuilder);

router.get("/api/unit/tier/:tier", searchByUnitTier);

router.get("/api/unit/gold/:gold", searchByUnitGoldCost);

router.get("/api/unit/goldrange", searchByUnitGoldCostRange);

router.get("/api/unit/baseupgrade/:unit", findUnitUpgrade);

router.get("/api/unit/attacktype", findUnitByAttackType);

router.get("/api/unit/defensetype", findUnitByDefenseType);

router.get("/api/unit/aura/:builder", findUnitWithAura);

router.get("/api/unit/usefulability", findUnitByUsefulAbility);

router.get("/api/unit/attackmethod", findUnitByMeleeOrRanged);

router.get("/api/unit/useful/:builder", countUsefulAbilities);

router.get("/api/unit/filters", queriedUnits);

export default (): Router => {
  logger.info("Registering 'Unit' routes...");
  return router;
};

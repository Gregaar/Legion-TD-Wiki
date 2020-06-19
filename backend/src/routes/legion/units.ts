import { Router } from "express";

import {
  countUsefulAbilities,
  findUnitByAttackType,
  findUnitByDefenseType,
  findUnitByMeleeOrRanged,
  findUnitByUsefulAbility,
  findUnitUpgrade,
  findUnitWithAura,
  searchByUnitBuilder,
  searchByUnitGoldCost,
  searchByUnitGoldCostRange,
  searchByUnitName,
  searchByUnitTier,
  queriedUnits
} from "../../controllers/legion/units";
import { logger } from "../../logger";

const router = Router();

router.get("/unit/name/:name", searchByUnitName);

router.get("/unit/builder/:builder", searchByUnitBuilder);

router.get("/unit/tier/:tier", searchByUnitTier);

router.get("/unit/gold/:gold", searchByUnitGoldCost);

router.get("/unit/goldrange", searchByUnitGoldCostRange);

router.get("/unit/baseupgrade/:unit", findUnitUpgrade);

router.get("/unit/attacktype", findUnitByAttackType);

router.get("/unit/defensetype", findUnitByDefenseType);

router.get("/unit/aura/:builder", findUnitWithAura);

router.get("/unit/usefulability", findUnitByUsefulAbility);

router.get("/unit/attackmethod", findUnitByMeleeOrRanged);

router.get("/unit/useful/:builder", countUsefulAbilities);

router.get("/unit/filters", queriedUnits);

export default (): Router => {
  logger.info("Registering 'Unit' routes...");
  return router;
};

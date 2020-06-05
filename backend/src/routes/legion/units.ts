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
} from "../../controllers/legion/units";
import { logger } from "../../logger";

const router = Router();

router.post("/unit/name/:name", searchByUnitName);

router.post("/unit/builder/:builder", searchByUnitBuilder);

router.post("/unit/tier/:tier", searchByUnitTier);

router.post("/unit/gold/:gold", searchByUnitGoldCost);

router.post("/unit/goldrange", searchByUnitGoldCostRange);

router.post("/unit/baseupgrade/:unit", findUnitUpgrade);

router.post("/unit/attacktype", findUnitByAttackType);

router.post("/unit/defensetype", findUnitByDefenseType);

router.post("/unit/aura/:builder", findUnitWithAura);

router.post("/unit/usefulability", findUnitByUsefulAbility);

router.post("/unit/attackmethod", findUnitByMeleeOrRanged);

router.post("/unit/useful/:builder", countUsefulAbilities);

export default (): Router => {
  logger.info("Registering 'Unit' routes...");
  return router;
};

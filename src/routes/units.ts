import { Router } from "express";
import { logger } from "../logger";
import {
  searchByUnitName,
  searchByUnitBuilder,
  searchByUnitTier,
  searchByUnitGoldCost,
  searchByUnitGoldCostRange,
  findUnitUpgrade,
  findUnitByAttackType,
  findUnitByDefenseType,
  findUnitWithAura,
  findUnitByUsefulAbility,
  findUnitByMeleeOrRanged
} from "../controllers/units";

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

export default () => {
  logger.info("Registering 'Unit' routes...");
  return router;
};

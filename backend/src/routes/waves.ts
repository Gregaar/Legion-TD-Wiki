import { Router } from "express";

import {
  findAttackStrength,
  findAttackWeakness,
  findBossWaves,
  findByAttackAndDefenseType,
  findByAttackMethod,
  findByAttackType,
  findByDefenseType,
  findByEnemyName,
  findByLandOrFlying,
  findByLevel,
  findDefenseStrength,
  findDefenseWeakness,
} from "../controllers/waves";
import { logger } from "../logger";

const router = Router();

router.post("/wave/level/:level", findByLevel);

router.post("/wave/name/:name", findByEnemyName);

router.post("/wave/method/:attackMethod", findByAttackMethod);

router.post("/wave/landorfly/:attackStance", findByLandOrFlying);

router.post("/wave/attacktype/:attackType", findByAttackType);

router.post("/wave/defensetype/:defenseType", findByDefenseType);

router.post("/wave/attackdefense", findByAttackAndDefenseType);

router.post("/wave/boss/:boss", findBossWaves);

router.post("/wave/defenseweakness/:attackType", findDefenseWeakness);

router.post("/wave/defensestrength/:attackType", findDefenseStrength);

router.post("/wave/attackweakness/:defenseType", findAttackWeakness);

router.post("/wave/attackstrength/:defenseType", findAttackStrength);

export default (): Router => {
  logger.info("Registering 'Wave' routes...");

  return router;
};

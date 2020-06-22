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
} from "../../controllers/legion/waves";
import { logger } from "../../logger";

const router = Router();

router.post("/api/wave/level/:level", findByLevel);

router.post("/api/wave/name/:name", findByEnemyName);

router.post("/api/wave/method/:attackMethod", findByAttackMethod);

router.post("/api/wave/landorfly/:attackStance", findByLandOrFlying);

router.post("/api/wave/attacktype/:attackType", findByAttackType);

router.post("/api/wave/defensetype/:defenseType", findByDefenseType);

router.post("/api/wave/attackdefense", findByAttackAndDefenseType);

router.post("/api/wave/boss/:boss", findBossWaves);

router.post("/api/wave/defenseweakness/:attackType", findDefenseWeakness);

router.post("/api/wave/defensestrength/:attackType", findDefenseStrength);

router.post("/api/wave/attackweakness/:defenseType", findAttackWeakness);

router.post("/api/wave/attackstrength/:defenseType", findAttackStrength);

export default (): Router => {
  logger.info("Registering 'Wave' routes...");

  return router;
};

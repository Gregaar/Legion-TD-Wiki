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

router.get("/api/wave/level/:level", findByLevel);

router.get("/api/wave/name/:name", findByEnemyName);

router.get("/api/wave/method/:attackMethod", findByAttackMethod);

router.get("/api/wave/landorfly/:attackStance", findByLandOrFlying);

router.get("/api/wave/attacktype/:attackType", findByAttackType);

router.get("/api/wave/defensetype/:defenseType", findByDefenseType);

router.get("/api/wave/attackdefense", findByAttackAndDefenseType);

router.get("/api/wave/boss/:boss", findBossWaves);

router.get("/api/wave/defenseweakness/:attackType", findDefenseWeakness);

router.get("/api/wave/defensestrength/:attackType", findDefenseStrength);

router.get("/api/wave/attackweakness/:defenseType", findAttackWeakness);

router.get("/api/wave/attackstrength/:defenseType", findAttackStrength);

export default (): Router => {
  logger.info("Registering 'Wave' routes...");

  return router;
};

import { Router } from "express";

import {
  findBossWaves,
  findByAttackAndDefenseType,
  findByAttackMethod,
  findByAttackType,
  findByDefenseType,
  findByEnemyName,
  findByLandOrFlying,
  findByLevel,
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

export default () => {
  logger.info("Registering 'Wave' routes...");

  return router;
};

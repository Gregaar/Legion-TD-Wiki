import { Router } from "express";

import { findByEnemyName, findByLevel } from "../../controllers/legion/waves";
import { logger } from "../../logger";
import paginatedResults from "../../middleware/pagination";
import Wave from "../../models/legion/Wave";

const router = Router();

router.get("/api/wave/level/:level", findByLevel);

router.get("/api/wave/name/:name", findByEnemyName);

router.get("/api/wave/all", paginatedResults(Wave), (req, res) => {
  res.json({ waves: res.paginatedResults });
});

export default (): Router => {
  logger.info("Registering 'Wave' routes...");

  return router;
};

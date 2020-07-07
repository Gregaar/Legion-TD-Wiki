import { Router } from "express";

import { getSummonsByName } from "../../controllers/legion/summons";
import { logger } from "../../logger";
import paginatedResults from "../../middleware/pagination";
import Summon from "../../models/legion/Summon";

const router = Router();

router.get("/api/summon/all", paginatedResults(Summon), (req, res) => {
  res.json({ summon: res.paginatedResults });
});

router.get("/api/summon/name/:name", getSummonsByName);

export default (): Router => {
  logger.info("Registering 'Summon' routes...");

  return router;
};

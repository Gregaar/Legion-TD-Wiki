import { Router } from "express";

import {
  getSummonsByName,
  getSummonsByOrder,
} from "../../controllers/legion/summons";
import { logger } from "../../logger";
import paginatedResults from "../../middleware/pagination";
import Summon from "../../models/legion/Summon";

const router = Router();

router.get("/api/summon/all", paginatedResults(Summon), (req, res) => {
  res.json({ summon: res.paginatedResults });
});

router.get("/api/summon/name/:name", getSummonsByName);

router.get("/api/summon/order/:order", getSummonsByOrder);

export default (): Router => {
  logger.info("Registering 'Summon' routes...");

  return router;
};

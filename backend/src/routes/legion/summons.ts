import { Router } from "express";

import { getSummonsByName } from "../../controllers/legion/summons";
import { logger } from "../../logger";

const router = Router();

router.get("/api/summon/name/:name", getSummonsByName);

export default (): Router => {
  logger.info("Registering 'Summon' routes...");

  return router;
};

import { Router } from "express";

import { getKingAbility, getKingStats } from "../../controllers/legion/king";
import { logger } from "../../logger";

const router = Router();

router.get("/api/king/stats/:level", getKingStats);

router.get("/api/king/ability/:abilityName", getKingAbility);

export default (): Router => {
  logger.info("Registering 'King' Routes....");

  return router;
};

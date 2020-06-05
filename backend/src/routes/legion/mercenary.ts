import { Router } from "express";

import { getMercenariesByName } from "../../controllers/legion/mercenaries";
import { logger } from "../../logger";

const router = Router();

router.post("/mercenary/name/:name", getMercenariesByName);

export default (): Router => {
  logger.info("Registering 'Mercenary' routes...");

  return router;
};

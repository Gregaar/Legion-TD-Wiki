import { Router } from "express";

import { findBuilderByName } from "../../controllers/legion/builders";
import { logger } from "../../logger";

const router = Router();

router.get("/api/builder/name/:builder", findBuilderByName);

export default (): Router => {
  logger.info("Registering 'Builder' routes...");

  return router;
};

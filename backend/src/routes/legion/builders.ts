import { Router } from "express";

import {
  findBuilderByName,
  sortBuildersByUnitAbilities,
} from "../../controllers/legion/builders";
import { logger } from "../../logger";

const router = Router();

router.post("/api/builder/name/:builder", findBuilderByName);

router.post("/api/builder/abilities/:ability", sortBuildersByUnitAbilities);

export default (): Router => {
  logger.info("Registering 'Builder' routes...");

  return router;
};

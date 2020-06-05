import { Router } from "express";

import {
  findBuilderByName,
  sortBuildersByUnitAbilities,
} from "../../controllers/legion/builders";
import { logger } from "../../logger";

const router = Router();

router.post("/builder/name/:builder", findBuilderByName);

router.post("/builder/abilities/:ability", sortBuildersByUnitAbilities);

export default (): Router => {
  logger.info("Registering 'Builder' routes...");

  return router;
};

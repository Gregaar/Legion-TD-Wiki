import { Router } from "express";

import {
  prophetUnits,
  queriedUnits,
  searchByUnitBuilder,
  searchByUnitName,
} from "../../controllers/legion/units";
import { logger } from "../../logger";

const router = Router();

router.get("/api/unit/name/:name", searchByUnitName);

router.get("/api/unit/builder/:builder", searchByUnitBuilder);

router.get("/api/unit/filters", queriedUnits);

router.get("/api/unit/prophet", prophetUnits);

export default (): Router => {
  logger.info("Registering 'Unit' routes...");
  return router;
};

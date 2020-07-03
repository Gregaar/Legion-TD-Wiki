import { Router } from "express";

import {
  queriedUnits,
  searchByUnitBuilder,
  searchByUnitName,
} from "../../controllers/legion/units";
import { logger } from "../../logger";

const router = Router();

router.get("/api/unit/name/:name", searchByUnitName);

router.get("/api/unit/builder/:builder", searchByUnitBuilder);

router.get("/api/unit/filters", queriedUnits);

export default (): Router => {
  logger.info("Registering 'Unit' routes...");
  return router;
};

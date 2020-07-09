import { Router } from "express";

import {
  findBuilderByName,
  findBuilderByOrder,
} from "../../controllers/legion/builders";
import { logger } from "../../logger";

const router = Router();

router.get("/api/builder/name/:builder", findBuilderByName);

router.get("/api/builder/order/:order", findBuilderByOrder);

export default (): Router => {
  logger.info("Registering 'Builder' routes...");

  return router;
};

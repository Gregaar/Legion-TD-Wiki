import { RequestHandler } from "express";

import Builder from "../../models/legion/Builder";

export const findBuilderByName: RequestHandler<{ builder: string }> = async (
  req,
  res,
) => {
  try {
    if (req.params.builder.toLowerCase() === "any") {
      const builders = await Builder.find();

      return res.json({ builders: [...builders] });
    } else {
      const builderFound = await Builder.findOne({
        Name: req.params.builder.toLowerCase(),
      });

      if (!builderFound) {
        throw new Error();
      }

      return res.json({ builders: builderFound });
    }
  } catch (error) {
    return res.status(404).json({
      error: `Unable to find a builder called ${req.params.builder}.`,
    });
  }
};

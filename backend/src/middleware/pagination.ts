import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";

import SummonInterface from "../interfaces/legion/summon-interface";
import WaveInterface from "../interfaces/legion/wave-interface";

type PaginatedModels = SummonInterface | WaveInterface;

interface ResultsInterface {
  next: {
    page: number;
    limit: number;
  };
  previous: {
    page: number;
    limit: number;
  };
  results: PaginatedModels[];
}

const paginatedResults = (model: Model<PaginatedModels>) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    if (req.query.page && req.query.limit) {
      const page = +req.query.page;
      const limit = +req.query.limit;

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      const results: ResultsInterface = {} as ResultsInterface;

      if (endIndex < (await model.countDocuments().exec()))
        results.next = {
          page: page + 1,
          limit: limit,
        };
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }

      try {
        results.results = await model
          .find({})
          .limit(limit)
          .skip(startIndex)
          .exec();
        res.paginatedResults = results;
        next();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

      next();
    }
  };
};

export default paginatedResults;

import SummonInterface from "../../src/interfaces/legion/summon-interface";
import WaveInterface from "../../src/interfaces/legion/wave-interface";
import { UserDocumentInterface } from "../../src/interfaces/user/user-document-interface";

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

declare global {
  namespace Express {
    interface Request {
      user: UserDocumentInterface;
      refresh: string;
      access: string;
    }
    interface Response {
      paginatedResults: ResultsInterface;
    }
  }
}

export {};

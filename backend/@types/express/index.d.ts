import { UserDocumentInterface } from "../../src/interfaces/user/user-document-interface";

declare global {
  namespace Express {
    interface Request {
      user: UserDocumentInterface;
      refresh: string;
      access: string;
    }
  }
}

export {};

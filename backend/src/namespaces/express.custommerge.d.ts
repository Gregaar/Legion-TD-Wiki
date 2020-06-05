declare namespace Express {
  interface Request {
    user: import("../interfaces/user-document-interface").UserDocumentInterface;
    refresh: string;
    access: string;
  }
}

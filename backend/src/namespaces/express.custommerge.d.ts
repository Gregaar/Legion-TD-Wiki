declare namespace Express {
  interface Request {
    user: import("../interfaces/user/user-document-interface").UserDocumentInterface;
    refresh: string;
    access: string;
  }
}

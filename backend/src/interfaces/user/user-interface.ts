import { UserDocumentInterface } from "./user-document-interface";

// for methods
export default interface UserInterface extends UserDocumentInterface {
  generateRefreshToken(): Promise<string>;
  generateAccessToken(): Promise<string>;
}

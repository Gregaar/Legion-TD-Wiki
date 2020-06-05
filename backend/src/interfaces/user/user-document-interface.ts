import { Document } from "mongoose";

export interface UserDocumentInterface extends Document {
  name: string;
  email: string;
  password: string;
}

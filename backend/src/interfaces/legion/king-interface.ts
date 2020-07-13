import { Document } from "mongoose";

export default interface KingInterface extends Document {
  Level: number;
  "Hit Points": number;
  "Min Hit": number;
  "Max Hit": number;
  Regeneration: number;
  "Wood Spent": number;
  "Income Gained": number;
}

import { Document } from "mongoose";

export default interface KingAbility extends Document {
  Abilities: string[];
  "Ability Description": string[];
  "Ability Type": string[];
  Activatable: string;
  Builder: string;
  ID: string;
}

import mongoose from "mongoose";

export interface BuilderInterface extends mongoose.Document {
  Name: string;
  ID: string;
  "Avatar ID": string;
  Order: number;
  Description: string;
  "Altar of Heroes": boolean;
  Aura: number;
  Buff: number;
  Debuff: number;
  Splash: number;
  Heal: number;
  Stun: number;
  Summon: number;
}

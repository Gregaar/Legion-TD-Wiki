import mongoose from "mongoose";

export interface BuilderInterface extends mongoose.Document {
  Name: string;
  ID: string;
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
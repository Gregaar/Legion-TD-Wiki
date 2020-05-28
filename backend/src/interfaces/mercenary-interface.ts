import mongoose from "mongoose";

export interface MercenaryInterface extends mongoose.Document {
  Name: string;
  "Lumber Cost": number;
  "Income Bonus": number;
  Location: string;
  "Minimum Wave": number;
  "Unit Level": number;
  "Min Hit": number;
  "Max Hit": number;
  "Hit Points": number;
  Range: number;
  "Melee / Ranged": string;
  Speed: number;
  Mana: number;
  "Attack Type": string;
  "Defense Type": string;
  "Attack Strength": string;
  "Attack Weakness": string[];
  "Defense Strength": string[];
  "Defense Weakness": string;
  "Unit Description": string;
  "Max Stock": number;
  "Replenish Interval": number;
  Abilities: string[] | null;
  "Ability Type": string[] | null;
  "Ability Description": string[] | null;
  "Has Aura": boolean;
  "Can Buff": boolean;
  "Can Debuff": boolean;
  "Can Splash": boolean;
  "Can Heal": boolean;
  "Can Stun": boolean;
  "Can Summon": boolean;
  "Land/Flying": string;
  "Avatar ID": string;
}

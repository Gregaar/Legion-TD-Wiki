import mongoose from "mongoose";

export interface UnitInterface extends mongoose.Document {
  Name: string;
  Builder: string;
  "Unit Tier": number;
  "Gold Cost": number;
  "Food Cost": number;
  Upgradeable: boolean;
  "Max Upgrade Gold Cost": number;
  "Total Food Cost with Upgrade": number;
  "Base Unit Name": string[] | null;
  "Upgraded Name": string | null;
  "Base Min Hit": number;
  "Base Max Hit": number;
  "Attack Speed": number;
  "Attack Speed Class": string;
  Range: number;
  "Melee / Ranged": string;
  "Hit Points": number;
  Mana: number;
  "Attack Type": string;
  "Defense Type": string;
  "Attack Effectiveness Order": string[];
  "Attack Strength": string;
  "Attack Weakness": string[];
  "Defense Effectiveness Order": string[];
  "Defense Strength": string[];
  "Defense Weakness": string[];
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
  ID: string;
  "Builder ID": string;
}

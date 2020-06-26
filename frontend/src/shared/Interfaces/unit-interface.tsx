export default interface UnitInterface {
  Name: string;
  Builder: string;
  "Unit Tier": number;
  "Gold Cost": number;
  "Food Cost": number;
  Upgradeable: boolean;
  "Max Upgrade Gold Cost": number;
  "Total Food Cost with Upgrade": number;
  "Base Unit Name": string[] | null;
  "Upgraded Name": string[] | null;
  "Base Min Hit": number;
  "Base Max Hit": number;
  "Attack Speed": number;
  "Attack Speed Class": string | null;
  Range: number;
  "Melee / Ranged": string | null;
  "Hit Points": number;
  Mana: number;
  "Attack Type": string | null;
  "Defense Type": string | null;
  "Attack Effectiveness Order": string[] | null;
  "Attack Strength": string | null;
  "Attack Weakness": string[] | null;
  "Defense Effectiveness Order": string[] | null;
  "Defense Strength": string[] | null;
  "Defense Weakness": string[] | null;
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
}

import { UnitInterface } from "../../interfaces/legion/unit-interface";

interface ProphetAbilities {
  Aura: number;
  Buff: number;
  Debuff: number;
  Splash: number;
  Heal: number;
  Stun: number;
  Summon: number;
}

export default (unitArray: UnitInterface[]): ProphetAbilities => {
  let auras = 0;
  let buffs = 0;
  let debuffs = 0;
  let splashes = 0;
  let heals = 0;
  let stuns = 0;
  let summons = 0;

  unitArray.forEach((unit: UnitInterface) => {
    if (unit["Has Aura"]) {
      auras += 1;
    }
    if (unit["Can Buff"]) {
      buffs += 1;
    }
    if (unit["Can Debuff"]) {
      debuffs += 1;
    }
    if (unit["Can Splash"]) {
      splashes += 1;
    }
    if (unit["Can Heal"]) {
      heals += 1;
    }
    if (unit["Can Stun"]) {
      stuns += 1;
    }
    if (unit["Can Summon"]) {
      summons += 1;
    }
  });
  return {
    Aura: auras,
    Buff: buffs,
    Debuff: debuffs,
    Splash: splashes,
    Heal: heals,
    Stun: stuns,
    Summon: summons,
  };
};

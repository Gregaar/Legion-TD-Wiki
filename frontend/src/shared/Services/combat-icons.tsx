import chaosAttack from "../../assets/chaos.png";
import fortifiedDefense from "../../assets/fortified.png";
import heavyDefense from "../../assets/heavy.png";
import lightDefense from "../../assets/light.png";
import magicAttack from "../../assets/magic.png";
import mediumDefense from "../../assets/medium.png";
import normalAttack from "../../assets/normal.png";
import pierceAttack from "../../assets/pierce.png";
import siegeAttack from "../../assets/siege.png";
import unarmoredDefense from "../../assets/unarmored.png";
import unknownIcon from "../../assets/unknown-icon.png";

export const getAttackIcon = (attackType: string | null): string => {
  switch (attackType) {
    case "chaos":
      return chaosAttack;
    case "pierce":
      return pierceAttack;
    case "normal":
      return normalAttack;
    case "magic":
      return magicAttack;
    case "siege":
      return siegeAttack;
    default:
      return unknownIcon;
  }
};

export const getDefenseIcon = (defenseType: string | null): string => {
  switch (defenseType) {
    case "unarmored":
      return unarmoredDefense;
    case "light":
      return lightDefense;
    case "medium":
      return mediumDefense;
    case "heavy":
      return heavyDefense;
    case "fortified":
      return fortifiedDefense;
    default:
      return unknownIcon;
  }
};

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

export const getAttackIcon = (attackType: string | null) => {
  let attackIcon: string;

  switch (attackType) {
    case "chaos":
      attackIcon = chaosAttack;
      break;
    case "pierce":
      attackIcon = pierceAttack;
      break;
    case "normal":
      attackIcon = normalAttack;
      break;
    case "magic":
      attackIcon = magicAttack;
      break;
    case "siege":
      attackIcon = siegeAttack;
      break;
    default:
      attackIcon = unknownIcon;
      break;
  }
  return attackIcon;
};

export const getDefenseIcon = (defenseType: string | null) => {
  let defenseIcon: string;

  switch (defenseType) {
    case "unarmored":
      defenseIcon = unarmoredDefense;
      break;
    case "light":
      defenseIcon = lightDefense;
      break;
    case "medium":
      defenseIcon = mediumDefense;
      break;
    case "heavy":
      defenseIcon = heavyDefense;
      break;
    case "fortified":
      defenseIcon = fortifiedDefense;
      break;
    default:
      defenseIcon = unknownIcon;
      break;
  }
  return defenseIcon;
};

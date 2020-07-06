import chaosAttack from "../../assets/chaos.png";
import fortifiedDefense from "../../assets/fortified.png";
import heavyDefense from "../../assets/heavy.png";
import lightDefense from "../../assets/light.png";
import magicAttack from "../../assets/magic.png";
import mediumDefense from "../../assets/medium.png";
import normalAttack from "../../assets/normal.png";
import pierceAttack from "../../assets/pierce.png";
import siegeAttack from "../../assets/siege.png";
import tierFive from "../../assets/tier-five.png";
import tierFour from "../../assets/tier-four.png";
import tierOne from "../../assets/tier-one.png";
import tierSix from "../../assets/tier-six.png";
import tierThree from "../../assets/tier-three.png";
import tierTwo from "../../assets/tier-two.png";
import unarmoredDefense from "../../assets/unarmored.png";
import unitAvatar from "../../assets/unit-avatar.png";
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

export const getUnitIcon = (builder: string, unitName: string): string => {
  const amazonURL =
    "https://legion-td-mega-wiki.s3.eu-west-2.amazonaws.com/units";
  if (builder && unitName && process.env.NODE_ENV === "production") {
    return `${amazonURL}/${builder}/avatars/${unitName
      .toLowerCase()
      .replace(/\s/gm, "")}.png`;
  } else {
    return unitAvatar;
  }
};

export const getWaveIcon = (creepName: string): string => {
  const amazonURL =
    "https://legion-td-mega-wiki.s3.eu-west-2.amazonaws.com/waves/avatars";
  if (creepName && process.env.NODE_ENV === "production") {
    return `${amazonURL}/${creepName.toLowerCase().replace(/\s/gm, "")}.png`;
  } else {
    return unitAvatar;
  }
};

export const getTierIcon = (tier: number): string => {
  switch (tier) {
    case 1:
      return tierOne;
    case 2:
      return tierTwo;
    case 3:
      return tierThree;
    case 4:
      return tierFour;
    case 5:
      return tierFive;
    case 6:
      return tierSix;
    default:
      return unknownIcon;
  }
};

export const getAbilityIcon = (
  builder: string,
  ability?: string | null
): string => {
  const amazonURL =
    "https://legion-td-mega-wiki.s3.eu-west-2.amazonaws.com/units";
  if (ability && builder && process.env.NODE_ENV === "production") {
    const pureAbility = ability.toLowerCase().replace(/[\s'!]/gm, "");
    return `${amazonURL}/${builder}/abilities/${pureAbility}.png`;
  } else return unknownIcon;
};

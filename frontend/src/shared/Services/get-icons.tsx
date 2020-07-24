import cancelIcon from "../../assets/icons/cancel-icon.png";
import chaosAttack from "../../assets/icons/chaos.png";
import fortifiedDefense from "../../assets/icons/fortified.png";
import heavyDefense from "../../assets/icons/heavy.png";
import lightDefense from "../../assets/icons/light.png";
import magicAttack from "../../assets/icons/magic.png";
import mediumDefense from "../../assets/icons/medium.png";
import normalAttack from "../../assets/icons/normal.png";
import pierceAttack from "../../assets/icons/pierce.png";
import siegeAttack from "../../assets/icons/siege.png";
import tierFive from "../../assets/icons/tier-five.png";
import tierFour from "../../assets/icons/tier-four.png";
import tierOne from "../../assets/icons/tier-one.png";
import tierSix from "../../assets/icons/tier-six.png";
import tierThree from "../../assets/icons/tier-three.png";
import tierTwo from "../../assets/icons/tier-two.png";
import unarmoredDefense from "../../assets/icons/unarmored.png";
import unitAvatar from "../../assets/icons/unit-avatar.png";
import unknownIcon from "../../assets/icons/unknown-icon.png";

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

  if (ability === undefined || ability === null) {
    return cancelIcon;
  } else if (ability && builder && process.env.NODE_ENV === "production") {
    const pureAbility = ability.toLowerCase().replace(/[\s'!]/gm, "");

    return `${amazonURL}/${builder}/abilities/${pureAbility}.png`;
  } else {
    return unknownIcon;
  }
};

export const unitNameColor = (unitBuilder: string): string => {
  switch (unitBuilder) {
    case "artic":
      return "rgba(0, 0, 139, 0.8)";
    case "beast":
      return "rgba(165, 42, 42, 0.8)";
    case "demi-human":
      return "rgba(0, 128, 128, 0.8)";
    case "element":
      return "rgba(154, 205, 50, 0.8)";
    case "elf":
      return "rgba(128, 0, 0, 0.8)";
    case "ghost":
      return "rgba(233, 150, 122, 0.8)";
    case "goblin":
      return "rgba(255, 69, 0, 0.8)";
    case "marine":
      return "rgba(0, 139, 139, 0.8)";
    case "mech":
      return "rgba(178, 34, 34, 0.8)";
    case "nature":
      return "rgba(46, 139, 87, 0.8)";
    case "orc":
      return "rgba(205, 92, 92, 0.8)";
    case "paladin":
      return "rgba(30, 144, 255, 0.8)";
    case "shadow":
      return "black";
    case "undead":
      return "rgba(128, 128, 0, 0.8)";
    case "hybrid":
      return "unset";
    case "barracks":
      return "mediumseagreen";
    case "advanced barracks":
      return "brown";
    default:
      return "darkslategray";
  }
};

export const unitAttackColor = (attackType: string | null): string => {
  switch (attackType) {
    case "chaos":
      return "#7fd81e";
    case "pierce":
      return "saddlebrown";
    case "normal":
      return "cornflowerblue";
    case "magic":
      return "mediumblue";
    case "siege":
      return "darkred";
    default:
      return "darkslategray";
  }
};

export const unitDefenseColor = (defenseType: string | null): string => {
  switch (defenseType) {
    case "unarmored":
      return "hotpink";
    case "light":
      return "saddlebrown";
    case "medium":
      return "dimgrey";
    case "heavy":
      return "maroon";
    case "fortified":
      return "peru";
    default:
      return "darkslategray";
  }
};

export const abilityColor = (abilityType: string | null): string => {
  const ability =
    abilityType && abilityType.includes(" ")
      ? abilityType.slice(0, abilityType.indexOf(" "))
      : abilityType;
  switch (ability) {
    case "gold":
      return "goldenrod";
    case "slow":
      return "mediumblue";
    case "splash":
      return "steelblue";
    case "aura":
      return "mediumvioletred";
    case "self":
      return "chocolate";
    case "stun":
      return "royalblue";
    case "heal":
      return "darkgreen";
    case "cc":
      return "tomato";
    case "damage":
      return "crimson";
    case "buff":
      return "darkcyan";
    case "defence":
      return "dimgrey";
    case "summon":
      return "purple";
    case "debuff":
      return "darkviolet";
    case "life":
      return "indianred";
    default:
      return "darkslategray";
  }
};

export const getWaveColor = (level: number): string => {
  switch (true) {
    case level === 10 || level === 20 || level === 30:
      return "firebrick";
    case level >= 30:
      return "darkgoldenrod";
    case level > 20:
      return "maroon";
    case level > 10:
      return "midnightblue";
    case level > 0:
      return "green";
    default:
      return "darkslategrey";
  }
};

export const attackVsDefense = (attackType: string): (string | string[])[] => {
  let attackRatings: (string | string[])[] = [];

  switch (attackType.toLowerCase()) {
    case "chaos":
      attackRatings = ["Equal"];
      break;
    case "pierce":
      attackRatings = ["Light", "Unarmoured", "Medium", "Heavy", "Fortified"];
      break;
    case "normal":
      attackRatings = ["Medium", "Unarmoured", ["Light", "Heavy"], "Fortified"];
      break;
    case "magic":
      attackRatings = ["Heavy", "Light", "Unarmoured", "Medium", "Fortified"];
      break;
    case "siege":
      attackRatings = ["Fortified", "Unarmoured", ["Light", "Medium", "Heavy"]];
      break;
  }
  return attackRatings;
};

export const defenseVsAttack = (defenseType: string) => {
  let defenseRatings: (string | string[])[] = [];

  switch (defenseType.toLowerCase()) {
    case "unarmoured":
      defenseRatings = ["Equal"];
      break;
    case "light":
      defenseRatings = [["Normal", "Siege"], "Magic", "Pierce"];
      break;
    case "medium":
      defenseRatings = ["Magic", ["Pierce", "Siege"], "Chaos", "Normal"];
      break;
    case "heavy":
      defenseRatings = ["Pierce", ["Normal", "Siege"], "Chaos", "Magic"];
      break;
    case "fortified":
      defenseRatings = [["Pierce", "Magic"], "Normal", "Chaos", "Siege"];
      break;
  }
  return defenseRatings;
};

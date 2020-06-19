import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import unitAvatar from "../../../assets/unit-avatar.png";
import builderAvatar from "../../../assets/builder-avatar.png";
import cancelIcon from "../../../assets/cancel-icon.png";
import abilityAvatar from "../../../assets/ability-avatar.png";
import unknownIcon from "../../../assets/unknown-icon.png";
import chaosAttack from "../../../assets/chaos.png";
import pierceAttack from "../../../assets/pierce.png";
import normalAttack from "../../../assets/normal.png";
import magicAttack from "../../../assets/magic.png";
import siegeAttack from "../../../assets/siege.png";

import unarmoredDefense from "../../../assets/unarmored.png";
import lightDefense from "../../../assets/light.png";
import mediumDefense from "../../../assets/medium.png";
import heavyDefense from "../../../assets/heavy.png";
import fortifiedDefense from "../../../assets/fortified.png";

interface UnitProps {
  unitName: string;
  builder: string;
  abilities: string[] | null;
  abilityDescriptions: string[] | null;
  attack: string | null;
  defense: string | null;
  rangeType: string | null;
  rangeNumber: number | null;
}

const individualUnit: React.FC<UnitProps> = (props) => {
  let attackIcon;
  let defenseIcon;

  (function (attack: string) {
    switch (attack) {
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
  })(props.attack!);

  (function (defense: string) {
    switch (defense) {
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
  })(props.defense!);

  return (
    <div style={{ display: "contents" }}>
      <p style={{ textShadow: "1px 1px black" }}>{props.unitName}</p>
      <Tooltip
        title={props.unitName
          .charAt(0)
          .toUpperCase()
          .concat(props.unitName.slice(1))}
        placement="right"
      >
        <img
          src={unitAvatar}
          alt={`The avatar for the ${props.unitName} unit`}
        />
      </Tooltip>
      <Tooltip
        title={props.builder
          .charAt(0)
          .toUpperCase()
          .concat(props.builder.slice(1))}
        placement="right"
      >
        <img
          src={builderAvatar}
          alt={`The avatar for the ${props.builder} builder`}
        />
      </Tooltip>
      <Tooltip
        placement="right"
        title={
          props.abilityDescriptions !== null &&
          props.abilityDescriptions.length > 1
            ? props.abilityDescriptions[0] +
              ` Unit has ${props.abilityDescriptions.length - 1} more ${
                props.abilityDescriptions.length - 1 > 1
                  ? "Abilities"
                  : "Ability"
              }.`
            : props.abilityDescriptions !== null
            ? props.abilityDescriptions[0]
            : "No ability"
        }
      >
        <img src={props.abilities !== null ? abilityAvatar : cancelIcon} />
      </Tooltip>
      <Tooltip
        title={
          props.attack !== null
            ? props.attack.charAt(0).toUpperCase().concat(props.attack.slice(1))
            : "Unknown"
        }
        placement="right"
      >
        <img src={attackIcon} alt={`Icon for ${props.attack} attacks.`} />
      </Tooltip>
      <Tooltip
        title={
          props.defense !== null
            ? props.defense
                .charAt(0)
                .toUpperCase()
                .concat(props.defense.slice(1))
            : "Unknown"
        }
        placement="right"
      >
        <img src={defenseIcon} alt={`Icon for ${props.defense} armor.`} />
      </Tooltip>
      <p style={{ textShadow: "1px 1px black" }}>
        {props.rangeType ? props.rangeType : "?"} (
        {props.rangeNumber ? props.rangeNumber : "?"})
      </p>
    </div>
  );
};

export default individualUnit;

// work on making the list sortable, when a heading is clicked, it sorts either ascendingly or descendingly
// after all this, work on an individual unit page, where more information about the unit is displayed.

//fix issue with form being randomly resubmittied? (or so it seemed)
// fix issue with background scaling when the list is increased or decreased

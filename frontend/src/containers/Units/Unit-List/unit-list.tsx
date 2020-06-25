import Tooltip from "@material-ui/core/Tooltip";
import React from "react";

import abilityAvatar from "../../../assets/ability-avatar.png";
import builderAvatar from "../../../assets/builder-avatar.png";
import cancelIcon from "../../../assets/cancel-icon.png";
import unitAvatar from "../../../assets/unit-avatar.png";
import { getAttackIcon, getDefenseIcon } from "./combat-icons";

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

const unitList: React.FC<UnitProps> = (props) => {
  const attackIcon = getAttackIcon(props.attack);
  const defenseIcon = getDefenseIcon(props.defense);

  const goToUnitHandler = (event: React.MouseEvent) => {
    event.preventDefault();
  }

  return (
    <div style={{ display: "contents" }}>
      <p 
      style={{ textShadow: "1px 1px black" }}
      onClick={(event: React.MouseEvent) => goToUnitHandler(event)}
      >{props.unitName}</p>
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
        <img
          src={props.abilities !== null ? abilityAvatar : cancelIcon}
          alt={
            props.abilities !== null
              ? `Icon for the ${props.abilities[0]} ability.`
              : "An icon meaning this unit has no ability"
          }
        />
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

export default unitList;

// work on making the list sortable, when a heading is clicked, it sorts either ascendingly or descendingly
// after all this, work on an individual unit page, where more information about the unit is displayed.

//fix issue with form being randomly resubmittied? (or so it seemed)
// fix issue with background scaling when the list is increased or decreased

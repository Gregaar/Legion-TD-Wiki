import Tooltip from "@material-ui/core/Tooltip";
import React from "react";
import { useHistory } from "react-router-dom";

import abilityAvatar from "../../../assets/ability-avatar.png";
import builderAvatar from "../../../assets/builder-avatar.png";
import cancelIcon from "../../../assets/cancel-icon.png";
import unitAvatar from "../../../assets/unit-avatar.png";
import {
  getAttackIcon,
  getDefenseIcon,
} from "../../../shared/Services/combat-icons";
import { UnitImg, UnitName } from "./unit-list-styles";

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

type UnitNameHandlerEvent = HTMLParagraphElement | HTMLImageElement;

const UnitList: React.FC<UnitProps> = (props) => {
  const attackIcon = getAttackIcon(props.attack);
  const defenseIcon = getDefenseIcon(props.defense);
  const history = useHistory();

  const goToUnitHandler = (
    event: React.MouseEvent<UnitNameHandlerEvent>
  ): void => {
    event.preventDefault();
    const addDashToUnitName = props.unitName.replace(/\s/gm, "-");
    history.push(`/units/${addDashToUnitName}`);
    return;
  };

  const goToBuilderHandler = (
    event: React.MouseEvent<HTMLImageElement>
  ): void => {
    event.preventDefault();
    history.push(`/builders/${props.builder}`);
    return;
  };

  return (
    <div style={{ display: "contents" }}>
      <UnitName onClick={(event) => goToUnitHandler(event)}>
        {props.unitName}
      </UnitName>
      <Tooltip
        title={props.unitName
          .charAt(0)
          .toUpperCase()
          .concat(props.unitName.slice(1))}
        placement="right"
      >
        <UnitImg
          src={unitAvatar}
          alt={`The avatar for the ${props.unitName} unit`}
          onClick={(event) => goToUnitHandler(event)}
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
          onClick={(event) => goToBuilderHandler(event)}
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

export default UnitList;

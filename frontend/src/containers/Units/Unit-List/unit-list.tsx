import Tooltip from "@material-ui/core/Tooltip";
import React from "react";
import { Link, useHistory } from "react-router-dom";

import {
  getAbilityIcon,
  getAttackIcon,
  getDefenseIcon,
  getTierIcon,
  getUnitIcon,
} from "../../../shared/Services/get-icons";
import { Img } from "../unit-styles";

interface UnitProps {
  id: string;
  builderId: string;
  unitName: string;
  tier: number;
  builder: string;
  abilities: string[] | null;
  abilityDescriptions: string[] | null;
  attack: string | null;
  defense: string | null;
}

type UnitNameHandlerEvent = HTMLParagraphElement | HTMLImageElement;

const UnitList: React.FC<UnitProps> = (props) => {
  const unitIcon = getUnitIcon(props.builder, props.unitName);
  const tierIcon = getTierIcon(props.tier);
  const attackIcon = getAttackIcon(props.attack);
  const defenseIcon = getDefenseIcon(props.defense);
  const imgurURL = "https://i.imgur.com";
  const history = useHistory();

  const abilityIcon = (builder: string, abilityName: string | null): string => {
    return getAbilityIcon(builder, abilityName);
  };

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
      <Tooltip
        title={props.unitName
          .charAt(0)
          .toUpperCase()
          .concat(props.unitName.slice(1))}
        placement="right"
      >
        <Link to={`/units/${props.unitName}`}>
          <Img
            src={unitIcon}
            alt={`The avatar for the ${props.unitName} unit`}
            onClick={(event) => goToUnitHandler(event)}
            cursor={1}
          />
        </Link>
      </Tooltip>
      <Tooltip
        title={props.builder
          .charAt(0)
          .toUpperCase()
          .concat(props.builder.slice(1))}
        placement="right"
      >
        <Link to={`/builders/${props.builder}`}>
          <Img
            src={`${imgurURL}/${props.builderId}.png`}
            alt={`The avatar for the ${props.builder} builder`}
            onClick={(event) => goToBuilderHandler(event)}
            cursor={1}
          />
        </Link>
      </Tooltip>
      <Tooltip title={`Tier ${props.tier}`} placement="right">
        <Img
          src={tierIcon}
          alt={`Tier ${props.tier} icon`}
          onClick={(event) => goToUnitHandler(event)}
        />
      </Tooltip>
      <Tooltip
        placement="right"
        title={
          props.abilityDescriptions !== null
            ? props.abilityDescriptions[0]
            : "No ability"
        }
      >
        <Img
          src={
            props.abilities !== null
              ? abilityIcon(props.builder, props.abilities[0])
              : abilityIcon(props.builder, null)
          }
          alt={
            props.abilities !== null
              ? `Icon for the ${props.abilities[0]} ability.`
              : "An icon meaning this unit has no ability"
          }
        />
      </Tooltip>
      <Tooltip
        placement="right"
        title={
          props.abilityDescriptions !== null &&
          props.abilityDescriptions.length > 1
            ? props.abilityDescriptions[1]
            : "No ability"
        }
      >
        <Img
          src={
            props.abilities !== null && props.abilities.length > 1
              ? abilityIcon(props.builder, props.abilities[1])
              : abilityIcon(props.builder, null)
          }
          alt={
            props.abilities !== null
              ? `Icon for the ${props.abilities[1]} ability.`
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
        <Img src={attackIcon} alt={`Icon for ${props.attack} attacks.`} />
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
        <Img src={defenseIcon} alt={`Icon for ${props.defense} armor.`} />
      </Tooltip>
    </div>
  );
};

export default UnitList;

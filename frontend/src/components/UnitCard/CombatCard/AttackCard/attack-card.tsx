import React from "react";

import { getAttackIcon } from "../../../../shared/Services/combat-icons";
import { unitAttackColor } from "../../get-heading-color";
import {
  CombatHeading,
  CombatImage,
  CombatInfoHeading,
  ListElement,
  OrderedList,
} from "../combat-card-styles";

interface AttackCardProps {
  attackType: string | null;
  attackOrder: string[] | null;
}

const attackCard: React.FC<AttackCardProps> = (props) => {
  const attackColor = unitAttackColor(props.attackType);
  const attackIcon = getAttackIcon(props.attackType);

  return (
    <>
      <CombatHeading bgColor={attackColor}>
        {props.attackType} Attack
      </CombatHeading>
      <CombatImage
        src={attackIcon}
        alt={`Avatar for ${props.attackType} attacks.`}
      />
      <CombatInfoHeading>Damages Best Against</CombatInfoHeading>
      <OrderedList>
        {props.attackOrder &&
          props.attackOrder.map((attack) => (
            <ListElement key={attack} bulletColor={attackColor}>
              {attack} armour
            </ListElement>
          ))}
      </OrderedList>
    </>
  );
};

export default attackCard;

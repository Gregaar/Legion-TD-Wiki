import React from "react";

import { getDefenseIcon } from "../../../../shared/Services/combat-icons";
import { unitDefenseColor } from "../../get-heading-color";
import {
  CombatHeading,
  CombatImage,
  CombatInfoHeading,
  ListElement,
  OrderedList,
} from "../combat-card-styles";

interface DefenseCardProps {
  defenseType: string | null;
  defenseOrder: string[] | null;
}

const defenseCard: React.FC<DefenseCardProps> = (props) => {
  const defenseColor = unitDefenseColor(props.defenseType);
  const defenseIcon = getDefenseIcon(props.defenseType);
  return (
    <>
      <CombatHeading bgColor={defenseColor}>
        {props.defenseType} Defence
      </CombatHeading>
      <CombatImage
        src={defenseIcon}
        alt={`Avatar for ${props.defenseType} defence.`}
      />
      <CombatInfoHeading>Defends Best Against</CombatInfoHeading>
      <OrderedList>
        {props.defenseOrder &&
          props.defenseOrder.map((defence) => (
            <ListElement key={defence} bulletColor={defenseColor}>
              {defence} attacks
            </ListElement>
          ))}
      </OrderedList>
    </>
  );
};

export default defenseCard;

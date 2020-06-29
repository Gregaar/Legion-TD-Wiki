import React from "react";

import UnitInterface from "../../shared/Interfaces/unit-interface";
import {
  getAttackIcon,
  getDefenseIcon,
} from "../../shared/Services/combat-icons";
import {
  CombatHeading,
  CombatImage,
  CombatInfoHeading,
  EffectivenessPanel,
  ListElement,
  OrderedList,
} from "./unit-effectiveness-styles";

interface UnitEffectivenessProps {
  unit: UnitInterface;
}

const unitEffectiveness: React.FC<UnitEffectivenessProps> = ({ unit }) => {
  const attackOrder = unit["Attack Effectiveness Order"];
  const defenceOrder = unit["Defense Effectiveness Order"];

  return (
    <EffectivenessPanel>
      <CombatHeading>{unit["Attack Type"]} Attacks</CombatHeading>
      <CombatImage
        src={getAttackIcon(unit["Attack Type"])}
        alt={`Avatar for ${unit["Attack Type"]} attacks.`}
      />
      <CombatInfoHeading>Attack Strength Order</CombatInfoHeading>
      <OrderedList>
        {attackOrder &&
          attackOrder.map((attack) => (
            <ListElement key={attack}>{attack}</ListElement>
          ))}
      </OrderedList>
      <CombatHeading>{unit["Defense Type"]} Defence</CombatHeading>
      <CombatImage
        src={getDefenseIcon(unit["Defense Type"])}
        alt={`Avatar for ${unit["Defense Type"]} defence.`}
      />
      <CombatInfoHeading>Defence Strength Order</CombatInfoHeading>
      <OrderedList>
        {defenceOrder &&
          defenceOrder.map((defence) => (
            <ListElement key={defence}>{defence}</ListElement>
          ))}
      </OrderedList>
    </EffectivenessPanel>
  );
};

export default unitEffectiveness;

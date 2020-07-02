import React from "react";

import UnitInterface from "../../../shared/Interfaces/unit-interface";
import SummonInterface from "../../../shared/Interfaces/summon-interface";
import AttackCard from "./AttackCard/attack-card";
import { CombatContainer, CombatPanel } from "./combat-card-styles";
import DefenseCard from "./DefenseCard/defense-card";

interface CombatCardProps {
  unit: UnitInterface | SummonInterface;
}

const combatCard: React.FC<CombatCardProps> = ({ unit }) => {
  return (
    <CombatContainer>
      <CombatPanel>
        <AttackCard
          attackType={unit["Attack Type"]}
          attackOrder={unit["Attack Effectiveness Order"]}
        />
      </CombatPanel>
      <CombatPanel>
        <DefenseCard
          defenseType={unit["Defense Type"]}
          defenseOrder={unit["Defense Effectiveness Order"]}
        />
      </CombatPanel>
    </CombatContainer>
  );
};

export default combatCard;

import React from "react";

import BuilderInterface from "../../../shared/Interfaces/builder-interface";
import IndividualBuilder from "./IndividualBuilder/individual-builder";

interface BuilderCardsProps {
  builders: BuilderInterface[];
}

const builderCards: React.FC<BuilderCardsProps> = ({ builders }) => {
  return (
    <>
      {builders &&
        builders.map((builder) => (
          <IndividualBuilder
            key={builder.ID}
            ID={builder["Avatar ID"]}
            name={builder.Name}
            description={builder.Description}
            heroes={builder["Altar Of Heroes"]}
            aura={builder.Aura}
            buff={builder.Buff}
            debuff={builder.Debuff}
            splash={builder.Splash}
            heal={builder.Heal}
            stun={builder.Stun}
            summon={builder.Summon}
          />
        ))}
    </>
  );
};

export default builderCards;

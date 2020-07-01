import React from "react";

import BuilderInterface from "../../shared/Interfaces/builder-interface";
import IndividualBuilder from "./individualBuilder/individual-builder";

interface BuilderCardsProps {
  builders: BuilderInterface[];
  goToClicked: (path: string) => void;
}

const builderCards: React.FC<BuilderCardsProps> = ({
  builders,
  goToClicked,
}) => {
  return (
    <>
      {builders &&
        builders.map((builder) => (
          <IndividualBuilder
            key={builder.ID}
            ID={builder["Avatar ID"]}
            clicked={goToClicked}
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

//find out best way to align units abilities header for all builders.

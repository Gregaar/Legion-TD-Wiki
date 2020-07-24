import React from "react";
import { Helmet } from "react-helmet";
import UnitInterface from "../../shared/Interfaces/unit-interface";
import WaveInterface from "../../shared/Interfaces/wave-interface";
import SummonInterface from "../../shared/Interfaces/summon-interface";

type Unit = UnitInterface & SummonInterface & WaveInterface;

interface IndividualHelmetProps {
  unit: Unit;
  isWaveUnit: boolean;
}

const individualHelmet: React.FC<IndividualHelmetProps> = ({
  unit,
  isWaveUnit,
}) => {
  return (
    <div>
      <Helmet>
        <title>{`Legion TD Mega Wiki | ${
          Object.keys(unit).length > 0
            ? isWaveUnit
              ? unit["Creep Name"].charAt(0).toUpperCase() +
                unit["Creep Name"].slice(1)
              : unit.Name.charAt(0).toUpperCase() +
                unit.Name.slice(1)
            : "Unit"
        }`}</title>
        <meta
          name="description"
          content={`${
            Object.keys(unit).length > 0
              ? isWaveUnit
                ? unit["Creep Name"].charAt(0).toUpperCase() +
                  unit["Creep Name"].slice(1)
                : unit.Name.charAt(0).toUpperCase() +
                  unit.Name.slice(1)
              : "Unit"
          }. Abilities. Gold Cost. Food Cost. Upgraded Unit. Base Unit. Combat Stats. Range. Attack Type. Defence Type.`}
        />
      </Helmet>
    </div>
  );
};

export default individualHelmet;

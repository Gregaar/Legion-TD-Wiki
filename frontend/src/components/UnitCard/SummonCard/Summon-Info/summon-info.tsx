import React from "react";
import shortid from "shortid";
import { InfoGrid, InfoHeading } from "../../card-styles";

interface SummonInfoProps {
  lumberCost: number;
  incomeBonus: number;
  stock: number;
  replenishInterval: number;
  disableAnimation?: number;
}

const summonInfo: React.FC<SummonInfoProps> = (props) => {
  const summonInfoArray = [
    {
      title: "Income Bonus",
      value: props.incomeBonus,
      key: shortid.generate(),
    },
    { title: "Lumber Cost", value: props.lumberCost, key: shortid.generate() },
    { title: "Max Stock", value: props.stock, key: shortid.generate() },
    {
      title: "Replenish Interval",
      value: `${props.replenishInterval} seconds`,
      key: shortid.generate(),
    },
  ];

  return (
    <InfoGrid disableAnimation={props.disableAnimation}>
      {summonInfoArray &&
        summonInfoArray.map((info) => (
          <React.Fragment key={info.key}>
            <InfoHeading>{info.title}</InfoHeading>
            <p>{info.value}</p>
          </React.Fragment>
        ))}
    </InfoGrid>
  );
};

export default summonInfo;

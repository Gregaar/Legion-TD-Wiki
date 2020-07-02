import React from "react";
import shortid from "shortid";
import { InfoGrid, InfoHeading } from "../../card-styles";

interface SummonOtherProps {
  location: string;
  landOrFly: string;
  disableAnimation?: number;
}

const summonOther: React.FC<SummonOtherProps> = (props) => {
  const otherInfoArray = [
    {
      title: "Land or Flying",
      value: props.landOrFly,
      key: shortid.generate(),
    },
    {
      title: "Purchase Location",
      value: props.location,
      key: shortid.generate(),
    },
  ];

  return (
    <InfoGrid disableAnimation={props.disableAnimation}>
      {otherInfoArray &&
        otherInfoArray.map((info) => (
          <React.Fragment key={info.key}>
            <InfoHeading>{info.title}</InfoHeading>
            <p>{info.value}</p>
          </React.Fragment>
        ))}
    </InfoGrid>
  );
};

export default summonOther;

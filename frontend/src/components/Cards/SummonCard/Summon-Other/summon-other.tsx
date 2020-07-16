import React from "react";
import shortid from "shortid";

import { InfoGrid, InfoHeading, NavParagraph } from "../../card-styles";

interface HistoryWithState {
  advanced?: boolean;
}

interface SummonOtherProps {
  location: string;
  landOrFly: string;
  disableAnimation?: number;
  isOpen: boolean;
  goToClicked: (pathname: string, state?: HistoryWithState) => void;
}

const summonOther: React.FC<SummonOtherProps> = (props) => {
  const otherInfoArray = [
    {
      title: "Land or Flying",
      value: props.landOrFly,
      key: shortid.generate(),
    },
  ];

  const otherInfoNavArray = [
    {
      title: "Location",
      value: props.location,
      key: shortid.generate(),
    },
  ];

  const handleNavClick = () => {
    if (props.disableAnimation) {
      return;
    } else if (props.location === "advanced barracks") {
      props.goToClicked("/summons", {
        advanced: true,
      });
    } else {
      props.goToClicked("/summons");
    }
  };

  return (
    <InfoGrid disableAnimation={props.disableAnimation} isOpen={props.isOpen}>
      {otherInfoArray &&
        otherInfoArray.map((info) => (
          <React.Fragment key={info.key}>
            <InfoHeading>{info.title}</InfoHeading>
            <p>{info.value}</p>
          </React.Fragment>
        ))}
      {otherInfoNavArray &&
        otherInfoNavArray.map((info) => (
          <React.Fragment key={info.key}>
            <InfoHeading>{info.title}</InfoHeading>
            <NavParagraph
              onClick={handleNavClick}
              disableInfoNav={props.disableAnimation ? 1 : 0}
            >
              {info.value}
            </NavParagraph>
          </React.Fragment>
        ))}
    </InfoGrid>
  );
};

export default summonOther;

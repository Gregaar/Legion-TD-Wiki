import React from "react";

import {
  InfoGrid,
  InfoHeading,
  NavParagraph,
  StyledLink,
} from "../../card-styles";

interface UpgradeInfoProps {
  upgradedName: string[] | null;
  baseName: string[] | null;
  disableInfoNav?: boolean;
  isOpen?: boolean;
  clickedName: (path: string) => void;
}

const upgradeInfo: React.FC<UpgradeInfoProps> = (props) => {
  const handleNameClick = (name: string) => {
    if (props.disableInfoNav) {
      return;
    } else {
      const unitNameWithDashes = name.replace(" ", "-");
      props.clickedName(`/units/${unitNameWithDashes}`);
    }
  };

  const getLinkURL = (name: string) => {
    const unitNameWithDashes = name.replace(" ", "-");
    return `/units/${unitNameWithDashes}`;
  };

  const upgradedNames = (
    <InfoGrid
      isOpen={props.isOpen}
      disableAnimation={props.disableInfoNav ? 1 : 0}
    >
      <InfoHeading>Upgraded Unit</InfoHeading>
      {props.upgradedName
        ? props.upgradedName.map((name) => (
            <React.Fragment key={name}>
              {!props.disableInfoNav ? (
                <StyledLink to={() => getLinkURL(name)}>
                  <NavParagraph
                    onClick={() => handleNameClick(name)}
                    disableInfoNav={props.disableInfoNav ? 1 : 0}
                  >
                    {name}
                  </NavParagraph>
                </StyledLink>
              ) : (
                <NavParagraph
                  onClick={() => handleNameClick(name)}
                  disableInfoNav={props.disableInfoNav ? 1 : 0}
                >
                  {name}
                </NavParagraph>
              )}
              {props.upgradedName !== null && props?.upgradedName.length > 1 ? (
                <br />
              ) : null}
            </React.Fragment>
          ))
        : null}
    </InfoGrid>
  );

  const baseUnitNames = (
    <InfoGrid
      isOpen={props.isOpen}
      disableAnimation={props.disableInfoNav ? 1 : 0}
    >
      <InfoHeading>Base Unit</InfoHeading>
      {props.baseName
        ? props.baseName.map((name) => (
            <React.Fragment key={name}>
              {!props.disableInfoNav ? (
                <StyledLink to={() => getLinkURL(name)}>
                  <NavParagraph
                    onClick={() => handleNameClick(name)}
                    disableInfoNav={props.disableInfoNav ? 1 : 0}
                  >
                    {name}
                  </NavParagraph>
                </StyledLink>
              ) : (
                <NavParagraph
                  onClick={() => handleNameClick(name)}
                  disableInfoNav={props.disableInfoNav ? 1 : 0}
                >
                  {name}
                </NavParagraph>
              )}
              {props.baseName !== null && props?.baseName.length > 1 ? (
                <br />
              ) : null}
            </React.Fragment>
          ))
        : null}
    </InfoGrid>
  );

  return (
    <React.Fragment>
      {props.upgradedName && !props.baseName ? (
        <React.Fragment>{upgradedNames}</React.Fragment>
      ) : !props.upgradedName && props.baseName ? (
        <React.Fragment>{baseUnitNames}</React.Fragment>
      ) : props.upgradedName && props.baseName ? (
        <React.Fragment>
          {baseUnitNames}
          {upgradedNames}
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default upgradeInfo;

import React from "react";
import { useHistory } from "react-router-dom";
import { BackgroundDiv } from "../../shared/Styles/shared-styles";
import {
  Heading,
  Paragraph,
  ButtonContainer,
  BackButton,
} from "./no-match-styles";

const NoMatchPage: React.FC = () => {
  const history = useHistory();

  return (
    <BackgroundDiv height="100vh" noMatch={true} textBased>
      <Heading>
        404{"\n"}
        Page Not Found
      </Heading>

      <Paragraph>
        Click the button below to return to your units before you leak the wave!
      </Paragraph>

      <ButtonContainer>
        <BackButton type="button" onClick={() => history.push("/")}>
          Back to Safety
        </BackButton>
      </ButtonContainer>
    </BackgroundDiv>
  );
};

export default NoMatchPage;

import React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import {
  BackButton,
  ButtonContainer,
  Heading,
  Paragraph,
} from "./no-match-styles";

const NoMatchPage: React.FC = () => {
  const history = useHistory();

  return (
    <main>
      <div>
        <Helmet>
        <title>{`Legion TD Mega Wiki | 404`}</title>
            <meta
              name="description"
              content={`Page not found. 404.`}
            />
        </Helmet>
      </div>
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
    </main>
  );
};

export default NoMatchPage;

import React from "react";
import styled from "styled-components";

import Background from "../../assets/bg.png";

const Div = styled.div`
  height: 100vh;
  opacity: 0.75;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1%;
`;
const homepage: React.FC = () => {
  return (
    <Div>
      <h1>Hello :-)</h1>
    </Div>
  );
};

export default homepage;

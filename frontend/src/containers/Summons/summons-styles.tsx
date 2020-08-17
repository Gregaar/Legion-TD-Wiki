import styled from "styled-components";

import device from "../../shared/Styles/devices";

export const SummonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10rem;
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

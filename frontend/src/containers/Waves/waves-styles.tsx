import styled from "styled-components";

import device from "../../shared/Styles/devices";

export const WavesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

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
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

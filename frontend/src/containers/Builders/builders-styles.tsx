import styled from "styled-components";

import device from "../../shared/Styles/devices";

export const BuildersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px auto;
  grid-gap: 25px;

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
    flex-direction: row;
    flex-wrap: wrap;
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

  @media ${device.laptopL} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

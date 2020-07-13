import styled from "styled-components";

import device from "../../shared/Styles/devices";

export const UnitGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.mobileM} {
    flex-direction: column;
  }

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

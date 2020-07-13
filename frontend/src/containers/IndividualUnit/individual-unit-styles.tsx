import styled from "styled-components";
import device from "../../shared/Styles/devices";

export const ContainerDiv = styled.div`
  display: flex;

  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.mobileM} {
    flex-direction: column;
  }

  @media ${device.mobileL} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.laptop} {
    flex-wrap: wrap;
    margin-top: 8rem;
  }

  @media ${device.laptopL} {
    flex-wrap: wrap;
    margin-top: 8rem;
  }
`;

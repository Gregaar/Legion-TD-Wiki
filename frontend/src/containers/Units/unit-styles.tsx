import styled from "styled-components";

import device from "../../shared/Styles/devices";

export const UnitContainer = styled.div`
  display: grid;
  overflow-y: auto;
  height: 100vh;
  width: 95vw;
  overflow-x: hidden;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  justify-items: center;
  align-items: baseline;
  border: 2px solid white;
  color: white;
  background-color: rgba(68, 89, 106, 0.9);
  text-transform: capitalize;
  border-radius: 5px;
  margin: 0 auto;

  @media ${device.mobileS} {
    overflow-x: scroll;
    justify-items: left;
  }

  @media ${device.mobileM} {
    overflow-x: scroll;
    justify-items: left;
  }

  @media ${device.mobileL} {
    overflow-x: scroll;
    justify-items: left;
  }

  @media ${device.tablet} {
    overflow-x: scroll;
    justify-items: left;
  }
`;

export const HeadingContainer = styled.div`
  display: contents;
`;

export const UnitHeadings = styled.h3`
  text-shadow: 2px 2px black;
  text-align: center;

  @media ${device.mobileS} {
    margin-left: 5px;
  }

  @media ${device.mobileM} {
    margin-left: 5px;
  }

  @media ${device.mobileL} {
    margin-left: 5px;
  }

  @media ${device.tablet} {
    margin-left: 5px;
  }
`;

interface ImgProps {
  cursor?: number;
}

export const Img = styled.img<ImgProps>`
    cursor: ${(props) => (props.cursor ? "pointer" : "default")};
  }
`;

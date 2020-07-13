import styled from "styled-components";
import device from "../../../shared/Styles/devices";

interface ImgProps {
  cursor?: number;
}

export const UnitName = styled.p`
  text-shadow: 1px 1px black;
  cursor: pointer;

  &:hover {
    color: gold;
    font-weight: bolder;
  }

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
export const Img = styled.img<ImgProps>`
    cursor: ${(props) => (props.cursor ? "pointer" : "default")};
  }
`;

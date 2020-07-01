import styled from "styled-components";

interface ImgProps {
  cursor?: number;
}

export const UnitName = styled.p`
  text-shadow: 1px 1px black;

  &:hover {
    color: gold;
    font-weight: bolder;
    cursor: pointer;
  }
`;
export const Img = styled.img<ImgProps>`
    cursor: ${(props) => (props.cursor ? "pointer" : "default")};
  }
`;

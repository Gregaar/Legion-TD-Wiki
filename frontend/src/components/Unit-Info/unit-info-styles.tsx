import styled from "styled-components";

interface PanelProps {
  height?: string;
}

export const Panel = styled.div<PanelProps>`
  width: 350px;
  height: ${(props) => props.height || "675px"};
  margin: 75px auto 0 auto;
  text-align: center;
  border: 2px solid beige;
  border-radius: 3px;
  background-color: rgb(68, 89, 106);
  color: white;

  animation-name: changeTextColor;
  animation-duration: 1.5s;

  @keyframes changeTextColor {
    from {
      color: gold;
    }
    to {
      color: white;
    }
  }
`;

export const UnitName = styled.h2`
  text-shadow: 2px 2px black;
  background-color: #3a6384;
  text-transform: capitalize;
  margin: 15px 0;
  border: 2px solid gold;
`;

export const UnitImage = styled.img`
  display: block;
  margin: 50px auto;
`;

export const UnitInfoHeading = styled.h3`
  text-shadow: 2px 1px black;
  background-color: #3a6384;
  margin: 15px 0;
  border: 2px solid floralwhite;
  border-radius: 3px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-transform: capitalize;
  align-items: center;
  justify-items: center;
`;

export const InfoHeading = styled.h3`
  text-shadow: 1px 1px black;
  border-right: 2px solid silver;
  width: 110%;
`;

export const NavParagraph = styled.p`
  cursor: pointer;

  &:hover {
    color: gold;
    font-weight: bolder;
  }
`;

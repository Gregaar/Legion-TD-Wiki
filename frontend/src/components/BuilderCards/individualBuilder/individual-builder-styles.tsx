import styled from "styled-components";

interface BuilderNameProps {
  bgColor?: string;
}

interface BuilderInfoHeadingProps {
  bgColor?: string;
}

export const BuilderPanel = styled.div`
  width: 375px;
  max-height: 425px;
  margin: 0 auto;
  text-align: center;
  border: 2px solid beige;
  border-radius: 3px;
  background-color: rgb(68, 89, 106);
  color: white;
  padding: 1%;
`;

export const BuilderName = styled.h2<BuilderNameProps>`
  text-shadow: 2px 2px black;
  background-color: #3a6384;
  text-transform: capitalize;
  margin: 1px;
  border: 2px solid gold;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "darkslategray"};

  &:hover {
    cursor: pointer;
  }
`;

export const BuilderImage = styled.img`
  display: block;
  margin: 25px auto;
  cursor: pointer;
`;

export const BuilderInfoHeading = styled.h3<BuilderInfoHeadingProps>`
  text-shadow: 2px 1px black;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#3a6384")};
  margin: 15px 0;
  border: 2px solid floralwhite;
  border-radius: 3px;
`;

export const AbilityGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-transform: capitalize;
  align-items: center;
  justify-items: center;
`;

export const AbilityHeading = styled.h3`
  text-shadow: 1px 1px black;
  border-right: 2px solid silver;
  width: 110%;
`;

export const Paragraph = styled.p`
  text-shadow: 1px 1px black;
`;

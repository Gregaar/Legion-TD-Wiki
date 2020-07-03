import styled from "styled-components";

interface InfoPanelProps {
  height?: string;
  ability?: number;
}

interface InfoGridProps {
  disableAnimation?: number;
  isOpen?: boolean;
}

interface UnitNameProps {
  bgColor?: string;
  enableHover?: number;
}

interface UnitInfoHeadingProps {
  canToggle?: number;
}

interface UnitImageProps {
  bgColor?: string;
  enableHover?: number;
}

interface NavParagraph {
  disableInfoNav?: number;
}

export const InfoPanel = styled.div<InfoPanelProps>`
  display: inline-block;
  align-self: start;
  width: 350px;
  max-height: ${(props) => props.height || "700px"};
  overflow: hidden;
  margin: ${(props) =>
    props.ability ? "125px 50px 0 auto;" : "125px auto 0 auto;"}
  text-align: center;
  border: 2px solid beige;
  border-radius: 3px;
  background-color: rgb(68, 89, 106);
  color: white;
`;

export const UnitName = styled.h2<UnitNameProps>`
  text-shadow: 2px 2px black;
  background-color: #3a6384;
  text-transform: capitalize;
  margin: 1px;
  border: 2px solid gold;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "darkslategray"};
  cursor: ${(props) => (props.enableHover ? "pointer" : "default")};

  &:hover {
    color: ${(props) => (props.enableHover ? "gold" : "inherit")};
    font-weight: ${(props) => (props.enableHover ? "bolder" : "default")};
  }
`;

export const UnitImage = styled.img<UnitImageProps>`
  display: block;
  margin: 25px auto;
  cursor: ${(props) => (props.enableHover ? "pointer" : "default")};
  border: 5px outset transparent;

  &:hover {
    border: ${(props) =>
      props.enableHover
        ? `5px outset ${props.bgColor ? props.bgColor : "darkslategrey"}`
        : ""};
  }
`;

export const UnitInfoHeading = styled.h3<UnitInfoHeadingProps>`
  text-shadow: 2px 1px black;
  background-color: #3a6384;
  margin: 15px 0;
  border: 2px solid floralwhite;
  border-radius: 3px;

  &:hover {
    cursor: ${(props) => (props.canToggle ? "pointer" : "default")};
    color: ${(props) => (props.canToggle ? "gold" : "inherit")};
  }
`;

export const InfoGrid = styled.div<InfoGridProps>`
  display: ${(props) => (props.isOpen ? "grid" : "none")};
  grid-template-columns: 1fr 1fr;
  text-transform: capitalize;
  align-items: center;
  justify-items: center;
  animation: ${(props) =>
    props.disableAnimation ? "none" : "changeTextColor 1.5s"};

  @keyframes changeTextColor {
    from {
      color: gold;
    }
    to {
      color: white;
    }
  }
`;

export const InfoHeading = styled.h3`
  text-shadow: 1px 1px black;
  border-right: 2px solid silver;
  width: 110%;
`;

export const NavParagraph = styled.p<NavParagraph>`
  cursor: ${(props) => (props.disableInfoNav ? "default" : "pointer")};

  &:hover {
    color: ${(props) => (props.disableInfoNav ? "inherit" : "gold")};
    font-weight: ${(props) => (props.disableInfoNav ? "inherit" : "bolder")};
  }
`;

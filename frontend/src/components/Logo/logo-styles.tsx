import styled from "styled-components";

interface LogoProps {
  menu?: boolean;
}

export const LogoDiv = styled.div<LogoProps>`
background-color: rgb(68, 89, 106);
padding: 8px;
height: 100px;
border-radius: 5px;
width: ${(props) => (props.menu ? "100%" : "auto")};
`;

export const LogoImg = styled.img<LogoProps>`
  height: 100%;
  float: ${(props) => (props.menu ? "right" : null)};
  margin-top: ${(props) => (props.menu ? "10px" : "auto")};
  margin-left: 10px;
`;

import styled from "styled-components";

interface ButtonProps {
  active: boolean;
}

interface ArrowButtonProps {
  path: string;
  disablePrev?: boolean;
  disableNext?: boolean;
}

export const ButtonContainer = styled.div`
  margin: 25px auto -50px auto;
  text-align: center;
`;

export const Button = styled.button<ButtonProps>`
  display: inline-block;
   padding: 0.46em 1.6em;
   border: 2px solid ${(props) => (props.active ? "white" : "black")};
   margin: 0 0.5em 0.2em 0.5em;
   border-radius: 0.12em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: white;
   text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
   background-color: ${(props) => (props.active ? "teal" : "gray")};
   text-align: center;
   transition: all 0.15s;

  &:hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    background-color: gold;
    color: black;
    border: 2px solid white;
  }
`;

export const ArrowContainer = styled.div`
  text-align: center;
  margin: 25px auto -50px auto;
  position: relative;
  z-index: 98;
`;

export const ArrowButton = styled.button<ArrowButtonProps>`
  display: inline-block;
  line-height: 2.5em;
  text-align: center;
  background: ${(props) =>
    props.disablePrev ? "grey" : props.disableNext ? "grey" : "teal"};
  color: white;
  font-size: 1em;
  width: 7em;
  transition: margin 200ms;
  margin-left: ${(props) => (props.path === "builders" ? "14rem" : "0.75em")};
  margin-bottom: -50px;
  margin-right: ${(props) => (props.path === "builders" ? "14rem" : null)};
  border: 2px solid
    ${(props) =>
      props.disablePrev ? "grey" : props.disableNext ? "grey" : "black"};
  border-radius: 5px;
  text-shadow: 1px 1px black;
  cursor: pointer;
  pointer-events: ${(props) =>
    props.disablePrev ? "none" : props.disableNext ? "none" : "default"};

  &:hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    border: 2px solid white;
  }

  &:active {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    border: 2px solid white;
    color: black;
  }
`;

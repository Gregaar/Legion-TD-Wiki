import styled from "styled-components";

interface ButtonProps {
  active: boolean;
}

interface ArrowContainerProps {
  path?: string;
}

interface ArrowButtonProps {
  path: string;
  disablePrev?: boolean;
  disableNext?: boolean;
}

export const ButtonContainer = styled.div`
  margin: 25px auto 0 auto;
  text-align: center;
  position: relative;
  z-index: 99;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Button = styled.button<ButtonProps>`
  display: inline-block;
   padding: 10px;
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
   flex: 0 0 15%;

  &:hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    background-color: ${(props) => (props.active ? "teal" : "gold")};
    color: ${(props) => (props.active ? "white" : "black")};
    border: 2px solid white;
    cursor: ${(props) => (props.active ? "default" : "pointer")};
  }
`;

export const ArrowContainer = styled.div<ArrowContainerProps>`
  text-align: center;
  margin: 25px auto -50px auto;
  position: relative;
  z-index: 98;

  @media (max-width: 1150px) {
    margin: ${(props) => (props.path === "builders" ? "25px auto" : null)};
  }
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

  @media (max-width: 1150px) {
    margin: ${(props) => (props.path === "builders" ? "0 15px" : null)};
  }
`;

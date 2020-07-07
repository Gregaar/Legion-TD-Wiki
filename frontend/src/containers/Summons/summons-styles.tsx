import styled from "styled-components";

interface ButtonProps {
  activeButton: boolean;
}

export const SummonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ButtonContainer = styled.div`
  margin: 25px auto 0 auto;
  text-align: center;
`;

export const Button = styled.button<ButtonProps>`
  display: inline-block;
   padding: 0.46em 1.6em;
   border: 2px solid white;
   margin: 0 0.5em 0.2em 0.5em;
   border-radius: 0.12em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: white;
   text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
   background-color: ${(props) => (props.activeButton ? "green" : "gray")};
   text-align: center;
   transition: all 0.15s;

  &:hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    color: black;
    background-color: yellow;
    border: 2px solid black;
  }
`;

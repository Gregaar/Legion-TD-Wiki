import styled from "styled-components";

import device from "../../shared/Styles/devices";

export const ContainerDiv = styled.div`
  margin: 10rem auto;
  background-color: rgba(68, 89, 106, 0.8);
  color: white;
  width: 25%;

  @media ${device.mobileS} {
    width: 90%;
    margin: 5rem auto;
  }

  @media ${device.mobileM} {
    width: 90%;
    margin: 5rem auto;
  }

  @media ${device.mobileL} {
    width: 75%;
    margin: 5rem auto;
  }

  @media ${device.tablet} {
    width: 75%;
    margin: 5rem auto;
  }

  @media ${device.laptop} {
    width: 50%;
    margin: 5rem auto;
  }
`;

export const Form = styled.form`
  text-align: center;
  padding: 5%;
  border: 2px solid white;
  border-radius: 5px;
  }
`;

export const InputDiv = styled.div`
  padding: 0.5rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: white;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  color: black;
  background: white;
  border: none;
  border-radius: 3px;
  width: 70%;
  margin-bottom: 0.5em;
  text-align: center;

  @media ${device.mobileS} {
    width: 80%;
  }

  @media ${device.mobileM} {
    width: 80%;
  }

  @media ${device.mobileL} {
    width: 15rem;
  }

  @media ${device.tablet} {
    width: 15rem;
  }

  @media ${device.laptop} {
    width: 15rem;
  }
`;

export const InputButton = styled.input`
  display: inline-block;
   padding: 0.46em 1.6em;
   border: 0.1em solid #000000;
   margin: 10px auto;
   border-radius: 0.12em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: #000000;
   text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
   background-color: yellow;
   text-align: center;
   transition: all 0.15s;

  &:hover {
    ext-shadow: 0 0 2em rgba(255, 255, 255, 1);
     color: #ffffff;
     border-color: #ffffff;
  }
`;

export const Button = styled.button`
  display: inline-block;
   padding: 0.46em 1.6em;
   border: 0.1em solid #000000;
   margin: 10px auto;
   border-radius: 0.12em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: #000000;
   text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
   background-color: chartreuse;
   text-align: center;
   transition: all 0.15s;

  &:hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
     color: #ffffff;
     border-color: #ffffff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`;

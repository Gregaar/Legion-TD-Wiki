import styled from "styled-components";
import device from "../../shared/Styles/devices";

interface ModalProps {
  show: boolean;
}

export const ErrorContainer = styled.div`
  color: #ff315a;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const BackdropDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 98;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div<ModalProps>`
  position: fixed;
  top: 25%;
  bottom: 5%;
  left: 70%;
  margin-left: -37.5%;
  width: 35%;
  max-height: 55%;
  overflow-y: scroll;
  z-index: 99;
  background-color: #44596A;
  border: 1px solid yellow;
  padding-bottom: 1%;
  box-sizing: border-box;
  transition: all 0.s ease-out;
  font-size: 1.1rem;
  transform: ${(props) =>
    props.show ? "translate Y(0)" : "translateY(-100vh)"}
  opacity: ${(props) => (props.show ? "1" : "0")};

  @media ${device.mobileS} {
    width: 90%;
    max-height: 75%;
    left: 5%;
    top: 25%;
    bottom: 25%;
    margin: 0 auto;
    font-size: 1rem;
    overflow: scroll;
  }

  @media ${device.mobileM} {
    width: 90%;
    max-height: 40%;
    left: 5%;
    top: 25%;
    bottom: 25%;
    margin: 0 auto;
    font-size: 1rem;
    overflow: scroll;
  }

  @media ${device.mobileL} {
    width: 75%;
    max-height: 75%;
    left: 12%;
    top: 25%;
    bottom: 25%;
    margin: 0 auto;
    font-size: 1rem;
    overflow: scroll;
  }

  @media ${device.tablet} {
    width: 70%;
    max-height: 35%;
    left: 15%;
    top: 25%;
    bottom: 25%;
    margin: 0 auto;
    font-size: 1rem;
    overflow: scroll;
  }

  @media ${device.laptop} {
    width: 50%;
    max-height: 30%;
    left: 25%;
    top: 25%;
    bottom: 25%;
    margin: 0 auto;
    font-size: 1rem;
    overflow: scroll;
  }

  @media ${device.laptopL} {
    max-height: 40%;
`;

export const ErrorHeading = styled.h2`
  margin: 50px 5px;
  color: white;
  text-shadow: 2px 2px black;

  @media ${device.laptopL} {
    margin: 100px 5px;
  }
`;

export const ErrorAdvice = styled.p`
  color: white;
  text-shadow: 1px 1px black;
`;

export const ModalButton = styled.button`
  display: block;
  width: 25%;
  margin: 50px auto;
  padding: 0.46em 1.6em;
  border: 0.1em solid #000000;

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
     border-color: #ffffff;
  }
`;

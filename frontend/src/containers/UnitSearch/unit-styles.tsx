import styled from "styled-components";

import device from "../../shared/Styles/devices";

interface ListButtonProps {
  color?: string;
}

export const UnitContainer = styled.div`
  display: grid;
  overflow-y: auto;
  height: 100%;
  width: 95vw;
  overflow-x: hidden;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  justify-items: center;
  align-items: baseline;
  border: 2px solid white;
  color: white;
  background-color: rgba(68, 89, 106, 0.9);
  text-transform: capitalize;
  border-radius: 5px;
  margin: 0 auto;

  @media ${device.mobileS} {
    overflow-x: scroll;
    justify-items: center;
  }

  @media ${device.mobileM} {
    overflow-x: scroll;
    justify-items: center;
  }

  @media ${device.mobileL} {
    overflow-x: scroll;
    justify-items: center;
  }

  @media ${device.tablet} {
    overflow-x: scroll;
    justify-items: center;
  }
`;

export const HeadingContainer = styled.div`
  display: contents;
`;

export const UnitHeadings = styled.h3`
  text-shadow: 2px 2px black;
  text-align: center;
  cursor: pointer;

  &:hover,
  &:active {
    text-decoration: underline;
  }

  @media ${device.mobileS} {
    margin-left: 5px;
  }

  @media ${device.mobileM} {
    margin-left: 5px;
  }

  @media ${device.mobileL} {
    margin-left: 5px;
  }

  @media ${device.tablet} {
    margin-left: 5px;
  }
`;

interface ImgProps {
  cursor?: number;
}

export const Img = styled.img<ImgProps>`
    cursor: ${(props) => (props.cursor ? "pointer" : "default")};
    align-self: center;
  }
`;

export const TypeHeading = styled.h2`
  color: white;
  text-align: center;
  margin-top: 1rem;
`;

export const ButtonContainer = styled.div`
  margin: 2rem auto;
  text-align: center;
  background-color: rgba(68,89,106,0.9);
  border: 2px solid white;
  width: 20rem;
  border-radius: 5px;
`;

export const ListButton = styled.button<ListButtonProps>`
    display: inline-block;
    margin: 1rem 1rem;
    padding: 0.46em 1.6em;
    border: 0.1em solid #000000;

  border-radius: 0.12em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: #000000;
   text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
   background-color: ${(props) => (props.color ? props.color : "yellow")};
   text-align: center;
   transition: all 0.15s;

  &:hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
     border-color: #ffffff;
  }
`;

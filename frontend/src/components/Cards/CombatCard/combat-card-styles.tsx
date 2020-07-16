import styled from "styled-components";

import device from "../../../shared/Styles/devices";

interface CombatHeadingProps {
  bgColor?: string;
}

interface ListElementProps {
  bulletColor?: string;
}

export const CombatContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media ${device.mobileS} {
    margin: 1px;
  }

  @media ${device.mobileM} {
    margin: 1px;
  }

  @media ${device.mobileL} {
    margin: 1px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    margin-bottom: 5rem;
  }
`;

export const CombatPanel = styled.div`
  width: 350px;
  height: 315px;
  margin: 115px 25px -75px 15px;
  text-align: center;
  border: 2px solid beige;
  border-radius: 3px;
  background-color: rgb(68, 89, 106);
  color: white;

  @media ${device.mobileS} {
    width: 97%;
    height: 330px;
    margin: 1.5rem auto 0 auto;
  }

  @media ${device.mobileM} {
    width: 97%;
    height: 330px;
    margin: 1.5rem auto 0 auto;
  }

  @media ${device.mobileL} {
    width: 22em;
    height: 330px;
    margin: 1.5rem auto 0 auto;
  }
`;

export const CombatHeading = styled.h2<CombatHeadingProps>`
  text-shadow: 2px 2px black;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#3a6384")};
  text-transform: capitalize;
  margin: 1px;
  border: 2px solid gold;
`;

export const CombatImage = styled.img`
  display: block;
  margin: 25px auto;
`;

export const CombatInfoHeading = styled.h3`
  text-shadow: 2px 1px black;
  background-color: #3a6384;
  margin: 15px 0;
  border: 2px solid floralwhite;
  border-radius: 3px;
`;

export const OrderedList = styled.ol`
  margin: -5px 6rem;
  width: 60%;
  counter-reset: li;
  list-style: none;
  *list-style: decimal;
  animation-name: changeTextColorCombat;
  animation-duration: 1.5s;

  @media ${device.mobileS} {
    margin: 0 auto;
    position: relative;
    left: 5%;
  }

  @media ${device.mobileM} {
    margin: 1px;
    position: relative;
    left: 30%;
  }

  @media ${device.mobileL} {
    margin: 1px;
    position: relative;
    left: 28%;
  }

  @keyframes changeTextColorCombat {
    from {
      color: gold;
    }
    to {
      color: white;
    }
  }
`;

export const ListElement = styled.li<ListElementProps>`
  text-transform: capitalize;
  text-align: justify;
  position: relative;
  padding-left: 40px;
  min-height: 25px;
  display: flex;
  margin-top: 2px;

  &:before {
    content: counter(li);
    counter-increment: li;
    color: #fff;
    background: ${(props) =>
      props.bulletColor ? props.bulletColor : "steelblue"};
    border-radius: 50%;
    font-size: 18px;
    width: 25px;
    height: 25px;
    text-align: center;
    display: inline-block;
    position: absolute;
    left: 0;
    top: -2px;
  }
`;

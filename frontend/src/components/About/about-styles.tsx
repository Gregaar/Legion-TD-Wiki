import styled from "styled-components";
import device from "../../shared/Styles/devices";

export const MainHeading = styled.h1`
  text-align: center;
  color: gold;
  font-size: 5rem;
  text-shadow: 2px 2px black;
  margin: 25px auto;

  /* mobileS, mobileM & mobileL */
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 4rem;
  }
`;

export const ImgContainer = styled.div`
  text-align: center;
  margin: 25px auto;
`;

export const Img = styled.img`
  border: 3px solid transparent;
  border-radius: 5px;
  height: 10%;
  width: 10%;
  margin: 0 25px;

  &:hover {
    border: 3px solid gold;
  }

  /* mobileS, mobileM, mobileL & tablet */
  @media (min-width: 320px) and (max-width: 1023px) {
    margin: 0 5px;
    height: 35%;
    width: 35%;
  }

  @media ${device.laptop} {
    height: 15%;
    width: 15%;
  }
`;

export const FAQContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 30vw;

  @media ${device.mobileS} {
    width: 80vw;
  }

  /* mobileM & mobileL */
  @media (min-width: 375px) and (max-width: 767px) {
    width: 70vw;
  }

  /* tablet and laptop */
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 75vw;
  }

  @media ${device.laptopL} {
    width: 50vw;
  }
`;

export const PQ = styled.p`
  color: gold;
  font-size: 1.5rem;
  margin: 25px auto;
`;

export const PA = styled.p`
  color: white;
  font-size: 1.5rem;
  margin: 25px auto;
  line-height: 50px;
`;

export const A = styled.a`
  color: white;

  &:visited {
    color: white;
  }

  &:hover,
  &:active {
    color: white;
    text-shadow: 1px 1px gold;
  }
`;

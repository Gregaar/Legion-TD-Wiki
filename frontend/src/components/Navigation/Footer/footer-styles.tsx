import styled from "styled-components";
import device from "../../../shared/Styles/devices";

interface FooterStyleProps {
  loading: number;
}

export const Footer = styled.footer<FooterStyleProps>`
  border: 2px solid yellow;
  background-color: rgba(68, 89, 106, 0.8);
  width: 100%;
  padding: 0 2px;
  z-index: 99;
  border-radius: 5px;
  height: 35px;
  visibility: ${(props) => (props.loading ? "hidden" : "visible")};
`;

export const List = styled.ul`
  list-style: none;
  margin: 0.5rem auto;
  padding: 0;
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;

  @media ${device.mobileS} {
    margin: 2%;
  }

  @media ${device.mobileM} {
    margin: 2%;
  }

  @media ${device.mobileL} {
    margin: 5px;
  }
`;

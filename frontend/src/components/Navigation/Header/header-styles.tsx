import styled from "styled-components";

interface HeaderProps {
  loading: boolean | undefined;
}

export const Header = styled.header<HeaderProps>`
  height: 75px;
  opacity: 0.75;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background-color: rgba(68, 89, 106, 0.8);
  border-radius: 5px;
  position: unset;
  border: 2px solid yellow;
  visibility: ${props => props.loading ? "hidden" : "visible"};
`;
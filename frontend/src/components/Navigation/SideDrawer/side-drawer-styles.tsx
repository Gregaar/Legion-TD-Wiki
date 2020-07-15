import styled from "styled-components";

interface ShowProps {
  show?: boolean;
}

export const Backdrop = styled.div<ShowProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 98;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SideDrawerDiv = styled.div<ShowProps>`
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  position: fixed;
  width: 150px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: rgb(68, 89, 106);
  padding: 32px 16px;
  transition: transform 0.3s ease-out;

  @media (min-width: 576px) {
    display: none;
  }
`;

export const DrawerToggle = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  margin-left: 10px;

  @media (min-width: 576px) {
    display: none;
  }
`;

export const DrawerMenu = styled.div`
  width: 90%;
  height: 3px;
  background-color: white;

  @media (min-width: 576px) {
    display: none;
  }
`;

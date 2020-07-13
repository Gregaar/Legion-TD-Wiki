import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
  flex-flow: column;
  text-align: center;

  @media (min-width: 501px) {
    flex-flow: row;
  }
`;

import styled from "styled-components";

export const EffectivenessPanel = styled.div`
  width: 350px;
  max-height: 600px;
  margin: 125px auto 0 auto;
  text-align: center;
  border: 2px solid beige;
  border-radius: 3px;
  background-color: rgb(68, 89, 106);
  color: white;
`;

export const CombatHeading = styled.h2`
  text-shadow: 2px 2px black;
  background-color: #3a6384;
  text-transform: capitalize;
  margin: 15px 0;
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
  text-align: justify;
  margin: 0 auto;
  width: 15%;
  animation-name: changeTextColorCombat;
  animation-duration: 1.5s;

  @keyframes changeTextColorCombat {
    from {
      color: gold;
    }
    to {
      color: white;
    }
  }
`;

export const ListElement = styled.li`
  text-transform: capitalize;
  text-align: justify;
`;

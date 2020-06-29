import styled from "styled-components";

interface AbilityGridProps {
  abilityCount: number;
}

interface AbilityTextProps {
  capitalize?: number;
}

export const AbilityGrid = styled.div<AbilityGridProps>`
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  align-content: center;
  margin-right: 150px;
  width: ${(props) => (props.abilityCount > 1 ? "40%" : "25%")};
`;

export const AbilityPanel = styled.div`
  width: 400px;
  max-height: 550px;
  margin: 75px auto 0 auto;
  text-align: center;
  border: 2px solid beige;
  border-radius: 3px;
  background-color: rgb(68, 89, 106);
  color: white;
  text-align: center;
`;

export const AbilityName = styled.h2`
  text-shadow: 2px 2px black;
  background-color: #3a6384;
  text-transform: capitalize;
  margin: 15px 0;
  border: 2px solid gold;
`;

export const AbilityImage = styled.img`
  display: block;
  margin: 50px auto;
`;

export const AbilityInfoHeading = styled.h3`
  text-shadow: 2px 1px black;
  background-color: #3a6384;
  margin: 15px 0;
  border: 2px solid floralwhite;
  border-radius: 3px;
  text-transform: capitalize;
`;

export const AbilityText = styled.p<AbilityTextProps>`
  text-shadow: 1px 1px black;
  line-height: 25px;
  text-transform: ${(props) => (props.capitalize ? "capitalize" : "inherit")};
  animation-name: changeTextColorAbility;
  animation-duration: 1.5s;

  @keyframes changeTextColorAbility {
    from {
      color: gold;
    }
    to {
      color: white;
    }
  }
`;

export const DescContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  text-align: center;
`;

import styled from "styled-components";

interface AbilityCountProps {
  abilityCount: number;
}

interface AbilityTextProps {
  capitalize?: number;
}

interface AbilityNameProps {
  bgColor?: string;
}

export const AbilityGrid = styled.div<AbilityCountProps>`
  display: ${(props) => (props.abilityCount > 2 ? "flex" : "inline-grid")};
  flex-wrap: ${(props) => (props.abilityCount > 2 ? "wrap" : null)};
  justify-content: ${(props) => (props.abilityCount > 2 ? "center" : null)};
  grid-template-columns: ${(props) =>
    props.abilityCount > 2 ? null : "repeat(2, 1fr)"};
  grid-gap: ${(props) => (props.abilityCount > 2 ? "0" : "25px")};
  align-content: center;
  margin-right: 150px;
  margin-top: ${(props) => (props.abilityCount > 2 ? "45px" : "0")};
  width: ${(props) => (props.abilityCount > 1 ? "40%" : "25%")};
`;

export const AbilityPanel = styled.div<AbilityCountProps>`
  width: 400px;
  max-height: 550px;
  margin: 75px auto 0 auto;
  text-align: center;
  border: 2px solid beige;
  border-radius: 3px;
  background-color: rgb(68, 89, 106);
  color: white;
  text-align: center;
  flex: ${(props) => (props.abilityCount > 1 ? "0 0 45%" : null)};
`;

export const AbilityName = styled.h2<AbilityNameProps>`
  text-shadow: 2px 2px black;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "darkslategrey"};
  text-transform: capitalize;
  margin: 1px;
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

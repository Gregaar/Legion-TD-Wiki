import styled from "styled-components";

interface CheckboxProps {
  order: number;
}

export const FilterContainer = styled.div`
  margin: 10px auto;
  padding: 1%;
  background-color: rgba(68, 89, 106, 0.9);
  color: white;
  border: 2px solid yellow;
  border-radius: 5px;
  width: 50%;
`;

export const SearchLabel = styled.label`
  display: block;
  text-align: center;
  text-shadow: 2px 2px black;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const SearchInput = styled.input`
  text-align: center;
  display: block;
  margin: 0 auto 30px auto;
  width: 40%;
`;

export const DropdownContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 10px 60px auto -100px;
  text-align: end;
`;

export const DropdownLabel = styled.label`
  display: inline-block;
  width: 104px;
  margin: 0 0 0 auto;
  text-shadow: 1px 1px black;
`;

export const TierRangeContainer = styled.div`
  text-align: center;
  margin: 25px auto;
`;

export const TierHeading = styled.h3`
  margin-bottom: 10px;
  text-shadow: 2px 2px black;
`;

export const TierLabel = styled.label`
  display: inline-block;
  text-shadow: 1px 1px black;
`;

export const TierInput = styled.input`
  display: inline-block;
  margin: auto;
  text-align: center;
  width: 10%;
  margin: 0 10px;
`;

export const AbilitiesHeading = styled.h3`
  text-align: center;
  margin: 1rem;
  text-shadow: 2px 2px black;
`;

export const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  border: 1px dashed yellow;
`;

export const CheckboxLabel = styled.label<CheckboxProps>`
  text-shadow: 1px 1px black;
  order: ${(props) => props.order - 1};
`;

export const CheckboxInput = styled.input<CheckboxProps>`
  order: ${(props) => props.order};
  &:checked + ${CheckboxLabel} {
    color: lime;
  }
`;

export const SubmitButton = styled.input`
    display: block;
    margin: 25px auto 0 auto;
    padding: 0.46em 1.6em;
    border: 0.1em solid #000000;

  border-radius: 0.12em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: #000000;
   text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
   background-color: yellow;
   text-align: center;
   transition: all 0.15s;

  &:hover {
    ext-shadow: 0 0 2em rgba(255, 255, 255, 1);
     border-color: #ffffff;
  }
`;

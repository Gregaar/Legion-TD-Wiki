import styled from "styled-components";

import device from "../../../shared/Styles/devices";

interface CheckboxProps {
  order: number;
}

export const FilterContainer = styled.div`
  margin: 5rem auto;
  padding: 1%;
  background-color: rgba(68, 89, 106, 0.7);
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  width: 50%;

  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.mobileM} {
    width: 100%;
  }

  @media ${device.mobileL} {
    width: 90%;
  }

  @media ${device.tablet} {
    width: 45rem;
  }

  @media ${device.laptop} {
    width: 50rem;
  }
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

  @media ${device.mobileS} {
    width: 70%;
  }

  @media ${device.mobileM} {
    width: 70%;
  }

  @media ${device.mobileL} {
    width: 50%;
  }

  @media ${device.tablet} {
    width: 50%;
  }
`;

export const DropdownContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 10px 60px auto -100px;
  text-align: end;

  @media ${device.mobileS} {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 3rem;
    text-align: center;
  }

  @media ${device.mobileM} {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 3rem;
    text-align: center;
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 2rem 0 -1rem;
    text-align: end;
  }

  @media ${device.tablet} {
    margin: 0 auto 0 -5rem;
  }
`;

export const DropdownLabel = styled.label`
  display: inline-block;
  width: 104px;
  margin: 0 0 0 auto;
  text-shadow: 1px 1px black;
`;

export const DropdownSelect = styled.select`
  @media ${device.mobileS} {
    width: 90%;
  }

  @media ${device.mobileM} {
    width: 90%;
  }

  @media ${device.mobileL} {
    width: 50%;
  }
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

  @media ${device.mobileS} {
    width: 25%;
  }

  @media ${device.mobileM} {
    width: 25%;
  }

  @media ${device.mobileL} {
    width: 20%;
  }

  @media ${device.tablet} {
    width: 20%;
  }

  @media ${device.laptop} {
    width: 20%;
  }
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
    display: inline-block;
    margin: 25px 5px 5px 1.5rem;
    padding: 0.46em 1.6em;
    border: 0.1em solid #000000;

  border-radius: 0.12em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: #000000;
   text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
   background-color: limegreen;
   text-align: center;
   transition: all 0.15s;

  &:hover {
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
     border-color: #ffffff;
  }
`;

export const ResetButton = styled(SubmitButton)`
  background-color: yellow;
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

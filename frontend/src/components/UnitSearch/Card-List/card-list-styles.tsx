import styled from "styled-components";

import device from "../../../shared/Styles/devices";

export const FormContainer = styled.div`
  margin: 2rem auto -5rem auto;
  border: 2px solid white;
  text-align: center;
  color: white;
  background-color: rgba(68, 89, 106, 0.9);
  width: 20rem;
  border-radius: 5px;
`;

export const Label = styled.label`
  margin: 1rem 1rem;
  display: inline-block;
`;

export const Input = styled.input`
  margin-left: 0.1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    margin-bottom: 10rem;
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }
`;

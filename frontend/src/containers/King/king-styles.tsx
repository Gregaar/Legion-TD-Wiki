import styled from "styled-components";
import device from "../../shared/Styles/devices";

interface ContainerProps {
    stats?:boolean;
}

export const KingContainer = styled.div<ContainerProps>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: ${props => props.stats ? "100px" : null};

    @media ${device.mobileS} {
        flex-direction: column;
        margin-top: 3rem;
      }
    
      @media ${device.mobileM} {
        flex-direction: column;
        margin-top: 3rem;
      }
    
      @media ${device.mobileL} {
        flex-direction: column;
        margin-top: 3rem;
      }
    
      @media ${device.tablet} {
        display: ${props => props.stats ? "flex": "inline-grid"};
        grid-template-columns: 1fr 1fr;
        flex-direction: row;
        margin-top: 3rem;
        width: 100%;
      }
    
      @media ${device.laptop} {
        display: ${props => props.stats ? "flex": "inline-grid"};
        grid-template-columns: 1fr 1fr;
        flex-direction: row;
        margin-top: 3rem;
        width: 100%;
      }

      @media ${device.laptopL} {
        display: ${props => props.stats ? "flex": "inline-grid"};
        grid-template-columns: 1fr 1fr;
        flex-direction: row;
        margin-top: 3rem;
        width: 100%;
      }
`
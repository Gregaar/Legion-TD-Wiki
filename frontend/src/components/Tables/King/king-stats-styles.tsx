import TableCell from "@material-ui/core/TableCell";
import styled from "styled-components";

import device from "../../../shared/Styles/devices";

export const TableContainer = styled.div`
  background-color: rgb(68, 89, 106);
  width: 35%;
  height: 100%;
  border: 2px solid white;
  margin: 0 auto;

  @media ${device.mobileS} {
    width 90%;
    overflow-x: scroll;
    margin: 10px auto 0 auto;
  }

  @media ${device.mobileM} {
    width 90%;
    overflow-x: scroll;
    margin: 10px auto 0 auto;
  }

  @media ${device.mobileL} {
    width 90%;
    overflow-x: scroll;
    margin: 10px auto 0 auto;
  }

  @media ${device.tablet} {
    width 90%;
    margin: 10px auto 0 auto;
  }

  @media ${device.laptop} {
    width 90%;
    margin: 10px auto 0 auto;
  }

  @media ${device.laptopL} {
    width 90%;
    margin: 10px auto 0 auto;
  }
`;

export const TableCellStyled = styled(TableCell)`
  && {
    color: yellow;
    font-weight: bold;
    text-align: center;
  }
`;

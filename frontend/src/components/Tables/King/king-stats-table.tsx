import React from "react";
import shortid from "shortid";
import goldIcon from "../../../assets/gold.png";
import lumberIcon from "../../../assets/lumber.png";
import kingAttack from "../../../assets/king-attack.png";
import kingRegen from "../../../assets/king-regen.png";
import kingHitPoints from "../../../assets/king-hitpoints.png";
import kingLevel from "../../../assets/king-level.png";
import KingStatsInterface from "../../../shared/Interfaces/king-stats-interface";
import Table from "@material-ui/core/Table";
import { TableContainer, TableCellStyled } from "./king-stats-styles";
import TableBody from "@material-ui/core/TableBody";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

interface KingStatsProps {
  stats: KingStatsInterface[];
}

const kingStatsTable: React.FC<KingStatsProps> = ({ stats }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCellStyled>
              <h2>Level</h2>
              <Tooltip title="Level" placement="bottom">
                <img src={kingLevel} alt={`A plus symbol icon`} />
              </Tooltip>
            </TableCellStyled>
            <TableCellStyled>
              <h2>Attack</h2>
              <Tooltip title="Attack" placement="bottom">
                <img src={kingAttack} alt={`A sword icon`} />
              </Tooltip>
            </TableCellStyled>
            <TableCellStyled>
              <h2>HP</h2>
              <Tooltip title="Hit Points" placement="bottom">
                <img src={kingHitPoints} alt={`A hit points icon`} />
              </Tooltip>
            </TableCellStyled>
            <TableCellStyled>
              <h2>Regen</h2> 
              <Tooltip title="Regeneration" placement="bottom">
                <img src={kingRegen} alt={`A healing hand icon`} />
              </Tooltip>
            </TableCellStyled>
            <TableCellStyled>
              <h2>Lumber</h2>
              <Tooltip title="Lumber Spent" placement="bottom">
                <img src={lumberIcon} alt={`A lumber icon`} />
              </Tooltip>
            </TableCellStyled>
            <TableCellStyled>
              <h2>Income</h2>
              <Tooltip title="Income Gained" placement="bottom">
                <img src={goldIcon} alt={`A gold coin icon`} />
              </Tooltip>
            </TableCellStyled>
          </TableRow>
        </TableHead>
        <TableBody>
          {stats &&
            stats.map((stat) => (
              <TableRow key={shortid.generate()}>
                <TableCellStyled>{stat.Level}</TableCellStyled>
                <TableCellStyled>{`${stat["Min Hit"]} - ${stat["Max Hit"]}`}</TableCellStyled>
                <TableCellStyled>
                  {stat.Level > 20 ? null : stat["Hit Points"]}
                </TableCellStyled>
                <TableCellStyled>
                  {stat.Level > 20 ? null : stat.Regeneration}
                </TableCellStyled>
                <TableCellStyled>{stat["Wood Spent"]}</TableCellStyled>
                <TableCellStyled>{stat["Income Gained"]}</TableCellStyled>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default kingStatsTable;

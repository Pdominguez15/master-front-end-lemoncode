import React from "react";

//Traemos el modelo de datos del api
import { MemberEntity } from "./table.vm";

//Componentes material UI
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

//CSS
import { makeStyles } from "@material-ui/core/styles";

//Sobreescribir CSS de los componentes
const useStyles = makeStyles({
  cell: {
    wordWrap: "break-word",
  },
});

interface Props {
  membersList: MemberEntity[];
}

export const TableBodyComponent: React.FC<Props> = (props) => {
  //Props
  const { membersList } = props;

  //CSS para sobreescribir en los componentes
  const classes = useStyles();

  return (
    <TableBody>
      {membersList.map((member) => (
        <TableRow key={member.id}>
          <TableCell component="th" scope="row" align="center">
            <img src={member.avatar_url} style={{ width: "5rem" }} />
          </TableCell>
          <TableCell align="center" className={classes.cell}>
            {member.id}
          </TableCell>
          <TableCell align="center" className={classes.cell}>
            {member.login}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

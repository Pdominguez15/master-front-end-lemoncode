import React from "react";

//Componentes material UI
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

//CSS
import { makeStyles } from "@material-ui/core/styles";

//Sobreescribir CSS de los componentes
const useStyles = makeStyles({
  head: {
    backgroundColor: "#3f51b5",
    color: "white",
    fontSize: 14,
  },
});

interface Props {
  headerList: string[];
}

export const TableHeaderComponent: React.FC<Props> = (props) => {
  //Props
  const { headerList } = props;

  //CSS para sobreescribir en los componentes
  const classes = useStyles();

  return (
    <TableHead>
      <TableRow>
        {headerList.map((head, index) => (
          <TableCell key={index} align="center" className={classes.head}>
            {head}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

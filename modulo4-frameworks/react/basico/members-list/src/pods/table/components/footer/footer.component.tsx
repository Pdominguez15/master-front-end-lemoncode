import React from "react";

//Componentes material UI
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";

//CSS
import { makeStyles } from "@material-ui/core/styles";

//Sobreescribir CSS de los componentes
const useStyles = makeStyles({
  selectRoot: {
    "@media screen and (max-width: 890px)": {
      margin: 0,
    },
  },
  actions: {
    "@media screen and (max-width: 890px)": {
      margin: 0,
    },
  },
  toolbar: {
    "@media screen and (max-width: 890px)": {
      margin: 0,
      padding: 0,
      minHeight: 21,
    },
  },
});

interface Props {
  length: number;
  rowsPerPage: number;
  page: number;
  onChangePage: (event: any, newPage: any) => void;
  onChangeRowsPerPage: (event: any) => void;
}

export const TableFooterComponent: React.FC<Props> = (props) => {
  //Props
  const {
    length,
    rowsPerPage,
    page,
    onChangePage,
    onChangeRowsPerPage,
  } = props;

  //CSS para sobreescribir en los componentes
  const classes = useStyles();

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          colSpan={3}
          count={length}
          rowsPerPage={rowsPerPage}
          page={page > 0 && length === rowsPerPage ? 0 : page}
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage}
          classes={{
            selectRoot: classes.selectRoot,
            actions: classes.actions,
            toolbar: classes.toolbar,
          }}
        />
      </TableRow>
    </TableFooter>
  );
};

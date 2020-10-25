import React, { memo } from "react";

//Traemos el modelo de datos del api
import { MemberEntity } from "./table.vm";

//Componentes material UI
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

//Componente
import { TableHeaderContainer } from "./components/header";
import { TableBodyContainer } from "./components/body";
import { TableFooterContainer } from "./components/footer";

//CSS
import { makeStyles } from "@material-ui/core/styles";

//Sobreescribir CSS de los componentes
const useStyles = makeStyles({
  table: {
    tableLayout: "fixed",
  },
});

interface Props {
  headerList: string[];
  membersList: MemberEntity[];
}

export const TableComponent: React.FC<Props> = (props) => {
  //Props
  const { headerList, membersList } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  React.useEffect(() => {
    setPage(0);
  }, [membersList]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //CSS para sobreescribir en los componentes
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Member list" className={classes.table}>
        <TableHeaderContainer headerList={headerList} />

        <TableBodyContainer
          membersList={membersList}
          rowsPerPage={rowsPerPage}
          page={page}
        />

        <TableFooterContainer
          membersList={membersList}
          rowsPerPage={rowsPerPage}
          page={page > 0 && membersList.length === rowsPerPage ? 0 : page}
          onchangePage={handleChangePage}
          onchangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Table>
    </TableContainer>
  );
};

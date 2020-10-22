import React, { memo } from "react";

//Traemos el modelo de datos del api
import { MemberEntity } from "./table.vm";

//Componentes material UI
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";

//CSS
import { makeStyles } from "@material-ui/core/styles";

//Sobreescribir CSS de los componentes
const useStyles = makeStyles({
  table: {
    tableLayout: "fixed",
  },
  head: {
    backgroundColor: "#3f51b5",
    color: "white",
    fontSize: 14,
  },
  cell: {
    wordWrap: "break-word",
  },
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
  headsList: string[];
  memberList: MemberEntity[];
}

export const TableComponent: React.FC<Props> = (props) => {
  //Props
  const { headsList, memberList } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  React.useEffect(() => {
    setPage(0);
  }, [memberList]);

  //CSS para sobreescribir en los componentes
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Member list" className={classes.table}>
        <TableHead>
          <TableRow>
            {headsList.map((head, index) => (
              <TableCell key={index} align="center" className={classes.head}>
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? memberList.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : memberList
          ).map((member) => (
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

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={memberList.length}
              rowsPerPage={rowsPerPage}
              page={page > 0 && memberList.length === 0 ? 0 : page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              classes={{
                selectRoot: classes.selectRoot,
                actions: classes.actions,
                toolbar: classes.toolbar,
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

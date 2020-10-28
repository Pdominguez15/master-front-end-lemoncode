import React from "react";

//Modelo
import { MemberEntity } from "./members-list.vm";

//Componentes
import { SearchContainer } from "../search";
import { SnackbarContainer } from "../snackbar";
import { TableContainer } from "../table";

//CSS
import * as classes from "./members-list.styles";

interface Props {
  headerList: string[];
  company: string;
  onSearch: (membersList: MemberEntity[], companyFilter) => void;
  membersList: MemberEntity[];
  open: boolean;
  date: number;
  rowsPerPage: number;
  page: number;
  onchangePage: (event: any, page: number) => void;
  onchangeRowsPerPage: (event: any) => void;
}

export const MembersListComponent: React.FunctionComponent<Props> = (props) => {
  const {
    headerList,
    company,
    onSearch,
    membersList,
    date,
    open,
    rowsPerPage,
    page,
    onchangePage,
    onchangeRowsPerPage,
  } = props;

  return (
    <>
      <div id="container" className={classes.container}>
        <SearchContainer onSearch={onSearch} company={company} />
        <TableContainer
          headerList={headerList}
          membersList={membersList}
          rowsPerPage={rowsPerPage}
          page={page}
          onchangePage={onchangePage}
          onchangeRowsPerPage={onchangeRowsPerPage}
        />
        <SnackbarContainer key={date} open={open} companyFilter={company} />
      </div>
    </>
  );
};

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
  company: string;
  onSearch: (membersList: MemberEntity[], companyFilter) => void;
  membersList: MemberEntity[];
  open: boolean;
  date: number;
}

export const MembersListComponent: React.FunctionComponent<Props> = (props) => {
  const { company, onSearch, membersList, date, open } = props;

  return (
    <>
      <div id="container" className={classes.container}>
        <SearchContainer onSearch={onSearch} company={company} />
        <TableContainer membersList={membersList} />
        <SnackbarContainer key={date} open={open} companyFilter={company} />
      </div>
    </>
  );
};

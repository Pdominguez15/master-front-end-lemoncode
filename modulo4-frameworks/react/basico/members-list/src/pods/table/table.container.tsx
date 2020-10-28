import React from "react";

//Modelo
import { MemberEntity } from "./table.vm";

//Componente
import { TableComponent } from "./table.component";

//Cabecera de la tabla
const headsList = ["Avatar", "ID", "Name"];

interface Props {
  membersList: MemberEntity[];
  headerList: string[];
  rowsPerPage: number;
  page: number;
  onchangePage: (event: any, page: number) => void;
  onchangeRowsPerPage: (event: any) => void;
}

export const TableContainer: React.FC<Props> = (props) => {
  //Props
  const {
    headerList,
    membersList,
    rowsPerPage,
    page,
    onchangePage,
    onchangeRowsPerPage,
  } = props;
  return (
    <>
      <TableComponent
        headerList={headerList}
        membersList={membersList}
        rowsPerPage={rowsPerPage}
        page={page}
        onchangePage={onchangePage}
        onchangeRowsPerPage={onchangeRowsPerPage}
      />
    </>
  );
};

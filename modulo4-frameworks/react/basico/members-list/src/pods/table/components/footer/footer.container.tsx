import React from "react";

//Traemos el modelo de datos del api
import { MemberEntity } from "./table.vm";

//Componente
import { TableFooterComponent } from "./footer.component";

interface Props {
  membersList: MemberEntity[];
  rowsPerPage: number;
  page: number;
  onchangePage: (event: any, page: number) => void;
  onchangeRowsPerPage: (event: any) => void;
}

export const TableFooterContainer: React.FC<Props> = (props) => {
  const {
    membersList,
    rowsPerPage,
    page,
    onchangePage,
    onchangeRowsPerPage,
  } = props;

  return (
    <>
      <TableFooterComponent
        length={membersList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={onchangePage}
        onChangeRowsPerPage={onchangeRowsPerPage}
      />
    </>
  );
};

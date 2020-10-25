import React from "react";

//Traemos el modelo de datos del api
import { MemberEntity } from "./table.vm";

//Componente
import { TableBodyComponent } from "./body.component";

interface Props {
  membersList: MemberEntity[];
  rowsPerPage: number;
  page: number;
}
export const TableBodyContainer: React.FC<Props> = (props) => {
  //Props
  const { membersList, rowsPerPage, page } = props;

  return (
    <>
      <TableBodyComponent
        membersList={
          rowsPerPage > 0
            ? membersList.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : membersList
        }
      />
    </>
  );
};

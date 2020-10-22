import React from "react";

//Modelo
import { MemberEntity } from "./table.vm";

//Componente
import { TableComponent } from "./table.component";

//Cabecera de la tabla
const headsList = ["Avatar", "ID", "Name"];

interface Props {
  membersList: MemberEntity[];
}

export const TableContainer: React.FC<Props> = (props) => {
  //Props
  const { membersList } = props;
  return (
    <>
      <TableComponent headsList={headsList} memberList={membersList} />
    </>
  );
};

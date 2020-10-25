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
}

export const TableContainer: React.FC<Props> = (props) => {
  //Props
  const { headerList, membersList } = props;
  return (
    <>
      <TableComponent headerList={headerList} membersList={membersList} />
    </>
  );
};

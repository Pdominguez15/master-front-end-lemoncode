import React from "react";

//Componente
import { TableHeaderComponent } from "./header.component";

interface Props {
  headerList: string[];
}

export const TableHeaderContainer: React.FC<Props> = (props) => {
  //Props
  const { headerList } = props;
  return (
    <>
      <TableHeaderComponent headerList={headerList} />
    </>
  );
};

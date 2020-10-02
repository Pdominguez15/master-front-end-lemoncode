import React from "react";

//Modelo
import { MemberEntity } from "./list-members.vm";

//Componentes
import { SearchContainer } from "../search";
import { SnackbarContainer } from "../snackbar";
import { TableContainer } from "../table";

//CSS
import * as classes from "./list-members.styles";

export const ListMembersComponent: React.FunctionComponent = () => {
  //Search
  const [company, setCompany] = React.useState("lemoncode");

  //Table
  const [membersList, setmembersList] = React.useState<MemberEntity[]>([]);

  //Snackbar
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(null);

  //Controlar la lista de miembros devuelta de la busqueda
  const handleSearch = (membersList: MemberEntity[], companyFilter: string) => {
    setmembersList(membersList);

    if (membersList.length > 0) {
      setOpen(false);
      setDate(new Date());
    } else {
      setCompany(companyFilter);
      setOpen(true);
      setDate(new Date());
    }
  };

  return (
    <>
      <div id="container" className={classes.container}>
        <SearchContainer onSearch={handleSearch} company={company} />
        <TableContainer membersList={membersList} />
        <SnackbarContainer key={date} open={open} companyFilter={company} />
      </div>
    </>
  );
};

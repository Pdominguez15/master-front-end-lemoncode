import React from "react";

//Modelo
import { MemberEntity } from "./members-list.vm";

//Componente
import { MembersListComponent } from "./members-list.component";

//Cabecera de la tabla
const headerList = ["Avatar", "ID", "Name"];

export const ListMembersContainer: React.FunctionComponent = () => {
  //Search
  const [company, setCompany] = React.useState("lemoncode");

  //Table
  const [membersList, setmembersList] = React.useState<MemberEntity[]>([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //Snackbar
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(null);

  //Controlar la lista de miembros devuelta de la busqueda
  const handleSearch = (membersList: MemberEntity[], companyFilter: string) => {
    setPage(0);
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
      <MembersListComponent
        headerList={headerList}
        company={company}
        onSearch={handleSearch}
        membersList={membersList}
        open={open}
        date={date}
        rowsPerPage={rowsPerPage}
        page={page}
        onchangePage={handleChangePage}
        onchangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

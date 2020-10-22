import React from "react";

//Modelo
import { MemberEntity } from "./members-list.vm";

//Componente
import { MembersListComponent } from "./members-list.component";

export const ListMembersContainer: React.FunctionComponent = () => {
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
      <MembersListComponent
        company={company}
        onSearch={handleSearch}
        membersList={membersList}
        open={open}
        date={date}
      />
    </>
  );
};

import React from "react";

//Api
import { getMembersList } from "./search.api";

//Modelo
import { MemberEntity } from "./search.vm";

//Componente
import { SearchComponent } from "./search.component";

interface Props {
  company: string;
  onSearch: (membersList: MemberEntity[], companyFilter) => void;
}

export const SearchContainer: React.FC<Props> = (props) => {
  //Props
  const { company, onSearch } = props;
  const [companyFilter, setCompanyFilter] = React.useState(company);

  //Cargamos nada mas instanciar el componente la lista
  React.useEffect(() => {
    handleSearch(companyFilter);
  }, []);

  //Llamada al api para devolver la lista de miembros
  const handleSearch = (companyFilter: string) => {
    getMembersList(companyFilter)
      .then((result) => {
        onSearch(result, companyFilter);
      })
      .catch(() => {
        onSearch([], companyFilter);
      });
  };

  return (
    <>
      <SearchComponent onSearch={handleSearch} company={companyFilter} />
    </>
  );
};

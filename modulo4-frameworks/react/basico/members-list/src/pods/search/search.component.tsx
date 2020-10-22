import React from "react";

//Componentes material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//CSS
import * as classesPropias from "./search.styles";
import { makeStyles } from "@material-ui/core/styles";

//Sobreescribir CSS de los componentes
const useStyles = makeStyles({
  title: {
    color: "#3f51b5",
    textAlign: "center",
    paddingBottom: "2em",
  },
  input: {
    width: "70%",
    "@media screen and (max-width: 890px)": {
      width: "100%",
      marginBottom: "1em",
    },
  },
});

interface Props {
  company: string;
  onSearch: (companyFilter: string) => void;
}

export const SearchComponent: React.FC<Props> = (props) => {
  //Props
  const { company, onSearch } = props;

  const [companyFilter, setCompanyFilter] = React.useState(company);

  //CSS para sobreescribir en los componentes
  const classes = useStyles();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(companyFilter);
        }}
      >
        <Typography variant="h6" className={classes.title}>
          Introduce un nombre de empresa de Github para listar sus miembros:
        </Typography>

        <div className={classesPropias.container}>
          <TextField
            id="company"
            label="Nombre de la compañía"
            className={classes.input}
            value={companyFilter}
            onChange={(e) => {
              setCompanyFilter(e.target.value);
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Buscar
          </Button>
        </div>
      </form>
    </>
  );
};

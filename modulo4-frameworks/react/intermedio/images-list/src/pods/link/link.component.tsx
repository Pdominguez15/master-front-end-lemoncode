import React from "react";

//Router
import { Link } from "react-router-dom";

//Modelo
import { LinkVM } from "./link.vm";

//Componentes
import Typography from "@material-ui/core/Typography";

interface Props {
  link: LinkVM;
}

export const LinkComponent: React.FunctionComponent<Props> = (props) => {
  const { link } = props;

  const { to, category, css } = link;

  return (
    <>
      <Typography variant="h6" classes={{ root: css.category }}>
        Categorías:{" "}
        <Link to={to} className={css.link}>
          {category}
        </Link>
      </Typography>
    </>
  );
};

import React from "react";

//Contexto
import { MyContext } from "common-app/context";

//Router
import { LinkContainer } from "pods/link";

//Componentes
import { ListComponent } from "./list.component";
import Typography from "@material-ui/core/Typography";

//CSS
import * as classesPropias from "./list.styles";

//Custom
import { getArticles } from "./customHook/getArticles";
import { updateArticles } from "./customHook/updateArticles";

interface Props {
  type: string;
}

export const ListContainer: React.FunctionComponent<Props> = (props) => {
  //Props
  const { type } = props;

  //Contexto
  const cartContext = React.useContext(MyContext);

  //Creacion de los articulos
  const { phoneList, setPhoneList, link } = getArticles(type, cartContext);

  //Actualización de los articulos
  const { handleBuy } = updateArticles(phoneList, setPhoneList, cartContext);

  return (
    <>
      <div className={classesPropias.container}>
        <Typography
          variant="h4"
          classes={{ root: classesPropias.articleTitle }}
        >
          Articulos:
        </Typography>

        <LinkContainer link={link} />

        <div className={classesPropias.cards}>
          <ListComponent phoneList={phoneList} cart={false} onBuy={handleBuy} />
        </div>
      </div>
    </>
  );
};

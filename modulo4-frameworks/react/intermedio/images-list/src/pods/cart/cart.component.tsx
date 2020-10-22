import React from "react";

//Modelo
import { Article } from "./cart.vm";

//Componentes
import { CardContainer } from "pods/card";
import Typography from "@material-ui/core/Typography";

//CSS
import * as classesPropias from "./cart.styles";

interface Props {
  cartList: Article[];
  cart: boolean;
  onDelete: (id: string) => void;
}

export const CartComponent: React.FunctionComponent<Props> = (props) => {
  const { cartList, cart, onDelete } = props;

  return (
    <>
      <Typography variant="h6" classes={{ root: classesPropias.cartTitle }}>
        Cesta:
      </Typography>
      <div className={classesPropias.cards}>
        {cartList.map((phone) => {
          let article: Article = {
            id: phone.id,
            css: {
              root: classesPropias.card,
              title: classesPropias.title,
              titleSpan: classesPropias.titleSpan,
            },
            image: phone.image,
            title: phone.title,
          };
          return (
            <CardContainer
              key={article.id}
              article={article}
              cart={cart}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </>
  );
};

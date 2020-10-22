import React from "react";

//Modelo
import { Article } from "./card.vm";

//Componente
import { CardComponent } from "./card.component";

interface Props {
  article: Article;
  cart: boolean;
  onBuy?: (id: string, checked: boolean) => void;
  onDelete?: (id: string) => void;
}

export const CardContainer: React.FunctionComponent<Props> = (props) => {
  //Props
  const { article, cart, onBuy, onDelete } = props;

  return (
    <>
      <CardComponent
        article={article}
        cart={cart}
        onBuy={onBuy}
        onDelete={onDelete}
      />
    </>
  );
};

import React from "react";

//Modelo
import { Article } from "./list.vm";

//Componente
import { CardContainer } from "pods/card";

//CSS
import * as classesPropias from "./list.styles";

interface Props {
  phoneList: Article[];
  cart: boolean;
  onBuy: (id: string, checked: boolean) => void;
}

export const ListComponent: React.FunctionComponent<Props> = (props) => {
  //Props
  const { phoneList, cart, onBuy } = props;

  return (
    <>
      {phoneList.map((phone) => {
        let article: Article = {
          id: phone.id,
          checked: phone.checked,
          css: {
            root: classesPropias.card,
            title: classesPropias.title,
          },
          image: phone.image,
          title: phone.title,
        };
        return (
          <CardContainer
            key={article.id}
            article={article}
            cart={cart}
            onBuy={onBuy}
          />
        );
      })}
    </>
  );
};

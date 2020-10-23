//Api
import React from "react";

//Modelo
import { Article, LinkVM } from "../list.vm";
import { Context } from "common-app/context";

export const updateArticles = (
  listArticle: Article[],
  setPhoneList: React.Dispatch<React.SetStateAction<Article[]>>,
  cartContext: Context
) => {
  //Actualizamos el check del producto si se ha eliminado un producto del carrito
  React.useEffect(() => {
    //Tengo que quitar el check del carrito
    listArticle.find((phone) => {
      if (phone.id === cartContext.idDelete) {
        phone.checked = false;
      }
    });
    setPhoneList([...listArticle]);
  }, [cartContext.idDelete]);

  const handleBuy = (id: string, checked: boolean) => {
    //Listado del contexto
    const listaContext = cartContext.cartList;

    //Clicka para comprar
    if (checked) {
      //Articlo clickado
      const articleClicked = listArticle.find((phone) => {
        if (phone.id === id) {
          phone.checked = true;
          return phone;
        }
      });

      setPhoneList([...listArticle]);

      //Añadir tipado no hay
      cartContext.setCartList([
        ...listaContext,
        {
          id: articleClicked.id,
          image: articleClicked.image,
          title: articleClicked.title,
        },
      ]);
    }
    //Clicka para eliminar
    else {
      //Articlo clickado
      const indexArticleClicked = listaContext.findIndex((phone) => {
        return phone.id === id;
      });

      //Actualizo contexto
      listaContext.splice(indexArticleClicked, 1);

      cartContext.setCartList([...listaContext]);

      //Actualizo lista
      listArticle.find((phone) => {
        if (phone.id === id) {
          phone.checked = false;
        }
      });
      setPhoneList([...listArticle]);
    }
  };
  return { handleBuy };
};

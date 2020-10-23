import React from "react";

//Api
import {
  getPhoneCollection,
  getLaptopCollection,
  ArticleEntityApi,
} from "../api";

//Router
import { switchRoutes } from "core/router";

//Modelo
import { Article, LinkVM } from "../list.vm";
import { Context } from "common-app/context";

//Añadimos los productos dados por el api y checkeamos los que esten en el carrito
export const getArticles = (type: string, context: Context) => {
  const [phoneList, setPhoneList] = React.useState<Article[]>([]);

  const [link, setLink] = React.useState<LinkVM>({
    category: "",
    to: "",
  });

  React.useEffect(() => {
    //Listado de telefonos
    if (type === "phone") {
      //Llamada API
      getPhoneCollection().then((phoneListApi) => {
        handleResponseApi(
          phoneListApi,
          type,
          "Ordenadores",
          switchRoutes.laptop,
          context
        );
      });
    }
    //Listado de ordenadores
    else {
      //Llamada API
      getLaptopCollection().then((phoneListApi) => {
        handleResponseApi(
          phoneListApi,
          type,
          "Teléfonos",
          switchRoutes.phone,
          context
        );
      });
    }
  }, []);

  const handleResponseApi = (
    listApi: ArticleEntityApi[],
    type: string,
    category: string,
    route: string,
    context: Context
  ) => {
    let phoneList: Article[] = [];

    const link: LinkVM = {
      category: category,
      to: route,
    };
    setLink(link);

    //Comprobamos si estan en el carrito para checkearlos
    listApi.map((phone) => {
      const newID = phone.id + "-" + type;
      let checked = false;

      const encontrado = context.cartList.find((phone) => {
        if (phone.id === newID) {
          return true;
        } else {
          return false;
        }
      });

      if (encontrado) {
        checked = true;
      }

      //Conversion del modelo api al modelo interno
      const phoneEntity: Article = {
        id: phone.id + "-" + type,
        checked: checked,
        title: phone.title,
        image: phone.image,
      };

      //Sobreescribimos el listado
      phoneList = [...phoneList, phoneEntity];
    });

    //Actualizamos el listado
    setPhoneList(phoneList);
  };

  return { phoneList, setPhoneList, link };
};

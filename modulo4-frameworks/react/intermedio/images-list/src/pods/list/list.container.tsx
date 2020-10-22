import React from "react";

//Api
import {
  getPhoneCollection,
  getLaptopCollection,
  ArticleEntityApi,
} from "./api";

//Contexto
import { MyContext } from "common-app/context";

//Router
import { Link } from "react-router-dom";
import { switchRoutes } from "core/router";

//Modelo
import { Article } from "./article.vm";

//Componentes
import { ListComponent } from "./list.component";
import Typography from "@material-ui/core/Typography";

//CSS
import * as classesPropias from "./list.styles";

interface Props {
  type: string;
}

export const ListContainer: React.FunctionComponent<Props> = (props) => {
  //Props
  const { type } = props;

  //Contexto
  const cartContext = React.useContext(MyContext);

  const [phoneList, setPhoneList] = React.useState<Article[]>([]);

  //Añadimos los productos dados por el api y checkeamos los que esten en el carrito
  React.useEffect(() => {
    //Listado de telefonos
    if (type === "phone") {
      //Llamada API
      getPhoneCollection().then((phoneListApi) => {
        handleResponseApi(phoneListApi);
      });
    }
    //Listado de ordenadores
    else {
      //Llamada API
      getLaptopCollection().then((phoneListApi) => {
        handleResponseApi(phoneListApi);
      });
    }
  }, []);

  //Actualizamos el check del producto si se ha eliminado un producto del carrito
  React.useEffect(() => {
    //Tengo que quitar el check del carrito
    phoneList.find((phone) => {
      if (phone.id === cartContext.idDelete) {
        phone.checked = false;
      }
    });
    setPhoneList([...phoneList]);
  }, [cartContext.idDelete]);

  const handleResponseApi = (listApi: ArticleEntityApi[]) => {
    let phoneList: Article[] = [];

    //Comprobamos si estan en el carrito para checkearlos
    listApi.map((phone) => {
      let newID = phone.id + "-" + type;
      let checked = false;

      const encontrado = cartContext.cartList.find((phone) => {
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
      let phoneEntity: Article = {
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

  const handleBuy = (id: string, checked: boolean) => {
    //Listado del contexto
    const listaContext = cartContext.cartList;

    //Clicka para comprar
    if (checked) {
      //Articlo clickado
      const articleClicked = phoneList.find((phone) => {
        if (phone.id === id) {
          phone.checked = true;
          return phone;
        }
      });

      setPhoneList([...phoneList]);

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
      phoneList.find((phone) => {
        if (phone.id === id) {
          phone.checked = false;
        }
      });
      setPhoneList([...phoneList]);
    }
  };
  return (
    <>
      <div className={classesPropias.container}>
        <Typography
          variant="h4"
          classes={{ root: classesPropias.articleTitle }}
        >
          Articulos:
        </Typography>

        <Typography variant="h6" classes={{ root: classesPropias.category }}>
          Categorías:{" "}
          {!(type === "laptop") && (
            <Link to={switchRoutes.laptop} className={classesPropias.link}>
              Ordenadores
            </Link>
          )}
          {!(type === "phone") && (
            <Link to={switchRoutes.phone} className={classesPropias.link}>
              Teléfonos
            </Link>
          )}
        </Typography>

        <div className={classesPropias.cards}>
          <ListComponent phoneList={phoneList} cart={false} onBuy={handleBuy} />
        </div>
      </div>
    </>
  );
};

import React from "react";

//Contexto
import { MyContext } from "common-app/context";

//Modelo
import { ArticleInfo } from "common-app/context";

//Componentes
import { CartComponent } from "./cart.component";

//CSS
import * as classesPropias from "./cart.styles";

export const CartContainer: React.FunctionComponent = () => {
  //Contexto
  const cartContext = React.useContext(MyContext);

  const [cartList, setCartList] = React.useState<ArticleInfo[]>([]);

  //Añadimos los productos del contexto al carrito
  React.useEffect(() => {
    setCartList(cartContext.cartList);
  }, []);

  //Actualizamos los productos del contexto al carrito
  React.useEffect(() => {
    setCartList(cartContext.cartList);
  }, [cartContext.cartList]);

  const handleDelete = (id: string) => {
    const listContext = cartContext.cartList;

    //Pulsamos boton eliminar en el producto del carrito
    const indexDeleteElement = listContext.findIndex((phone) => {
      return phone.id === id;
    });

    //Eliminamos el producto de la lista
    listContext.splice(indexDeleteElement, 1);

    //Actualizamos la lista del contexto
    cartContext.setCartList([...listContext]);

    //Introducimos el id que hemos borrado para poder actualizar los checks en la lista de articulos
    cartContext.setIdDelete(id);
  };

  return (
    <>
      <div className={classesPropias.container}>
        <CartComponent
          cartList={cartList}
          cart={true}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};

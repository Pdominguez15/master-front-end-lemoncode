import React from "react";

export interface ArticleInfo {
  id: string;
  image: string;
  title: string;
}

export interface Context {
  cartList: ArticleInfo[];
  setCartList: (value: ArticleInfo[]) => void;
  idDelete: string;
  setIdDelete: (value: string) => void;
}

export const MyContext = React.createContext<Context>({
  cartList: [],
  setCartList: (value) => {},
  idDelete: "",
  setIdDelete: (value) => {},
});

export const MyContextProvider: React.FC = (props) => {
  const [cartList, setCartList] = React.useState<ArticleInfo[]>([]);
  const [idDelete, setIdDelete] = React.useState("");

  return (
    <MyContext.Provider
      value={{ cartList, setCartList, idDelete, setIdDelete }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

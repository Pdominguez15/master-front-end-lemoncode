//Modelo de datos del articulo
interface ClassesProp {
  root?: string;
  title?: string;
  titleSpan?: string;
}

export interface Article {
  id: string;
  checked?: boolean;
  css?: ClassesProp;
  title: string;
  image: string;
}

//Modelo de datos del link
export interface ClassesProp {
  category: string;
  link: string;
}

export interface LinkVM {
  to: string;
  category: string;
  css?: ClassesProp;
}

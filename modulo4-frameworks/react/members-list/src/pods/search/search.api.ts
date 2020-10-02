//Traemos el modelo de datos con los datos que pintaremos del api
import { MemberEntity } from "./search.vm";

export const getMembersList = async (
  company: string
): Promise<MemberEntity[]> => {
  //Async await
  const response = await fetch(
    `https://api.github.com/orgs/${company}/members`
  );

  if (response.ok) {
    return await response.json();
  } else {
    //Lanzamos el error del servidor
    throw Error(response.statusText);
  }
};

//Modelo
import { ArticleEntityApi } from "./article.api-model";

//Datos Mock
import { phoneListMock } from "./phone-collection.mock-data";
import { laptopListMock } from "./laptop-collection.mock-data";

//Phone
let phoneCollection = [...phoneListMock];

export const getPhoneCollection = async (): Promise<ArticleEntityApi[]> => {
  return phoneCollection;
};

//Laptop
let laptopCollection = [...laptopListMock];

export const getLaptopCollection = async (): Promise<ArticleEntityApi[]> => {
  return laptopCollection;
};

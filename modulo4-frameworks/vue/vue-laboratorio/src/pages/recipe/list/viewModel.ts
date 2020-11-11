export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  image: string;
}

export interface Header {
  text: string;
  value: string;
  align: string;
  filterable?: boolean;
}

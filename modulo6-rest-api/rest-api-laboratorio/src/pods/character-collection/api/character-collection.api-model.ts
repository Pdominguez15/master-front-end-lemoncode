export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: myObject;
  location: myObject;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

interface myObject {
  name: string;
  url: string;
}

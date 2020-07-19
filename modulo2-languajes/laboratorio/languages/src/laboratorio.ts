//Array
const array = [1, 2, 3];

//Head
const head = ([first]: any[]) => first;

console.log("Primer elemento del array: " + head(array));
console.log("Array inmutable: " + array);

//Tail
const tail = ([primero, ...resto]: any[]) => resto;

console.log("Array menos el primer elemento: " + tail(array));
console.log("Array inmutable: " + array);

//Init
const init = (array: any[]) => array.slice(0, -1);

console.log("Array menos el ultimo elemento: " + init(array));
console.log("Array inmutable: " + array);

//Last
const last = (array: any[]) => array[array.length - 1];

console.log("Último elemento del array: " + last(array));
console.log("Array inmutable: " + array);

//Concat
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const concat = (...arrays: any[]) => [...arrays];

console.log("Array concatenado: " + concat(array, array2, array3));

//Clone

let objeto = {
  name: "Pedro",
  years: 21,
  saludar: () => "hola",
};

const clone = (source: object) => ({ ...source });

const objetoClone = clone(objeto);

console.log(objetoClone);

//Merge
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = (source: object, target: object) => ({ ...target, ...source });

console.log(merge(a, b));

//Read books
interface Book {
  title: string;
  isRead: boolean;
}

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books: Array<Book>, titleToSearch: string) {
  return books.some((book) =>
    book.title === titleToSearch ? book.isRead : false
  );
}

console.log(isBookRead(books, "Harry Potter y la piedra filosofal"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));

//Slot Machine
console.log("Slot Machine");
class SlothMachine {
  private contador: number;

  constructor() {
    this.contador = 0;
  }

  play() {
    this.contador++;
    let arrayBoolean = [
      Math.random() >= 0.5,
      Math.random() >= 0.5,
      Math.random() >= 0.5,
    ];
    if (arrayBoolean.includes(false)) {
      console.log("Good luck next time!!");
    } else {
      console.log(`Congratulations!!!. You won ${this.contador} coins!!`);
      this.contador = 0;
    }
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();

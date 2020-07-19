//Subsets
//Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra:
//Sin utilizar arrays auxiliares ni bucles for/do/while.

console.log("-------------------- Subsets -------------------------");

function subsets(word) {
  return Array(word.length - 1)
    .fill("")
    .map((v, i) => word.substring(i + 1)); // ["essage", "ssage", "sage", "age", "ge", "e"]
}

console.log(subsets("message"));

console.log("------------------------------------------------------");

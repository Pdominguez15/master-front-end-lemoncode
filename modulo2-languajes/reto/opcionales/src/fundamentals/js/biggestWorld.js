//Biggest Word
//Crea una función que reciba una frase en formato string y devuelva la palabra más larga.
//En caso de haber varias con longitud máxima que devuelva siempre la primera.
//Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.
console.log("-------------------- Biggest Word --------------------");

function biggestWord(phrase) {
  //Con el split creo un array, donde en cada posicion hay una palabra
  //Utilizo el reduce donde mi acumulador será la ultima palabra mas larga para ir comparando
  const word = phrase
    .split(" ")
    .reduce((valorAnterior, valorActual) =>
      valorAnterior.length >= valorActual.length ? valorAnterior : valorActual
    );

  return word;
}

console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"

console.log("------------------------------------------------------");

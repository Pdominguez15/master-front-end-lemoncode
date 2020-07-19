//Memorization
//Apartado A
//Implementa un mecanismo de memorización para funciones costosas y tipalo con TypeScript.
//La memorización optimiza sucesivas llamadas del siguiente modo:

console.log("-------------------- Memorization --------------------");

const expensiveFunction: Function = (): number => {
  console.log("Una única llamada");
  return 3.1415;
};

const memoize1 = (nombreFunction: Function) => {
  let array = [];
  let resultado;
  let encontrado = false;
  return () => {
    array.map((element) => {
      if (element.nombre === nombreFunction) {
        resultado = element.resultado;
        encontrado = true;
      }
    });

    if (!encontrado) {
      let resultadoFuncion = nombreFunction();
      array.push({
        nombre: nombreFunction,
        resultado: resultadoFuncion,
      });
      resultado = resultadoFuncion;
    }
    return resultado;
  };
};

const memoized = memoize1(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

//Apartado B
//Una sola linea
//Según mi planteamiento podría recortarse utilizando ternarios pero aún así no entra en una línea

//Apartado C
//Contempla ahora la posibilidad de que la función a memoizar pueda tener argumentos.
//Por simplicidad supongamos sólo argumentos primitivos: string, number o boolean y que no sean undefined.
//¿Podrías hacer una versión aceptando argumentos? ¿Cómo la tiparías con TS?

type Parametro = string | number | boolean;

let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string => (
  count++, `${text} `.repeat(repetitions).trim()
);

const memoize = (nombreFunction) => {
  let array = [];
  let resultado;
  let encontrado = false;
  return (numero: Parametro, palabra: Parametro) => {
    array.map((element) => {
      if (
        element.nombre === nombreFunction &&
        element.numero === numero &&
        element.palabra === palabra
      ) {
        resultado = element.resultado;
        encontrado = true;
      }
    });

    if (!encontrado) {
      let resultadoFuncion = nombreFunction(numero, palabra);
      array.push({
        nombre: nombreFunction,
        resultado: resultadoFuncion,
        numero: numero,
        palabra: palabra,
      });
      resultado = resultadoFuncion;
    }

    return resultado;
  };
};

const memoizedGreet = memoize(repeatText);

console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count); // 2

console.log("------------------------------------------------------");

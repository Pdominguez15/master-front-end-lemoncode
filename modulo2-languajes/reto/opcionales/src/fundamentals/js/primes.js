//Primes
//Crea una función tal que, dado un número entero de inicio from y otro de fin to,
//encuentre los números primos entre ellos y los muestre por pantalla.
//Se puede mejorar mucho el rendimiento del ejercicio anterior. Al buscar si un numero es primo, podemos dejar
//de comprobar si es divisible por cada entero mayor que 1 una vez alcancemos la raiz cuadrada de dicho número.

console.log("-------------------- Primes --------------------------");

function showPrimes(from, to) {
  while (from <= to) {
    let primo = esPrimo(from);
    primo
      ? console.log(from + " is Prime!")
      : console.log(from + " is not a prime");
    from++;
  }
}

function esPrimo(numero) {
  let start = 2;
  const limit = Math.sqrt(numero);
  while (start <= limit) {
    if (numero % start++ < 1) return false;
  }
  return numero > 1;
}

showPrimes(1, 10);

console.log("------------------------------------------------------");

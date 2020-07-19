//Fibonacci
//Implementa una función para calcular el n-enésimo termino de la sucesión de Fibonacci.

console.log("-------------------- Fibonacci -----------------------");

const fib = (n) => {
  let numero1 = 0;
  let numero2 = 1;
  let resultado = n;
  for (let index = 1; index < n; index++) {
    resultado = numero1 + numero2;

    numero1 = resultado - numero1;
    numero2 = resultado;
  }

  return resultado;
};
for (let index = 0; index <= 10; index++) {
  console.log(index + " " + fib(index));
}

console.log("------------------------------------------------------");

//Args
//¿Qué muestran por pantalla las siguientes funciones?
console.log("-------------------- Args ----------------------------");

function f(a, { b } = {}, c = 100) {
  console.log(arguments.length);
  console.log(a, a === arguments[0]);
  console.log(b, b === arguments[1]);
  console.log(c, c === arguments[2]);
}

//Apartado A
//¿Qué muestra por consola esta llamada?

console.log(`
//Apartado A

f("JS rocks!", { b: "b" });

//1- 2
//2- "JS rocks!" true
//3- b false
//4- 100  false
`);

//Apartado B
//¿Y con estos argumentos?

console.log(`
//Apartado B

f({ b: "b" });

//1- 1
//2- {b:"b"} true
//3- undefined true
//4- 100  false
`);

//Apartado C
//¿Y ahora?

console.log(`
//Apartado C

f("JS sucks!", null, 13);

//Error ya que intenta hacer destructuring de un objeto con un null
`);

console.log("------------------------------------------------------");

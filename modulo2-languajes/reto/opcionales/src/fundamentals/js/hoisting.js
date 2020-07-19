//Hoisting
//¿Cual crees que será el resultado de la consola y porqué?
//Escribe el resultado equivalente

console.log("-------------------- Hoisting ------------------------");

//Apartado A
/*
function f() {
  console.log(a);
  console.log(g());

  var a = "good job!";
  function g() {
    return a;
  }
  console.log(a);
}*/

//Equivalente del apartado A
console.log(`
//Apartado A
function hoisting1() {
  var a;
  function g() {
    return a;
  }
  console.log(a); //undefined, no se le ha asignado un valor todavia
  console.log(g()); //undefined, no se le ha asignado un valor todavia

  a = "good job!";

  console.log(a); //good job, se le asigna valor en la linea 28 y por tanto lo muestra
}`);

//Apartado B
/*
var a = 1;

(function () {
  console.log(a);
  var a = 2;
  b = 4;
  var c = 3;
})();


console.log(a);
console.log(b);
console.log(c);
*/

//Equivalente al segundo
console.log(`ç
//Apartado B
var a = 1;
var b;
(function () {
  var a;
  var c;
  console.log(a);
  a = 2;
  b = 4;
  c = 3;
})();

/*Saldrá primero undefined al ejecutarse la funcion con el console log
console.log(a); 1, ya que estamos en el ambito global a tiene ese valor
console.log(b); 4, al no referenciar con var dentro de function, coge el ambito de su padre window
console.log(c); Error ya que solo se referenció en function. En el ambito global no existe
*/`);

//Apartado C
/*
f();
var a = 1;

function f() {
  console.log(a);
  b = 4;
  var c = 3;
}


console.log(a);
console.log(b);
console.log(c);
*/

//Equivalente al tercero
console.log(`
//Apartado C
function f() {
  console.log(a);
  b = 4;
  var c = 3;
}
var a;
f();
a = 1;

/*Saldrá primero undefined al ejecutarse la funcion con el console log
console.log(a); 1, ya que estamos en el ambito global a tiene ese valor
console.log(b); 4, al no referenciar con var dentro de function, coge el ambito de su padre window
console.log(c); Error, ya que solo se referenció en function. En el ambito global no existe
*/`);

console.log("------------------------------------------------------");

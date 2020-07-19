//Console
//Apartado A
//Intenta razonar cual será el resultado de la consola al ejecutar este código:

console.log("-------------------- Console -------------------------");

var a = 1;
let b = 2;

console.log(`{
  try {
    console.log(a, b);
  } catch (error) {}
  let b = 3;
  console.log(a, b); //1 3, a variable declarada fuera, b variable local
}

console.log(a, b); //1 2, variables declaradas fuera

() => {
  console.log(a);
  var a = 5;
  let b = 6;
  console.log(a, b);
};//No se ejecuta

console.log(a, b); //1 2, variables declaradas fuera
`);
//Apartado B
//Sin tocar ninguno de los console.log anteriores, modifica ligeramente el código para que muestre
//la siguiente secuencia:
/*
1 3
1 3
1 2
5
5 6
1 2
*/

console.log(`
{
  try {
    let b = 3;
    console.log(a, b); //1 3
  } catch (error) {}
  let b = 3;
  console.log(a, b); //1 3
}

console.log(a, b); //1 2

var z = () => {
  var a = 5;
  console.log(a); //5
  let b = 6;
  console.log(a, b); //5 6
};
z();

console.log(a, b); // 1 2
`);
console.log("------------------------------------------------------");

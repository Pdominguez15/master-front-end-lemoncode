//Includes
//En ES7 ya existe una función de manejo de arrays llamada Array.includes() que indica si un determinado valor
//figura entre los items de un array dado. Crea una función en ES5 con el mismo comportamiento, es decir,
//una función que reciba un array y un valor y devuelva un boolean indicando si el valor está dentro del array.
//El ejercicio anterior puede quedar simplificado si utilizas una función de los arrays que devuelve el
//índice de un elemento dado.

console.log("-------------------- Includes ------------------------");

function includes(array, value) {
  return array.indexOf(value) >= 0 ? true : false;
}

console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false

console.log("------------------------------------------------------");

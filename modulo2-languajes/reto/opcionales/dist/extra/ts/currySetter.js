//Curry Setter
//En un formulario tenemos un objeto con los campos name, surname y age que representan un usuario.
//Crea una función set que reciba un objeto con los campos de usuario, el nombre de una propiedad y
//su valor y actualice la propiedad del objeto con el valor pasado como argumento.
//El ejercicio debe cumplir la siguiente norma: la función debe ser pura, es decir,
//debe crear un nuevo objeto sin modificar el existente.
console.log("------------------ Curry Setter ----------------------");
function set1(objeto, propiedad, valor) {
    let copiaObjeto = { ...objeto };
    copiaObjeto[propiedad] = valor;
    return copiaObjeto;
}
const julia1 = { name: "Julia", surname: "Álvarez", age: 19 };
const updatedJulia = set1(julia1, "age", 25);
console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia1); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia1 === updatedJulia); // false
function set(propiedad) {
    return function (objeto, valor) {
        let copiaObjeto = { ...objeto };
        copiaObjeto[propiedad] = valor;
        return copiaObjeto;
    };
}
const setName = set("name");
const setSurname = set("surname");
const setAge = set("age");
const julia = { name: "Julia", surname: "Álvarez", age: 19 };
console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurname(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log("------------------------------------------------------");

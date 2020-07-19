//Zip
//Crea una función zipObject tal que acepte un array de claves como primer argumento y un array de valores como segundo argumento y cuyo objetivo sea crear un objeto uniendo las claves con sus valores.
//Asumir que el array de claves tiene como mínimo la misma longitud que el de valores:

console.log("-------------------- Zip -----------------------------");

function zipObject(keys, values) {
  let objeto = {};
  keys.forEach((element, index) => {
    if (values[index] != undefined) objeto[element] = values[index];
  });
  return objeto;
}
//Tambien podría hacerlo con Object.fromEntries([clave,valor])

console.log(
  zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
); // {spanish: "hola", english: "hi", french: "salut"}

//Challenge
//Si no hay valores suficientes para todas las claves evita que aparezcan como undefined.//
console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}

console.log("------------------------------------------------------");

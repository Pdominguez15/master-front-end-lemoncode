//Check Arguments
//Es muy habitual en javascript, al recibir argumentos de una función, querer asegurarnos de que no sean undefined
//o null. En este ejercicio debes convertir el código de abajo en algo equivalente pero más compacto y expresivo.

console.log("-------------------- Check Arguments -----------------");

function check(input) {
  var result =
    input === (undefined || null)
      ? input === undefined
        ? "Unknown"
        : ""
      : input;
  return result;
}

console.log("Undefined: " + check(undefined));
console.log("Null: " + check(null));
console.log("Input: " + check("Hola"));

console.log("------------------------------------------------------");

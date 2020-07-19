//Acceso en profundidad
//Apartado A
//Implementa un mecanismo deepGet para acceder en profundidad a objetos anidados,
//de modo que podamos recuperar una propiedad en cualquiera de sus niveles. Mira a continuación
//el comportamiento que debería seguir:

console.log("-------------------- Deep Access ----------------------");

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

const deepGet = (objeto, ...propiedades) => {
  let numeroPropiedades = propiedades.length;
  let propiedadesObjeto = Object.keys(objeto);
  let resultado = undefined;

  if (propiedades.length > 0) {
    for (let index = 0; index < propiedades.length; index++) {
      const propiedad = propiedades[index];
      if (propiedadesObjeto.includes(propiedad)) {
        if (
          typeof objeto[propiedad] === "object" &&
          objeto[propiedad] != null
        ) {
          propiedadesObjeto = Object.keys(objeto[propiedad]);
          resultado = objeto[propiedad];
        } else if (objeto[propiedad] === null) {
          resultado = null;
        } else {
          resultado = objeto[propiedad];
        }
        objeto = objeto[propiedad];
      } else {
        return undefined;
      }
    }
    return resultado;
  } else {
    return objeto;
  }
};

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject)); // {a: 1, b: {...}}

//Apartado B
//Ahora implementa el complementario, deepSet, que permita guardar valores en profundidad.ç
//Su comportamiento debería ser:
const myObject2 = {};

const deepSet = (valor, objeto, ...propiedades) => {
  var objetoSin = {
    ...myObject2,
  };
  let numeroPropiedades = propiedades.length;
  let primeraPropiedad = propiedades[0];

  if (propiedades.length > 1) {
    for (let index = 0; index < propiedades.length; index++) {
      let indice = index;

      const propiedad = propiedades[index];

      if (++indice == propiedades.length) {
        var objeto2 = {};
        objeto2[propiedad] = valor;
        objeto[primeraPropiedad] = {
          ...objeto[primeraPropiedad],
          ...objeto2,
        };
      } else {
        if (!objeto.hasOwnProperty(propiedad)) {
          objeto[propiedad] = {};
        }
      }
    }
  } else if (propiedades.length == 1) {
    objeto[propiedades[0]] = valor;
  }
};

deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2)); // {a: { b: 1}}

deepSet(2, myObject2, "a", "c");
console.log(JSON.stringify(myObject2)); // {a: { b: 1, c: 2}}

deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2)); // {a: 3}

deepSet(4, myObject2);
console.log(JSON.stringify(myObject2)); // Do nothing // {a: 3}

console.log("------------------------------------------------------");

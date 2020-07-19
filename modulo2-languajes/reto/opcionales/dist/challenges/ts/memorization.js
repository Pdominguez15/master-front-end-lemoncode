//Memorization
//Apartado A
//Implementa un mecanismo de memorización para funciones costosas y tipalo con TypeScript.
//La memorización optimiza sucesivas llamadas del siguiente modo:
console.log("-------------------- Memorization --------------------");
const expensiveFunction = () => {
    console.log("Una única llamada");
    return 3.1415;
};
const memoize1 = (nombreFunction) => {
    let array = [];
    let resultado;
    let encontrado = false;
    return () => {
        array.map((element) => {
            if (element.nombre === nombreFunction) {
                resultado = element.resultado;
                encontrado = true;
            }
        });
        if (!encontrado) {
            let resultadoFuncion = nombreFunction();
            array.push({
                nombre: nombreFunction,
                resultado: resultadoFuncion,
            });
            resultado = resultadoFuncion;
        }
        return resultado;
    };
};
const memoized = memoize1(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415
let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions, text) => (count++, `${text} `.repeat(repetitions).trim());
const memoize = (nombreFunction) => {
    let array = [];
    let resultado;
    let encontrado = false;
    return (numero, palabra) => {
        array.map((element) => {
            if (element.nombre === nombreFunction &&
                element.numero === numero &&
                element.palabra === palabra) {
                resultado = element.resultado;
                encontrado = true;
            }
        });
        if (!encontrado) {
            let resultadoFuncion = nombreFunction(numero, palabra);
            array.push({
                nombre: nombreFunction,
                resultado: resultadoFuncion,
                numero: numero,
                palabra: palabra,
            });
            resultado = resultadoFuncion;
        }
        return resultado;
    };
};
const memoizedGreet = memoize(repeatText);
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count); // 2
console.log("------------------------------------------------------");

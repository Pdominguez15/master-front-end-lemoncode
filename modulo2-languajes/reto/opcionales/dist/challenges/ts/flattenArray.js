//Aplanando arrays
//Dado un array multidimensional, construye una función inmutable que devuelva el mismo array aplanado,
//esto es, con un único nivel de profundidad. El array quedaría aplanado como: [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("-------------------- Flatten Array -------------------");
const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
const dividir = (array) => {
    let resultado = [];
    array.forEach((array) => {
        if (Array.isArray(array)) {
            resultado.push(...array);
        }
        else {
            resultado.push(array);
        }
    });
    return resultado;
};
const tieneArray = (array) => {
    let boolean = array.some((elem) => Array.isArray(elem));
    return boolean;
};
//Apartado B
//¿Has resuelto el ejercicio anterior? Suponiendo que los arrays multidimensionales del
//ejercicio anterior no serán de naturaleza mixta, es decir, sus elementos siempre serán del mismo tipo
//¿Serías capaz de proporcionar un tipado adecuado a dicha función de aplanamiento?
function aplanador(array) {
    let resultado = [];
    array.every((elem) => {
        return Array.isArray(elem);
    });
    array.forEach((element) => {
        //Si el elemento es un array llamo a que divida
        if (Array.isArray(element)) {
            let intermedio;
            let i = 0;
            do {
                intermedio = [];
                intermedio.push(...dividir(element));
                element = intermedio;
                i++;
            } while (tieneArray(element));
            resultado.push(...intermedio);
        }
        else {
            resultado.push(element);
        }
    });
    return resultado;
}
console.log(aplanador(sample));
console.log("------------------------------------------------------");

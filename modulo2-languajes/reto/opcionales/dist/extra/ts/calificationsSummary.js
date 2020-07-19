//Califications Summary
//Utilizando TypeScript escribe una función que reciba una lista de estudiantes
//(que tienen nombre y una lista de notas) y devuelva otra lista donde por cada estudiante devuelva su nombre,
// su nota más alta y la media de sus notas.
//Crea para ello dos entidades, una para representar al estudiante (Student) y otra para representar su nombre,
//nota más alta y media de notas (StudentSummary).
//No se permite el uso de clases. En caso de usar funciones auxiliares típalas.
//Puedes usar la función Number.prototype.toPrecision(3) para reducir el número de decimales de la media
//de calificaciones a tres números.
console.log("--------------- Califications Summary ----------------");
const students = [
    {
        name: "Juan",
        califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34],
    },
    {
        name: "Álvaro",
        califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01],
    },
    {
        name: "María",
        califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3],
    },
    {
        name: "Jorge",
        califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69],
    },
    {
        name: "Mónica",
        califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48],
    },
];
const summarizeClassRoom = (studentList) => {
    //Crear array de salida
    let arraySalida = [];
    //Recorrer lista
    studentList.forEach((student) => {
        //Obtengo la nota mas alta
        let alta = highestCalification(student.califications);
        //Obtengo la nota media
        let media = middleCalification(student.califications);
        //Con el + convierto el resultado a number, ya que .toPrecision(3) devuelve un string
        arraySalida.push({
            name: student.name,
            highestCalifications: alta,
            middleCalifications: +media.toPrecision(3),
        });
    });
    return arraySalida;
};
//Calcular nota mas alta
function highestCalification(arrayNotas) {
    return arrayNotas.sort((a, b) => a - b)[arrayNotas.length - 1];
}
//Calcular nota media
function middleCalification(arrayNotas) {
    let suma = arrayNotas.reduce((accumulator, currentValue) => accumulator + currentValue);
    let media = suma / arrayNotas.length;
    return media;
}
console.log(summarizeClassRoom(students));
// [
//   { name: 'Juan', highestCalification: 9.71, averageCalifications: '5.37' },
//   { name: 'Álvaro', highestCalification: 8.3, averageCalifications: '5.58' },
//   { name: 'María', highestCalification: 9.3, averageCalifications: '3.92' },
//   { name: 'Jorge', highestCalification: 9.07, averageCalifications: '5.38' },
//   { name: 'Mónica', highestCalification: 9.72, averageCalifications: '4.42' }
// ]
console.log("------------------------------------------------------");

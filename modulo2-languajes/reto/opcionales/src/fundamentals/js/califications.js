//Califications
//Implementa una función que muestre la media de la clase de forma textual, es decir,
// siguiendo el sistema de calificación español:

console.log("-------------------- Califications -------------------");

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

//Funcion del ejercicio values
function values(obj) {
  return Object.values(obj);
}

function printAverage(classResults) {
  //Pasar valores a un array
  let notas = values(classResults);

  //Obtener media
  let notaMedia = media(notas);

  //Comparar texto
  return notaText(notaMedia);
}

function media(arrayNotas) {
  let suma = arrayNotas.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  let media = suma / arrayNotas.length;

  return media;
}

function notaText(media) {
  let texto = "";
  if (media === 10) {
    texto = "Matrícula de Honor";
  } else if (media < 10 && media > 9) {
    texto = "Sobresaliente";
  } else if (media < 9 && media > 7) {
    texto = "Notable";
  } else if (media < 7 && media > 6) {
    texto = "Bien";
  } else if (media < 5 && media > 6) {
    texto = "Suficiente";
  } else if (media < 4 && media > 5) {
    texto = "Insuficiente";
  } else {
    texto = "Muy deficiente";
  }

  return texto;
}

console.log(printAverage(eso2o));

console.log("------------------------------------------------------");

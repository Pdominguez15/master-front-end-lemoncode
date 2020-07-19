//Dices
//Empleando el concepto de closure, emula el comportamiento de 2 dados.
//Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula junto a estos datos,
//métodos que implementen la siguiente funcionalidad:

/*Hacer reset, poner a undefined o null ambos resultados.
Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
Imprimir el resultado por consola. Ten en cuenta lo siguiente:
Informa al usuario que debe tirar primero cuando corresponda.
Si saca doble 6, ¡dale un premio!*/

console.log("-------------------- Dices ---------------------------");

var juegoDados = function () {
  var arrayDados = null;

  return {
    reset: function () {
      arrayDados = null;
    },
    tirarDados: function () {
      arrayDados = [
        Math.floor(Math.random() * (6 - 1 + 1) + 1),
        Math.floor(Math.random() * (6 - 1 + 1) + 1),
      ];
      if (arrayDados[0] == 6 && arrayDados[1] == 6) {
        console.log("Has conseguido un premio al tirar doble 6.");
      }
    },
    imprimir: function () {
      return arrayDados === null
        ? console.log("Debe tirar los dados primero")
        : arrayDados[0] == 6 && arrayDados[1] == 6
        ? console.log("Has conseguido un premio al tirar doble 6.")
        : console.log("Siga intentandolo");
    },
  };
};

var player1 = juegoDados();
player1.tirarDados();
player1.imprimir();
player1.tirarDados();
player1.imprimir();
player1.tirarDados();
player1.imprimir();
player1.reset();
player1.imprimir();
player1.tirarDados();
player1.tirarDados();
player1.tirarDados();
player1.tirarDados();
player1.tirarDados();
player1.tirarDados();
player1.tirarDados();
player1.tirarDados();

console.log("------------------------------------------------------");

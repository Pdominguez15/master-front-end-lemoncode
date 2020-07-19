//This
//¿Cual es la salida de los logs en el siguiente código? Intenta razonar, no te limites a ejecutar la solución.

console.log("-------------------- This ----------------------------");

var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function () {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname()); //Jimenez en este ambito su padre es wife
var surnameFunction = person.wife.getSurname; //function
console.log(surnameFunction()); //Perez en este ambito(global) su padre es window
console.log(surnameFunction.call(person)); //Gonzalez coge la propiedad surname de person ya que tiene el mismo scope

console.log("------------------------------------------------------");

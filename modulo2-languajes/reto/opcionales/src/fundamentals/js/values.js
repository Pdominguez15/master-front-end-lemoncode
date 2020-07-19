//Values
//Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:
console.log("-------------------- Values --------------------------");

function values(obj) {
  return Object.values(obj);
}

console.log(
  values({ id: 31, duration: 310, name: "long video", format: "mp4" })
); // [31, 310, "long video", "mp4"]

//Challenge
//Evita añadir las propiedades heredadas en caso de ser instancia de una clase:
function Person(name) {
  this.name = name;
}

Person.prototype.walk = function () {
  console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]

console.log("------------------------------------------------------");

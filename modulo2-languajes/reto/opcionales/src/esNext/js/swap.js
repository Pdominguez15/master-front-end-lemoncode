//Swap
//¿Sabrías intercambiar el valor de estas 2 variables en una sola línea?

console.log("-------------------- Swap ----------------------------");

//Le quito el let, ya que al usar varios ficheros incrustados en el mismo html, ya existen esas variables
//declaradas
a = "A";
b = "B";

// Implementation here, one line, one shot!
[a, b] = [b, a];
console.log(a === "B" && b === "A" ? "You did it!" : "Keep trying!");

console.log("------------------------------------------------------");

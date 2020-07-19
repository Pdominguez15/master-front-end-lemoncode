//Trazas por consola
//Las trazas resultante en consola son:
/*first;
second;
third;*/

//El ejercicio consiste en reordenar las trazas para que se muestren invertidas, es decir, con el siguiente orden:
/*third;
second;
first;*/
//Pero para ello tan solo podrás modificar la función run.
//Queda prohibido modificar cualquier otro código asi como el contenido de triggers.

setTimeout(
  () => console.log("-------------------- Console Traces ------------------"),
  100
);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

/*
const run = triggers => {
  console.log("first");
  triggers.forEach(t => t());
};
*/

const run = async (triggers) => {
  let first = async () => await showMessage([100, "first"]);

  const funcion0 = triggers[0];
  const funcion1 = triggers[1];
  const funcionresultado1 = await funcion0();
  const funcionresultado2 = await funcion1();
  const funcionresultado3 = await first();

  return [funcionresultado1, funcionresultado2, funcionresultado3];
};

run(triggers);

setTimeout(
  () => console.log("------------------------------------------------------"),
  500
);

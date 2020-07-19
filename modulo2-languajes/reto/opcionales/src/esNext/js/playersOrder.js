//Players Order
//En una gran cantidad de juegos el sistema de turnos es sencillo, una vez el jugador actual ha consumido su turno,
//pasa al final de la cola y le toca al siguiente. Dada una lista inicial de jugadores,
//implementa una función que devuelva la nueva lista de jugadores, en el orden correcto, después de X turnos.

console.log("-------------------- Players Order -------------------");

const getPlayersOrder = (players, turns) => {
  //Si hay mas turnos que jugadores supongo que ha empezado de nuevo en el mismo orden
  while (turns >= players.length) {
    turns = turns - players.length;
  }
  let [enjuego, ...sinjugar] = players.slice(turns);
  let jugado = players.slice(0, turns);
  return [enjuego, ...sinjugar, ...jugado];
};

const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]

console.log("------------------------------------------------------");

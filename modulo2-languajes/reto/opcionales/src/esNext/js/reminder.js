//Reminder
//El siguiente código implementa una sencilla clase que actúa como reminder, es decir,
//dado un mensaje, lo muestra por consola transcurrido (al menos) el tiempo indicado por el usuario:

console.log("-------------------- Reminder -----------------------");

class Reminder {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    setTimeout(() => {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

//Te animamos a que crees una nueva instancia de reminder y la utilices. Escribe el mensaje que tu quieras
//y añade unos pocos segundos de retardo. Comprueba la salida por consola ... algo no funciona como esperábamos
//¿verdad? ¿Sabrías decirnos que está pasando aquí? ¿Cómo lo arreglarías?

//let reminder = new Reminder("Hola pedro");

//reminder.remindMe(3);

console.log(`
//Ocurre que el this.text es undefined, desde la funcion () se cambia el valor del this ya que crea un nuevo contexto
//La solución sería usar un callback
remindMe(delay) {
  setTimeout(() => {
    ...
  }, delay * 1000);
}`);

console.log("------------------------------------------------------");

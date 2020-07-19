//Morse

console.log("-------------------- Morse ---------------------------");

const morseAlphabet = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
};

const traductor = (mensaje) => {
  let punto = 1000; //1s
  let raya = punto * 3;
  let separacion = punto;
  let separacionLetra = punto * 3;
  let separacionPalabra = punto * 7;
  let duracion = 0;
  const arrayLetras = mensaje.toLowerCase().split("");
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  function pintarConsole(mensaje, tiempo) {
    duracion = duracion + tiempo / 1000;
    console.log(mensaje + " Duracion: " + tiempo / 1000 + "s");

    sleep(tiempo);
  }

  arrayLetras.forEach((letra) => {
    //Buscamos la letra en el código morse y convertimos a array
    if (letra != " ") {
      let letraTraducida = morseAlphabet[letra].split("");
      let indiceElementos = letraTraducida.length - 1;
      letraTraducida.forEach((simbolo, index) => {
        if (simbolo === ".") {
          pintarConsole(1, punto);
        } else {
          pintarConsole(1, raya);
        }
        if (index !== indiceElementos) {
          pintarConsole(0, separacion);
        }
      });
      pintarConsole(0, separacionLetra);
    } else {
      pintarConsole(0, separacionPalabra);
    }
  });

  return "Mensaje terminado, duración total: " + duracion + "s";
};

console.log(traductor("sos"));

console.log("------------------------------------------------------");

//ZZCrypt
// Descifra el siguiente secreto:

console.log("-------------------- ZZZCrypt ------------------------");

var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
  // Implementation here.
  let descifrado = "";
  for (let index = 0; index < secret.length; index++) {
    let letra = secret.charAt(index);
    if (letra != " ") {
      let posicionLetraCifrado = cipher.indexOf(letra);
      let letraTraducida = plain.charAt(posicionLetraCifrado);
      descifrado += letraTraducida;
    } else {
      descifrado += letra;
    }
  }

  return descifrado;
}

console.log(decrypt(secret));

console.log("------------------------------------------------------");

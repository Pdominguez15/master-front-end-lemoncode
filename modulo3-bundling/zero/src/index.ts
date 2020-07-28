//Importamos la imagen del logo
import logoImg from "./content/lemoncode-2.png";

//Introducimos la imagen en el div
const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);

console.log("Hola desde zero config !");

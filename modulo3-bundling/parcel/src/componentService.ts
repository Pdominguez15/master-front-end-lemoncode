export function getNombre(nombre: string): string {
  return nombre + " componente";
}

//Mostramos por consola la variable de entorno
import dotenv from "dotenv";

dotenv.config();
console.log(`Api base: ${process.env.API_BASE}`);

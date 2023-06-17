import { suma } from "./suma.js";
import { cuenta } from "./cuenta.js";
export function promedio(arreglo, imprimeLog) {
  const largoArreglo = cuenta(arreglo, true);
  const sumaDeNotas = suma(arreglo, true);
  const promedioNotas = sumaDeNotas / largoArreglo;
  if (imprimeLog) {
    console.log("El Promedio de notas es:", promedioNotas);
  }
  return promedioNotas;
}

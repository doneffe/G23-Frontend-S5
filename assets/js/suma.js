import { cuenta } from "./cuenta.js";
export function suma(arreglo, imprimeLog) {
  let sumaDeNotas = 0;
  let i = 0;
  const len = cuenta(arreglo, false);
  for (i = 0; i < len; i++) {
    sumaDeNotas += arreglo[i];
  }
  if (imprimeLog) {
    console.log("La Suma de notas es:", sumaDeNotas);
  }
  return sumaDeNotas;
}

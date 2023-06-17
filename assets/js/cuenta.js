export function cuenta(arreglo, imprimeLog){
    const cantidadNotas = arreglo.length;
    if (imprimeLog){
        console.log("La Cantidad de notas es:", cantidadNotas);
    }
    return cantidadNotas;
}
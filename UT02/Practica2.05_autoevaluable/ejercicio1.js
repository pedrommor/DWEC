"use strict";
const min = 1;
const max = 9;
// creamos numueros aleatorios
function generarNueveSinRepetir(){
    const numeros = [];
    while (numeros.length < 9){
    
        let candidato = Math.floor(Math.random()*(max - min + 1) + min);
        if (!numeros.includes(candidato)){
            numeros.push(candidato);
        }

    }
    return numeros;

}
function tieneRepetidos(array){

    const vistos = [];

    for(const valor of array){
        if(vistos.includes(valor)){
            return true;
        }
        // podemos añadir el else para que el código sea más claro
        // else
        vistos.push(valor);
    }
    return false;

}

const ejemplo = generarNueveSinRepetir();
console.log(`Array generado ${ejemplo.join(", ")}`);
console.log(`¿Tiene repetidos?:  ${tieneRepetidos(ejemplo)}`);
console.log(`Prueba repetición:  ${tieneRepetidos([1, 2, 4, 2])}`);



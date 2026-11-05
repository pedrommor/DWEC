"use strict";

const min = 1;
const max = 9;
/**
 * funcion para crearnos numueros aleatorios
 *  */ 
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
/**
 * Genera una matriz 3 x 3 sin números repetidos
 * @returns 
 */
function generaMatriz3x3(){

    const numeros = generarNueveSinRepetir();
    return [numeros.slice(0, 3), numeros.slice(3, 6), numeros.slice(6, 9)];
}
/**
 * funcion que comprueba si hay repetidos dentro de la matriz 3x3
 * @param {*} matriz 
 * @returns 
 */
function tieneRepetidosMatriz(matriz){

    const vistos = [];

    for( const fila of matriz){
        for(const valor of fila){
            if(vistos.includes(valor)){
                return true;
            }
            vistos.push(valor);
        }
    }
    return false;
}
const ejemplo = generaMatriz3x3();
console.table(ejemplo);
console.log(`¿tiene repetidos? ${tieneRepetidosMatriz([[1, 2, 3], [4, 3, 6], [7, 8, 9]])}`);


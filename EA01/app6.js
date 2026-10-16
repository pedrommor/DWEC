"use strict";

console.log("Números pares del 2 al 10");
for (let numero = 2; numero <= 10; numero += 2) {
  console.log(numero);
}
let suma = 0;
let siguiente = 1;
while (suma < 15) {
  suma += siguiente;
  siguiente++;
}

console.log(`La suma del 1 al ${siguiente} tiene un valor de: ${suma}`);

let intento = 0;
do {
  intento++;
  console.log(`Intento ${intento}`);
} while (intento < 2);

console.log("Número desde 1 incrementando de 3 en 3");

for (let i = 1; i <= 20; i += 3) {
  if (i == 10) {
    console.log(`Saltamos el 10 y no lo mostramos`);
    continue;
  }
  if (i == 16) {
    console.log(`Finalizamos al llegar a 16 y no lo mostramos`);
    break;
  }
  console.log(`i = ${i}`);
}

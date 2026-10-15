"use strict";
const IMPORTE = 182;
const esSocio = true;
let aliasCliente = "Cliente vip";
let descuento = 0;
let categoria;

/*if (IMPORTE >= 100) {
  descuento = 15;
  categoria = "pedido grande";
} else if (IMPORTE >= 50) {
  // descuento = esSocio ? 10 : 5;
  if (!esSocio) {
    descuento = 5;
  } else {
    descuento = 10;
  }

  categoria = "pedido medio";
} else {
  categoria = "pedido pequeño";
  descuento = esSocio ? 3 : 0;
}
  */
let casoAConsiederar = (IMPORTE >= 100 ? 1: ((IMPORT >= 50) ? 2 : 3);
switch (casoAConsiederar){
    case 1:

        descuento = 15;
        categoria = "pedido grande";
           
    break;
    case 2:
        if(esSocio)
            descuento = 10;
        else
            descuento = 5;
        categoria = "pedido medio";
    break;
    default:
        categoria = "pedido pequeño"
        descuento = esSocio ? 3 : 0;

}

//descuento = (IMPORTE >= 100) ? : 15 ? ((IMPORTE >=50 ? (descuento = esSocio ? 10: 5) : (descuento = esSocio ? 3 : 0))

const importeFinal = IMPORTE - (IMPORTE * descuento) / 100;
const nombreVisible = aliasCliente ?? "Cliente sin alias";

console.log(`${nombreVisible}: ${categoria}`);
console.log(`Descuento: ${descuento}%`);
console.log(`Total: ${importeFinal.toFixed(2)} €`);
console.log(
  `¿Se ha aplicado el descuento aplicado? ${descuento > 0 && IMPORTE > 0}`,
);
if (descuento == "15")
  console.log(`Es un pedido grande y el descuento es del 15 %`);
if (isNaN("hola"))
  console.log(`"Cuando programes, fíjate en no poner un número entre "`);

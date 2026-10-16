"use strict";
//Calcula el importe de una reserva.

function calcularReserva(precioDia, dias, descuento = 0) {
  if (isNaN(precioDia) || isNaN(dias) || isNaN(descuento)) {
    return null;
  }
  const subtotal = precioDia * dias;
  return subtotal * (1 - descuento / 100);
}

function mostrarReserva(nombre, precioDia, dias, descuento = 0) {
  const total = calcularReserva(precioDia, dias, descuento);

  if (total == null) {
    console.error("Los datos de la reserva no son válidos");
    return;
  }
  console.log(`${nombre}: ${dias} dias -> Importe: ${total.toFixed(2)} €`);
}

mostrarReserva("Juan", 23.5, 3);
mostrarReserva("Antonio López", 40, 2, 10);
mostrarReserva("Recien casados", 50, 7, 25);
mostrarReserva("Otro cliente", "30", "5", 3);

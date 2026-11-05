"use strict";

const nombresModulos = ["DWEC", "Sistemas Informáticos", "Despliegue"];
const app = document.querySelector("#app");

function crearTarjetaModulo(nombre) {
  let seleccionado = false;

  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";

  const titulo = document.createElement("h2");
  titulo.textContent = nombre;

  const estado = document.createElement("p");
  const boton = document.createElement("button");

  function pintar() {
    estado.textContent = seleccionado ? "Seleccionado" : "No seleccionado";
    boton.textContent = seleccionado ? "Quitar" : "Seleccionar";
    tarjeta.classList.toggle("seleccionada", seleccionado);
  }

  boton.addEventListener("click", () => {
    seleccionado = !seleccionado;
    pintar();
  });

  tarjeta.append(titulo, estado, boton);
  pintar();

  return tarjeta;
}

nombresModulos.forEach((nombre) => {
  app.append(crearTarjetaModulo(nombre));
});

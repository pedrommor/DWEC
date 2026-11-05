import { useState } from "react";

function TarjetaModulo({ nombre }) {
  const [seleccionado, setSeleccionado] = useState(false);

  return (
    <article className={seleccionado ? "tarjeta seleccionada" : "tarjeta"}>
      <h2>{nombre}</h2>
      <p>{seleccionado ? "Seleccionado" : "No seleccionado"}</p>
      <button onClick={() => setSeleccionado(!seleccionado)}>
        {seleccionado ? "Quitar" : "Seleccionar"}
      </button>
    </article>
  );
}

export default TarjetaModulo;

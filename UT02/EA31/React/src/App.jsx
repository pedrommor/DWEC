import TarjetaModulo from "./components/TarjetaModulo.jsx";

function App() {
  return (
    <main>
      <h1>Mis módulos - React</h1>
      <div className="lista-modulos">
        <TarjetaModulo nombre="DWEC" />
        <TarjetaModulo nombre="Sistemas Informáticos" />
        <TarjetaModulo nombre="Despliegue" />
      </div>
    </main>
  );
}

export default App;

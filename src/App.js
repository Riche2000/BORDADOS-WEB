import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import Trabajos from "./components/Trabajos";


function App() {
  return (
    <div>
      <NavBar />
      <Inicio />
      <Trabajos />
      <Contacto />
    </div>
  );
}

export default App;
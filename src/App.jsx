import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";

/**
 * Componente raiz do portfólio.
 * Nesta fase (Lab01S01) foca na página inicial (cena de abertura).
 * As demais cenas serão adicionadas em seguida.
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;

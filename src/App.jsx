import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";

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
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;

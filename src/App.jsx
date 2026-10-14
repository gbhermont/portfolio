import Navbar from "./components/layout/Navbar.jsx";
import SceneIndex from "./components/layout/SceneIndex.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";
import Experience from "./components/sections/Experience.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/layout/Footer.jsx";

/**
 * Componente raiz do portfólio.
 * Monta o layout principal (navbar, índice de cenas e rodapé) em volta das
 * seções de conteúdo (as "cenas" da landing page).
 */
function App() {
  return (
    <>
      <Navbar />
      <SceneIndex />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

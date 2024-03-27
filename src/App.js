import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import '@fontsource-variable/open-sans';
import '@fontsource-variable/montserrat';

function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-amethyst bg-gradient-to-r from-amethyst to-lavender text-cotton">
      <header className="bg-yellow-500 overflow-hidden min-h-screen lg:h-screen sticky top-0">
        <Hero />
      </header>
      <main className="py-20 pr-20 font-semibold overflow-y-auto relative">
        <div className="lg:h-screen"></div> {/* Spacer to fill the viewport */}
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

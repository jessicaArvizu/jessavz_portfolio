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
      <header className="">
        <Hero />
      </header>
      <main className="py-20 pr-20 font-semibold">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

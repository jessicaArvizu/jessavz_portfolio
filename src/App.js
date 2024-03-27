import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Jobs from './components/Jobs';

function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-amethyst bg-gradient-to-r from-amethyst to-lavender text-cotton">
      <header className="">
        <Hero />
      </header>
      <main className="p-20 font-semibold">
        <About />
        <Jobs />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

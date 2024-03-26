import './App.css';
import About from './components/About';
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Timeline from './components/Timeline';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Hero />
      </header>
      <main>
        <About />
        <Timeline />
        <Skills />
        <Projects />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;

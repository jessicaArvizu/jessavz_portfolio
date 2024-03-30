import React from 'react';
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Experience from './components/Experience/Experience';
import AnimateSection from './components/Animate/AnimateSection';

function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-amethyst bg-gradient-to-r from-amethyst to-lavender text-cotton">
      <header className="lg:overflow-hidden lg:min-h-screen lg:h-screen lg:sticky lg:top-0">
        <Hero />
      </header>
      <main className="px-10 lg:py-20 lg:pr-20 font-semibold overflow-y-auto relative">
        <About />
        <Experience />
        <Contact />
        <div className='text-xs'>
          This website was built with <a href='https://react.dev/' target='__blank' rel='noopener noreferrer' className='font-bold text-amethyst hover:text-peach'> React </a>
          & <a href='https://tailwindcss.com/' target='__blank' rel='noopener noreferrer' className='font-bold text-amethyst hover:text-peach'> Tailwind CSS</a>,
          and it's open sourced on
          <a href='https://github.com/jessicaArvizu/jessavz_portfolio' target='__blank' rel='noopener noreferrer' className='font-bold text-amethyst hover:text-peach'> GitHub</a>.
        </div>
      </main>
    </div>
  );
}

export default App;

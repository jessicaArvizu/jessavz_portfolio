import React from 'react';
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import '@fontsource-variable/montserrat';
import '@fontsource/inclusive-sans'
import AnimateSection from './components/Animate/AnimateSection';
import Work from './components/Work/Work';

function App() {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-amethyst bg-gradient-to-r from-amethyst to-lavender text-cotton">
      <header className="lg:overflow-hidden lg:min-h-screen lg:h-screen lg:sticky lg:top-0">
        <Hero />
      </header>
      <main className="font-semibold overflow-y-auto relative px-10 lg:pr-20">
        <AnimateSection>
          <About />
        </AnimateSection>
        <AnimateSection>
          <Experience />
        </AnimateSection>
        <AnimateSection>
          <Skills />
        </AnimateSection>
        <AnimateSection>
          <Work />
        </AnimateSection>
        <div className='text-xs p-10'>
          This website was built with <a href='https://react.dev/' target='__blank' rel='noopener noreferrer' className='font-bold text-amethyst hover:text-peach'> React </a>
          & <a href='https://tailwindcss.com/' target='__blank' rel='noopener noreferrer' className='font-bold text-amethyst hover:text-peach'> Tailwind CSS</a>,
          and it's open sourced on
          <a href='https://github.com/jessicaArvizu/jessavz_portfolio' target='__blank' rel='noopener noreferrer' className='font-bold text-amethyst hover:text-peach'> GitHub</a>.
          <br/>
          <i class="fa-regular fa-copyright"></i> 2024, Jessica Arvizu
        </div>
      </main>
    </div>
  );
}

export default App;

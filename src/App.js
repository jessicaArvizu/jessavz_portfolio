import React, { useState, useCallback } from 'react';
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills';
import Work from './components/Work';
import Navigation from './components/Navigation';
import Socials from './components/Socials';
import '@fontsource-variable/open-sans';
import '@fontsource-variable/montserrat';

function App() {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-amethyst bg-gradient-to-r from-amethyst to-lavender text-cotton">
      <header className="lg:overflow-hidden lg:min-h-screen lg:h-screen lg:sticky lg:top-0">
        <Hero />
        <Navigation />
        <Socials />
      </header>
      <main className="font-semibold overflow-y-auto relative bg-blue-500">
        <About />
        <Experience />
        <Skills />
        <Work />
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

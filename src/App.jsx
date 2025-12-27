import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Experience from './components/Experience';
import CV from './components/CV';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Works />
      <Experience />
      <CV />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

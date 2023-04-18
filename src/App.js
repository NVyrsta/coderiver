import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Home from './components/home/Home';

import './App.scss';



export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="app">
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Home />
      <Slider />
      <About />
    </div>
  );
};

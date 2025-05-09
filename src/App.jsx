import React from 'react'
import Home from './components/Home';
import Navbar from '../src/components/Navbar';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default App
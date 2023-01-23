import React, { useState } from 'react';
import AboutMe from './Components/AboutMe'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


 function App() {
 return ( 
  <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <AboutMe />
    <Projects />
    <Contact />
    <Footer />
    </main>
 );
}

export default App;

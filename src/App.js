import React, { useState } from 'react';
import AboutMe from './Components/AboutMe'
import NavBar from './Components/NavBar'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


 function App() {
 return ( 
  <main>
    <NavBar />
    <AboutMe />
    <Projects />
    <Contact />
    <Footer />
    </main>
 );
}

export default App;

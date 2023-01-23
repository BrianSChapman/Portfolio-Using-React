import React, { useState } from 'react';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';
import Resume from './Resume';

export default function pageContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Projects') {
            return <Projects />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        return <Resume />
    }
}
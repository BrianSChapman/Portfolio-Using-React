import React, { useState } from "react";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import Footer from "./Footer";


export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      <NavBar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></NavBar>

      {renderPage()}
      <Footer />
    </div>
  );
}

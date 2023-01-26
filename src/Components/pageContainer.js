import React, { useState } from "react";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Footer from "./Footer";


export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="main-body">

      <NavBar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></NavBar>

      {renderPage()}
      <Footer />
    </div>
  );
}

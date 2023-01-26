import React from "react";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <header>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a href="#Home" className="navbar-brand">
        Brian S. Chapman
        </a>
        <ul className="nav nav-bar">
          <li className="nav-item">
            <a
              href="#AboutMe"
              onClick={() => handlePageChange("AboutMe")}
              className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={currentPage === "Contact" ? " nav-link active" : "nav-link"}
              >
            Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Resume"
              onClick={() => handlePageChange("Resume")}
              className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
            >
            Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
}

export default NavBar;

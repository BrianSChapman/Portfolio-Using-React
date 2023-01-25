import React from "react";

function NavBar({ currentPage, handlePageChange }) {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a href="#Home" className="navbar-brand">
        </a>
        <img src="src\Images\flamingo.png" alt="Brian on a Flamingo" width="30" height="24" className="d-inline-block align-text-top"></img>
        Brian S. Chapman
        <ul className="navbar-nav">
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
              href="#Projects"
              onClick={() => handlePageChange("Projects")}
              className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
            >
              Projects
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
              className={currentPage === "Resume" ? "nav-link active" : "nav link"}
            >
            Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

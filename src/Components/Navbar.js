import React from "react";

function NavBar({ currentPage, handlePageChange }) {
  return (
  
    <nav>
      <div className="container navbar">
        <a href="#AboutMe" onClick={() => handlePageChange("AboutMe")} id="nav-name">
        Brian S. Chapman
        </a>
        <ul className="nav text-end">
          <li>
            <a
            id="nav-list"
              href="#AboutMe"
              onClick={() => handlePageChange("AboutMe")}
              className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
            >
              About Me
            </a>
          </li>
          <li>
            <a id="nav-list"
              href="#Portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a id="nav-list"
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={currentPage === "Contact" ? " nav-link active" : "nav-link"}
              >
            Contact
            </a>
          </li>
          <li>
            <a id="nav-list"
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
    
  );
}

export default NavBar;

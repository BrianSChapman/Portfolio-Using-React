import React from "react";

function NavBar({ currentPage, handlePageChange }) {
  return (
    
    <nav>
      <div className="nav-wrapper cyan darken-2 ">
        <a href="#Home" className="brand-logo">
          Brian S. Chapman
        </a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="#AboutMe"
              onClick={() => handlePageChange("AboutMe")}
              className={currentPage === "AboutMe" ? "active" : "nav-link"}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              onClick={() => handlePageChange("Projects")}
              className={currentPage === "Projects" ? "active" : "nav-link"}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={currentPage === "Contact" ? "active" : "nav-link"}
              >
            Contact
            </a>
          </li>
          <li>
            <a
              href="#Resume"
              onClick={() => handlePageChange("Resume")}
              className={currentPage === "Resume" ? "active" : "nav link"}
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

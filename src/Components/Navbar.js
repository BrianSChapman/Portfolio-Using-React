import React from "react";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <><nav>
          <div className="nav-wrapper">
              <a href="#AboutMe" className="brand-logo">
                  Brian S. Chapman
              </a>
              <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                  <i class="material-icons">menu</i>
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li className="col s12">
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
                      ></a>
                      Contact
                  </li>
                  <li>
                      <a
                          href="#Resume"
                          onClick={() => handlePageChange("Resume")}
                          className={currentPage === "Resume" ? "nav-link active" : "nav link"}
                      ></a>
                      Resume
                  </li>
              </ul>
          </div>
          {/* Mobile menu */}
      </nav><ul class="sidenav" id="mobile-demo">
              <li><a href="#AboutMe">About Me</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#Contact">Contact</a></li>
              <li><a href="#Resume">Resume</a></li>
          </ul></>
  );
}

export default NavBar;

import react from "react";

export default function mobileNav(handlePageChange) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a
          href="#AboutMe"
          onClick={() => handlePageChange("AboutMe")}
          id="nav-name"
        >
          Brian S. Chapman
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Really Explore the Space
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#AboutMe"
                  onClick={() => handlePageChange("AboutMe")}
                >
                  About Me{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Portfolio"
                  onClick={() => handlePageChange("Portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Contact"
                  onClick={() => handlePageChange("Contact")}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Resume"
                  onClick={() => handlePageChange("Resume")}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

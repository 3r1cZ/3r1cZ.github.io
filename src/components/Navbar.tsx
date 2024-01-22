import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { useState } from "react";

/**
 * This function returns a navbar component for the website.
 * @returns the navbar component
 */
const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <nav
      className="navbar navbar-expand sticky-top bg-primary "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="logo"
            src={hovered ? "/assets/logo-hover.png" : "/assets/logo.png"}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/eric-zhou-79ba001b4/"
                target="_blank"
              >
                <img
                  className="nav-link active logo"
                  src="/assets/linkedin.jpg"
                />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/3r1cZ" target="_blank">
                <img
                  className="nav-link active logo"
                  src="/assets/github.jpg"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

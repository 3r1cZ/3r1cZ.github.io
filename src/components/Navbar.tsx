import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { useState } from "react";

/**
 * This function returns a navbar component for the website.
 * @returns the navbar component
 */
const Navbar = () => {
  const [logoHovered, setLogoHovered] = useState(false);
  const [githubHovered, setGithubHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);

  return (
    <nav
      className="navbar navbar-expand sticky-top bg-primary "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="logo"
            src={logoHovered ? "/assets/logo-hover.png" : "/assets/logo.png"}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
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
                  src={
                    linkedinHovered
                      ? "/assets/linkedin_red.png"
                      : "/assets/linkedin.jpg"
                  }
                  onMouseEnter={() => setLinkedinHovered(true)}
                  onMouseLeave={() => setLinkedinHovered(false)}
                />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/3r1cZ" target="_blank">
                <img
                  className="nav-link active logo"
                  src={
                    githubHovered
                      ? "/assets/github_red.png"
                      : "/assets/github.jpg"
                  }
                  onMouseEnter={() => setGithubHovered(true)}
                  onMouseLeave={() => setGithubHovered(false)}
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

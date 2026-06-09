import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navBar.css";


const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <Navbar
      expand="lg"
      className=" bg-body-white mt-5"
      data-bs-theme={darkMode ? "dark" : "light"}
    >
      <Container>
        <Navbar.Brand href="#home" className="fs-4 nav-left">
          Achini Ishani
          <button
            className="theme-btn ms-3"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              // sun icon 
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-16h0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM4 11h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm15 0h1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM5.64 5.64a1 1 0 0 1 1.41 0l.7.7a1 1 0 0 1-1.41 1.41l-.7-.7a1 1 0 0 1 0-1.41zm11.31 11.31a1 1 0 0 1 1.41 0l.7.7a1 1 0 0 1-1.41 1.41l-.7-.7a1 1 0 0 1 0-1.41zM18.36 5.64a1 1 0 0 1 0 1.41l-.7.7a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 0zM6.34 17.66a1 1 0 0 1 0 1.41l-.7.7a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 0z" />
              </svg>
            ) : (
              // moon icon
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8z" />
              </svg>
            )}
          </button>
        </Navbar.Brand>

        {/* hamburger menu button */}

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#projects" className="nav-link-custom">
              Projects
            </Nav.Link>

            <Nav.Link href="#hireme" className="nav-link-custom">
              Hire Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

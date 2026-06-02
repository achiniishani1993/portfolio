import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Navbar expand="lg" className="bg-body-white mt-5" data-bs-theme={darkMode ? "dark" : "light"}>
      <Container>
        <Navbar.Brand href="#home" className='fs-4'>Achini Ishani
          <button
              className="theme-btn ms-3"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <i className="bi bi-sun-fill"></i>
              ) : (
                <i className="bi bi-moon-fill"></i>
              )}
            </button>

        </Navbar.Brand>
      
       {/* hamburger menu button */}

 <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />

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
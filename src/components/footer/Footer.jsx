import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container d-flex justify-content-between align-items-center px-4 py-3 mt-5">
      
      {/* LEFT SIDE */}
      <div className="footer-left fs-6">
        Achini Ishani © 2026
      </div>

      {/* RIGHT SIDE */}
      <div className="socialmedia d-flex gap-3">
        <a
          href="https://www.linkedin.com/in/achini-ishani-1ab6a3204/"
          target="_blank"
          rel="noreferrer"
          className="icon"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="https://github.com/achiniishani1993"
          target="_blank"
          rel="noreferrer"
          className="icon"
          aria-label="GitHub profile"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://medium.com/@achiniishani1993"
          target="_blank"
          rel="noreferrer"
          className="icon"
          aria-label="Medium blog"
        >
          <FaMedium size={22} />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
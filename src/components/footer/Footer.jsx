import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container d-flex justify-content-between align-items-center px-4 py-3 mt-5">

      <div className="footer-left fs-6">
        Achini Ishani © 2026
      </div>

      <div className="socialmedia d-flex gap-3">

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/achini-ishani-1ab6a3204/"
           target="_blank"
           rel="noreferrer"
           className="icon"
           aria-label="LinkedIn profile">

          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17.34V10.5H6.34v6.84h2zM7.34 9.5a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34zM18 17.34v-3.5c0-1.7-.36-3-2.35-3-1.01 0-1.7.55-2 1.08V10.5h-2v6.84h2v-3.4c0-.9.17-1.78 1.3-1.78s1.1 1 1.1 1.8v3.38H18z"/>
          </svg>
        </a>

        {/* GitHub */}
        <a href="https://github.com/achiniishani1993"
           target="_blank"
           rel="noreferrer"
           className="icon"
           aria-label="GitHub profile">

          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.1 3.3 9.4 7.9 10.9.58.1.8-.25.8-.56v-2c-3.2.7-3.9-1.4-3.9-1.4-.53-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.3v3.4c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.25 5.6 18.27.5 12 .5z"/>
          </svg>
        </a>

        {/* Medium */}
        <a href="https://medium.com/@achiniishani1993"
           target="_blank"
           rel="noreferrer"
           className="icon"
           aria-label="Medium blog">

          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 6h3l5 10 5-10h3v12h-3V11l-4 7h-2l-4-7v7H4V6z"/>
          </svg>
        </a>

      </div>
    </footer>
  );
};

export default Footer;
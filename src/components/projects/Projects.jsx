import "./projects.css";

import Carousel from "react-bootstrap/Carousel";
import Cafe from "../../assets/cafe.webp";
import Bhromaon from "../../assets/bhromaon.webp";
import Sky from "../../assets/sky.webp";
import Facebook from "../../assets/facebook.webp";
import Game from "../../assets/game.webp";

const Projects = () => {
  return (
    <div className="carousel-wrapper mt-5" id="projects">
        <h2 className="fs-5 mt-5 ms-5">EXAMPLES OF MY WORK</h2>
      <Carousel className="mx-5 mt-5 custom-carousel" interval={null}>
        <Carousel.Item>
          <img className="d-block rounded " src={Cafe} alt="Project 1" />
          <Carousel.Caption className="bg-dark rounded caption">
            <h3>Cafe Nora</h3>
            <p>
              Technologies Used: HTML, CSS, Google Fonts, Embedded Google Maps,
              Font Awesome icons, Figma, Jira
            </p>

            <a
              href="https://achiniishani1993.github.io/cafe-nora/"
              target="_blank"
              rel="noopener noreferrer"
                className="btn btn-outline-light" 
            >
              View Live Project
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block rounded "
            src={Bhromaon}
            alt="Project 2"
          />
          <Carousel.Caption className="bg-dark rounded caption">
            <h3>Bhromaon</h3>
            <p>
              Technologies Used: HTML, CSS3 / SCSS (SASS), JavaScript,
              Animate.css
            </p>
            <a
              href="https://achiniishani1993.github.io/Bhromaon/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light" 
            >
              View Live Project
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block rounded"
            src={Sky}
            alt="Project 2"
          />
          <Carousel.Caption className="bg-dark rounded caption">
            <h3>Sky-Sprinter</h3>
            <p>Technologies Used: HTML, CSS, JavaScript</p>
            <a
              href="https://achiniishani1993.github.io/Sky-Sprinter/"
              target="_blank"
              rel="noopener noreferrer"
                className="btn btn-outline-light" 
            >
               View Live Project
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block rounded"
            src={Facebook}
            alt="Project 2"
          />
          <Carousel.Caption className="bg-dark rounded caption">
            <h3>FaceBook-Clone</h3>
            <p>Technologies Used: React, CSS, TypeScript, Material UI</p>
            <a
              href="https://achiniishani1993.github.io/Facebook-clone/"
              target="_blank"
              rel="noopener noreferrer"
             className="btn btn-outline-light" 
            >
               View Live Project
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block rounded"
            src={Game}
            alt="Project 2"
          />
          <Carousel.Caption className="bg-dark rounded caption">
            <h3>Squid Game</h3>
            <p>Technologies Used: React, Javascript, CSS, Bootstrap, Figma, Jira</p>
            <a
              href="https://achiniishani1993.github.io/squid-game/"
              target="_blank"
              rel="noopener noreferrer"
               className="btn btn-outline-light" 
            >
              View Live Project
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Projects;

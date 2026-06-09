import "./projects.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";

import Cafe from "../../assets/cafe.webp";
import Bhromaon from "../../assets/bhromaon.webp";
import Sky from "../../assets/sky.webp";
import Facebook from "../../assets/facebook.webp";
import Game from "../../assets/game.webp";

const projects = [
  {
    img: Cafe,
    alt: "Cafe Nora",
    title: "Cafe Nora",
    tech: "HTML, CSS, Google Fonts, Embedded Google Maps, Font Awesome icons, Figma, Git Jira",
    liveUrl: "https://achiniishani1993.github.io/cafe-nora/",
    overview:
      "Cafe Nora is a modern, elegant multi-page café website built using html and CSS. The website includes a homepage, gallery page, menu page, contact section, booking form, newsletter subscription, and interactive design elements. The project focuses on creating an engaging user experience through responsive layouts, animations, and visually appealing content.",
    myRole: [
      "Designed the Home Page using Figma",
      "Developed the Home Page and Gallery Page layouts using HTML and CSS.",
      "Created a welcoming user interface with clear navigation and booking elements.",
      "Implemented the slideshow section using CSS animations.",
      "Designed the image gallery using CSS Grid and Flexbox with hover zoom effects.",
      "Ensured pages were responsive and visually appealing across different screen sizes.",
    ],
    learned: [
      "HTML semantic structure",
      "CSS styling and responsive design techniques",
      "CSS Grid and Flexbox for layout creation",
      "CSS animations and hover effects",
      "Team collaboration and dividing project responsibilities",
      "Git branches, pull request and conflicts resovling"
    ],
    groupOrSolo:
      "Group project — responsibilities were divided among team members, ensuring consistency across all pages.",
    whyProject:
      "We selected a café website to practice a wide range of front-end skills within a realistic business scenario — layouts, forms, animations, navigation, and responsive design.",
  },

  {
    img: Bhromaon,
    alt: "Bhromaon",
    title: "Bhromaon",
    tech: "HTML, CSS / SCSS (SASS), JavaScript, Animate.css",
    liveUrl: "https://achiniishani1993.github.io/Bhromaon/",
    overview:
      "Bhromaon is a modern, fully responsive travel website built using HTML, SCSS (SASS), and JavaScript. The website is designed based on a Figma design and focuses on delivering an engaging and interactive user experience. It allows users to explore travel destinations, view services, and navigate through smooth scrolling sections with animated UI elements. The project demonstrates strong front-end development practices including modular SCSS structure, responsive layouts, and dynamic JavaScript interactions.",
    myRole: [
      "I worked as the sole developer of this project.",
      "I was responsible for converting the Figma design into a fully functional responsive website.",
      "I implemented all pages, layouts, styling, and interactive features using HTML, SCSS, and JavaScript.",
      "I ensured responsiveness, consistency, and visual accuracy across all screen sizes.",
    ],
    learned: [
      "I gained strong practical experience in SCSS, including variables, nesting, mixins, and modular file structure.",
      "I improved my skills in responsive web design using Flexbox and CSS Grid.",
      "I learned how to implement smooth scrolling and interactive UI behavior using JavaScript.",
      "I developed the ability to convert a Figma design into a real working website.",
      "I improved my understanding of UI/UX principles and front-end best practices.",
    ],
    groupOrSolo: "Solo project.",
    whyProject:
      "This project was created to strengthen my front-end development skills, especially SCSS. It was based on a real Figma design to simulate a real-world development workflow and improve my ability to convert UI designs into functional websites while maintaining responsiveness and clean code structure.",
  },

  {
    img: Sky,
    alt: "Sky-Sprinter",
    title: "Sky-Sprinter",
    tech: "HTML, CSS, JavaScript",
    liveUrl: "https://achiniishani1993.github.io/Sky-Sprinter/",
    overview:
      "Sky-Sprinter (Flappy Astro Game) is a fun and interactive browser-based game built using HTML, CSS, and JavaScript. Inspired by Flappy Bird, the game challenges players to control an astronaut character, avoid obstacles (pipes), and achieve the highest possible score. It features smooth animations, responsive controls, and real-time gameplay mechanics.",
    myRole: [
      "I developed the entire game independently as a solo project.",
      "I implemented the core game logic using JavaScript, including gravity, jumping mechanics, and collision detection.",
      "I designed and styled the game interface using HTML and CSS.",
      "I handled dynamic pipe generation and score tracking functionality.",
      "I ensured smooth gameplay using requestAnimationFrame for optimized animation.",
    ],
    learned: [
      "I improved my understanding of JavaScript game development fundamentals.",
      "I learned how to use requestAnimationFrame for smooth and efficient animations.",
      "I developed skills in collision detection and real-time game state management.",
      "I enhanced my ability to build interactive and engaging UI experiences using JavaScript.",
    ],
    groupOrSolo: "Solo project",
    whyProject:
      "This project was created to explore game development using JavaScript and strengthen my logic-building skills. It helped me understand how real-time interactions, animations, and physics-based movement work in a browser environment while building a fun and engaging user experience.",
  },

  {
    img: Facebook,
    alt: "Facebook Clone",
    title: "FaceBook-Clone",
    tech: "React, CSS, TypeScript, Material UI",
    liveUrl: "https://achiniishani1993.github.io/Facebook-clone/",
    overview:
      "Facebook Clone is a modern social media UI replica built using React and TypeScript. The project recreates core Facebook features such as a dynamic feed, navigation bar, side panels, and interactive chat system. It focuses on component-based architecture and real-time UI updates to simulate a social media experience.",
    myRole: [
      "I developed the entire project independently as a solo developer.",
      "I built reusable React components for the feed, navigation bar, sidebar, and chat interface.",
      "I implemented post creation, reactions (Like, Love, Wow), and dynamic comment functionality.",
      "I designed and styled the UI using CSS and Material UI icons.",
      "I handled state management for posts, chat windows, and interactive elements.",
    ],
    learned: [
      "I gained strong experience in React component-based architecture.",
      "I learned how TypeScript improves code safety and structure in large applications.",
      "I improved my skills in state management and real-time UI updates.",
      "I learned how to build interactive social media features like likes, comments, and chat systems.",
      "I developed better understanding of reusable UI components and scalable frontend design.",
    ],
    groupOrSolo: "Solo Project",
    whyProject:
      "This project was created to practice React and TypeScript by rebuilding a real-world social media interface. It helped me understand how complex UI systems like Facebook are structured using reusable components, state management, and interactive features while improving my frontend development skills.",
  },

  {
    img: Game,
    alt: "Squid Game",
    title: "Squid Game",
    tech: "React, JavaScript, CSS, Bootstrap, Figma, Jira",
    liveUrl: "https://achiniishani1993.github.io/squid-game/",
    overview:
      "Squid Game is a responsive React-based mini game inspired by the popular series Squid Game. The application simulates a full user journey including registration, login, character selection, gameplay, scoring system, and a leaderboard. It combines game logic, authentication flow, and interactive UI components to create an engaging browser experience.",
    myRole: [
      "Designed whole game using Figma and communicated requirment with team",
      "Contributed to both frontend development, project planning  and game logic implementation.",
      "I implemented user authentication and integrated localStorage to store user data and maintain persistent scores.",
      "I developed character selection page,logics and leaderboard ",
      "I build the leaderboard system with dynamic ranking and random competitors from an external API.",
    ],
    learned: [
      "I improved my understanding of React Router for navigation between game stages.",
      "I learned how to manage application state using localStorage for persistent user data.",
      "I gained experience in implementing game logic such as timers, scoring systems, and random events.",
      "I learned how to integrate external APIs (Random User API) into a React project.",
      "I developed teamwork and collaboration skills in a multi-feature frontend project.",
      "I improved my ability to build structured and scalable React applications.",
    ],
    groupOrSolo: "Group project",
    whyProject: "This project was created to simulate a real-world interactive game application using React. It helped us combine multiple frontend concepts such as authentication, routing, API integration, and game logic while working collaboratively as a development team. The goal was to improve both technical and teamwork skills while building an engaging user experience.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="carousel-wrapper mt-5" id="projects">
      <h2 className="fs-5 mt-5 ms-5">EXAMPLES OF MY WORK</h2>

      <Carousel className="mx-5 mt-5 custom-carousel" interval={null}>
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block rounded w-100"
              src={project.img}
              alt={project.alt}
            />

            <Carousel.Caption className="bg-dark rounded caption">
              <h3>{project.title}</h3>

              <p>
                <strong>Technologies Used:</strong> {project.tech}
              </p>

              <div className="d-flex gap-2 justify-content-center flex-wrap">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  View Live Project
                </a>

                <button
                  className="btn btn-outline-warning"
                  onClick={() => setSelectedProject(project)}
                >
                  Read More
                </button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Modal
        show={!!selectedProject}
        onHide={() => setSelectedProject(null)}
        size="lg"
        centered
        scrollable
        className="bg-black"
      >
        {selectedProject && (
          <>
            <Modal.Header
              closeButton
              closeVariant="white"
              className="bg-dark text-white"
            >
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="bg-dark text-white">
              <h5>Project Overview</h5>
              <p>{selectedProject.overview}</p>

              <h5>What Did I Do?</h5>
              <ul>
                {selectedProject.myRole.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h5>What Did I Learn?</h5>
              <ul>
                {selectedProject.learned.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h5>Solo or Group?</h5>
              <p>{selectedProject.groupOrSolo}</p>

              <h5>Why This Project?</h5>
              <p>{selectedProject.whyProject}</p>
            </Modal.Body>

            <Modal.Footer className="bg-dark">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                View Live Project
              </a>

              <button
                className="btn btn-secondary"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Projects;

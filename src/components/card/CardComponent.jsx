import { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

import "./cardComponent.css";

const CardComponent = () => {
  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const Edu = "/edu.webp";
  const Work = "/work.webp";
  const Skills = "/skills.webp";

  const cardData = {
    education: {
      title: "Education",
      content: (
        <>
          <h5 className="fw-bold">IT - Front end Developer - 2026</h5>
          <p>Sundsgårdens folkhögskola</p>

          <h5 className="fw-bold">
            Meta Front-End Developer Professional Certificate - 2026
          </h5>
          <p>Coursera</p>

          <h5 className="fw-bold">
            Master in Sport Sciences: Sport in Society - 2023-2025
          </h5>
          <p>Malmö University</p>

          <h5 className="fw-bold">
            B. Sc. (Honours) in Sports Science and Management - 2016-2019
          </h5>
          <p>Sri Jayewardenepura University, Sri Lanka</p>
        </>
      ),
    },
    work: {
      title: "Work Experience",
      content: (
        <>
          <h5 className="fw-bold">Freelancer- Frontend Developer</h5>
          <p>FFIEC CAT — CRI project </p>

          <h5 className="fw-bold">Demonstrator 2020-2021</h5>
          <p>Sri Jayewardenepura University, Sri Lanka</p>

          <h5 className="fw-bold">Corporate Activator - 2019-2020</h5>
          <p>Ayubo.life Colombo, Sri Lanka</p>
        </>
      ),
    },
    skills: {
      title: "Skills",
      content: (
        <>
          <ul>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>Bootstrap</li>
            <li>TailWind</li>
            <li>PrimeReact</li>
            <li>Material UI</li>
            <li>Git/GitHub</li>
            <li>Jira</li>
            <li>Figma</li>
          </ul>
        </>
      ),
    },
  };

  const cards = [
    {
      id: "education",
      title: "Education",
      image: Edu,
      alt: "Education and academic qualifications",
    },
    {
      id: "work",
      title: "Work",
      image: Work,
      alt: "Work experience and professional background",
    },
    {
      id: "skills",
      title: "Skills",
      image: Skills,
      alt: "Technical skills and development tools",
    },
  ];

  const handleShow = (type) => {
    setSelectedCard(type);
    setShow(true);
  };

  return (
    <>
      <div className="d-flex justify-content-center gap-5 flex-wrap">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="shadow-sm cardBox"
            onClick={() => handleShow(card.id)}
          >
            <Card.Img
              variant="top"
              src={card.image}
              alt={card.alt}
              fetchPriority="high"
              loading="eager"
            />
            <Card.Body>
              <Card.Title className="text-center fw-bold">
                {card.title}
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedCard && cardData[selectedCard].title}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedCard && cardData[selectedCard].content}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardComponent;

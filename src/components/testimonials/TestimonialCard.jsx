import Accordion from "react-bootstrap/Accordion";
import './testimonialCard.css';

const TestimonialCard = () => {
  return (
    <div className="mt-5  testimonial-wrapper">
      <h2 className="fs-5 mt-5 card-Header ">TESTIMONIALS</h2>
      <Accordion defaultActiveKey="0" className="mt-5 mx-5 test-Accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body className="test-body">
            <p>
              "xxxxxxxxxxxxxx xxxxxxxx xxfafcsgavvha bshbahsjhjanj snajsnjasnsnssnsssjas "
            </p>

            <p className="mt-2 fw-bold ">
              <em>- Michelle Andersson, Kursföreståndare, IT Programmering, Sundsgårdens folkhögskola</em>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="fw-bold test-head">
            "Work Confidently and Level of Professionalism"
          </Accordion.Header>

          <Accordion.Body className="test-body">
            <p>
              "Achini joined our FFIEC CAT compliance project as a frontend
              developer and quickly made a strong impact. She took ownership of
              critical areas including the login and registration flows,
              delivering a polished multi step registration process and a smart
              password strength meter that our team loved. What stood out most
              was her ability to balance clean UI design with solid form
              validation and data integrity, not an easy combination. She works
              confidently with React and PrimeReact, manages Git collaboration
              smoothly, and brings a level of professionalism that made her a
              reliable contributor from day one."
            </p>

            <p className="mt-2 fw-bold ">
              <em>- Pramod Shehan, FFIEC CAT | CRI Project, April 2026</em>
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header className="fw-bold">
            "Strong Coding Skills and Creative Approach to Problem-solving"
          </Accordion.Header>

          <Accordion.Body className="test-body">
            <p>
              "Achini is a talented and dedicated team member with strong coding
              skills and a creative approach to problem-solving. she is good
              communicator and help team members always when someone needs help
              with project. She is always willing to learn new things and
              regularly goes beyond the assigned requirements by adding
              innovative features and improvements to projects. Her ability to
              think differently, combined with her enthusiasm for continuous
              learning, makes her an asset to any team. "
            </p>

            <p className="mt-2 fw-bold ">
              <em>- Anitha Thunga, Squid-Game Project, Sundsgårdens folkhögskola</em>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default TestimonialCard;

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './contact.css';

function ContactForm() {
  return (
    <div className="container mt-5" id="hireme">
        
        <div className="contact-card">
      <h2 className="test-center mb-4">Get in touch</h2>
      <p className="text-para">
        Looking for a dedicated developer to join your team? Whether it's a
        full-time role or a freelance collaboration, I'm open to both and ready
        to bring my skills to your next project. Let's work together to bring
        your vision to life.
      </p>
      <Form className="contact-form">
        <Form.Group className="mb-3" controlId="contactName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter subject" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Write your message here..."
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
      </div>
    </div>
  );
}

export default ContactForm;

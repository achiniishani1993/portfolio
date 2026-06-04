import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./contactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // correct email format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // word limit check
  const wordCount = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (wordCount(formData.message) > 200) {
      newErrors.message = "Message cannot exceed 200 words";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validate()) return; 

    try {
      const response = await fetch("https://formspree.io/f/xwvjkjor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      }
    } catch (error) {
      console.log("Error sending form:", error);
    }
  };

  return (
    <div className="container mt-5" id="hireme">
      <div className="contact-card">
        <h2 className="test-center mb-4">Get in touch</h2>

        <p className="text-para">
          Looking for a dedicated developer to join your team? Whether it's a
          full-time role or a freelance collaboration, I'm open to both and
          ready to bring my skills to your next project. Let's work together to
          bring your vision to life. Contact me directly via <strong> achiniishani1993@gmail.com</strong> or send me a message.
        </p>

        {success && (
          <p style={{ color: "green", textAlign: "center" }}>
            Message successfully sent!
          </p>
        )}

        <Form onSubmit={handleSubmit} className="contact-form" noValidate>
          {/* NAME */}
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {submitted && errors.name && (
              <small style={{ color: "red" }}>{errors.name}</small>
            )}
          </Form.Group>

          {/* EMAIL */}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
            />
            {submitted && errors.email && (
              <small style={{ color: "red" }}>{errors.email}</small>
            )}
          </Form.Group>

          {/* SUBJECT */}
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
            />
            {submitted && errors.subject && (
              <small style={{ color: "red" }}>{errors.subject}</small>
            )}
          </Form.Group>

          {/* MESSAGE */}
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
            />
            {submitted && errors.message && (
              <small style={{ color: "red" }}>{errors.message}</small>
            )}
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
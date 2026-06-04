import NavBar from "./components/nav/NavBar";
import Header from "./components/head/header";
import CardComponent from "./components/card/CardComponent";
import Projects from "./components/projects/Projects";
import TestimonialCard from "./components/testimonials/TestimonialCard";
import ContactForm from "./components/contact/ContactForm";

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <CardComponent />
      <Projects/>
      <TestimonialCard/>
      <ContactForm/>
    </div>
  );
};

export default App;
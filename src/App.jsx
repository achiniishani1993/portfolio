import NavBar from "./components/nav/NavBar";
import Header from "./components/head/header";
import CardComponent from "./components/card/CardComponent";
import Projects from "./components/projects/Projects";
import TestimonialCard from "./components/testimonials/TestimonialCard";
import ContactForm from "./components/contact/ContactForm";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/scrollToTop";
const App = () => {
  return (
    <div>
      <NavBar />
      <main>
      <Header />
      <CardComponent />
      <Projects/>
      <TestimonialCard/>
      <ContactForm/>
      <ScrollToTop/>
      </main>
      <Footer/>

    </div>
  );
};

export default App;
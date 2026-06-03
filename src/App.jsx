import NavBar from "./components/nav/NavBar";
import Header from "./components/head/header";
import CardComponent from "./components/card/CardComponent";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <CardComponent />
      <Projects/>
    </div>
  );
};

export default App;
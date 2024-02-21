import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Services from "./Components/Services/Services.jsx";
import Education from "./Components/Education/Education.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Contact from "./Components/Contact/Contact.jsx";


function App() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <Home />
          <About />
          <Skills />
          <Services />
          <Education />
          <Portfolio />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

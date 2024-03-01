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
import { useState, useEffect } from "react";


function App() {
    const [mode, setMode] = useState(
      localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : "light-mode"
    );

        useEffect(() => {
          localStorage.setItem("theme", mode);
          if (mode === "dark-mode") {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
          } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
          }
        });

  return (
    <>
      <div>
        <Navbar mode={mode} setMode={setMode} />
        <div>
          <Home mode={mode} />
          <About mode={mode} />
          <Skills mode={mode} />
          <Services mode={mode} />
          <Education mode={mode} />
          <Portfolio mode={mode} />
          <Contact mode={mode} />
        </div>
        <Footer mode={mode} />
      </div>
    </>
  );
}

export default App;

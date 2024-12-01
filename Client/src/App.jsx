import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import LatestWorks from "./Components/Project";
import ConsultationForm from "./Components/Form";
import Footer from "./Components/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Navbar />
    
      <Element name="home" id="home">
        <Home />
      </Element>
      

      <Element name="aboutme" id="aboutme">
        <About />
      </Element>
      

      <Element name="experience" id="experience">
        <Experience />
      </Element>
      

      <Element name="projects" id="projects">
        <LatestWorks />
      </Element>

      
      <Element name="contact" id="contact">
        <ConsultationForm />
      </Element>

      <Footer />
    </>
  );
}

export default App;
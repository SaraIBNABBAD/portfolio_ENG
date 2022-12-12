import { Component } from "react";
import "./portfolio.css";
import { TypeAnimation } from "react-type-animation";
import anime from "animejs/lib/anime.es.js";
import About from "./ABOUT/about";
import Contact from "./CONTACT/contact";
import Projets from "./PROJECTS/projects";
import Competence from "./skills/skill";
import cv from "./saracv.pdf";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.animation = anime.timeline({ loop: false });
  }
  componentDidMount() {
    this.animation.add({
      targets: "#name",
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i,
    });
  }
  render() {
    return (
      <>
      
          <header className="head" id="fist" >
            <div className="info">
              <h3 className="nom">Hello ,</h3>
              <h3 className="nom">I'm Sara IBN ABBAD</h3>
              <TypeAnimation
            sequence={[
              "Developer Full Stack", 
              2000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1.5em" }}
          />
          
              <p></p>
              <div className="flxbtn">
              <button className="cv"><a href="https://saraibnabbad.github.io/CV/" target="_blank">Show CV</a></button>
              </div>
              
            </div>
              
          </header>
          <main>
            <About/>
            <Competence/>
            <Projets/>
            <Contact/>
          </main>
      </>
    );
  }
}
export default Portfolio;
